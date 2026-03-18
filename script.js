// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Set minimum date to today for booking form
const departureDateInput = document.getElementById('departureDate');
const returnDateInput = document.getElementById('returnDate');

if (departureDateInput) {
    const today = new Date().toISOString().split('T')[0];
    departureDateInput.setAttribute('min', today);
    
    departureDateInput.addEventListener('change', function() {
        if (returnDateInput) {
            returnDateInput.setAttribute('min', this.value);
        }
    });
}

// Price Calculator
const destinationSelect = document.getElementById('destination');
const packageTypeSelect = document.getElementById('packageType');
const transportationSelect = document.getElementById('transportation');
const accommodationSelect = document.getElementById('accommodation');
const adultsInput = document.getElementById('adults');
const childrenInput = document.getElementById('children');

// Price configuration
const prices = {
    destinations: {
        'rann': 2500,
        'mandvi': 1500,
        'bhuj': 2000,
        'dholavira': 3000,
        'kala-dungar': 1800,
        'lakhpat': 2200,
        'wildlife': 2500,
        'matana-madh': 1200,
        'narayan-sarovar': 1800,
        'koteshwar': 1500,
        'dhordo': 2000,
        'road-to-heaven': 2200,
        'vijay-vilas': 1500,
        'pingleshwar': 1400,
        'tapkeshwari': 1000,
        'smrutivan': 1200,
        'kutch-museum': 800,
        'aina-mahel': 1000,
        'kadiyadhro': 1800,
        'vande-mataram-memorial': 1000,
        'custom': 4000
    },
    packages: {
        'basic': 1.0,
        'premium': 2.0,
        'luxury': 3.0
    },
    transportation: {
        'bus': 500,
        'car': 2000,
        'suv': 3000,
        'tempo': 4000,
        'self': 0
    },
    accommodation: {
        'tent': 1500,
        'budget': 1000,
        'standard': 2000,
        'premium': 3500,
        'resort': 5000
    }
};

function calculatePrice() {
    if (!destinationSelect || !packageTypeSelect || !transportationSelect) return;

    const destination = destinationSelect.value;
    const packageType = packageTypeSelect.value;
    const transportation = transportationSelect.value;
    const accommodation = accommodationSelect ? accommodationSelect.value : '';
    const adults = adultsInput ? parseInt(adultsInput.value) || 1 : 1;
    const children = childrenInput ? parseInt(childrenInput.value) || 0 : 0;

    if (!destination || !packageType || !transportation) {
        updatePriceDisplay(0, 0, 0);
        return;
    }

    const basePrice = prices.destinations[destination] || 0;
    const packageMultiplier = prices.packages[packageType] || 1;
    const transportPrice = prices.transportation[transportation] || 0;
    const accommodationPrice = accommodation ? (prices.accommodation[accommodation] || 0) : 0;

    const packageTotal = basePrice * packageMultiplier * adults + (basePrice * packageMultiplier * children * 0.5);
    const transportTotal = transportPrice * (adults + children);
    const accommodationTotal = accommodationPrice * (adults + Math.ceil(children / 2));

    updatePriceDisplay(packageTotal, transportTotal, accommodationTotal);
}

function updatePriceDisplay(packagePrice, transportPrice, accommodationPrice) {
    const packagePriceEl = document.getElementById('packagePrice');
    const transportPriceEl = document.getElementById('transportPrice');
    const accommodationPriceEl = document.getElementById('accommodationPrice');
    const totalPriceEl = document.getElementById('totalPrice');

    const total = packagePrice + transportPrice + accommodationPrice;

    if (packagePriceEl) packagePriceEl.textContent = `₹${Math.round(packagePrice).toLocaleString()}`;
    if (transportPriceEl) transportPriceEl.textContent = `₹${Math.round(transportPrice).toLocaleString()}`;
    if (accommodationPriceEl) accommodationPriceEl.textContent = accommodationPrice > 0 ? `₹${Math.round(accommodationPrice).toLocaleString()}` : 'Not Selected';
    if (totalPriceEl) totalPriceEl.textContent = `₹${Math.round(total).toLocaleString()}`;
}

