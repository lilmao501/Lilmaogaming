// ============================================
// KHQR Donation Integration
// ============================================

/**
 * Generate KHQR QR Code
 * KHQR is a Cambodian payment QR code standard
 * 
 * Reference: https://www.nbc.org.kh/en/
 * 
 * For this implementation, you'll need:
 * 1. A KHQR account with your merchant ID
 * 2. API access to generate QR codes
 * 3. Payment verification webhook
 */

class KHQRDonation {
    constructor() {
        this.merchantId = 'YOUR_MERCHANT_ID'; // Replace with your merchant ID
        this.storeName = 'Lilmao Gaming';
        this.selectedAmount = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Amount button listeners
        const amountButtons = document.querySelectorAll('.amount-btn');
        amountButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAmountClick(e));
        });

        // Custom amount button
        const generateBtn = document.getElementById('generate-khqr-btn');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => this.handleCustomAmount());
        }
    }

    handleAmountClick(e) {
        const amount = e.target.dataset.amount;
        this.selectedAmount = amount;

        // Update active button
        document.querySelectorAll('.amount-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        // Generate KHQR for selected amount
        this.generateKHQR(amount);
    }

    handleCustomAmount() {
        const input = document.getElementById('custom-amount');
        const amount = input.value;

        if (!amount || amount < 1000) {
            this.showMessage('Please enter an amount of at least 1,000៛', 'error');
            return;
        }

        this.selectedAmount = amount;
        this.generateKHQR(amount);
    }

    generateKHQR(amount) {
        /**
         * KHQR Data Structure
         * This is a simplified version. For production, you should:
         * 1. Use the official KHQR library or API
         * 2. Generate proper KHQR format with checksum
         * 3. Implement payment verification
         * 
         * KHQR Structure (EMVCo Standard):
         * - Merchant Name
         * - Merchant ID
         * - Amount
         * - Currency Code (116 for KHR)
         * - Transaction Reference
         */

        const khqrData = {
            amount: parseInt(amount),
            currency: 'KHR',
            merchantId: this.merchantId,
            merchantName: this.storeName,
            transactionId: this.generateTransactionId(),
            timestamp: new Date().toISOString()
        };

        // For demonstration, show KHQR data
        console.log('KHQR Data:', khqrData);

        // Option 1: Use a QR code library (recommended)
        this.displayQRCode(khqrData);

        // Option 2: Use an API to generate KHQR
        // this.fetchKHQRFromAPI(khqrData);
    }

    displayQRCode(data) {
        /**
         * To generate actual QR codes, install a QR library:
         * npm install qrcode
         * or use: <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
         */

        const khqrContainer = document.getElementById('khqr-qr');

        // Clear previous QR code
        khqrContainer.innerHTML = '';

        // Create canvas for QR code
        const canvas = document.createElement('canvas');
        khqrContainer.appendChild(canvas);

        // Placeholder message
        const message = document.createElement('p');
        message.textContent = `Ready to donate ${data.amount.toLocaleString()}៛`;
        message.style.marginTop = '1rem';
        khqrContainer.appendChild(message);

        // If you have QRCode library loaded, uncomment:
        /*
        new QRCode(canvas, {
            text: this.buildKHQRString(data),
            width: 200,
            height: 200,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
        */

        this.showMessage(`QR code generated for ${data.amount.toLocaleString()}៛`, 'success');
    }

    buildKHQRString(data) {
        /**
         * Build KHQR format string
         * This is a simplified version of the KHQR spec
         */
        return `
khqr_id:${data.merchantId}|
merchant:${data.merchantName}|
amount:${data.amount}|
currency:${data.currency}|
txid:${data.transactionId}
        `.replace(/\n/g, '').trim();
    }

    generateTransactionId() {
        return `TXN${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    }

    fetchKHQRFromAPI(data) {
        /**
         * Example: Fetch KHQR from an API
         * You'll need to implement this with your KHQR provider
         */

        // This is a mock implementation
        console.log('Fetching KHQR from API...');
        console.log('Data:', data);

        /*
        fetch('/api/khqr/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                // Display QR code image
                const img = document.createElement('img');
                img.src = result.qrCodeUrl;
                document.getElementById('khqr-qr').appendChild(img);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            this.showMessage('Failed to generate KHQR. Please try again.', 'error');
        });
        */
    }

    showMessage(message, type) {
        const msgElement = document.getElementById('donation-message');
        msgElement.textContent = message;
        msgElement.className = `donation-message ${type}`;
        msgElement.style.display = 'block';

        // Auto-hide success messages
        if (type === 'success') {
            setTimeout(() => {
                msgElement.style.display = 'none';
            }, 5000);
        }
    }
}

// ============================================
// Smooth Scrolling & Navigation
// ============================================

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

// ============================================
// Social Media Links Update
// ============================================

/**
 * Update social media links with your actual URLs
 * Replace 'YOUR_CHANNEL_NAME' with your actual usernames/links
 */

function updateSocialLinks() {
    const socialConfig = {
        youtube: 'https://youtube.com/@yourchannel',
        facebook: 'https://facebook.com/yourprofile',
        tiktok: 'https://tiktok.com/@yourprofile'
    };

    // Update links dynamically if needed
    const youtubeLink = document.querySelector('.social-btn.youtube');
    const facebookLink = document.querySelector('.social-btn.facebook');
    const tiktokLink = document.querySelector('.social-btn.tiktok');

    if (youtubeLink) youtubeLink.href = socialConfig.youtube;
    if (facebookLink) facebookLink.href = socialConfig.facebook;
    if (tiktokLink) tiktokLink.href = socialConfig.tiktok;
}

// ============================================
// Initialize Application
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize KHQR donation system
    const khqr = new KHQRDonation();

    // Update social links
    updateSocialLinks();

    console.log('Lilmao Gaming website loaded successfully!');
    console.log('Remember to configure:');
    console.log('1. Merchant ID in KHQRDonation class');
    console.log('2. Social media links');
    console.log('3. KHQR API integration');
});

// ============================================
// Utility Functions
// ============================================

/**
 * Format currency in KHR
 */
function formatKHR(amount) {
    return new Intl.NumberFormat('km-KH', {
        style: 'currency',
        currency: 'KHR',
        minimumFractionDigits: 0
    }).format(amount);
}

/**
 * Validate Cambodian phone number (optional)
 */
function isValidCambodianPhone(phone) {
    const pattern = /^(\+)?855\d{8,9}$/;
    return pattern.test(phone.replace(/\s/g, ''));
}

/**
 * Copy text to clipboard
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard:', text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}
