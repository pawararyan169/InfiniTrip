// OTP verification for sign-up and booking confirmation (localStorage-based demo)

function otpGenerateCode() {
    // Always return 6 digits
    return String(Math.floor(100000 + Math.random() * 900000)).padStart(6, '0');
}

function otpGetUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

function otpGetBookings() {
    return JSON.parse(localStorage.getItem('bookings') || '[]');
}

function otpReadOtp(otpKey) {
    const raw = localStorage.getItem(otpKey);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
}

function otpWriteOtp(otpKey, otpData) {
    localStorage.setItem(otpKey, JSON.stringify(otpData));
}

function otpDeleteOtp(otpKey) {
    localStorage.removeItem(otpKey);
}

function otpFormatContact(contact) {
    if (!contact) return '—';
    const email = contact.email ? String(contact.email) : '';
    const phone = contact.phone ? String(contact.phone) : '';
    if (phone && email) return `${phone} / ${email}`;
    return phone || email || '—';
}

function otpCreateAndStoreOtp({ purpose, targetId, contact }) {
    const code = otpGenerateCode();
    const now = Date.now();

    const otpKey = `otp_${purpose}_${targetId}`;
    otpWriteOtp(otpKey, {
        code,
        contact,
        createdAt: new Date(now).toISOString(),
        expiresAt: now + 5 * 60 * 1000, // 5 minutes
        resendCooldownUntil: now + 30 * 1000, // 30 seconds
        verifiedAt: null,
        attempts: 0
    });

    return otpReadOtp(otpKey);
}

function otpHumanCountdown(ms) {
    const s = Math.max(0, Math.ceil(ms / 1000));
    const m = Math.floor(s / 60);
    const rem = s % 60;
    if (m > 0) return `${m}m ${rem}s`;
    return `${rem}s`;
}

function otpShowMessage(el, text) {
    el.textContent = text;
    el.classList.add('show');
}

function otpHideMessage(el) {
    el.textContent = '';
    el.classList.remove('show');
}

