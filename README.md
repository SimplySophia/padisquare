Padisquare — Multi-Vendor Marketplace

A modern multi-vendor marketplace built with Next.js (App Router).
Focused on clean architecture, performance, and real-world frontend patterns.

🚀 Live Demo

https://padisquare-teal.vercel.app/

Tech Stack

Next.js 15+ (App Router)
TypeScript
Tailwind CSS
Vercel

✨ What This Project Shows
Multi-tenant routing
Server & Client component separation
Search, sort, and pagination
Responsive layouts
ISR caching
Clean, scalable component structure

Project Structure (Why It’s Set Up This Way)
app/
  site/[vendorSlug]/     → vendor storefronts
components/
  vendor/               → vendor UI blocks
  product/              → product cards & lists
  layout/               → nav & shared layout
lib/data/               → mock async data
types/                  → shared TypeScript models

Multi-Vendor Routing
/site/techmart
/site/fashionhub
/site/homestyle

Server vs Client Components
Server Components
Data fetching
Metadata / SEO
ISR caching
Client Components
Search
Sorting

Pagination:
UI interaction
Pagination Logic
Mobile: 4 products per page
Desktop: 3 products per page
Prev / Next navigation
Auto reset on search or sort
Data Caching (ISR)
export const revalidate = 60;


Pages revalidate every 60 seconds.
Image Optimization

UI Approach
Dark theme for focus and contrast
Mobile-first layout
Minimal UI chrome
Clear content hierarchy

Running Locally
npm install
npm run dev

Deployment

Deployed on Vercel.
Auto-deploys on push.
ISR, image optimization, and caching handled by platform.

📄License

MIT — free to use.

Author
Built as part of the Padisquare Frontend Assessment