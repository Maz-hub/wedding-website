# Simon & Federica Wedding Website

A clean, minimal wedding website built for a couple getting married in July 2026. This project handles everything from event information to guest RSVPs with automated email notifications.

## What It Does

- **Homepage** with wedding details, venue info, hotel recommendations, and countdown timer
- **RSVP page** with a smart form that sends submissions directly to the couple's email
- **Thank you page** with custom branding after form submission
- **Photo gallery** showcasing their 9-year journey (2017-2025)
- **Email notifications** via Netlify Forms integration
- Fully responsive across mobile, tablet, and desktop

## Tech Stack

- **HTML5** - semantic structure
- **CSS3** - custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - countdown timer, conditional form fields
- **Netlify Forms** - serverless form handling and email notifications
- **Netlify** - hosting with continuous deployment from GitHub
- **Git/GitHub** - version control

## Design Features

- **Mobile-first approach** - most guests will RSVP from their phones
- **Clean, minimal aesthetic** - client wanted simple and elegant
- **Vineyard theme** - subtle grape decorations, summer color palette
- **Accessible forms** - proper labels, focus states, keyboard navigation, validation
- **Conditional fields** - form fields show/hide based on guest answers (JavaScript)
- **Custom thank you page** - branded confirmation instead of generic success message
- **Sticky footer** - stays at bottom regardless of content height

## Challenges & Solutions

**Challenge:** Form submissions need to go to email, but the site is static (no backend).  
**Solution:** Integrated Netlify Forms - it handles submissions and sends email notifications automatically. Added `data-netlify="true"` attribute to form, and Netlify takes care of the rest.

**Challenge:** Photo gallery with different image orientations (portrait, landscape, square).  
**Solution:** CSS Grid masonry layout that adapts portrait images to span 2 rows, landscape to span 1 row. Creates a natural, Pinterest-style flow without cropping images.

**Challenge:** Keeping the design simple but not boring.  
**Solution:** Added subtle decorative SVG images at 15% opacity, alternating left/right for visual rhythm. Hidden on mobile for cleaner experience.

**Challenge:** Form success page looked generic and broke the design flow.  
**Solution:** Created custom `thank-you.html` with animated checkmark, matching branding, and neutral messaging that works for all RSVP responses (Yes/No/Maybe).

## How Netlify Forms Works

The RSVP form integration is serverless and requires no backend code:

1. **Form Detection** - Netlify scans HTML on deploy and detects forms with `data-netlify="true"`
2. **Automatic Processing** - Form submissions are captured and stored in Netlify dashboard
3. **Email Notifications** - Configured to send instant email alerts to couple's Gmail
4. **Spam Protection** - Built-in spam filtering with honeypot fields
5. **Data Export** - Can export all RSVPs as CSV for planning (seating charts, catering counts, etc.)

This approach eliminates the need for a database or server while still providing reliable form handling.

## Project Structure

```
├── index.html           # Homepage with all wedding info
├── rsvp.html            # RSVP form and photo gallery
├── thank-you.html       # Custom confirmation page after form submission
├── css/
│   ├── base.css         # Reset, design tokens, typography, layout system
│   └── styles.css       # Component styles, organized in 11 sections
├── js/
│   ├── countdown.js     # Wedding countdown timer
│   └── rsvp.js          # Conditional form field logic (show/hide)
└── img/                 # SVG decorations and photos (2017-2025)
```

## Live Site

🔗 **[View Live Site](https://simonfederica2026.com) 


## Key Features for Portfolio

**Form Handling Without Backend:**
- Implemented serverless form solution using Netlify Forms
- Set up automated email notifications to client's Gmail
- Created custom thank you page with conditional messaging

**Responsive Design:**
- Mobile-first CSS with multiple breakpoints
- Tested across iPhone, Android, desktop browsers
- Decorative images hidden on mobile for performance

**CSS Architecture:**
- Organized base.css with design token system
- 11-section component structure in styles.css
- Browser fallbacks for modern CSS features (color-mix, backdrop-filter)

**User Experience:**
- Conditional form fields reduce clutter
- Clear visual hierarchy and intuitive navigation
- Accessible with proper focus states and keyboard navigation

---

**Status:** Live and deployed ✅  
**Deployment:** January 2025  
**Role:** Solo developer and designer  
**Client:** Real couple, real wedding in July 2026