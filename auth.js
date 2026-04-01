// Authentication System using localStorage

// User data structure in localStorage: 'users' array
// Current user: 'currentUser' object

// Initialize users array if it doesn't exist
function initUsers() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
    }
}

// Check password strength
function checkPasswordStrength(password) {
    if (password.length < 6) {
        return { strength: 'weak', message: 'Password is too short (minimum 6 characters)' };
    }
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    if (strength <= 2) {
        return { strength: 'weak', message: 'Weak password' };
    } else if (strength <= 3) {
        return { strength: 'medium', message: 'Medium strength password' };
    } else {
        return { strength: 'strong', message: 'Strong password' };
    }
}

// Regex Patterns
const regexPatterns = {
    name: /^[A-Za-z\s'-]{2,30}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^[6-9]\d{9}$|^\+91[6-9]\d{9}$|^0[6-9]\d{9}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
};

// Validation Functions
function validateName(name, fieldName) {
    if (!name || name.trim().length === 0) {
        return { valid: false, message: `${fieldName} is required` };
    }
    if (!regexPatterns.name.test(name.trim())) {
        return { valid: false, message: `${fieldName} should contain only letters, spaces, hyphens, or apostrophes (2-30 characters)` };
    }
    return { valid: true, message: '' };
}

function validateEmail(email) {
    if (!email || email.trim().length === 0) {
        return { valid: false, message: 'Email is required' };
    }
    if (!regexPatterns.email.test(email.trim())) {
        return { valid: false, message: 'Please enter a valid email address (e.g., example@domain.com)' };
    }
    return { valid: true, message: '' };
}

function validatePhone(phone) {
    if (!phone || phone.trim().length === 0) {
        return { valid: false, message: 'Phone number is required' };
    }
    // Remove spaces, dashes, parentheses, and plus signs for validation
    let cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '');
    
    // Remove leading 0 or +91 if present
    if (cleanPhone.startsWith('91') && cleanPhone.length === 12) {
        cleanPhone = cleanPhone.substring(2);
    } else if (cleanPhone.startsWith('0') && cleanPhone.length === 11) {
        cleanPhone = cleanPhone.substring(1);
    }
    
    // Validate 10-digit Indian mobile number (starting with 6-9)
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        return { valid: false, message: 'Please enter a valid 10-digit Indian phone number (starting with 6-9)' };
    }
    return { valid: true, message: '' };
}

function validatePassword(password) {
    if (!password || password.length === 0) {
        return { valid: false, message: 'Password is required' };
    }
    if (password.length < 6) {
        return { valid: false, message: 'Password must be at least 6 characters long' };
    }
    // Optional: Check for stronger password (recommended but not required)
    if (password.length >= 8 && !regexPatterns.password.test(password)) {
        // Only show warning for longer passwords that don't meet strength criteria
        // This is a recommendation, not a requirement
    }
    return { valid: true, message: '' };
}

function showFieldError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function hideFieldError(fieldId) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
}

// OTP helpers (localStorage demo)
function otpGenerateCode() {
    return String(Math.floor(100000 + Math.random() * 900000)).padStart(6, '0');
}

function otpStoreOtp({ purpose, targetId, contact }) {
    const code = otpGenerateCode();
    const now = Date.now();
    const otpKey = `otp_${purpose}_${targetId}`;
    localStorage.setItem(otpKey, JSON.stringify({
        code,
        contact,
        createdAt: new Date(now).toISOString(),
        expiresAt: now + 5 * 60 * 1000, // 5 minutes
        resendCooldownUntil: now + 30 * 1000, // 30 seconds
        verifiedAt: null,
        attempts: 0
    }));
}

