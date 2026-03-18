// Infini AI - Gemini AI Integration for INFINITRIP

// Site Context - All information about INFINITRIP
const siteContext = {
    company: "INFINITRIP",
    description: "INFINITRIP is a travel agency specializing in tours to Kutch district of Gujarat, India. We offer comprehensive travel packages to explore the rich culture, stunning landscapes, and historical significance of Kutch.",
    
    destinations: {
        'Rann of Kutch': {
            price: 2500,
            description: 'The Great White Desert - A mesmerizing salt marsh in the Thar Desert. Best time: October to March, especially during full moon nights.',
            highlights: ['White salt desert', 'Rann Utsav festival (Nov-Feb)', 'Full moon night experiences', 'Traditional Kutchi culture']
        },
        'Dholavira': {
            price: 3000,
            description: 'UNESCO World Heritage Site - Ancient Harappan civilization ruins dating back over 4500 years.',
            highlights: ['UNESCO World Heritage Site', 'Ancient Harappan ruins', 'Water management systems', 'Archaeological museum']
        },
        'Mandvi Beach': {
            price: 1500,
            description: 'Pristine beaches with historic shipbuilding yards and Vijay Vilas Palace.',
            highlights: ['Pristine sandy beaches', 'Vijay Vilas Palace', 'Shipbuilding yards', 'Water sports']
        },
        'Bhuj': {
            price: 2000,
            description: 'Historic city with ancient palaces, museums, and vibrant culture.',
            highlights: ['Aina Mahal', 'Prag Mahal', 'Kutch Museum', 'Handicraft markets']
        },
        'Dhordo': {
            price: 2000,
            description: 'Gateway to Rann of Kutch and main venue for Rann Utsav festival.',
            highlights: ['Rann Utsav venue', 'Traditional Kutchi village', 'Handicraft markets', 'Desert tents']
        },
        'Road to Heaven': {
            price: 2200,
            description: 'Spectacular elevated road across the white salt desert.',
            highlights: ['Iconic elevated road', 'Sunset views', 'Photography paradise']
        },
        'Kala Dungar': {
            price: 1800,
            description: 'Highest point in Kutch with panoramic views of the Great Rann.',
            highlights: ['Highest point (462m)', 'Dattatreya Temple', 'Panoramic views', 'Sunset views']
        },
        'Vijay Vilas Palace': {
            price: 1500,
            description: 'Magnificent royal palace with beautiful Rajput architecture.',
            highlights: ['Royal palace', 'Bollywood film location', 'Sea views']
        },
        'Aina Mahel': {
            price: 1000,
            description: 'Palace of Mirrors - 18th-century palace with intricate mirror work.',
            highlights: ['Intricate mirror work', 'European architecture', 'Historical significance']
        },
        'Kutch Museum': {
            price: 800,
            description: 'Oldest museum in Gujarat showcasing rich history and culture.',
            highlights: ['Oldest museum in Gujarat', 'Artifacts collection', 'Kutchi textiles']
        },
        'Lakhpat Fort': {
            price: 2200,
            description: 'Historic fortified town near India-Pakistan border.',
            highlights: ['Historic fort', 'Gurudwara', 'Border views']
        },
        'Narayan Sarovar': {
            price: 1800,
            description: 'One of the five holy lakes of India - significant pilgrimage site.',
            highlights: ['Holy lake', 'Ancient temples', 'Spiritual site']
        },
        'Koteshwar': {
            price: 1500,
            description: 'Coastal town with ancient Shiva temple.',
            highlights: ['Koteshwar Mahadev Temple', 'Coastal location', 'Religious significance']
        },
        'Matana Madh': {
            price: 1200,
            description: 'Significant religious site in Kutch.',
            highlights: ['Sacred site', 'Temple architecture', 'Spiritual atmosphere']
        },
        'Tapkeshwari Temple': {
            price: 1000,
            description: 'Ancient cave temple dedicated to Goddess Tapkeshwari.',
            highlights: ['Cave temple', 'Hill-carved architecture', 'Religious significance']
        },
        'Pingleshwar': {
            price: 1400,
            description: 'Beautiful beach destination with pristine coastline.',
            highlights: ['Pristine beach', 'Peaceful atmosphere', 'Sunset views']
        },
        'Kutch Desert Wildlife Sanctuary': {
            price: 2500,
            description: 'Paradise for bird watchers and nature enthusiasts.',
            highlights: ['Desert wildlife', 'Migratory birds', 'Flamingo colonies']
        },
        'Kadiyadhro': {
            price: 1800,
            description: 'Natural attraction with unique geological formations.',
            highlights: ['Geological formations', 'Natural beauty', 'Photography']
        },
        'Smrutivan': {
            price: 1200,
            description: 'Memorial park dedicated to 2001 Kutch earthquake victims.',
            highlights: ['Memorial park', 'Historical significance', 'Educational']
        },
        'Vande Mataram Memorial': {
            price: 1000,
            description: 'Monument dedicated to patriotism and freedom struggle.',
            highlights: ['Patriotic memorial', 'Historical significance', 'National importance']
        }
    },
    
    packages: {
        'Basic Package': {
            multiplier: 1.0,
            includes: 'Transport + Guide',
            description: 'Essential package with transportation and expert guide'
        },
        'Standard Package': {
            multiplier: 1.5,
            includes: 'Transport + Guide + Meals',
            description: 'Includes meals along with transport and guide'
        },
        'Premium Package': {
            multiplier: 2.0,
            includes: 'Transport + Guide + Meals + Hotel',
            description: 'Complete package with accommodation included'
        },
        'Luxury Package': {
            multiplier: 3.0,
            includes: 'All Inclusive + Premium Hotels',
            description: 'Luxury experience with premium accommodations'
        }
    },
    
    transportation: {
        'AC Bus': 500,
        'Private Car': 2000,
        'SUV': 3000,
        'Tempo Traveller': 4000,
        'Self Drive': 0
    },
    
    accommodation: {
        'Desert Tent': 1500,
        'Budget Hotel': 1000,
        'Standard Hotel': 2000,
        'Premium Hotel': 3500,
        'Resort': 5000
    },
    
    contact: {
        phone: ['+91 95124 95229', '+91 79900 63442'],
        email: ['info@infinitrip.com', 'support@infinitrip.com'],
        address: '123 Travel Street, Bhuj, Kutch, Gujarat, India - 370001'
    },
    
    bestTime: 'October to March (winter season)',
    services: ['Group Tours', 'Custom Packages', 'Hotel Booking', 'Transportation', 'Expert Guides', '24/7 Support']
};

