# Simon & Federica Wedding Website

A clean, minimal wedding website built for a couple getting married in 2026.

## What It Does

- **Homepage** with wedding details, venue info, hotel recommendations, and countdown timer
- **RSVP page** with a form that sends submissions directly to the couple's email
- **Photo gallery** showcasing their 9-year journey (2017-2025)
- Fully responsive across mobile, tablet, and desktop

## Tech Stack

- **HTML5** - semantic structure
- **CSS3** - custom properties, Grid, Flexbox
- **Vanilla JavaScript** - countdown timer, conditional form fields
- **Netlify** - hosting and form handling
- **Git/GitHub** - version control


## Design Features

- **Mobile-first approach** - most guests will RSVP from their phones
- **Clean, minimal aesthetic** - client wanted simple and elegant
- **Vineyard theme** - subtle grape decorations, summer color palette
- **Accessible forms** - proper labels, focus states, validation
- **Conditional fields** - form fields show/hide based on guest answers

## Challenges & Solutions

**Challenge:** Form submissions need to go to email, but the site is static (no backend).  
**Solution:** Integrated Netlify Forms - it handles submissions and sends email notifications automatically.

**Challenge:** Photo gallery with different image orientations (portrait, landscape, square).  
**Solution:** CSS Grid masonry layout that adapts portrait images to span 2 rows, landscape to span 1 row.

**Challenge:** Keeping the design simple but not boring.  
**Solution:** Added subtle decorative SVG images at low opacity, alternating left/right for visual rhythm.

## Project Structure
```
├── index.html           # Homepage with all wedding info
├── rsvp.html           # RSVP form and photo gallery
├── css/
│   ├── base.css        # Reset, variables, typography
│   └── styles.css      # Component styles, organized by section
├── js/
│   ├── countdown.js    # Wedding countdown timer
│   └── rsvp.js         # Conditional form field logic
└── img/                # SVG decorations and photos
```

## Live Site

Coming soon - currently in deployment phase!

---

**Status:** In progress - launching soon  
**Timeline:** January 2025  
**Role:** Solo developer and designer