// Sign Up Functionality
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    initUsers();
    
    // Real-time validation for all fields
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordStrength = document.getElementById('passwordStrength');
    
    // First Name validation
    if (firstNameInput) {
        firstNameInput.addEventListener('blur', function() {
            const validation = validateName(this.value, 'First Name');
            if (validation.valid) {
                hideFieldError('firstName');
            } else {
                showFieldError('firstName', validation.message);
            }
        });
        firstNameInput.addEventListener('input', function() {
            if (this.value.length > 0) {
                hideFieldError('firstName');
            }
        });
    }
    
    // Last Name validation
    if (lastNameInput) {
        lastNameInput.addEventListener('blur', function() {
            const validation = validateName(this.value, 'Last Name');
            if (validation.valid) {
                hideFieldError('lastName');
            } else {
                showFieldError('lastName', validation.message);
            }
        });
        lastNameInput.addEventListener('input', function() {
            if (this.value.length > 0) {
                hideFieldError('lastName');
            }
        });
    }
    
    // Email validation
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const validation = validateEmail(this.value);
            if (validation.valid) {
                hideFieldError('email');
            } else {
                showFieldError('email', validation.message);
            }
        });
        emailInput.addEventListener('input', function() {
            if (this.value.length > 0) {
                hideFieldError('email');
            }
        });
    }
    
    // Phone validation
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            const validation = validatePhone(this.value);
            if (validation.valid) {
                hideFieldError('phone');
            } else {
                showFieldError('phone', validation.message);
            }
        });
        phoneInput.addEventListener('input', function() {
            if (this.value.length > 0) {
                hideFieldError('phone');
            }
        });
    }
    
    // Password strength indicator and validation
    if (passwordInput && passwordStrength) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            if (password.length > 0) {
                const result = checkPasswordStrength(password);
                passwordStrength.textContent = result.message;
                passwordStrength.className = 'password-strength ' + result.strength;
                hideFieldError('password');
            } else {
                passwordStrength.textContent = '';
                passwordStrength.className = 'password-strength';
            }
        });
        passwordInput.addEventListener('blur', function() {
            const validation = validatePassword(this.value);
            if (!validation.valid) {
                showFieldError('password', validation.message);
            }
        });
    }
    
    // Confirm Password validation
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('blur', function() {
            const password = passwordInput ? passwordInput.value : '';
            if (this.value !== password) {
                showFieldError('confirmPassword', 'Passwords do not match');
            } else {
                hideFieldError('confirmPassword');
            }
        });
        confirmPasswordInput.addEventListener('input', function() {
            const password = passwordInput ? passwordInput.value : '';
            if (this.value === password && this.value.length > 0) {
                hideFieldError('confirmPassword');
            }
        });
    }
    
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');
        
        // Hide previous messages
        errorMessage.classList.remove('show');
        successMessage.classList.remove('show');
        
        // Get form data
        const firstName = firstNameInput ? firstNameInput.value.trim() : '';
        const lastName = lastNameInput ? lastNameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
        let phone = phoneInput ? phoneInput.value.trim() : '';
        // Clean phone number for storage
        phone = phone.replace(/[\s\-\(\)\+]/g, '');
        if (phone.startsWith('91') && phone.length === 12) {
            phone = phone.substring(2);
        } else if (phone.startsWith('0') && phone.length === 11) {
            phone = phone.substring(1);
        }
        const password = passwordInput ? passwordInput.value : '';
        const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';
        const terms = document.getElementById('terms') ? document.getElementById('terms').checked : false;
        
        // Validate all fields
        let isValid = true;
        
        const firstNameValidation = validateName(firstName, 'First Name');
        if (!firstNameValidation.valid) {
            showFieldError('firstName', firstNameValidation.message);
            isValid = false;
        }
        
        const lastNameValidation = validateName(lastName, 'Last Name');
        if (!lastNameValidation.valid) {
            showFieldError('lastName', lastNameValidation.message);
            isValid = false;
        }
        
        const emailValidation = validateEmail(email);
        if (!emailValidation.valid) {
            showFieldError('email', emailValidation.message);
            isValid = false;
        }
        
        const phoneValidation = validatePhone(phone);
        if (!phoneValidation.valid) {
            showFieldError('phone', phoneValidation.message);
            isValid = false;
        }
        
        const passwordValidation = validatePassword(password);
        if (!passwordValidation.valid) {
            showFieldError('password', passwordValidation.message);
            isValid = false;
        }
        
        if (password !== confirmPassword) {
            showFieldError('confirmPassword', 'Passwords do not match');
            isValid = false;
        }
        
        if (!terms) {
            showError('Please accept the Terms and Conditions');
            isValid = false;
        }
        
        if (!isValid) {
            return;
        }
        
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('users'));
        const existingUser = users.find(user => user.email === email);
        
        if (existingUser) {
            showError('An account with this email already exists');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now().toString(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: password, // In production, this should be hashed
            createdAt: new Date().toISOString(),
            registeredDate: new Date().toISOString(),
            verified: false,
            verifiedAt: null
        };
        
        // Add user to storage
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Generate OTP and redirect to OTP verification
        otpStoreOtp({
            purpose: 'signup',
            targetId: newUser.id,
            contact: { email: newUser.email, phone: newUser.phone }
        });

        showSuccess('Account created. OTP sent for verification. Redirecting...');
        setTimeout(() => {
            window.location.href = `otp.html?purpose=signup&userId=${encodeURIComponent(newUser.id)}`;
        }, 900);
    });
}

