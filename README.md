# Mulligans Kamloops — Business Website

Live site: [mulliganskamloops.com](https://mulliganskamloops.com)

A fully deployed, responsive business website built from the ground up for Mulligans Kamloops — a local indoor golf and bar venue. This was a real client project where I handled everything from design and development through to deployment and ongoing maintenance.

## Features

- Responsive, mobile-friendly design built with Tailwind CSS
- Multi-page layout covering Home, About, Menu, and Contact
- Contact form connected to a custom Node.js email server that routes submissions directly to the business inbox via SMTP
- Integrated third-party online booking platform, replacing the previous phone-only booking process
- Custom domain registered and deployed on GoDaddy with SSL encryption configured

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, Tailwind CSS, JavaScript |
| Backend | Node.js (email server) |
| Hosting | GoDaddy (frontend), Render.com (backend) |
| Domain & SSL | GoDaddy |
| Booking | Third-party booking platform integration |

## Project Structure
```
mulligans_pub_website/
├── index.html          # Homepage
├── pages/              # Additional pages (About, Menu, Contact, etc.)
├── assets/             # Images, icons, and static files
├── src/                # CSS source and Tailwind config
├── backend/            # Node.js email server
├── tailwind.config.js
├── package.json
└── .gitignore
```

## How It Works

### Frontend
The site is built with plain HTML and Tailwind CSS for fast load times and a clean, maintainable codebase. JavaScript handles interactive elements and form submission logic.

### Email Server
Rather than relying on a paid third-party form service, I built a lightweight Node.js server hosted on Render that receives contact form submissions from the frontend and forwards them to the business email via SMTP. CORS is configured to only accept requests from the live domain.

### Booking Integration
A third-party booking platform is embedded into the site, giving customers a seamless way to reserve bays online. This replaced the previous manual phone-based process and significantly improved how the business manages reservations.

## Deployment Notes

- Frontend hosted on GoDaddy shared hosting
- Backend email server deployed on Render (free tier — note: may have cold start delay on first request)
- SSL certificate configured on GoDaddy for the custom domain
- Both environments are live and actively maintained