// System Prompt for Gemini AI
function getSystemPrompt() {
    return `You are Infini AI, an intelligent travel assistant for INFINITRIP, a travel agency specializing in Kutch district tours in Gujarat, India.

Your role is to help users:
1. Understand destinations and their features
2. Recommend suitable travel packages based on their preferences
3. Provide pricing information
4. Suggest itineraries
5. Answer questions about Kutch tourism

IMPORTANT CONTEXT ABOUT INFINITRIP:
- Company: ${siteContext.company}
- Description: ${siteContext.description}
- Best time to visit: ${siteContext.bestTime}
- Contact: ${siteContext.contact.phone.join(' or ')}

DESTINATIONS AND PRICING:
${Object.entries(siteContext.destinations).map(([name, info]) => 
    `- ${name}: Starting from ₹${info.price}. ${info.description} Highlights: ${info.highlights.join(', ')}`
).join('\n')}

PACKAGE TYPES:
${Object.entries(siteContext.packages).map(([name, info]) => 
    `- ${name}: ${info.description} (${info.includes})`
).join('\n')}

TRANSPORTATION OPTIONS:
${Object.entries(siteContext.transportation).map(([name, price]) => 
    `- ${name}: ₹${price} per person`
).join('\n')}

ACCOMMODATION OPTIONS:
${Object.entries(siteContext.accommodation).map(([name, price]) => 
    `- ${name}: ₹${price} per night`
).join('\n')}

GUIDELINES:
- Always be friendly, helpful, and professional
- Provide accurate pricing from the context above
- Recommend destinations based on user preferences (budget, interests, duration)
- Suggest complete packages with transportation and accommodation
- Mention best time to visit (October to March)
- Encourage users to book through the website
- If asked about something not in context, politely say you can help with Kutch travel information

Always respond in a conversational, helpful manner.`;
}