// Login Functionality
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    initUsers();
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');
        
        // Hide previous messages
        errorMessage.classList.remove('show');
        successMessage.classList.remove('show');
        
        // Get form data
        const email = document.getElementById('email').value.trim().toLowerCase();
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember') ? document.getElementById('remember').checked : false;
        
        // Get users from storage
        const users = JSON.parse(localStorage.getItem('users'));
        
        // Find user
        const user = users.find(u => u.email === email && u.password === password);
        
        if (!user) {
            showError('Invalid email or password');
            return;
        }
        
        // Create session
        const currentUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        if (remember) {
            localStorage.setItem('rememberMe', 'true');
        }
        
        // Show success message
        showSuccess('Login successful! Redirecting...');
        
        // Redirect to home page after 1 second
        setTimeout(() => {
            const redirectUrl = new URLSearchParams(window.location.search).get('redirect') || 'index.html';
            window.location.href = redirectUrl;
        }, 1000);
    });
}

// Utility Functions
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
    }
}

function showSuccess(message) {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.textContent = message;
        successMessage.classList.add('show');
    }
}

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

// Get current user
function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

// Logout function
function logout() {
    // Clear all session data
    localStorage.removeItem('currentUser');
    localStorage.removeItem('rememberMe');
    localStorage.removeItem('driverSession');
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminUsername');
    localStorage.removeItem('userRole');
    
    // Redirect to home page
    window.location.href = 'index.html';
}

// Navigation update flag and debounce timer
let isUpdatingNavigation = false;
let navigationUpdateTimer = null;