// Add event listeners for price calculation
if (destinationSelect) destinationSelect.addEventListener('change', calculatePrice);
if (packageTypeSelect) packageTypeSelect.addEventListener('change', calculatePrice);
if (transportationSelect) transportationSelect.addEventListener('change', calculatePrice);
if (accommodationSelect) accommodationSelect.addEventListener('change', calculatePrice);
if (adultsInput) adultsInput.addEventListener('input', calculatePrice);
if (childrenInput) childrenInput.addEventListener('input', calculatePrice);

// Pre-fill destination from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const destinationParam = urlParams.get('destination');
if (destinationSelect && destinationParam) {
    destinationSelect.value = destinationParam;
    calculatePrice();
}

// Toggle Booking Type (Tour Package vs Cab Booking)
function toggleBookingType() {
    const bookingType = document.getElementById('bookingType')?.value;
    const destinationGroup = document.getElementById('destinationGroup');
    const vehicleCategoryGroup = document.getElementById('vehicleCategoryGroup');
    const startingPointGroup = document.getElementById('startingPointGroup');
    const returnDateGroup = document.getElementById('returnDateGroup');
    const transportationGroup = document.getElementById('transportationGroup');
    const pickupDateLabel = document.getElementById('pickupDateLabel');
    const destinationField = document.getElementById('destination');
    const vehicleCategoryField = document.getElementById('vehicleCategory');
    
    const packageTypeGroup = document.getElementById('packageTypeGroup');
    const accommodationGroup = document.getElementById('accommodationGroup');
    
    if (bookingType === 'cab') {
        // Cab Booking Only
        if (destinationGroup) destinationGroup.style.display = 'none';
        if (vehicleCategoryGroup) vehicleCategoryGroup.style.display = 'block';
        if (startingPointGroup) startingPointGroup.style.display = 'none';
        if (returnDateGroup) returnDateGroup.style.display = 'none';
        if (transportationGroup) transportationGroup.style.display = 'none';
        if (packageTypeGroup) packageTypeGroup.style.display = 'none';
        if (accommodationGroup) accommodationGroup.style.display = 'none';
        if (pickupDateLabel) pickupDateLabel.textContent = 'Pickup Date';
        if (destinationField) destinationField.removeAttribute('required');
        if (vehicleCategoryField) vehicleCategoryField.setAttribute('required', 'required');
    } else {
        // Tour Package
        if (destinationGroup) destinationGroup.style.display = 'block';
        if (vehicleCategoryGroup) vehicleCategoryGroup.style.display = 'none';
        if (startingPointGroup) startingPointGroup.style.display = 'block';
        if (returnDateGroup) returnDateGroup.style.display = 'flex';
        if (transportationGroup) transportationGroup.style.display = 'block';
        if (packageTypeGroup) packageTypeGroup.style.display = 'block';
        if (accommodationGroup) accommodationGroup.style.display = 'block';
        if (pickupDateLabel) pickupDateLabel.textContent = 'Departure Date';
        if (destinationField) destinationField.setAttribute('required', 'required');
        if (vehicleCategoryField) vehicleCategoryField.removeAttribute('required');
    }
    
    // Recalculate price
    if (typeof calculatePrice === 'function') {
        calculatePrice();
    }
}

