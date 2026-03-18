# Infini AI Setup Guide

## Overview
Infini AI is an intelligent travel assistant powered by Google Gemini AI that helps users explore Kutch destinations, get package recommendations, and answer questions about INFINITRIP services.

## Features
- ✅ Context-aware: Knows all destinations, pricing, and packages
- ✅ Package recommendations based on user preferences
- ✅ Real-time chat interface
- ✅ Mobile responsive
- ✅ Integrated with site design

## Setup Instructions

### Step 1: Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### Step 2: Add API Key to Code

1. Open `infini-ai.js` file
2. Find this line (around line 75):
   ```javascript
   this.apiKey = ''; // User needs to add their Gemini API key
   ```
3. Replace the empty string with your API key:
   ```javascript
   this.apiKey = 'YOUR_API_KEY_HERE';
   ```

### Step 3: Test the Integration

1. Open your website in a browser
2. Look for the blue robot icon button (bottom right, above WhatsApp button)
3. Click it to open Infini AI chat
4. Try asking: "What destinations do you offer?"

## API Usage

The Gemini API has a free tier with generous limits:
- **Free Tier**: 60 requests per minute
- **Pricing**: Free for most use cases
- **Rate Limits**: Check [Google AI Studio](https://ai.google.dev/pricing) for current limits

## What Infini AI Knows

Infini AI has complete context about:
- All 20+ destinations with pricing
- Package types (Basic, Standard, Premium, Luxury)
- Transportation options and pricing
- Accommodation options and pricing
- Best time to visit (October to March)
- Contact information
- Company description and services

## Example Questions Users Can Ask

- "What's the best destination for a budget trip?"
- "Recommend a package for 2 adults visiting Rann of Kutch"
- "What's included in the Premium Package?"
- "Tell me about Dholavira"
- "What's the price for a 3-day trip to Mandvi?"
- "What's the best time to visit Kutch?"

## Troubleshooting

### API Key Not Working
- Make sure you've copied the entire API key
- Check that there are no extra spaces
- Verify the API key is active in Google AI Studio

### Chat Not Opening
- Check browser console for errors (F12)
- Ensure `infini-ai.js` is loaded
- Verify all HTML elements are present

### No Response from AI
- Check your internet connection
- Verify API key is correct
- Check browser console for API errors
- Ensure you haven't exceeded rate limits

## Security Note

⚠️ **Important**: For production, never expose your API key in client-side code. Consider:
- Using a backend proxy server
- Implementing API key rotation
- Setting up rate limiting
- Using environment variables

For now, this is fine for development and testing.

## Support

If you need help:
- Check [Gemini API Documentation](https://ai.google.dev/docs)
- Visit [Google AI Studio](https://makersuite.google.com/)
- Contact: support@infinitrip.com




