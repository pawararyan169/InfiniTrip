// Tours and Packages Management

// Tour data structure
const toursData = [
    {
        id: 1,
        name: "Rann of Kutch Experience",
        type: "basic",
        days: 2,
        nights: 1,
        destinations: ["rann", "dhordo"],
        price: 5000,
        image: "https://www.gujaratrannutsav.com/wp-content/uploads/Full-Moon-Night-In-The-Rann-of-Kutch-1-1-2048x1261-1.jpeg",
        includes: ["Transportation", "Expert Guide", "1 Night Accommodation", "Breakfast"],
        description: "Experience the magical white desert of Rann of Kutch",
        detailedDescription: "Discover the mesmerizing white salt desert of Rann of Kutch, one of the largest salt deserts in the world. This basic tour package offers you an authentic experience of the Rann with a visit to Dhordo, the gateway to the Rann Utsav. Witness the stunning sunset over the white desert and enjoy the local culture.",
        itinerary: [
            "Day 1: Arrival in Bhuj, transfer to Dhordo. Evening visit to Rann of Kutch for sunset viewing. Overnight stay at Dhordo.",
            "Day 2: Morning exploration of Dhordo village, local handicraft visit. Afternoon departure."
        ],
        highlights: ["White Desert Experience", "Sunset at Rann", "Dhordo Village Tour", "Local Culture"],
        bestTime: "October to March (especially during Rann Utsav)",
        specialNotes: "Full moon nights offer the most spectacular views. Carry warm clothes for evening."
    },
    {
        id: 2,
        name: "Rann of Kutch Premium",
        type: "premium",
        days: 3,
        nights: 2,
        destinations: ["rann", "dhordo", "kala-dungar"],
        price: 12000,
        image: "https://www.gujaratrannutsav.com/wp-content/uploads/Full-Moon-Night-In-The-Rann-of-Kutch-1-1-2048x1261-1.jpeg",
        includes: ["Transportation", "Expert Guide", "2 Nights Hotel", "All Meals", "Rann Utsav Entry"],
        description: "Premium experience with Rann Utsav and multiple destinations",
        detailedDescription: "An enhanced premium experience covering the Rann of Kutch, Dhordo, and Kala Dungar (Black Hill) - the highest point in Kutch. This package includes entry to the famous Rann Utsav festival, comfortable accommodation, and all meals. Enjoy cultural performances, camel rides, and the breathtaking views from Kala Dungar.",
        itinerary: [
            "Day 1: Arrival in Bhuj, transfer to Dhordo. Check-in and lunch. Evening Rann Utsav entry with cultural shows. Overnight at Dhordo.",
            "Day 2: Morning visit to Kala Dungar for panoramic views. Afternoon return to Dhordo for local activities. Evening sunset at Rann. Overnight stay.",
            "Day 3: Morning village tour and handicraft shopping. Afternoon departure."
        ],
        highlights: ["Rann Utsav Entry", "Kala Dungar Visit", "Cultural Performances", "Camel Rides", "All Meals Included"],
        bestTime: "November to February (Rann Utsav period)",
        specialNotes: "Rann Utsav tickets included. Best experience during full moon. Premium accommodation with modern amenities."
    },
    {
        id: 3,
        name: "Rann of Kutch Luxury",
        type: "luxury",
        days: 4,
        nights: 3,
        destinations: ["rann", "dhordo", "kala-dungar", "road-to-heaven"],
        price: 25000,
        image: "https://www.gujaratrannutsav.com/wp-content/uploads/Full-Moon-Night-In-The-Rann-of-Kutch-1-1-2048x1261-1.jpeg",
        includes: ["Luxury Transportation", "Expert Guide", "3 Nights Premium Resort", "All Meals", "Rann Utsav VIP", "Photography"],
        description: "Luxury experience with premium accommodations and exclusive access",
        detailedDescription: "The ultimate luxury experience in Kutch! Stay at premium desert resorts, enjoy VIP access to Rann Utsav, and explore the mystical Road to Heaven. This package includes professional photography services, luxury transportation, and exclusive experiences. Perfect for those seeking comfort and exclusivity.",
        itinerary: [
            "Day 1: Luxury pickup from airport/station. Transfer to premium resort in Dhordo. Welcome lunch. Evening VIP entry to Rann Utsav with private cultural show. Overnight at resort.",
            "Day 2: Morning visit to Kala Dungar with private guide. Afternoon visit to Road to Heaven. Professional photography session. Evening sunset at Rann with private dinner setup. Overnight stay.",
            "Day 3: Full day Rann exploration with camel safari, ATV rides, and cultural activities. Evening stargazing experience. Overnight stay.",
            "Day 4: Morning spa session (optional), village tour, and departure."
        ],
        highlights: ["VIP Rann Utsav Access", "Premium Desert Resort", "Road to Heaven Visit", "Professional Photography", "Private Cultural Shows", "Luxury Transportation", "Stargazing Experience"],
        bestTime: "November to February (Full moon preferred)",
        specialNotes: "VIP access includes front-row seats at cultural shows. Professional photographer included. Luxury resort with spa facilities available."
    },
    {
        id: 4,
        name: "Heritage Tour of Kutch",
        type: "basic",
        days: 3,
        nights: 2,
        destinations: ["bhuj", "aina-mahel", "kutch-museum", "prag-mahal"],
        price: 6000,
        image: "https://www.holidify.com/images/bgImages/BHUJ.jpg",
        includes: ["Transportation", "Expert Guide", "2 Nights Hotel", "Breakfast", "Museum Entry"],
        description: "Explore the rich heritage and culture of Bhuj",
        detailedDescription: "Immerse yourself in the royal heritage of Kutch with visits to the magnificent Aina Mahal (Palace of Mirrors), Prag Mahal, and the Kutch Museum. Discover the history, architecture, and culture of this ancient region through guided tours of these historic landmarks.",
        itinerary: [
            "Day 1: Arrival in Bhuj. Check-in. Visit Aina Mahal - the 18th-century palace with mirror work. Evening at leisure. Overnight in Bhuj.",
            "Day 2: Morning visit to Prag Mahal - the Italian Gothic palace. Afternoon explore Kutch Museum - oldest museum of Gujarat. Evening local market visit. Overnight stay.",
            "Day 3: Morning heritage walk in old Bhuj. Afternoon departure."
        ],
        highlights: ["Aina Mahal Palace", "Prag Mahal Architecture", "Kutch Museum", "Heritage Walk", "Local Markets"],
        bestTime: "October to March",
        specialNotes: "Museum entry fees included. Comfortable walking shoes recommended. Photography allowed (some areas may have restrictions)."
    },
    {
        id: 5,
        name: "Heritage Premium Tour",
        type: "premium",
        days: 4,
        nights: 3,
        destinations: ["bhuj", "aina-mahel", "kutch-museum", "tapkeshwari", "smrutivan"],
        price: 15000,
        image: "https://www.holidify.com/images/bgImages/BHUJ.jpg",
        includes: ["Transportation", "Expert Guide", "3 Nights Hotel", "All Meals", "All Entry Tickets"],
        description: "Comprehensive heritage tour with all meals included",
        detailedDescription: "A comprehensive premium heritage tour covering all major historical sites in and around Bhuj. Visit royal palaces, ancient temples, and memorials. Includes all entry tickets, comfortable accommodation, and authentic Kutchi meals. Perfect for history enthusiasts.",
        itinerary: [
            "Day 1: Arrival in Bhuj. Check-in. Visit Aina Mahal and Prag Mahal. Evening heritage walk. Overnight in Bhuj.",
            "Day 2: Morning visit to Kutch Museum. Afternoon visit to Tapkeshwari Temple - ancient cave temple. Evening local cuisine experience. Overnight stay.",
            "Day 3: Full day trip to Smrutivan - the memorial garden. Afternoon return to Bhuj. Evening cultural show. Overnight stay.",
            "Day 4: Morning handicraft village visit. Afternoon departure."
        ],
        highlights: ["All Heritage Sites", "Tapkeshwari Temple", "Smrutivan Memorial", "Cultural Shows", "Authentic Cuisine", "Handicraft Villages"],
        bestTime: "October to March",
        specialNotes: "All entry tickets included. Authentic Kutchi meals provided. Cultural shows arranged on request."
    },
    {
        id: 6,
        name: "Coastal Kutch Discovery",
        type: "basic",
        days: 2,
        nights: 1,
        destinations: ["mandvi", "vijay-vilas", "pingleshwar"],
        price: 4500,
        image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/67/d8/d4/mandvi-beach-kutch-gujarat.jpg",
        includes: ["Transportation", "Expert Guide", "1 Night Hotel", "Breakfast"],
        description: "Discover the beautiful coastal destinations of Kutch",
        detailedDescription: "Explore the pristine beaches and royal palaces along the Kutch coastline. Visit Mandvi Beach, the magnificent Vijay Vilas Palace, and the serene Pingleshwar Beach. Enjoy beach activities, palace tours, and coastal cuisine in this relaxing coastal tour.",
        itinerary: [
            "Day 1: Arrival in Mandvi. Visit Vijay Vilas Palace - the royal summer palace. Afternoon beach time at Mandvi Beach. Evening check-in. Overnight in Mandvi.",
            "Day 2: Morning visit to Pingleshwar Beach. Beach activities and relaxation. Afternoon departure."
        ],
        highlights: ["Mandvi Beach", "Vijay Vilas Palace", "Pingleshwar Beach", "Beach Activities", "Coastal Views"],
        bestTime: "October to March (avoid monsoon)",
        specialNotes: "Beach activities available at extra cost. Sunscreen and beachwear recommended. Palace photography allowed."
    },
    {
        id: 7,
        name: "Coastal Premium Tour",
        type: "premium",
        days: 3,
        nights: 2,
        destinations: ["mandvi", "vijay-vilas", "pingleshwar", "koteshwar"],
        price: 11000,
        image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/67/d8/d4/mandvi-beach-kutch-gujarat.jpg",
        includes: ["Transportation", "Expert Guide", "2 Nights Hotel", "All Meals", "Water Sports"],
        description: "Premium coastal experience with water activities",
        detailedDescription: "An enhanced coastal experience with water sports, extended beach time, and a visit to the sacred Koteshwar Temple. This premium package includes all meals, water activities, and comfortable beachside accommodation. Perfect for beach lovers and adventure seekers.",
        itinerary: [
            "Day 1: Arrival in Mandvi. Visit Vijay Vilas Palace. Afternoon beach activities and water sports at Mandvi Beach. Evening check-in. Overnight in Mandvi.",
            "Day 2: Morning visit to Pingleshwar Beach for relaxation. Afternoon trip to Koteshwar Temple - ancient Shiva temple by the sea. Evening beachside dinner. Overnight stay.",
            "Day 3: Morning beach activities. Afternoon departure."
        ],
        highlights: ["Water Sports Included", "Vijay Vilas Palace", "Koteshwar Temple", "Beach Activities", "All Meals", "Beachside Accommodation"],
        bestTime: "October to March",
        specialNotes: "Water sports included (jet ski, parasailing available). Beachside hotel with sea view. All meals with fresh seafood options."
    },
    {
        id: 8,
        name: "Dholavira Archaeological Tour",
        type: "basic",
        days: 2,
        nights: 1,
        destinations: ["dholavira"],
        price: 5500,
        image: "https://econaur.com/wp-content/uploads/2021/08/1_Btf3A33wHXFLg52raGSWgg.png",
        includes: ["Transportation", "Expert Guide", "1 Night Hotel", "Breakfast", "Museum Entry"],
        description: "Explore the ancient Harappan civilization at Dholavira",
        detailedDescription: "Journey back 4500 years to the Harappan civilization at Dholavira, a UNESCO World Heritage Site. Explore the well-planned ancient city with its sophisticated water management system, citadel, and archaeological museum. A must-visit for history and archaeology enthusiasts.",
        itinerary: [
            "Day 1: Early morning departure from Bhuj to Dholavira (220 km). Arrival and check-in. Afternoon guided tour of Dholavira archaeological site. Visit the museum. Overnight in Dholavira.",
            "Day 2: Morning detailed exploration of the citadel, middle town, and lower town. Study the water management system. Afternoon return to Bhuj."
        ],
        highlights: ["UNESCO World Heritage Site", "Harappan Civilization", "Archaeological Museum", "Water Management System", "Ancient City Layout"],
        bestTime: "October to March (avoid summer heat)",
        specialNotes: "Long journey involved (220 km one way). Museum entry included. Expert archaeologist guide available. Comfortable walking required."
    },
    {
        id: 9,
        name: "Dholavira Premium Tour",
        type: "premium",
        days: 3,
        nights: 2,
        destinations: ["dholavira", "fossil-park"],
        price: 13000,
        image: "https://econaur.com/wp-content/uploads/2021/08/1_Btf3A33wHXFLg52raGSWgg.png",
        includes: ["Transportation", "Expert Guide", "2 Nights Hotel", "All Meals", "All Entry Tickets"],
        description: "Comprehensive archaeological tour with fossil park visit",
        detailedDescription: "An extended premium tour to Dholavira with an additional visit to the Fossil Park. Explore the ancient Harappan city in detail and discover prehistoric fossils. Includes comfortable accommodation, all meals, and expert archaeological guidance. Perfect for serious history buffs.",
        itinerary: [
            "Day 1: Early morning departure to Dholavira. Arrival and check-in. Afternoon comprehensive tour of Dholavira site with expert guide. Museum visit. Overnight in Dholavira.",
            "Day 2: Morning visit to Fossil Park - see ancient marine fossils. Afternoon detailed exploration of Dholavira's water management and urban planning. Evening documentary session. Overnight stay.",
            "Day 3: Morning final exploration and photography. Afternoon return to Bhuj."
        ],
        highlights: ["Dholavira UNESCO Site", "Fossil Park Visit", "Expert Archaeological Guide", "All Meals", "Documentary Session", "Extended Exploration"],
        bestTime: "October to March",
        specialNotes: "Expert archaeologist guide included. All entry tickets covered. Extended time for detailed exploration. Documentary and educational materials provided."
    },
    {
        id: 10,
        name: "Spiritual Kutch Journey",
        type: "basic",
        days: 3,
        nights: 2,
        destinations: ["narayan-sarovar", "koteshwar", "matana-madh", "tapkeshwari"],
        price: 5500,
        image: "https://tse4.mm.bing.net/th/id/OIP.NoEDPX33qUgMhEQfSxPErQHaFw?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        includes: ["Transportation", "Expert Guide", "2 Nights Hotel", "Breakfast"],
        description: "Visit the sacred religious sites of Kutch",
        detailedDescription: "A spiritual journey through the sacred sites of Kutch. Visit Narayan Sarovar - one of the five holy lakes of India, Koteshwar Temple by the sea, Matana Madh - the famous Krishna temple, and Tapkeshwari - the ancient cave temple. Experience peace and spirituality in these revered places.",
        itinerary: [
            "Day 1: Arrival in Bhuj. Visit Tapkeshwari Temple - ancient cave temple. Evening check-in. Overnight in Bhuj.",
            "Day 2: Early morning departure to Narayan Sarovar - holy lake. Visit Koteshwar Temple by the Arabian Sea. Afternoon visit to Matana Madh - Krishna temple. Overnight stay.",
            "Day 3: Morning prayers and temple visits. Afternoon return to Bhuj and departure."
        ],
        highlights: ["Narayan Sarovar", "Koteshwar Temple", "Matana Madh", "Tapkeshwari Cave Temple", "Spiritual Experience"],
        bestTime: "Year-round (especially during festivals)",
        specialNotes: "Respectful attire required at temples. Photography may be restricted in some areas. Best during religious festivals for enhanced experience."
    },
    {
        id: 11,
        name: "Complete Kutch Explorer",
        type: "premium",
        days: 5,
        nights: 4,
        destinations: ["rann", "bhuj", "mandvi", "dholavira", "kala-dungar"],
        price: 20000,
        image: "https://www.gujaratrannutsav.com/wp-content/uploads/Full-Moon-Night-In-The-Rann-of-Kutch-1-1-2048x1261-1.jpeg",
        includes: ["Transportation", "Expert Guide", "4 Nights Hotel", "All Meals", "All Entry Tickets"],
        description: "Comprehensive tour covering major destinations of Kutch",
        detailedDescription: "The ultimate comprehensive tour of Kutch covering all major attractions - from the white desert of Rann to the ancient city of Dholavira, from heritage Bhuj to coastal Mandvi, and the highest point Kala Dungar. This premium package offers the complete Kutch experience with comfortable accommodation and all meals.",
        itinerary: [
            "Day 1: Arrival in Bhuj. Heritage tour - Aina Mahal, Prag Mahal, Kutch Museum. Overnight in Bhuj.",
            "Day 2: Morning visit to Kala Dungar. Afternoon transfer to Dhordo. Evening Rann of Kutch sunset. Overnight in Dhordo.",
            "Day 3: Full day Rann exploration. Rann Utsav entry (if available). Cultural activities. Overnight stay.",
            "Day 4: Early morning departure to Dholavira. Full day archaeological tour. Overnight in Dholavira.",
            "Day 5: Morning return journey via Mandvi. Visit Vijay Vilas Palace and Mandvi Beach. Afternoon departure."
        ],
        highlights: ["All Major Destinations", "Rann of Kutch", "Dholavira UNESCO Site", "Heritage Bhuj", "Coastal Mandvi", "Kala Dungar", "All Meals", "Comprehensive Experience"],
        bestTime: "October to March",
        specialNotes: "Comprehensive tour covering maximum destinations. All entry tickets included. Comfortable hotels at each location. Best for first-time visitors to Kutch."
    },
    {
        id: 12,
        name: "Complete Kutch Luxury",
        type: "luxury",
        days: 6,
        nights: 5,
        destinations: ["rann", "bhuj", "mandvi", "dholavira", "kala-dungar", "road-to-heaven", "vijay-vilas"],
        price: 45000,
        image: "https://www.gujaratrannutsav.com/wp-content/uploads/Full-Moon-Night-In-The-Rann-of-Kutch-1-1-2048x1261-1.jpeg",
        includes: ["Luxury Transportation", "Expert Guide", "5 Nights Premium Resort", "All Meals", "VIP Access", "Photography", "Cultural Shows"],
        description: "Ultimate luxury experience covering all major destinations",
        detailedDescription: "The most exclusive and luxurious tour of Kutch! Experience everything in style - premium resorts, VIP access, private guides, professional photography, and exclusive experiences. Cover all major destinations including the mystical Road to Heaven. This is the ultimate Kutch experience for discerning travelers.",
        itinerary: [
            "Day 1: Luxury airport/station pickup. Transfer to premium resort in Bhuj. Heritage tour with private guide - Aina Mahal, Prag Mahal. Evening fine dining. Overnight at luxury resort.",
            "Day 2: Morning visit to Kala Dungar with private vehicle. Afternoon transfer to Dhordo premium resort. Evening VIP Rann Utsav entry with front-row seats. Private cultural show. Overnight at desert resort.",
            "Day 3: Full day Rann exploration - camel safari, ATV rides, exclusive experiences. Professional photography session. Evening private dinner at Rann with stargazing. Overnight stay.",
            "Day 4: Morning visit to Road to Heaven - exclusive access. Afternoon luxury transfer to Dholavira. Premium accommodation. Overnight stay.",
            "Day 5: Full day Dholavira tour with expert archaeologist. Afternoon luxury transfer to Mandvi. Visit Vijay Vilas Palace. Beachside premium resort. Overnight stay.",
            "Day 6: Morning beach activities and relaxation. Spa session. Afternoon departure with luxury transfer."
        ],
        highlights: ["All Premium Destinations", "Luxury Resorts", "VIP Access", "Road to Heaven", "Professional Photography", "Private Guides", "Cultural Shows", "Stargazing", "Spa Services", "Fine Dining"],
        bestTime: "November to February (Full moon preferred)",
        specialNotes: "Ultimate luxury experience. Premium resorts with spa facilities. VIP access to all attractions. Professional photographer included. Private vehicles and guides. Fine dining with local and international cuisine."
    },
    {
        id: 13,
        name: "Wildlife & Nature Tour",
        type: "basic",
        days: 2,
        nights: 1,
        destinations: ["wildlife", "kadiyadhro"],
        price: 5000,
        image: "https://th.bing.com/th/id/R.e067ec2ee717c7fa52bab91af6da87f8?rik=%2f63wXAm1%2b0qbJQ&riu=http%3a%2f%2fwww.gujaratupdates.com%2fwp-content%2fuploads%2f2017%2f01%2fkutch-desert-wildlife-sanctuary-3071-650x334.jpg&ehk=HEeK4A9do1SrAxSxLsS2M%2fNktgjd5%2b1z3qYTKjbEt%2fU%3d&risl=&pid=ImgRaw&r=0",
        includes: ["Transportation", "Expert Guide", "1 Night Hotel", "Breakfast", "Sanctuary Entry"],
        description: "Explore the desert wildlife and natural formations",
        detailedDescription: "Discover the unique desert ecosystem of Kutch at the Wildlife Sanctuary and explore the fascinating natural formations at Kadiyadhro. Spot desert wildlife including wild ass, chinkara, and various bird species. A perfect tour for nature and wildlife enthusiasts.",
        itinerary: [
            "Day 1: Arrival in Bhuj. Transfer to Wildlife Sanctuary. Morning and evening safari to spot wildlife. Overnight near sanctuary.",
            "Day 2: Morning visit to Kadiyadhro - natural rock formations. Photography and exploration. Afternoon return to Bhuj and departure."
        ],
        highlights: ["Wildlife Safari", "Desert Wildlife", "Kadiyadhro Rock Formations", "Bird Watching", "Nature Photography"],
        bestTime: "October to March (best wildlife sightings)",
        specialNotes: "Sanctuary entry included. Early morning and evening safaris for best wildlife viewing. Binoculars recommended. Photography allowed."
    },
    {
        id: 14,
        name: "Border & History Tour",
        type: "basic",
        days: 2,
        nights: 1,
        destinations: ["lakhpat", "vande-mataram-memorial"],
        price: 4500,
        image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/lakhpat-fort/Lakhpat-Fort-2.jpg",
        includes: ["Transportation", "Expert Guide", "1 Night Hotel", "Breakfast"],
        description: "Visit historic border areas and memorials",
        detailedDescription: "Explore the historic border town of Lakhpat with its ancient fort and visit the Vande Mataram Memorial. Learn about the strategic importance of this border region and pay homage to the freedom fighters. A unique tour combining history, patriotism, and border geography.",
        itinerary: [
            "Day 1: Early morning departure from Bhuj to Lakhpat (150 km). Visit Lakhpat Fort - ancient fort on the border. Explore the historic town. Overnight near Lakhpat.",
            "Day 2: Morning visit to Vande Mataram Memorial. Learn about the freedom struggle. Afternoon return to Bhuj and departure."
        ],
        highlights: ["Lakhpat Fort", "Border Town", "Vande Mataram Memorial", "Historical Significance", "Patriotic Experience"],
        bestTime: "October to March",
        specialNotes: "Long journey to border area. Border permits may be required (arranged by us). Respectful visit to memorial. Photography restrictions may apply near border."
    }
];

