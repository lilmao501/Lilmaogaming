# Setup Guide - Lilmao Gaming Website

## Quick Start

1. **Clone or download the repository**
2. **Open `index.html` in your browser** to view the website
3. **Customize the content** as described below

## Configuration Steps

### 1. Update Social Media Links

Edit `js/script.js` and update the `socialConfig` object:

```javascript
const socialConfig = {
    youtube: 'https://youtube.com/@yourchannel',
    facebook: 'https://facebook.com/yourprofile',
    tiktok: 'https://tiktok.com/@yourprofile'
};
```

Or directly edit the URLs in `index.html`:

```html
<a href="https://youtube.com/@yourchannelhttps" target="_blank">...</a>
```

### 2. Set Up KHQR Donation Integration

#### Option A: Using QRCode.js Library (Recommended)

1. **Add QRCode library to `index.html`:**

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
```

2. **Update merchant ID in `js/script.js`:**

```javascript
class KHQRDonation {
    constructor() {
        this.merchantId = 'YOUR_MERCHANT_ID'; // Get from your KHQR provider
        // ...
    }
}
```

3. **Uncomment the QRCode generation code:**

In `js/script.js`, uncomment the QRCode generation section in `displayQRCode()` method.

#### Option B: Using KHQR API Service

If you have access to a KHQR API provider:

1. **Uncomment the API fetch function** in `js/script.js`
2. **Update the API endpoint and credentials**
3. **Configure your API key** (securely!)

### 3. KHQR Provider Setup

You'll need to register with a KHQR provider:

**Popular KHQR Providers in Cambodia:**
- **National Bank of Cambodia (NBC)** - Official KHQR spec
- **AEON Bank** - ABA application
- **Wing** - Wing money app
- **Sathapana Bank** - SME partnerships
- **Canadia Bank** - Merchant services

**Steps to register:**
1. Contact your bank or payment provider
2. Request merchant account setup
3. Get your Merchant ID
4. Request API access (if available)
5. Set up payment notification webhook

### 4. Customize Website Content

#### Hero Section
Edit `index.html`:
```html
<h2>Welcome to Lilmao Gaming</h2>
<p>Join my gaming journey and support the channel</p>
```

#### About Section
```html
<h2>About Me</h2>
<p>Hi! I'm Lilmao, a passionate gamer...</p>
```

#### Store Name
In `js/script.js`:
```javascript
this.storeName = 'Lilmao Gaming'; // Change as needed
```

### 5. Customize Styling

Edit `css/style.css` to change:
- **Colors**: Update CSS variables at the top
- **Fonts**: Modify font-family declarations
- **Spacing**: Adjust padding and margins
- **Responsive breakpoints**: Modify media queries

Example color customization:
```css
:root {
    --primary-color: #ff6b6b;      /* Change main color */
    --secondary-color: #4ecdc4;    /* Change accent color */
    --dark-bg: #1a1a1a;
    --light-bg: #f7f7f7;
    --text-dark: #333;
    --text-light: #666;
}
```

## Donation Features

### Preset Amounts
Currently configured amounts (in Cambodian Riel):
- 10,000៛
- 25,000៛
- 50,000៛
- 100,000៛

Change these in `index.html`:
```html
<button class="amount-btn" data-amount="10000">10,000៛</button>
```

### Payment Flow

1. User clicks amount button or enters custom amount
2. KHQR code is generated
3. User scans QR code with their bank app
4. Payment is processed
5. Confirmation message appears

## Adding Additional Features

### Email Notifications
Add email notifications when donations are received:

```javascript
async function notifyDonation(donationData) {
    const response = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(donationData)
    });
    return response.json();
}
```

### Donation History / Dashboard
Create a new page to track donations (requires backend):
- Store donation records in database
- Display monthly/yearly statistics
- Show recent donors

### Multi-Language Support
Add language selector for English/Khmer:

```javascript
const translations = {
    en: { 'hello': 'Hello' },
    km: { 'hello': 'សួស្តី' }
};
```

## Testing

### Test the Website Locally
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js http-server
npx http-server
```

Then visit: `http://localhost:8000`

### Test KHQR Generation
Use these merchant IDs for testing (if your provider supports it):
- Ask your KHQR provider for test credentials
- Test on staging environment first

## Deployment

### Deploy to GitHub Pages
1. Push your code to GitHub
2. Go to Settings → Pages
3. Select main branch as source
4. Your site will be available at: `https://lilmao501.github.io/Lilmaogaming/`

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Security Considerations

⚠️ **Important Security Notes:**

1. **Never expose API keys** in client-side code
2. **Use HTTPS only** for payment features
3. **Validate all inputs** on server-side
4. **Implement CORS** properly
5. **Use environment variables** for sensitive data
6. **Implement rate limiting** on payment endpoints
7. **Log transactions** securely

## Troubleshooting

### QR Code not displaying
- Check if QRCode.js library is loaded
- Check browser console for errors
- Verify merchant ID is correct

### Social links not working
- Check URLs are correct
- Ensure links start with `https://`
- Test in incognito/private mode

### Responsive design issues
- Clear browser cache
- Check CSS media queries
- Test on different devices

## Support & Resources

- **KHQR Documentation**: https://www.nbc.org.kh/en/
- **QRCode.js**: https://davidshimjs.github.io/qrcodejs/
- **HTML/CSS/JS Resources**: https://developer.mozilla.org/
- **GitHub Pages Help**: https://docs.github.com/en/pages

## Next Steps

1. ✅ Set up KHQR merchant account
2. ✅ Configure merchant ID
3. ✅ Update social media links
4. ✅ Customize colors and content
5. ✅ Test donation flow
6. ✅ Deploy to hosting platform
7. ✅ Share with your audience!

Good luck with your Lilmao Gaming website! 🎮
