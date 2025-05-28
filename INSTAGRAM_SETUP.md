# Instagram API Setup Guide

This guide will help you set up the Instagram Basic Display API to load real Instagram posts on your Penn Bioastronautics website.

## Prerequisites

- A Facebook Developer account
- An Instagram account (preferably the @upenn_bioastronautics account)
- Access to your website's hosting environment

## Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "Create App"
3. Choose "Consumer" as the app type
4. Fill in your app details:
   - App Name: "Penn Bioastronautics Website"
   - App Contact Email: Your email
   - App Purpose: "Yourself or your own business"

## Step 2: Add Instagram Basic Display

1. In your Facebook App dashboard, click "Add Product"
2. Find "Instagram Basic Display" and click "Set Up"
3. Click "Create New App" if prompted

## Step 3: Configure Instagram Basic Display

1. Go to Instagram Basic Display > Basic Display
2. Add your website URL to "Valid OAuth Redirect URIs":
   - For development: `http://localhost:3000/`
   - For production: `https://your-domain.com/`
3. Add Instagram Test Users (your Instagram account)

## Step 4: Generate Access Token

1. In Instagram Basic Display > Basic Display
2. Click "Generate Token" next to your test user
3. Log in to Instagram and authorize the app
4. Copy the generated access token

## Step 5: Configure Environment Variables

Create a `.env` file in your project root with:

```env
# Instagram Basic Display API Configuration
REACT_APP_INSTAGRAM_APP_ID=your_app_id_here
REACT_APP_INSTAGRAM_APP_SECRET=your_app_secret_here
REACT_APP_INSTAGRAM_ACCESS_TOKEN=your_access_token_here
```

**Important:** 
- Never commit the `.env` file to version control
- Add `.env` to your `.gitignore` file
- For production deployment, set these environment variables in your hosting platform

## Step 6: Test the Integration

1. Restart your development server: `npm start`
2. Navigate to the Updates section
3. You should see your real Instagram posts loading

## Troubleshooting

### Common Issues:

1. **"Instagram access token not configured"**
   - Make sure your `.env` file is in the project root
   - Restart your development server after adding environment variables

2. **"Instagram API error: 400"**
   - Check that your access token is valid
   - Ensure your Instagram account is added as a test user

3. **"Failed to load posts"**
   - The app will fallback to sample data if the API fails
   - Check the browser console for detailed error messages

### Access Token Expiration

Instagram access tokens expire after 60 days. To refresh:

1. Go to your Facebook App dashboard
2. Instagram Basic Display > Basic Display
3. Generate a new token for your test user

## Production Deployment

For production deployment:

1. Set environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Update the OAuth redirect URI to your production domain
3. Consider implementing automatic token refresh for long-term use

## Security Notes

- Keep your App Secret secure and never expose it in client-side code
- Use environment variables for all sensitive configuration
- Regularly rotate your access tokens
- Monitor your app's API usage in the Facebook Developer dashboard

## API Limits

Instagram Basic Display API has the following limits:
- 200 requests per hour per user
- 1000 requests per hour per app

The website caches posts and only fetches new data when users refresh, so these limits should be sufficient for normal usage. 