// Destination names mapping
const destinationNames = {
    'rann': 'Rann of Kutch',
    'dholavira': 'Dholavira',
    'mandvi': 'Mandvi Beach',
    'bhuj': 'Bhuj',
    'dhordo': 'Dhordo',
    'road-to-heaven': 'Road to Heaven',
    'kala-dungar': 'Kala Dungar',
    'vijay-vilas': 'Vijay Vilas Palace',
    'aina-mahel': 'Aina Mahel',
    'kutch-museum': 'Kutch Museum',
    'lakhpat': 'Lakhpat Fort',
    'narayan-sarovar': 'Narayan Sarovar',
    'koteshwar': 'Koteshwar',
    'matana-madh': 'Matana Madh',
    'tapkeshwari': 'Tapkeshwari Temple',
    'pingleshwar': 'Pingleshwar',
    'wildlife': 'Wildlife Sanctuary',
    'kadiyadhro': 'Kadiyadhro',
    'smrutivan': 'Smrutivan',
    'vande-mataram-memorial': 'Vande Mataram Memorial'
};

// Display tours
function displayTours(tours = toursData) {
    const toursGrid = document.getElementById('toursGrid');
    const noTours = document.getElementById('noTours');
    
    if (!toursGrid) return;
    
    toursGrid.innerHTML = '';
    
    if (tours.length === 0) {
        toursGrid.style.display = 'none';
        if (noTours) noTours.style.display = 'block';
        return;
    }
    
    toursGrid.style.display = 'grid';
    if (noTours) noTours.style.display = 'none';
    
    tours.forEach(tour => {
        const tourCard = createTourCard(tour);
        toursGrid.appendChild(tourCard);
    });
}

