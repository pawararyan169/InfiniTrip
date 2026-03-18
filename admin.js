// Admin Panel Management System

// Admin Authentication
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123' // Change this in production!
};

// Get admin credentials from localStorage if set
function getAdminCredentials() {
    const stored = localStorage.getItem('adminCredentials');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            return ADMIN_CREDENTIALS;
        }
    }
    return ADMIN_CREDENTIALS;
}

// Check if admin is logged in
function isAdminLoggedIn() {
    return localStorage.getItem('adminLoggedIn') === 'true';
}

// Admin login
function adminLogin(username, password) {
    const credentials = getAdminCredentials();
    if (username === credentials.username && password === credentials.password) {
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminUsername', username);
        localStorage.setItem('userRole', 'admin');
        return true;
    }
    return false;
}

// Admin logout
function adminLogout() {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminUsername');
    localStorage.removeItem('userRole');
    window.location.href = 'signin.html';
}

// Get bookings from localStorage
function getBookings() {
    const bookings = localStorage.getItem('bookings');
    return bookings ? JSON.parse(bookings) : [];
}

// Save bookings to localStorage
function saveBookings(bookings) {
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

// Get users from localStorage
function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// Get destinations data
function getDestinations() {
    // Get from script.js prices or use default
    const defaultDestinations = {
        'rann': { name: 'Rann of Kutch', price: 2500 },
        'mandvi': { name: 'Mandvi Beach', price: 1500 },
        'bhuj': { name: 'Bhuj', price: 2000 },
        'dholavira': { name: 'Dholavira', price: 3000 },
        'kala-dungar': { name: 'Kala Dungar', price: 1800 },
        'lakhpat': { name: 'Lakhpat Fort', price: 2200 },
        'wildlife': { name: 'Wildlife Sanctuary', price: 2500 },
        'matana-madh': { name: 'Matana Madh', price: 1200 },
        'narayan-sarovar': { name: 'Narayan Sarovar', price: 1800 },
        'koteshwar': { name: 'Koteshwar', price: 1500 },
        'dhordo': { name: 'Dhordo', price: 2000 },
        'road-to-heaven': { name: 'Road to Heaven', price: 2200 },
        'vijay-vilas': { name: 'Vijay Vilas Palace', price: 1500 },
        'pingleshwar': { name: 'Pingleshwar', price: 1400 },
        'tapkeshwari': { name: 'Tapkeshwari Temple', price: 1000 },
        'smrutivan': { name: 'Smrutivan', price: 1200 },
        'kutch-museum': { name: 'Kutch Museum', price: 800 },
        'aina-mahel': { name: 'Aina Mahel', price: 1000 },
        'kadiyadhro': { name: 'Kadiyadhro', price: 1800 },
        'vande-mataram-memorial': { name: 'Vande Mataram Memorial', price: 1000 }
    };
    
    const stored = localStorage.getItem('adminDestinations');
    return stored ? JSON.parse(stored) : defaultDestinations;
}

// Save destinations
function saveDestinations(destinations) {
    localStorage.setItem('adminDestinations', JSON.stringify(destinations));
}

// Get tours data
function getTours() {
    const tours = localStorage.getItem('adminTours');
    return tours ? JSON.parse(tours) : [];
}

// Save tours
function saveTours(tours) {
    localStorage.setItem('adminTours', JSON.stringify(tours));
}

// Dashboard Functions
function loadDashboardData() {
    const bookings = getBookings();
    const users = getUsers();
    const destinations = getDestinations();
    
    // Calculate statistics
    const totalBookings = bookings.length;
    const totalUsers = users.length;
    const totalRevenue = bookings.reduce((sum, booking) => sum + (parseFloat(booking.totalPrice) || 0), 0);
    const totalDestinations = Object.keys(destinations).length;
    
    // Update dashboard stats
    document.getElementById('totalBookings').textContent = totalBookings;
    document.getElementById('totalUsers').textContent = totalUsers;
    document.getElementById('totalRevenue').textContent = `₹${totalRevenue.toLocaleString()}`;
    document.getElementById('totalDestinations').textContent = totalDestinations;
    
    // Load recent bookings
    const recentBookings = bookings.slice(-5).reverse();
    const recentBookingsBody = document.getElementById('recentBookingsBody');
    if (recentBookingsBody) {
        recentBookingsBody.innerHTML = recentBookings.map(booking => `
            <tr>
                <td>#${booking.id || 'N/A'}</td>
                <td>${booking.name || 'N/A'}</td>
                <td>${booking.destination || 'N/A'}</td>
                <td>${booking.travelDate || 'N/A'}</td>
                <td>₹${(parseFloat(booking.totalPrice) || 0).toLocaleString()}</td>
                <td><span class="badge ${getStatusBadgeClass(booking.status)}">${booking.status || 'Pending'}</span></td>
            </tr>
        `).join('');
    }
    
    // Update admin username
    const adminUsername = localStorage.getItem('adminUsername') || 'Admin';
    const adminUserNameEl = document.getElementById('adminUserName');
    if (adminUserNameEl) {
        adminUserNameEl.textContent = adminUsername;
    }
}

// Bookings Management
function loadBookings() {
    const bookings = getBookings();
    const bookingsTableBody = document.getElementById('bookingsTableBody');
    
    if (!bookingsTableBody) return;
    
    if (bookings.length === 0) {
        bookingsTableBody.innerHTML = '<tr><td colspan="10" style="text-align: center; padding: 2rem;">No bookings found</td></tr>';
        return;
    }
    
    bookingsTableBody.innerHTML = bookings.map((booking, index) => `
        <tr>
            <td>#${booking.id || index + 1}</td>
            <td>${booking.name || 'N/A'}</td>
            <td>${booking.email || 'N/A'}</td>
            <td>${booking.phone || 'N/A'}</td>
            <td>${booking.destination || 'N/A'}</td>
            <td>${booking.packageType || 'N/A'}</td>
            <td>${booking.travelDate || 'N/A'}</td>
            <td>₹${(parseFloat(booking.totalPrice) || 0).toLocaleString()}</td>
            <td><span class="badge ${getStatusBadgeClass(booking.status)}">${booking.status || 'Pending'}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon view" onclick="viewBooking(${index})" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-icon edit" onclick="editBooking(${index})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon delete" onclick="deleteBooking(${index})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function getStatusBadgeClass(status) {
    switch(status?.toLowerCase()) {
        case 'confirmed':
        case 'completed':
            return 'success';
        case 'pending':
            return 'warning';
        case 'cancelled':
            return 'danger';
        default:
            return 'info';
    }
}

function viewBooking(index) {
    const bookings = getBookings();
    const booking = bookings[index];
    
    if (!booking) return;
    
    const modal = createModal('Booking Details', `
        <div style="line-height: 1.8;">
            <p><strong>Booking ID:</strong> #${booking.id || index + 1}</p>
            <p><strong>Customer Name:</strong> ${booking.name}</p>
            <p><strong>Email:</strong> ${booking.email}</p>
            <p><strong>Phone:</strong> ${booking.phone}</p>
            <p><strong>Destination:</strong> ${booking.destination}</p>
            <p><strong>Package Type:</strong> ${booking.packageType}</p>
            <p><strong>Travel Date:</strong> ${booking.travelDate}</p>
            <p><strong>Adults:</strong> ${booking.adults}</p>
            <p><strong>Children:</strong> ${booking.children || 0}</p>
            <p><strong>Transportation:</strong> ${booking.transportation}</p>
            <p><strong>Accommodation:</strong> ${booking.accommodation}</p>
            <p><strong>Total Price:</strong> ₹${(parseFloat(booking.totalPrice) || 0).toLocaleString()}</p>
            <p><strong>Status:</strong> <span class="badge ${getStatusBadgeClass(booking.status)}">${booking.status || 'Pending'}</span></p>
        </div>
    `);
    document.body.appendChild(modal);
}

function editBooking(index) {
    const bookings = getBookings();
    const booking = bookings[index];
    
    if (!booking) return;
    
    const modal = createModal('Edit Booking Status', `
        <form id="editBookingForm">
            <div class="form-group">
                <label class="form-label">Status</label>
                <select id="bookingStatus" class="form-select">
                    <option value="Pending" ${booking.status === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option value="Confirmed" ${booking.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                    <option value="Completed" ${booking.status === 'Completed' ? 'selected' : ''}>Completed</option>
                    <option value="Cancelled" ${booking.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                </select>
            </div>
            <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: flex-end;">
                <button type="button" class="btn btn-primary" onclick="saveBookingStatus(${index})">
                    <i class="fas fa-save"></i> Save
                </button>
                <button type="button" class="btn" style="background: var(--light); color: var(--text-dark);" onclick="closeModal()">
                    Cancel
                </button>
            </div>
        </form>
    `);
    document.body.appendChild(modal);
}

function saveBookingStatus(index) {
    const bookings = getBookings();
    const status = document.getElementById('bookingStatus').value;
    bookings[index].status = status;
    saveBookings(bookings);
    loadBookings();
    loadDashboardData();
    closeModal();
}

function deleteBooking(index) {
    if (confirm('Are you sure you want to delete this booking?')) {
        const bookings = getBookings();
        bookings.splice(index, 1);
        saveBookings(bookings);
        loadBookings();
        loadDashboardData();
    }
}

// Users Management
function loadUsers() {
    const users = getUsers();
    const usersTableBody = document.getElementById('usersTableBody');
    
    if (!usersTableBody) return;
    
    if (users.length === 0) {
        usersTableBody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 2rem;">No users found</td></tr>';
        return;
    }
    
    usersTableBody.innerHTML = users.map((user, index) => {
        const userBookings = getBookings().filter(b => b.email === user.email).length;
        return `
            <tr>
                <td>#${index + 1}</td>
                <td>${user.firstName} ${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.phone || 'N/A'}</td>
                <td>${new Date(user.registeredDate || Date.now()).toLocaleDateString()}</td>
                <td>${userBookings}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon view" onclick="viewUser(${index})" title="View">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-icon delete" onclick="deleteUser(${index})" title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function viewUser(index) {
    const users = getUsers();
    const user = users[index];
    const bookings = getBookings().filter(b => b.email === user.email);
    
    const modal = createModal('User Details', `
        <div style="line-height: 1.8;">
            <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone || 'N/A'}</p>
            <p><strong>Registered:</strong> ${new Date(user.registeredDate || Date.now()).toLocaleDateString()}</p>
            <p><strong>Total Bookings:</strong> ${bookings.length}</p>
        </div>
    `);
    document.body.appendChild(modal);
}

function deleteUser(index) {
    if (confirm('Are you sure you want to delete this user?')) {
        const users = getUsers();
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        loadUsers();
        loadDashboardData();
    }
}

// Destinations Management
function loadDestinations() {
    const destinations = getDestinations();
    const destinationsTableBody = document.getElementById('destinationsTableBody');
    
    if (!destinationsTableBody) return;
    
    destinationsTableBody.innerHTML = Object.entries(destinations).map(([key, dest]) => `
        <tr>
            <td>${dest.name}</td>
            <td>₹${dest.price.toLocaleString()}</td>
            <td>${dest.description || 'N/A'}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon edit" onclick="editDestination('${key}')" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function editDestination(key) {
    const destinations = getDestinations();
    const dest = destinations[key];
    
    const modal = createModal('Edit Destination', `
        <form id="editDestinationForm">
            <div class="form-group">
                <label>Name</label>
                <input type="text" id="destName" value="${dest.name}" required>
            </div>
            <div class="form-group">
                <label>Price (₹)</label>
                <input type="number" id="destPrice" value="${dest.price}" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="destDescription">${dest.description || ''}</textarea>
            </div>
            <div style="margin-top: 1.5rem; display: flex; gap: 1rem;">
                <button type="button" class="btn btn-primary" onclick="saveDestination('${key}')">Save</button>
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            </div>
        </form>
    `);
    document.body.appendChild(modal);
}

function saveDestination(key) {
    const destinations = getDestinations();
    destinations[key] = {
        name: document.getElementById('destName').value,
        price: parseFloat(document.getElementById('destPrice').value),
        description: document.getElementById('destDescription').value
    };
    saveDestinations(destinations);
    loadDestinations();
    closeModal();
}

// Tours Management
function loadTours() {
    const tours = getTours();
    const toursTableBody = document.getElementById('toursTableBody');
    
    if (!toursTableBody) return;
    
    if (tours.length === 0) {
        toursTableBody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 2rem;">No tours found. Tours are managed in tours.js</td></tr>';
        return;
    }
    
    toursTableBody.innerHTML = tours.map((tour, index) => `
        <tr>
            <td>${tour.name}</td>
            <td><span class="badge ${tour.type}">${tour.type}</span></td>
            <td>${tour.days}</td>
            <td>${tour.nights}</td>
            <td>₹${tour.price.toLocaleString()}</td>
            <td>${tour.destinations.join(', ')}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon edit" onclick="editTour(${index})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon delete" onclick="deleteTour(${index})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Analytics
function loadAnalytics() {
    const bookings = getBookings();
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    // Monthly bookings
    const monthlyBookings = bookings.filter(b => {
        const bookingDate = new Date(b.bookingDate || b.travelDate || Date.now());
        return bookingDate.getMonth() === currentMonth && bookingDate.getFullYear() === currentYear;
    }).length;
    
    // Monthly revenue
    const monthlyRevenue = bookings
        .filter(b => {
            const bookingDate = new Date(b.bookingDate || b.travelDate || Date.now());
            return bookingDate.getMonth() === currentMonth && bookingDate.getFullYear() === currentYear;
        })
        .reduce((sum, b) => sum + (parseFloat(b.totalPrice) || 0), 0);
    
    // Monthly users
    const users = getUsers();
    const monthlyUsers = users.filter(u => {
        const regDate = new Date(u.registeredDate || Date.now());
        return regDate.getMonth() === currentMonth && regDate.getFullYear() === currentYear;
    }).length;
    
    // Popular destination
    const destinationCounts = {};
    bookings.forEach(b => {
        const dest = b.destination;
        destinationCounts[dest] = (destinationCounts[dest] || 0) + 1;
    });
    const popularDestination = Object.keys(destinationCounts).reduce((a, b) => 
        destinationCounts[a] > destinationCounts[b] ? a : b, 'N/A'
    );
    
    document.getElementById('monthlyBookings').textContent = monthlyBookings;
    document.getElementById('monthlyRevenue').textContent = `₹${monthlyRevenue.toLocaleString()}`;
    document.getElementById('monthlyUsers').textContent = monthlyUsers;
    document.getElementById('popularDestination').textContent = popularDestination;
}

// Settings
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('adminSettings') || '{}');
    document.getElementById('companyName').value = settings.companyName || 'INFINITRIP';
    document.getElementById('contactEmail').value = settings.contactEmail || 'info@infinitrip.com';
    document.getElementById('phone1').value = settings.phone1 || '+91 95124 95229';
    document.getElementById('phone2').value = settings.phone2 || '+91 79900 63442';
    document.getElementById('companyAddress').value = settings.companyAddress || '123 Travel Street, Bhuj, Kutch, Gujarat, India - 370001';
}

function saveSettings() {
    const settings = {
        companyName: document.getElementById('companyName').value,
        contactEmail: document.getElementById('contactEmail').value,
        phone1: document.getElementById('phone1').value,
        phone2: document.getElementById('phone2').value,
        companyAddress: document.getElementById('companyAddress').value
    };
    localStorage.setItem('adminSettings', JSON.stringify(settings));
    alert('Settings saved successfully!');
}

// Navigation Functions
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.remove('section-active');
        section.classList.add('section-hidden');
    });
    
    // Show selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('section-hidden');
        section.classList.add('section-active');
    }
    
    // Update active menu item
    document.querySelectorAll('.admin-menu-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.closest('.admin-menu-link').classList.add('active');
    
    // Update page title
    const titles = {
        'dashboard': 'Dashboard',
        'bookings': 'Bookings Management',
        'users': 'Users Management',
        'destinations': 'Destinations Management',
        'tours': 'Tours Management',
        'analytics': 'Analytics & Reports',
        'settings': 'Settings'
    };
    document.getElementById('pageTitle').textContent = titles[sectionId] || 'Dashboard';
}

function toggleSidebar() {
    document.getElementById('adminSidebar').classList.toggle('active');
}

// Modal Functions
function createModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="close-modal" onclick="closeModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            ${content}
        </div>
    `;
    modal.onclick = function(e) {
        if (e.target === modal) closeModal();
    };
    return modal;
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// Make functions globally available
window.isAdminLoggedIn = isAdminLoggedIn;
window.adminLogin = adminLogin;
window.adminLogout = adminLogout;
window.showSection = showSection;
window.toggleSidebar = toggleSidebar;
window.viewBooking = viewBooking;
window.editBooking = editBooking;
window.deleteBooking = deleteBooking;
window.saveBookingStatus = saveBookingStatus;
window.viewUser = viewUser;
window.deleteUser = deleteUser;
window.editDestination = editDestination;
window.saveDestination = saveDestination;
window.loadBookings = loadBookings;
window.loadUsers = loadUsers;
window.loadDestinations = loadDestinations;
window.loadTours = loadTours;
window.loadAnalytics = loadAnalytics;
window.loadSettings = loadSettings;
window.saveSettings = saveSettings;
window.closeModal = closeModal;

