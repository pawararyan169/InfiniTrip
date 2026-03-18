// Day-wise Itinerary Plans
const itineraryPlans = {
    // Single Destination - 1 Day Plans
    'rann': {
        1: [
            {
                time: '06:00 AM',
                activity: 'Departure from Bhuj',
                description: 'Early morning pickup from hotel/accommodation in Bhuj. Start your journey to the Great Rann of Kutch.'
            },
            {
                time: '08:00 AM',
                activity: 'Breakfast Stop',
                description: 'Enjoy traditional Gujarati breakfast at a local restaurant en route.'
            },
            {
                time: '10:00 AM',
                activity: 'Arrive at Rann of Kutch',
                description: 'Reach the white salt desert. Witness the mesmerizing white landscape stretching to the horizon.'
            },
            {
                time: '10:30 AM - 12:00 PM',
                activity: 'Desert Exploration',
                description: 'Walk on the salt desert, photography session, and experience the unique terrain.'
            },
            {
                time: '12:30 PM',
                activity: 'Lunch',
                description: 'Traditional Kutchi lunch at a local restaurant or tent accommodation.'
            },
            {
                time: '02:00 PM - 04:00 PM',
                activity: 'Cultural Activities',
                description: 'Visit local handicraft stalls, interact with local artisans, and shop for authentic Kutchi items.'
            },
            {
                time: '04:30 PM',
                activity: 'Sunset Preparation',
                description: 'Head to the best sunset viewing point in the Rann.'
            },
            {
                time: '05:30 PM - 06:30 PM',
                activity: 'Sunset Experience',
                description: 'Witness the spectacular sunset over the white desert - a truly magical experience.'
            },
            {
                time: '07:00 PM',
                activity: 'Return Journey',
                description: 'Begin return journey to Bhuj with beautiful memories.'
            },
            {
                time: '09:00 PM',
                activity: 'Arrival at Bhuj',
                description: 'Drop off at your accommodation. End of tour.'
            }
        ]
    },
    'mandvi': {
        1: [
            {
                time: '08:00 AM',
                activity: 'Departure from Bhuj',
                description: 'Morning pickup and drive to Mandvi Beach (approximately 1 hour).'
            },
            {
                time: '09:00 AM',
                activity: 'Arrive at Mandvi',
                description: 'Reach Mandvi and start your beach exploration.'
            },
            {
                time: '09:30 AM - 11:00 AM',
                activity: 'Vijay Vilas Palace Visit',
                description: 'Explore the magnificent Vijay Vilas Palace - a royal heritage with stunning architecture and beautiful gardens.'
            },
            {
                time: '11:30 AM',
                activity: 'Shipbuilding Yard Tour',
                description: 'Visit the traditional shipbuilding yards to see the ancient craft of wooden ship construction.'
            },
            {
                time: '12:30 PM',
                activity: 'Lunch',
                description: 'Enjoy fresh seafood and local Gujarati cuisine at a beachside restaurant.'
            },
            {
                time: '02:00 PM - 04:00 PM',
                activity: 'Beach Activities',
                description: 'Relax on the pristine beach, enjoy water sports, camel rides, or simply soak in the sun.'
            },
            {
                time: '04:30 PM',
                activity: 'Local Market Visit',
                description: 'Explore local markets for handicrafts, souvenirs, and traditional items.'
            },
            {
                time: '05:30 PM',
                activity: 'Sunset at Beach',
                description: 'Witness the beautiful sunset over the Arabian Sea.'
            },
            {
                time: '06:30 PM',
                activity: 'Return Journey',
                description: 'Begin return journey to Bhuj.'
            },
            {
                time: '07:30 PM',
                activity: 'Arrival at Bhuj',
                description: 'Drop off at your accommodation. End of tour.'
            }
        ]
    },
    'bhuj': {
        1: [
            {
                time: '09:00 AM',
                activity: 'Hotel Pickup',
                description: 'Start your cultural tour of Bhuj city.'
            },
            {
                time: '09:30 AM',
                activity: 'Aina Mahal (Palace of Mirrors)',
                description: 'Visit the stunning 18th-century palace known for its mirror work and intricate architecture.'
            },
            {
                time: '11:00 AM',
                activity: 'Prag Mahal',
                description: 'Explore the Italian Gothic architecture of Prag Mahal, built in the 19th century.'
            },
            {
                time: '12:00 PM',
                activity: 'Kutch Museum',
                description: 'Visit the oldest museum in Gujarat, housing artifacts, textiles, and historical items.'
            },
            {
                time: '01:00 PM',
                activity: 'Lunch',
                description: 'Enjoy traditional Kutchi lunch at a local restaurant.'
            },
            {
                time: '02:30 PM',
                activity: 'Hamirsar Lake',
                description: 'Relax by the scenic Hamirsar Lake, a beautiful water body in the heart of Bhuj.'
            },
            {
                time: '03:30 PM',
                activity: 'Handicraft Markets',
                description: 'Explore local handicraft markets and workshops - famous for Bandhani, embroidery, and metalwork.'
            },
            {
                time: '05:00 PM',
                activity: 'Swaminarayan Temple',
                description: 'Visit the beautiful Swaminarayan Temple for spiritual experience.'
            },
            {
                time: '06:00 PM',
                activity: 'Local Shopping',
                description: 'Shop for authentic Kutchi handicrafts, textiles, and souvenirs.'
            },
            {
                time: '07:00 PM',
                activity: 'Return to Hotel',
                description: 'End of tour. Drop off at your accommodation.'
            }
        ]
    },
    'dholavira': {
        1: [
            {
                time: '05:00 AM',
                activity: 'Early Departure from Bhuj',
                description: 'Early morning pickup for the long journey to Dholavira (approximately 4-5 hours).'
            },
            {
                time: '07:00 AM',
                activity: 'Breakfast Break',
                description: 'Breakfast stop at a local restaurant en route.'
            },
            {
                time: '10:30 AM',
                activity: 'Arrive at Dholavira',
                description: 'Reach the UNESCO World Heritage Site - Dholavira.'
            },
            {
                time: '11:00 AM - 01:00 PM',
                activity: 'Archaeological Site Exploration',
                description: 'Guided tour of the ancient Harappan city ruins, including the citadel, middle town, and lower town.'
            },
            {
                time: '01:30 PM',
                activity: 'Lunch',
                description: 'Lunch at a local restaurant near the site.'
            },
            {
                time: '02:30 PM',
                activity: 'Archaeological Museum',
                description: 'Visit the on-site museum to see artifacts, pottery, and learn about the Indus Valley Civilization.'
            },
            {
                time: '03:30 PM',
                activity: 'Water Management Systems',
                description: 'Explore the sophisticated water management systems - one of the highlights of Dholavira.'
            },
            {
                time: '04:30 PM',
                activity: 'Fossil Park (Optional)',
                description: 'Visit the nearby fossil park if time permits.'
            },
            {
                time: '05:00 PM',
                activity: 'Return Journey',
                description: 'Begin return journey to Bhuj.'
            },
            {
                time: '09:30 PM',
                activity: 'Arrival at Bhuj',
                description: 'Drop off at your accommodation. End of tour.'
            }
        ]
    },
    
    // Multi-Day Packages
    'kutch-explorer-3d': {
        3: [
            {
                day: 1,
                title: 'Day 1: Bhuj City Tour',
                activities: [
                    { time: '09:00 AM', activity: 'Hotel Check-in & Welcome', description: 'Arrive in Bhuj, check into hotel, and meet your guide.' },
                    { time: '10:00 AM', activity: 'Aina Mahal & Prag Mahal', description: 'Visit the historic palaces showcasing royal architecture.' },
                    { time: '12:00 PM', activity: 'Kutch Museum', description: 'Explore the oldest museum in Gujarat.' },
                    { time: '01:00 PM', activity: 'Lunch', description: 'Traditional Kutchi lunch.' },
                    { time: '02:30 PM', activity: 'Handicraft Markets', description: 'Shop for authentic Kutchi handicrafts.' },
                    { time: '05:00 PM', activity: 'Hamirsar Lake', description: 'Evening stroll by the lake.' },
                    { time: '07:00 PM', activity: 'Dinner & Rest', description: 'Return to hotel for dinner and rest.' }
                ]
            },
            {
                day: 2,
                title: 'Day 2: Rann of Kutch Experience',
                activities: [
                    { time: '06:00 AM', activity: 'Early Departure', description: 'Start journey to Great Rann of Kutch.' },
                    { time: '08:00 AM', activity: 'Breakfast En Route', description: 'Breakfast at local restaurant.' },
                    { time: '10:00 AM', activity: 'Rann Exploration', description: 'Explore the white salt desert, photography, and cultural activities.' },
                    { time: '12:30 PM', activity: 'Lunch', description: 'Traditional lunch at Rann.' },
                    { time: '02:00 PM', activity: 'Cultural Activities', description: 'Handicraft stalls, local interactions, and shopping.' },
                    { time: '05:30 PM', activity: 'Sunset Experience', description: 'Witness spectacular sunset over white desert.' },
                    { time: '07:00 PM', activity: 'Return to Bhuj', description: 'Drive back to Bhuj.' },
                    { time: '09:00 PM', activity: 'Dinner & Rest', description: 'Hotel dinner and rest.' }
                ]
            },
            {
                day: 3,
                title: 'Day 3: Mandvi Beach & Departure',
                activities: [
                    { time: '08:00 AM', activity: 'Check-out & Departure', description: 'Check out from hotel and drive to Mandvi.' },
                    { time: '09:00 AM', activity: 'Vijay Vilas Palace', description: 'Visit the royal palace with beautiful architecture.' },
                    { time: '11:00 AM', activity: 'Shipbuilding Yard', description: 'See traditional wooden ship construction.' },
                    { time: '12:30 PM', activity: 'Lunch', description: 'Beachside seafood lunch.' },
                    { time: '02:00 PM', activity: 'Beach Activities', description: 'Relax on beach, water sports, or camel rides.' },
                    { time: '04:00 PM', activity: 'Local Market', description: 'Final shopping for souvenirs.' },
                    { time: '05:30 PM', activity: 'Sunset & Departure', description: 'Sunset viewing and departure for home.' }
                ]
            }
        ]
    },
    
    'kutch-heritage-5d': {
        5: [
            {
                day: 1,
                title: 'Day 1: Arrival & Bhuj City Tour',
                activities: [
                    { time: '09:00 AM', activity: 'Arrival & Check-in', description: 'Arrive in Bhuj, hotel check-in, and welcome briefing.' },
                    { time: '10:30 AM', activity: 'Aina Mahal', description: 'Palace of Mirrors - 18th-century royal palace.' },
                    { time: '12:00 PM', activity: 'Prag Mahal', description: 'Italian Gothic architecture palace.' },
                    { time: '01:00 PM', activity: 'Lunch', description: 'Traditional Kutchi cuisine.' },
                    { time: '02:30 PM', activity: 'Kutch Museum', description: 'Oldest museum in Gujarat with rich collections.' },
                    { time: '04:00 PM', activity: 'Handicraft Workshops', description: 'Visit local artisans and workshops.' },
                    { time: '06:00 PM', activity: 'Hamirsar Lake', description: 'Evening walk by the scenic lake.' },
                    { time: '08:00 PM', activity: 'Dinner', description: 'Hotel dinner and rest.' }
                ]
            },
            {
                day: 2,
                title: 'Day 2: Rann of Kutch Full Day',
                activities: [
                    { time: '06:00 AM', activity: 'Early Departure', description: 'Journey to Great Rann of Kutch.' },
                    { time: '08:00 AM', activity: 'Breakfast Stop', description: 'Breakfast en route.' },
                    { time: '10:00 AM', activity: 'Rann Arrival', description: 'Reach the white salt desert.' },
                    { time: '10:30 AM - 12:00 PM', activity: 'Desert Exploration', description: 'Walk, photography, and experience the unique landscape.' },
                    { time: '12:30 PM', activity: 'Lunch', description: 'Traditional lunch at Rann.' },
                    { time: '02:00 PM', activity: 'Cultural Immersion', description: 'Local handicrafts, traditional performances, and interactions.' },
                    { time: '04:30 PM', activity: 'Sunset Point', description: 'Head to best sunset viewing location.' },
                    { time: '05:30 PM', activity: 'Sunset Experience', description: 'Magical sunset over white desert.' },
                    { time: '07:00 PM', activity: 'Return Journey', description: 'Drive back to Bhuj.' },
                    { time: '09:00 PM', activity: 'Dinner & Rest', description: 'Hotel dinner and rest.' }
                ]
            },
            {
                day: 3,
                title: 'Day 3: Dholavira UNESCO Site',
                activities: [
                    { time: '05:00 AM', activity: 'Early Departure', description: 'Long journey to Dholavira (4-5 hours).' },
                    { time: '07:00 AM', activity: 'Breakfast Break', description: 'Breakfast stop en route.' },
                    { time: '10:30 AM', activity: 'Dholavira Arrival', description: 'Reach UNESCO World Heritage Site.' },
                    { time: '11:00 AM - 01:00 PM', activity: 'Archaeological Tour', description: 'Guided exploration of ancient Harappan city ruins.' },
                    { time: '01:30 PM', activity: 'Lunch', description: 'Lunch near the site.' },
                    { time: '02:30 PM', activity: 'Museum Visit', description: 'Archaeological museum with artifacts.' },
                    { time: '03:30 PM', activity: 'Water Systems', description: 'Explore sophisticated water management systems.' },
                    { time: '05:00 PM', activity: 'Return Journey', description: 'Drive back to Bhuj.' },
                    { time: '09:30 PM', activity: 'Dinner & Rest', description: 'Late dinner and rest at hotel.' }
                ]
            },
            {
                day: 4,
                title: 'Day 4: Mandvi Beach & Kala Dungar',
                activities: [
                    { time: '08:00 AM', activity: 'Departure to Mandvi', description: 'Drive to Mandvi Beach (1 hour).' },
                    { time: '09:00 AM', activity: 'Vijay Vilas Palace', description: 'Explore the royal palace and gardens.' },
                    { time: '11:00 AM', activity: 'Shipbuilding Yard', description: 'Traditional wooden ship construction.' },
                    { time: '12:30 PM', activity: 'Lunch', description: 'Beachside seafood lunch.' },
                    { time: '02:00 PM', activity: 'Beach Activities', description: 'Relax, water sports, or camel rides.' },
                    { time: '03:30 PM', activity: 'Journey to Kala Dungar', description: 'Drive to highest point in Kutch.' },
                    { time: '05:00 PM', activity: 'Kala Dungar Visit', description: 'Visit Dattatreya Temple and enjoy panoramic views.' },
                    { time: '06:00 PM', activity: 'Sunset at Kala Dungar', description: 'Spectacular sunset views over Rann.' },
                    { time: '07:30 PM', activity: 'Return to Bhuj', description: 'Drive back to Bhuj.' },
                    { time: '09:00 PM', activity: 'Dinner', description: 'Hotel dinner and rest.' }
                ]
            },
            {
                day: 5,
                title: 'Day 5: Lakhpat Fort & Departure',
                activities: [
                    { time: '08:00 AM', activity: 'Check-out & Departure', description: 'Check out and drive to Lakhpat Fort.' },
                    { time: '10:00 AM', activity: 'Lakhpat Fort Exploration', description: 'Visit the historic fort near India-Pakistan border.' },
                    { time: '12:00 PM', activity: 'Lunch', description: 'Lunch at local restaurant.' },
                    { time: '01:30 PM', activity: 'Final Shopping', description: 'Last-minute souvenir shopping in Bhuj.' },
                    { time: '03:00 PM', activity: 'Departure', description: 'Transfer to airport/railway station for departure.' }
                ]
            }
        ]
    },
    
    'kutch-complete-7d': {
        7: [
            {
                day: 1,
                title: 'Day 1: Arrival & Bhuj Orientation',
                activities: [
                    { time: '09:00 AM', activity: 'Arrival & Check-in', description: 'Arrive in Bhuj, hotel check-in, and welcome meeting.' },
                    { time: '10:30 AM', activity: 'City Orientation', description: 'Brief tour of Bhuj city center.' },
                    { time: '12:00 PM', activity: 'Aina Mahal', description: 'Palace of Mirrors visit.' },
                    { time: '01:00 PM', activity: 'Lunch', description: 'Traditional lunch.' },
                    { time: '02:30 PM', activity: 'Prag Mahal', description: 'Italian Gothic palace exploration.' },
                    { time: '04:00 PM', activity: 'Kutch Museum', description: 'Museum visit with guided tour.' },
                    { time: '06:00 PM', activity: 'Hamirsar Lake', description: 'Evening relaxation by the lake.' },
                    { time: '08:00 PM', activity: 'Dinner', description: 'Welcome dinner at hotel.' }
                ]
            },
            {
                day: 2,
                title: 'Day 2: Rann of Kutch Full Experience',
                activities: [
                    { time: '06:00 AM', activity: 'Early Departure', description: 'Journey to Great Rann of Kutch.' },
                    { time: '08:00 AM', activity: 'Breakfast', description: 'Breakfast en route.' },
                    { time: '10:00 AM', activity: 'Rann Arrival', description: 'Reach white salt desert.' },
                    { time: '10:30 AM - 12:00 PM', activity: 'Desert Activities', description: 'Exploration, photography, and cultural interactions.' },
                    { time: '12:30 PM', activity: 'Lunch', description: 'Traditional Rann lunch.' },
                    { time: '02:00 PM', activity: 'Cultural Immersion', description: 'Handicrafts, performances, and local experiences.' },
                    { time: '05:30 PM', activity: 'Sunset', description: 'Magical sunset over white desert.' },
                    { time: '07:00 PM', activity: 'Return', description: 'Drive back to Bhuj.' },
                    { time: '09:00 PM', activity: 'Dinner', description: 'Hotel dinner and rest.' }
                ]
            },
            {
                day: 3,
                title: 'Day 3: Dholavira UNESCO Heritage',
                activities: [
                    { time: '05:00 AM', activity: 'Early Start', description: 'Long journey to Dholavira.' },
                    { time: '07:00 AM', activity: 'Breakfast', description: 'Breakfast break.' },
                    { time: '10:30 AM', activity: 'Dholavira Site', description: 'UNESCO World Heritage Site arrival.' },
                    { time: '11:00 AM - 01:00 PM', activity: 'Archaeological Tour', description: 'Comprehensive guided tour of ruins.' },
                    { time: '01:30 PM', activity: 'Lunch', description: 'Lunch near site.' },
                    { time: '02:30 PM', activity: 'Museum & Water Systems', description: 'Museum visit and water management exploration.' },
                    { time: '05:00 PM', activity: 'Return', description: 'Journey back to Bhuj.' },
                    { time: '09:30 PM', activity: 'Dinner', description: 'Late dinner and rest.' }
                ]
            },
            {
                day: 4,
                title: 'Day 4: Mandvi Beach & Coastal Heritage',
                activities: [
                    { time: '08:00 AM', activity: 'Mandvi Journey', description: 'Drive to Mandvi Beach.' },
                    { time: '09:00 AM', activity: 'Vijay Vilas Palace', description: 'Royal palace exploration.' },
                    { time: '11:00 AM', activity: 'Shipbuilding Yard', description: 'Traditional ship construction tour.' },
                    { time: '12:30 PM', activity: 'Lunch', description: 'Beachside seafood lunch.' },
                    { time: '02:00 PM', activity: 'Beach Activities', description: 'Relaxation, water sports, camel rides.' },
                    { time: '04:00 PM', activity: 'Local Markets', description: 'Shopping for coastal handicrafts.' },
                    { time: '05:30 PM', activity: 'Sunset', description: 'Beach sunset experience.' },
                    { time: '07:00 PM', activity: 'Return', description: 'Drive back to Bhuj.' },
                    { time: '08:30 PM', activity: 'Dinner', description: 'Hotel dinner.' }
                ]
            },
            {
                day: 5,
                title: 'Day 5: Kala Dungar & Wildlife',
                activities: [
                    { time: '08:00 AM', activity: 'Wildlife Sanctuary', description: 'Visit Kutch Desert Wildlife Sanctuary.' },
                    { time: '10:00 AM', activity: 'Bird Watching', description: 'Migratory bird spotting and photography.' },
                    { time: '12:00 PM', activity: 'Lunch', description: 'Lunch at sanctuary or nearby.' },
                    { time: '02:00 PM', activity: 'Kala Dungar Journey', description: 'Drive to highest point in Kutch.' },
                    { time: '04:00 PM', activity: 'Dattatreya Temple', description: 'Visit 400-year-old temple.' },
                    { time: '05:00 PM', activity: 'Panoramic Views', description: 'Enjoy breathtaking views of Rann.' },
                    { time: '06:00 PM', activity: 'Sunset', description: 'Spectacular sunset from Kala Dungar.' },
                    { time: '07:30 PM', activity: 'Return', description: 'Drive back to Bhuj.' },
                    { time: '09:00 PM', activity: 'Dinner', description: 'Hotel dinner and rest.' }
                ]
            },
            {
                day: 6,
                title: 'Day 6: Lakhpat Fort & Border Areas',
                activities: [
                    { time: '08:00 AM', activity: 'Lakhpat Journey', description: 'Drive to Lakhpat Fort near border.' },
                    { time: '10:00 AM', activity: 'Fort Exploration', description: 'Historic fort walls and architecture.' },
                    { time: '11:30 AM', activity: 'Gurudwara Visit', description: 'Religious site with historical significance.' },
                    { time: '12:30 PM', activity: 'Lunch', description: 'Lunch at local restaurant.' },
                    { time: '02:00 PM', activity: 'Border Views', description: 'View border areas (from safe distance).' },
                    { time: '03:30 PM', activity: 'Narayan Sarovar', description: 'Visit sacred lake and temple complex.' },
                    { time: '05:00 PM', activity: 'Koteshwar Temple', description: 'Ancient temple visit.' },
                    { time: '06:30 PM', activity: 'Return', description: 'Journey back to Bhuj.' },
                    { time: '09:00 PM', activity: 'Dinner', description: 'Hotel dinner.' }
                ]
            },
            {
                day: 7,
                title: 'Day 7: Final Shopping & Departure',
                activities: [
                    { time: '09:00 AM', activity: 'Handicraft Markets', description: 'Final shopping for authentic Kutchi items.' },
                    { time: '11:00 AM', activity: 'Workshop Visits', description: 'Visit artisan workshops for last-minute purchases.' },
                    { time: '12:30 PM', activity: 'Lunch', description: 'Farewell lunch.' },
                    { time: '02:00 PM', activity: 'Hotel Check-out', description: 'Check out from hotel.' },
                    { time: '03:00 PM', activity: 'Departure', description: 'Transfer to airport/railway station for departure.' }
                ]
            }
        ]
    }
};

