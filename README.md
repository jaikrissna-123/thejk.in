# JK Finance & Tax Professional Website

A professional website for a finance and tax professional showcasing services, invoices, and contact information.

## Overview

This static HTML template provides a complete website for a finance and tax professional including:

- **Home Page**: Hero section with services overview
- **About Page**: Professional background and qualifications
- **Services Page**: Detailed list of offered services
- **Invoice Manager**: Interactive invoice tracking and management tool
- **Contact Page**: Contact form and information

## Features

✅ Responsive design (works on desktop, tablet, mobile)
✅ Invoice management with local storage
✅ Contact form with data storage
✅ Professional and modern design
✅ Easy to customize
✅ No external dependencies (pure HTML/CSS/JavaScript)
✅ SEO-friendly structure

## File Structure

```
thejk.in/
├── index.html           # Homepage
├── about.html           # About page
├── services.html        # Services listing
├── invoices.html        # Invoice manager
├── contact.html         # Contact page
├── css/
│   └── style.css        # All styling
├── js/
│   └── script.js        # JavaScript functionality
└── README.md            # This file
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone this repository
```bash
git clone https://github.com/jaikrissna-123/thejk.in.git
cd thejk.in
```

2. Open any HTML file in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## Customization

### Update Personal Information

1. **Contact Details**: Update email, phone, and address in:
   - `index.html` (footer)
   - `about.html` (footer)
   - `contact.html` (Contact Information section)

2. **Personal Bio**: Edit the "Professional Background" section in `about.html`

3. **Qualifications**: Update your qualifications list in `about.html`

4. **Services**: Modify service descriptions in `services.html`

### Colors and Styling

Edit the CSS variables in `css/style.css` (lines 1-10):

```css
:root {
    --primary-color: #1e40af;      /* Main brand color */
    --secondary-color: #0f766e;    /* Secondary color */
    --accent-color: #f59e0b;       /* Accent color */
    /* ... other colors ... */
}
```

### Brand Name

Replace "JK Finance & Tax" with your business name throughout:
- All HTML files
- Logo section in `index.html`
- Footer sections

## Features Explained

### Invoice Manager

The invoice manager allows users to:
- Add new invoices with details (invoice number, amount, transport info, etc.)
- View all added invoices in a table
- Delete invoices
- Data is stored locally in the browser using `localStorage`

**Note**: Data persists only in the same browser. To save data permanently, you'll need a backend server.

### Contact Form

- Collects visitor contact information
- Stores messages in browser's `localStorage`
- Shows success notification on submit

**Note**: To send actual emails, you'll need to integrate a backend service (e.g., Formspree, EmailJS, or a custom server).

## Deployment

### Option 1: GitHub Pages (Free)

1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select "main" branch as source
4. Your site will be live at `https://jaikrissna-123.github.io/thejk.in`

### Option 2: Netlify (Free)

1. Connect your GitHub repository
2. Deploy will happen automatically
3. Get a custom domain

### Option 3: Traditional Hosting

1. Upload all files to your web hosting server
2. Access via your domain

## Browser Compatibility

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Consider adding:
- Backend server for form submission and email sending
- Database for permanent invoice storage
- Payment gateway integration
- Blog section
- Client portal
- Online appointment booking
- Document upload functionality

## Support

For issues or questions, please open an issue in the repository.

## License

This project is open source and available under the MIT License.

## Author

Created for a finance and tax professional - [thejk.in](https://thejk.in)

---

**Last Updated**: 2026