// Gemini AI API Integration
class InfiniAI {
    constructor() {
        this.apiKey = ''; // User needs to add their Gemini API key
        this.apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
        this.conversationHistory = [];
        this.isOpen = false;
    }

    async sendMessage(userMessage) {
        if (!this.apiKey) {
            return {
                text: "Please configure your Gemini API key. Add your API key in the infini-ai.js file. You can get a free API key from https://makersuite.google.com/app/apikey",
                error: true
            };
        }

        try {
            // Add user message to history
            this.conversationHistory.push({
                role: 'user',
                parts: [{ text: userMessage }]
            });

            // Prepare the prompt with system context
            const systemPrompt = getSystemPrompt();
            const fullPrompt = `${systemPrompt}\n\nConversation History:\n${this.conversationHistory.slice(-5).map(msg => 
                `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.parts[0].text}`
            ).join('\n')}\n\nUser: ${userMessage}\nAssistant:`;

            const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: fullPrompt }]
                    }]
                })
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();
            const aiResponse = data.candidates[0].content.parts[0].text;

            // Add AI response to history
            this.conversationHistory.push({
                role: 'model',
                parts: [{ text: aiResponse }]
            });

            return { text: aiResponse, error: false };
        } catch (error) {
            console.error('Infini AI Error:', error);
            return {
                text: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact us directly at +91 95124 95229.",
                error: true
            };
        }
    }

    clearHistory() {
        this.conversationHistory = [];
    }
}

// Initialize Infini AI
const infiniAI = new InfiniAI();

// Chat UI Functions
function toggleChat() {
    const chatContainer = document.getElementById('infiniAIChat');
    const chatButton = document.getElementById('infiniAIButton');
    
    if (chatContainer && chatButton) {
        infiniAI.isOpen = !infiniAI.isOpen;
        
        if (infiniAI.isOpen) {
            chatContainer.classList.add('active');
            chatButton.classList.add('active');
            document.getElementById('chatInput').focus();
        } else {
            chatContainer.classList.remove('active');
            chatButton.classList.remove('active');
        }
    }
}

function addMessageToChat(text, isUser = false) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user-message' : 'ai-message'}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = text;
    
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addMessageToChat(message, true);
    input.value = '';
    
    // Show typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chat-message ai-message typing';
    typingIndicator.innerHTML = '<div class="message-content">Infini AI is typing...</div>';
    document.getElementById('chatMessages').appendChild(typingIndicator);
    document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
    
    // Get AI response
    const response = await infiniAI.sendMessage(message);
    
    // Remove typing indicator
    typingIndicator.remove();
    
    // Add AI response
    addMessageToChat(response.text, false);
}

// Initialize chat on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add welcome message
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        addMessageToChat("Hello! I'm Infini AI, your travel assistant for INFINITRIP. I can help you explore Kutch destinations, recommend packages, and answer questions about our tours. How can I assist you today?", false);
    }
    
    // Enter key to send message
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
    
    // Close button
    const closeChat = document.getElementById('closeChat');
    if (closeChat) {
        closeChat.addEventListener('click', toggleChat);
    }
    
    // Chat button
    const chatButton = document.getElementById('infiniAIButton');
    if (chatButton) {
        chatButton.addEventListener('click', toggleChat);
    }
});

// Make functions globally available
window.toggleChat = toggleChat;
window.sendChatMessage = sendChatMessage;