// Booking Form Submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const bookingData = {};
        formData.forEach((value, key) => {
            bookingData[key] = value;
        });

        // Generate booking reference
        const bookingReference = 'INF' + Date.now().toString().slice(-8);
        
        // Calculate total price
        const totalPrice = parseFloat(document.getElementById('totalPrice')?.textContent.replace('₹', '').replace(/,/g, '') || 0);
        
        // Create complete booking object
        const fullName = `${bookingData.firstName || ''} ${bookingData.lastName || ''}`.trim();
        const booking = {
            id: bookingReference,
            bookingType: bookingData.bookingType || 'tour',
            name: fullName || bookingData.name || '',
            firstName: bookingData.firstName || '',
            lastName: bookingData.lastName || '',
            email: bookingData.email || '',
            phone: bookingData.phone || '',
            destination: bookingData.destination || '',
            vehicleCategory: bookingData.vehicleCategory || '',
            pickupLocation: bookingData.pickupLocation || '',
            dropLocation: bookingData.dropLocation || '',
            pickupDate: bookingData.pickupDate || '',
            pickupTime: bookingData.pickupTime || '',
            returnDate: bookingData.returnDate || '',
            returnTime: bookingData.returnTime || '',
            packageType: bookingData.packageType || '',
            travelDate: bookingData.pickupDate || '',
            adults: parseInt(bookingData.adults) || 1,
            children: parseInt(bookingData.children) || 0,
            transportation: bookingData.transportation || '',
            accommodation: bookingData.accommodation || '',
            totalPrice: totalPrice,
            status: 'Pending',
            driverStatus: 'pending', // pending, accepted, declined
            bookingDate: new Date().toISOString(),
            address: bookingData.address || '',
            city: bookingData.city || '',
            pincode: bookingData.pincode || '',
            specialRequirements: bookingData.specialRequirements || '',
            emergencyName: bookingData.emergencyName || '',
            emergencyPhone: bookingData.emergencyPhone || ''
        };
        
        // Save to bookings array for admin panel
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        
        // Save to ride requests for drivers (if cab booking)
        if (bookingData.bookingType === 'cab') {
            const rideRequests = JSON.parse(localStorage.getItem('rideRequests') || '[]');
            rideRequests.push({
                ...booking,
                requestId: 'RIDE' + Date.now().toString().slice(-8),
                createdAt: new Date().toISOString()
            });
            localStorage.setItem('rideRequests', JSON.stringify(rideRequests));
            
            // Send driver notification (email)
            sendDriverNotification(booking);
        }
        
        // Also store as last booking for reference
        localStorage.setItem('lastBooking', JSON.stringify({
            reference: bookingReference,
            data: bookingData,
            timestamp: new Date().toISOString()
        }));

        // Show success modal
        const modal = document.getElementById('successModal');
        const bookingRefEl = document.getElementById('bookingReference');
        
        if (bookingRefEl) {
            bookingRefEl.textContent = bookingReference;
        }
        
        if (modal) {
            modal.style.display = 'block';
            // Reset form
            this.reset();
            if (typeof calculatePrice === 'function') {
                calculatePrice();
            }
        }
    });
}