// Function to get itinerary based on destination and duration
function getItinerary(destination, days = 1) {
    // Check for multi-day packages first
    if (days > 1) {
        const packageKey = `${destination}-${days}d`;
        if (itineraryPlans[packageKey]) {
            return itineraryPlans[packageKey][days];
        }
        
        // Generate custom multi-day itinerary
        return generateCustomItinerary(destination, days);
    }
    
    // Single day itinerary
    if (itineraryPlans[destination] && itineraryPlans[destination][1]) {
        return itineraryPlans[destination][1];
    }
    
    return null;
}

// Generate custom multi-day itinerary
function generateCustomItinerary(destination, days) {
    const baseItinerary = itineraryPlans[destination] ? itineraryPlans[destination][1] : null;
    if (!baseItinerary) return null;
    
    const customPlan = [];
    const activitiesPerDay = Math.ceil(baseItinerary.length / days);
    
    for (let day = 1; day <= days; day++) {
        const dayActivities = [];
        const startIdx = (day - 1) * activitiesPerDay;
        const endIdx = Math.min(startIdx + activitiesPerDay, baseItinerary.length);
        
        for (let i = startIdx; i < endIdx; i++) {
            if (baseItinerary[i]) {
                dayActivities.push(baseItinerary[i]);
            }
        }
        
        if (dayActivities.length > 0) {
            customPlan.push({
                day: day,
                title: `Day ${day}: ${getDestinationName(destination)}`,
                activities: dayActivities
            });
        }
    }
    
    return customPlan;
}

// Get destination display name
function getDestinationName(destination) {
    const names = {
        'rann': 'Rann of Kutch',
        'mandvi': 'Mandvi Beach',
        'bhuj': 'Bhuj City',
        'dholavira': 'Dholavira',
        'kala-dungar': 'Kala Dungar',
        'lakhpat': 'Lakhpat Fort',
        'wildlife': 'Wildlife Sanctuary'
    };
    return names[destination] || destination;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { itineraryPlans, getItinerary, generateCustomItinerary };
}