// Update navigation based on login status
function updateNavigation() {
    // Clear any pending updates
    if (navigationUpdateTimer) {
        clearTimeout(navigationUpdateTimer);
    }
    
    // Debounce the update to prevent rapid successive calls
    navigationUpdateTimer = setTimeout(function() {
        if (isUpdatingNavigation) {
            return;
        }
        
        isUpdatingNavigation = true;
        
        // Check user role first, then get appropriate user data
        const userRole = localStorage.getItem('userRole');
        const navMenus = document.querySelectorAll('.nav-menu');
        
        // Skip navigation update on dashboard pages (they have their own navigation)
        const currentPage = window.location.pathname.split('/').pop();
        if (currentPage === 'driver-dashboard.html' || currentPage === 'admin-dashboard.html') {
            isUpdatingNavigation = false;
            return;
        }
        
        // Skip if no nav menus found
        if (navMenus.length === 0) {
            isUpdatingNavigation = false;
            return;
        }
        
        // Process navigation menus
        navMenus.forEach(function(navMenu) {
        // Remove only login/logout/user items - target specific elements only
        // Find and remove login links
        const loginLink = navMenu.querySelector('a[href="signin.html"], a.login-link');
        if (loginLink && loginLink.parentElement) {
            loginLink.parentElement.remove();
        }
        
        // Find and remove signup links
        const signupLink = navMenu.querySelector('a[href="signup.html"]');
        if (signupLink && signupLink.parentElement) {
            signupLink.parentElement.remove();
        }
        
        // Find and remove logout links
        const logoutLink = navMenu.querySelector('.logout-link, a[onclick*="logout"]');
        if (logoutLink && logoutLink.parentElement) {
            logoutLink.parentElement.remove();
        }
        
        // Find and remove user name items
        const userLink = navMenu.querySelector('.user-link');
        if (userLink && userLink.parentElement) {
            userLink.parentElement.remove();
        }
        
        // Also check for user-name-item class on li itself
        const userItem = navMenu.querySelector('li.user-name-item');
        if (userItem) {
            userItem.remove();
        }
        
        // Add appropriate links based on login status and role
        let userName = null;
        let userIcon = 'fa-user';
        let dashboardLink = '#';
        
        if (userRole === 'admin') {
            // Admin logged in
            const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
            if (adminLoggedIn) {
                const adminUsername = localStorage.getItem('adminUsername');
                userName = adminUsername && adminUsername !== 'null' && adminUsername !== 'undefined' ? adminUsername : 'Admin';
                userIcon = 'fa-user-shield';
                dashboardLink = 'admin-dashboard.html';
            }
        } else if (userRole === 'driver') {
            // Driver logged in
            const driverSession = localStorage.getItem('driverSession');
            if (driverSession) {
                try {
                    const driver = JSON.parse(driverSession);
                    userName = driver.name || 'Driver';
                    userIcon = 'fa-car-side';
                    dashboardLink = 'driver-dashboard.html';
                } catch (e) {
                    console.error('Error parsing driver session:', e);
                    userName = null;
                }
            }
        } else if (userRole === 'user') {
            // Customer/User logged in
            const currentUser = getCurrentUser();
            if (currentUser) {
                // Build full name if available - prioritize firstName + lastName
                if (currentUser.firstName && currentUser.lastName) {
                    userName = `${currentUser.firstName} ${currentUser.lastName}`.trim();
                } else if (currentUser.firstName) {
                    userName = currentUser.firstName.trim();
                } else if (currentUser.lastName) {
                    userName = currentUser.lastName.trim();
                } else if (currentUser.username) {
                    userName = currentUser.username.trim();
                } else if (currentUser.email) {
                    // Extract name from email (part before @)
                    userName = currentUser.email.split('@')[0].trim();
                    // Capitalize first letter
                    if (userName.length > 0) {
                        userName = userName.charAt(0).toUpperCase() + userName.slice(1);
                    }
                } else {
                    userName = 'User';
                }
                userIcon = 'fa-user';
                dashboardLink = 'index.html';
            }
        } else {
            // Check if there's any user data without role (legacy support)
            const currentUser = getCurrentUser();
            const driverSession = localStorage.getItem('driverSession');
            const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
            
            if (adminLoggedIn) {
                const adminUsername = localStorage.getItem('adminUsername');
                userName = adminUsername && adminUsername !== 'null' && adminUsername !== 'undefined' ? adminUsername : 'Admin';
                userIcon = 'fa-user-shield';
                dashboardLink = 'admin-dashboard.html';
            } else if (driverSession) {
                try {
                    const driver = JSON.parse(driverSession);
                    userName = driver.name || 'Driver';
                    userIcon = 'fa-car-side';
                    dashboardLink = 'driver-dashboard.html';
                } catch (e) {
                    userName = null;
                }
            } else if (currentUser) {
                // Build customer name
                if (currentUser.firstName && currentUser.lastName) {
                    userName = `${currentUser.firstName} ${currentUser.lastName}`.trim();
                } else if (currentUser.firstName) {
                    userName = currentUser.firstName.trim();
                } else if (currentUser.lastName) {
                    userName = currentUser.lastName.trim();
                } else if (currentUser.username) {
                    userName = currentUser.username.trim();
                } else if (currentUser.email) {
                    userName = currentUser.email.split('@')[0].trim();
                    if (userName.length > 0) {
                        userName = userName.charAt(0).toUpperCase() + userName.slice(1);
                    }
                } else {
                    userName = 'User';
                }
                userIcon = 'fa-user';
                dashboardLink = 'index.html';
            }
        }
        
        // Show user name and logout if logged in
        if (userName && userName !== 'null' && userName !== 'undefined' && userName.trim() !== '') {
            const userItem = document.createElement('li');
            userItem.className = 'user-name-item';
            userItem.innerHTML = `<a href="${dashboardLink}" class="user-link"><i class="fas ${userIcon}"></i> ${userName}</a>`;
            navMenu.appendChild(userItem);
            
            const logoutItem = document.createElement('li');
            logoutItem.innerHTML = `<a href="#" class="logout-link" onclick="logout(); return false;"><i class="fas fa-sign-out-alt"></i> Logout</a>`;
            navMenu.appendChild(logoutItem);
        } else {
            // User is not logged in - show login button
            const loginItem = document.createElement('li');
            loginItem.innerHTML = `<a href="signin.html" class="login-link"><i class="fas fa-sign-in-alt"></i> Login</a>`;
            navMenu.appendChild(loginItem);
        }
        });
        
        // Reset flag after update
        setTimeout(function() {
            isUpdatingNavigation = false;
        }, 100);
    }, 50);
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', function() {
    // Update navigation after a delay to ensure all scripts are loaded
    setTimeout(function() {
        updateNavigation();
    }, 150);
    
    // Protect booking page if needed
    const bookingPage = window.location.pathname.includes('booking.html');
    if (bookingPage && !isLoggedIn()) {
        // Optional: Redirect to login if not authenticated
        // Uncomment the line below to enable authentication requirement for booking
        // window.location.href = 'login.html?redirect=booking.html';
    }
});

// Update navigation when page becomes visible (handles tab switching) - with debounce
let visibilityTimeout;
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        clearTimeout(visibilityTimeout);
        visibilityTimeout = setTimeout(function() {
            updateNavigation();
        }, 300);
    }
});

// Also update navigation when storage changes (handles login from another tab/window) - with debounce
let storageTimeout;
window.addEventListener('storage', function(e) {
    if (e.key === 'currentUser' || e.key === 'driverSession' || e.key === 'adminLoggedIn' || e.key === 'userRole') {
        clearTimeout(storageTimeout);
        storageTimeout = setTimeout(function() {
            updateNavigation();
        }, 300);
    }
});

// Make logout function available globally
window.logout = logout;