// Send Driver Notification (Email)
function sendDriverNotification(booking) {
    // Get driver email from localStorage or use default
    const drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
    
    // Email details for driver
    const emailSubject = `New Ride Request - ${booking.requestId || booking.id}`;
    const emailBody = `
New Ride Request Received!

Booking Reference: ${booking.id}
Request ID: ${booking.requestId || booking.id}

Customer Details:
- Name: ${booking.name}
- Email: ${booking.email}
- Phone: ${booking.phone}

Trip Details:
- Vehicle Category: ${booking.vehicleCategory}
- Pickup Location: ${booking.pickupLocation}
- Drop Location: ${booking.dropLocation}
- Pickup Date: ${booking.pickupDate}
- Pickup Time: ${booking.pickupTime}
${booking.returnDate ? `- Return Date: ${booking.returnDate}` : ''}
${booking.returnTime ? `- Return Time: ${booking.returnTime}` : ''}

Passengers:
- Adults: ${booking.adults}
- Children: ${booking.children}

Special Requirements: ${booking.specialRequirements || 'None'}

Please login to your driver dashboard to accept or decline this ride.

${window.location.origin}/driver-dashboard.html
    `;
    
    // Store notification for drivers to see in dashboard
    const notifications = JSON.parse(localStorage.getItem('driverNotifications') || '[]');
    notifications.push({
        id: Date.now(),
        bookingId: booking.id,
        requestId: booking.requestId || booking.id,
        subject: emailSubject,
        body: emailBody,
        timestamp: new Date().toISOString(),
        read: false
    });
    localStorage.setItem('driverNotifications', JSON.stringify(notifications));
    
    // In a real application, you would send an actual email here using a service like:
    // - EmailJS
    // - SendGrid
    // - AWS SES
    // - Backend API
    
    console.log('Driver notification prepared:', {
        subject: emailSubject,
        body: emailBody,
        drivers: drivers.map(d => d.email)
    });
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

const closeModalBtn = document.querySelector('.close-modal');
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('successModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Newsletter Form Submission
document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        }
    });
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .destination-card, .testimonial-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Initialize price calculation on page load
document.addEventListener('DOMContentLoaded', function() {
    if (destinationSelect || packageTypeSelect || transportationSelect) {
        calculatePrice();
    }
});



        

        // Get form data

        const formData = new FormData(this);

        const bookingData = {};

        formData.forEach((value, key) => {

            bookingData[key] = value;

        });



        // Generate booking reference

        const bookingReference = 'INF' + Date.now().toString().slice(-8);

        

        // Calculate total price
        const totalPrice = parseFloat(document.getElementById('totalPrice')?.textContent.replace('₹', '').replace(/,/g, '') || 0);
        
        // Create complete booking object
        const fullName = `${bookingData.firstName || ''} ${bookingData.lastName || ''}`.trim();
        const booking = {
            id: bookingReference,
            name: fullName || bookingData.name || '',
            firstName: bookingData.firstName || '',
            lastName: bookingData.lastName || '',
            email: bookingData.email || '',
            phone: bookingData.phone || '',
            destination: bookingData.destination || '',
            packageType: bookingData.packageType || '',
            travelDate: bookingData.travelDate || '',
            adults: parseInt(bookingData.adults) || 1,
            children: parseInt(bookingData.children) || 0,
            transportation: bookingData.transportation || '',
            accommodation: bookingData.accommodation || '',
            totalPrice: totalPrice,
            status: 'Pending',
            bookingDate: new Date().toISOString(),
            address: bookingData.address || '',
            city: bookingData.city || '',
            pincode: bookingData.pincode || '',
            specialRequirements: bookingData.specialRequirements || '',
            emergencyName: bookingData.emergencyName || '',
            emergencyPhone: bookingData.emergencyPhone || ''
        };
        
        // Save to bookings array for admin panel
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        
        // Also store as last booking for reference
        localStorage.setItem('lastBooking', JSON.stringify({

            reference: bookingReference,

            data: bookingData,

            timestamp: new Date().toISOString()

        }));



        // Show success modal

        const modal = document.getElementById('successModal');

        const bookingRefEl = document.getElementById('bookingReference');

        

        if (bookingRefEl) {

            bookingRefEl.textContent = bookingReference;

        }

        

        if (modal) {

            modal.style.display = 'block';

            // Reset form

            this.reset();

            calculatePrice();

        }

    });

}



// Close Modal

function closeModal() {

    const modal = document.getElementById('successModal');

    if (modal) {

        modal.style.display = 'none';

    }

}



const closeModalBtn = document.querySelector('.close-modal');

if (closeModalBtn) {

    closeModalBtn.addEventListener('click', closeModal);

}



// Close modal when clicking outside

window.addEventListener('click', function(e) {

    const modal = document.getElementById('successModal');

    if (e.target === modal) {

        closeModal();

    }

});



// Contact Form Submission

const contactForm = document.getElementById('contactForm');

if (contactForm) {

    contactForm.addEventListener('submit', function(e) {

        e.preventDefault();

        alert('Thank you for your message! We will get back to you soon.');

        this.reset();

    });

}



// Newsletter Form Submission

document.querySelectorAll('.newsletter-form').forEach(form => {

    form.addEventListener('submit', function(e) {

        e.preventDefault();

        const email = this.querySelector('input[type="email"]').value;

        if (email) {

            alert('Thank you for subscribing to our newsletter!');

            this.reset();

        }

    });

});



// Scroll Animation

const observerOptions = {

    threshold: 0.1,

    rootMargin: '0px 0px -50px 0px'

};



const observer = new IntersectionObserver(function(entries) {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = '1';

            entry.target.style.transform = 'translateY(0)';

        }

    });

}, observerOptions);



// Observe elements for scroll animation

document.addEventListener('DOMContentLoaded', function() {

    const animateElements = document.querySelectorAll('.feature-card, .destination-card, .testimonial-card');

    animateElements.forEach(el => {

        el.style.opacity = '0';

        el.style.transform = 'translateY(20px)';

        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        observer.observe(el);

    });

});



// Initialize price calculation on page load

document.addEventListener('DOMContentLoaded', function() {

    if (destinationSelect || packageTypeSelect || transportationSelect) {

        calculatePrice();

    }

});