function otpInit() {
    const params = new URLSearchParams(window.location.search);
    const purpose = params.get('purpose'); // signup | booking
    const userId = params.get('userId');
    const bookingId = params.get('bookingId');

    const otpForm = document.getElementById('otpForm');
    const otpInput = document.getElementById('otpInput');
    const otpError = document.getElementById('otpError');
    const otpSuccess = document.getElementById('otpSuccess');
    const verifyBtn = document.getElementById('verifyOtpBtn');
    const resendBtn = document.getElementById('resendOtpBtn');
    const otpDemo = document.getElementById('otpDemo');
    const otpDemoCode = document.getElementById('otpDemoCode');

    const otpContextTitle = document.getElementById('otpContextTitle');
    const otpContextDetail = document.getElementById('otpContextDetail');
    const otpContextRef = document.getElementById('otpContextRef');
    const otpHeading = document.getElementById('otpHeading');

    if (!otpForm || !otpInput || !purpose) {
        if (otpError) otpShowMessage(otpError, 'Invalid OTP page request.');
        return;
    }

    const isSignup = purpose === 'signup';
    const isBooking = purpose === 'booking';

    if (!isSignup && !isBooking) {
        otpShowMessage(otpError, 'Invalid OTP purpose.');
        return;
    }

    const targetId = isSignup ? userId : bookingId;
    if (!targetId) {
        otpShowMessage(otpError, 'Missing identifier for OTP verification.');
        return;
    }

    // Load context (contact info) from storage
    const users = otpGetUsers();
    const bookings = otpGetBookings();

    let contact = null;
    if (isSignup) {
        const user = users.find(u => String(u.id) === String(targetId));
        if (!user) {
            otpShowMessage(otpError, 'Account not found for OTP verification.');
            return;
        }

        contact = { email: user.email, phone: user.phone };
        otpContextTitle.textContent = 'Account Verification';
        otpHeading.textContent = 'Verify Account OTP';
        otpContextDetail.textContent = otpFormatContact(contact);
        otpContextRef.textContent = String(user.email);
    } else {
        const booking = bookings.find(b => String(b.id) === String(targetId));
        if (!booking) {
            otpShowMessage(otpError, 'Booking not found for OTP verification.');
            return;
        }

        contact = { email: booking.email, phone: booking.phone };
        otpContextTitle.textContent = 'Booking Confirmation';
        otpHeading.textContent = 'Verify Booking OTP';
        otpContextDetail.textContent = otpFormatContact(contact);
        otpContextRef.textContent = booking.id;
    }

    const otpKey = `otp_${purpose}_${targetId}`;

    const loadOrCreateOtp = () => {
        const existing = otpReadOtp(otpKey);
        const now = Date.now();

        if (!existing || !existing.expiresAt || now > existing.expiresAt) {
            return otpCreateAndStoreOtp({ purpose, targetId, contact });
        }

        return existing;
    };

    let otpData = loadOrCreateOtp();

    // Demo OTP display (since this is a purely front-end localStorage demo)
    if (otpDemo && otpDemoCode && otpData && otpData.code) {
        otpDemo.classList.add('show');
        otpDemoCode.textContent = otpData.code;
    }

    const updateResendButton = () => {
        const now = Date.now();
        const cooldownUntil = otpData?.resendCooldownUntil || 0;
        const remaining = cooldownUntil - now;
        if (remaining > 0) {
            resendBtn.disabled = true;
            resendBtn.textContent = `Resend OTP (${otpHumanCountdown(remaining)})`;
        } else {
            resendBtn.disabled = false;
            resendBtn.innerHTML = '<i class="fas fa-rotate-right"></i> Resend OTP';
        }
    };

    updateResendButton();

    // Live countdown updates
    setInterval(() => {
        otpData = otpReadOtp(otpKey) || otpData;
        updateResendButton();
    }, 1000);

    // Focus OTP input on load
    setTimeout(() => otpInput.focus(), 50);

    const handleResend = () => {
        otpHideMessage(otpError);
        otpHideMessage(otpSuccess);

        const now = Date.now();
        const existing = otpReadOtp(otpKey);
        if (existing && existing.resendCooldownUntil && now < existing.resendCooldownUntil) {
            const remaining = existing.resendCooldownUntil - now;
            otpShowMessage(otpError, `Please wait ${otpHumanCountdown(remaining)} before resending OTP.`);
            return;
        }

        otpData = otpCreateAndStoreOtp({ purpose, targetId, contact });

        if (otpDemo && otpDemoCode) {
            otpDemo.classList.add('show');
            otpDemoCode.textContent = otpData.code || '—';
        }

        otpHideMessage(otpError);
        otpShowMessage(otpSuccess, 'A new OTP has been generated. Please check the demo OTP box.');
    };

    resendBtn.addEventListener('click', handleResend);

    otpForm.addEventListener('submit', function (e) {
        e.preventDefault();

        otpHideMessage(otpError);
        otpHideMessage(otpSuccess);

        otpData = otpReadOtp(otpKey);
        if (!otpData) {
            otpShowMessage(otpError, 'OTP expired or missing. Please resend.');
            return;
        }

        const now = Date.now();
        if (otpData.expiresAt && now > otpData.expiresAt) {
            otpShowMessage(otpError, 'OTP expired. Please resend.');
            return;
        }

        const entered = String(otpInput.value || '').trim();
        if (!/^\d{6}$/.test(entered)) {
            otpShowMessage(otpError, 'Enter a valid 6-digit OTP.');
            return;
        }

        if (entered !== String(otpData.code)) {
            otpData.attempts = (otpData.attempts || 0) + 1;
            otpWriteOtp(otpKey, otpData);
            otpShowMessage(otpError, 'Incorrect OTP. Please try again.');
            return;
        }

        // OTP verified
        otpDeleteOtp(otpKey);

        if (isSignup) {
            const user = users.find(u => String(u.id) === String(targetId));
            if (!user) {
                otpShowMessage(otpError, 'Account not found after OTP verification.');
                return;
            }

            user.verified = true;
            user.verifiedAt = new Date().toISOString();
            localStorage.setItem('users', JSON.stringify(users));

            localStorage.setItem('currentUser', JSON.stringify({
                id: user.id,
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                email: user.email || '',
                phone: user.phone || ''
            }));
            localStorage.setItem('userRole', 'user');

            otpShowMessage(otpSuccess, 'Account verified successfully! Redirecting...');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1200);
            return;
        }

        // Booking verification
        const booking = bookings.find(b => String(b.id) === String(targetId));
        if (!booking) {
            otpShowMessage(otpError, 'Booking not found after OTP verification.');
            return;
        }

        booking.status = 'Confirmed';
        booking.otpVerified = true;
        booking.confirmedAt = new Date().toISOString();
        localStorage.setItem('bookings', JSON.stringify(bookings));

        otpShowMessage(otpSuccess, 'Booking confirmed! Redirecting...');

        const redirectUrl = `booking.html?bookingConfirmed=${encodeURIComponent(booking.id)}`;
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 1200);
    });

    // Back link: keep it safe (no reliance on browser history in all cases)
    const backAnchor = document.getElementById('otpBackAnchor');
    if (backAnchor) {
        const redirectReason = params.get('reason');
        backAnchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (redirectReason === 'login') {
                window.location.href = 'signin.html';
                return;
            }
            if (isBooking) {
                window.location.href = 'booking.html';
                return;
            }
            window.location.href = 'signup.html';
        });
    }
}

document.addEventListener('DOMContentLoaded', otpInit);