// Create tour card HTML
function createTourCard(tour) {
    const card = document.createElement('div');
    card.className = 'tour-card';
    
    const destinationsList = tour.destinations.map(dest => 
        destinationNames[dest] || dest
    ).join(', ');
    
    const destinationsHTML = tour.destinations.map(dest => 
        `<li>${destinationNames[dest] || dest}</li>`
    ).join('');
    
    card.innerHTML = `
        <img src="${tour.image}" alt="${tour.name}" class="tour-image">
        <div class="tour-content">
            <div class="tour-header">
                <h3 class="tour-title">${tour.name}</h3>
                <span class="tour-type-badge ${tour.type}">${tour.type}</span>
            </div>
            <div class="tour-meta">
                <span><i class="fas fa-calendar-day"></i> ${tour.days} Days</span>
                <span><i class="fas fa-moon"></i> ${tour.nights} Nights</span>
            </div>
            <p class="tour-description" style="color: var(--text); margin: 1rem 0; font-size: 0.9rem;">
                ${tour.description}
            </p>
            <div class="tour-destinations">
                <h4><i class="fas fa-map-marker-alt"></i> Destinations:</h4>
                <ul>${destinationsHTML}</ul>
            </div>
            <div class="tour-price">
                ₹${tour.price.toLocaleString()}
                <span> per person</span>
            </div>
            <div class="tour-includes">
                <h4>Includes:</h4>
                <ul>
                    ${tour.includes.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('')}
                </ul>
            </div>
            <div style="display: flex; gap: 0.75rem; margin-top: 1rem;">
                <button onclick="showTourDetails(${tour.id})" class="btn btn-secondary" style="flex: 1;">
                    <i class="fas fa-info-circle"></i> View Details
                </button>
                <a href="booking.html?tour=${tour.id}" class="btn btn-primary" style="flex: 1; text-align: center;">
                    <i class="fas fa-book"></i> Book Now
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Search and filter tours
function searchTours() {
    const budget = parseInt(document.getElementById('budgetFilter').value) || Infinity;
    const days = parseInt(document.getElementById('daysFilter').value) || null;
    const nights = parseInt(document.getElementById('nightsFilter').value) || null;
    const type = document.getElementById('typeFilter').value;
    const location = document.getElementById('locationFilter').value;
    
    let filteredTours = toursData.filter(tour => {
        // Budget filter
        if (tour.price > budget) return false;
        
        // Days filter
        if (days && tour.days !== days) return false;
        
        // Nights filter
        if (nights !== null && tour.nights !== nights) return false;
        
        // Type filter
        if (type && tour.type !== type) return false;
        
        // Location filter
        if (location && !tour.destinations.includes(location)) return false;
        
        return true;
    });
    
    displayTours(filteredTours);
}

// Clear all filters
function clearFilters() {
    document.getElementById('budgetFilter').value = '';
    document.getElementById('daysFilter').value = '';
    document.getElementById('nightsFilter').value = '';
    document.getElementById('typeFilter').value = '';
    document.getElementById('locationFilter').value = '';
    displayTours();
}

// Custom Package Builder
function initializeCustomPackageBuilder() {
    const checkboxesContainer = document.getElementById('destinationCheckboxes');
    if (!checkboxesContainer) return;
    
    Object.entries(destinationNames).forEach(([value, name]) => {
        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'destination-checkbox';
        checkboxDiv.innerHTML = `
            <input type="checkbox" id="dest-${value}" value="${value}" onchange="updateCustomPackage()">
            <label for="dest-${value}">${name}</label>
        `;
        checkboxesContainer.appendChild(checkboxDiv);
    });
    
    // Add event listeners for custom package updates
    document.getElementById('customDays')?.addEventListener('input', updateCustomPackage);
    document.getElementById('customNights')?.addEventListener('input', updateCustomPackage);
    document.getElementById('customPackageType')?.addEventListener('change', updateCustomPackage);
    document.getElementById('customAdults')?.addEventListener('input', updateCustomPackage);
    document.getElementById('customChildren')?.addEventListener('input', updateCustomPackage);
}

// Destination prices (fallback if script.js not loaded)
const destinationPrices = {
    'rann': 2500, 'mandvi': 1500, 'bhuj': 2000, 'dholavira': 3000,
    'kala-dungar': 1800, 'lakhpat': 2200, 'wildlife': 2500,
    'matana-madh': 1200, 'narayan-sarovar': 1800, 'koteshwar': 1500,
    'dhordo': 2000, 'road-to-heaven': 2200, 'vijay-vilas': 1500,
    'pingleshwar': 1400, 'tapkeshwari': 1000, 'smrutivan': 1200,
    'kutch-museum': 800, 'aina-mahel': 1000, 'kadiyadhro': 1800,
    'vande-mataram-memorial': 1000
};

// Update custom package summary
function updateCustomPackage() {
    const selectedDestinations = Array.from(document.querySelectorAll('#destinationCheckboxes input[type="checkbox"]:checked'))
        .map(cb => cb.value);
    const days = parseInt(document.getElementById('customDays')?.value) || 1;
    const nights = parseInt(document.getElementById('customNights')?.value) || 0;
    const packageType = document.getElementById('customPackageType')?.value || 'basic';
    const adults = parseInt(document.getElementById('customAdults')?.value) || 1;
    const children = parseInt(document.getElementById('customChildren')?.value) || 0;
    
    if (selectedDestinations.length === 0) {
        document.getElementById('packageDetails').innerHTML = '<p>Please select at least one destination</p>';
        return;
    }
    
    // Calculate price
    const basePrices = {
        'basic': 1.0,
        'premium': 2.0,
        'luxury': 3.0
    };
    
    const multiplier = basePrices[packageType] || 1.0;
    let totalBasePrice = 0;
    
    // Get prices from script.js if available, otherwise use defaults
    const pricesToUse = (typeof prices !== 'undefined' && prices.destinations) 
        ? prices.destinations 
        : destinationPrices;
    
    selectedDestinations.forEach(dest => {
        const destPrice = pricesToUse[dest] || 2000;
        totalBasePrice += destPrice;
    });
    
    const packagePrice = totalBasePrice * multiplier * days;
    const totalPrice = packagePrice * adults + (packagePrice * children * 0.5);
    
    const packageDetails = `
        <div style="margin-bottom: 1rem;">
            <p><strong>Selected Destinations:</strong> ${selectedDestinations.map(d => destinationNames[d]).join(', ')}</p>
            <p><strong>Duration:</strong> ${days} Days, ${nights} Nights</p>
            <p><strong>Package Type:</strong> ${packageType.charAt(0).toUpperCase() + packageType.slice(1)}</p>
            <p><strong>Travelers:</strong> ${adults} Adults, ${children} Children</p>
        </div>
        <div style="border-top: 2px solid var(--primary-color); padding-top: 1rem;">
            <p style="font-size: 1.5rem; font-weight: bold; color: var(--primary-color);">
                Estimated Price: ₹${Math.round(totalPrice).toLocaleString()}
            </p>
            <p style="font-size: 0.9rem; color: var(--text-color); margin-top: 0.5rem;">
                * Final price may vary. Our team will confirm the exact amount.
            </p>
        </div>
    `;
    
    document.getElementById('packageDetails').innerHTML = packageDetails;
}

// Add custom package to booking
function addCustomPackageToBooking() {
    const selectedDestinations = Array.from(document.querySelectorAll('#destinationCheckboxes input[type="checkbox"]:checked'))
        .map(cb => cb.value);
    
    if (selectedDestinations.length === 0) {
        alert('Please select at least one destination');
        return;
    }
    
    const days = document.getElementById('customDays')?.value || 1;
    const nights = document.getElementById('customNights')?.value || 0;
    const packageType = document.getElementById('customPackageType')?.value || 'basic';
    const adults = document.getElementById('customAdults')?.value || 1;
    const children = document.getElementById('customChildren')?.value || 0;
    
    // Store custom package data
    const customPackage = {
        destinations: selectedDestinations,
        days: days,
        nights: nights,
        packageType: packageType,
        adults: adults,
        children: children
    };
    
    localStorage.setItem('customPackage', JSON.stringify(customPackage));
    
    // Redirect to booking page
    window.location.href = 'booking.html?custom=true';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    displayTours();
    initializeCustomPackageBuilder();
    updateCustomPackage();
    
    // Auto-search on filter change
    const filterInputs = ['budgetFilter', 'daysFilter', 'nightsFilter', 'typeFilter', 'locationFilter'];
    filterInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', searchTours);
        }
    });
});

// Show detailed tour information in modal
function showTourDetails(tourId) {
    const tour = toursData.find(t => t.id === tourId);
    if (!tour) return;
    
    const destinationsHTML = tour.destinations.map(dest => 
        `<li>${destinationNames[dest] || dest}</li>`
    ).join('');
    
    const itineraryHTML = tour.itinerary ? tour.itinerary.map((item, index) => 
        `<li><strong>${item}</strong></li>`
    ).join('') : '<li>Detailed itinerary will be provided upon booking.</li>';
    
    const highlightsHTML = tour.highlights ? tour.highlights.map(highlight => 
        `<li><i class="fas fa-star"></i> ${highlight}</li>`
    ).join('') : '';
    
    const modalHTML = `
        <div class="tour-details-modal" id="tourDetailsModal">
            <div class="tour-details-content">
                <button class="close-tour-modal" onclick="closeTourDetails()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="tour-details-header">
                    <img src="${tour.image}" alt="${tour.name}" class="tour-details-image">
                    <div class="tour-details-title">
                        <h2>${tour.name}</h2>
                        <span class="tour-type-badge ${tour.type}">${tour.type}</span>
                        <div class="tour-details-meta">
                            <span><i class="fas fa-calendar-day"></i> ${tour.days} Days</span>
                            <span><i class="fas fa-moon"></i> ${tour.nights} Nights</span>
                            <span><i class="fas fa-rupee-sign"></i> ₹${tour.price.toLocaleString()} per person</span>
                        </div>
                    </div>
                </div>
                <div class="tour-details-body">
                    <div class="tour-details-section">
                        <h3><i class="fas fa-info-circle"></i> Overview</h3>
                        <p>${tour.detailedDescription || tour.description}</p>
                    </div>
                    <div class="tour-details-section">
                        <h3><i class="fas fa-map-marker-alt"></i> Destinations</h3>
                        <ul class="tour-destinations-list">${destinationsHTML}</ul>
                    </div>
                    ${tour.itinerary ? `
                    <div class="tour-details-section">
                        <h3><i class="fas fa-route"></i> Itinerary</h3>
                        <ol class="tour-itinerary-list">${itineraryHTML}</ol>
                    </div>
                    ` : ''}
                    ${tour.highlights ? `
                    <div class="tour-details-section">
                        <h3><i class="fas fa-star"></i> Highlights</h3>
                        <ul class="tour-highlights-list">${highlightsHTML}</ul>
                    </div>
                    ` : ''}
                    <div class="tour-details-section">
                        <h3><i class="fas fa-check-circle"></i> Includes</h3>
                        <ul class="tour-includes-list">
                            ${tour.includes.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('')}
                        </ul>
                    </div>
                    ${tour.bestTime ? `
                    <div class="tour-details-section">
                        <h3><i class="fas fa-calendar-alt"></i> Best Time to Visit</h3>
                        <p>${tour.bestTime}</p>
                    </div>
                    ` : ''}
                    ${tour.specialNotes ? `
                    <div class="tour-details-section">
                        <h3><i class="fas fa-exclamation-circle"></i> Special Notes</h3>
                        <p>${tour.specialNotes}</p>
                    </div>
                    ` : ''}
                </div>
                <div class="tour-details-footer">
                    <a href="booking.html?tour=${tour.id}" class="btn btn-primary btn-large">
                        <i class="fas fa-book"></i> Book This Tour
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('tourDetailsModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal with animation
    setTimeout(() => {
        const modal = document.getElementById('tourDetailsModal');
        if (modal) {
            modal.classList.add('active');
        }
    }, 10);
}

// Close tour details modal
function closeTourDetails() {
    const modal = document.getElementById('tourDetailsModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Close modal on outside click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('tourDetailsModal');
    if (modal && e.target === modal) {
        closeTourDetails();
    }
});

// Make functions globally available
window.searchTours = searchTours;
window.clearFilters = clearFilters;
window.updateCustomPackage = updateCustomPackage;
window.addCustomPackageToBooking = addCustomPackageToBooking;
window.showTourDetails = showTourDetails;
window.closeTourDetails = closeTourDetails;

