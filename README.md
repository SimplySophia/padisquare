Padisquare — Multi-Vendor Marketplace

A modern multi-vendor marketplace built with Next.js (App Router).
Focused on clean architecture, performance, and real-world frontend patterns.

🚀 Live Demo
[View Live Demo](https://padisquare-teal.vercel.app/)

Tech Stack:
Next.js 15+ (App Router)
TypeScript
Tailwind CSS
Vercel

What This Project Shows
Multi-tenant routing
Clear Server vs Client component separation
Product search, sorting, and pagination
Fully responsive layouts
ISR caching
Modular, scalable component structure

Project Structure (Why It’s Set Up This Way):
app/
  site/[vendorSlug]/     → vendor storefronts
components/
  vendor/               → vendor UI blocks
  product/              → product cards & lists
  layout/               → navigation & shared layout
lib/data/               → mock async data layer
types/                  → shared TypeScript models

Multi-Vendor Routing
Each vendor has an isolated storefront:

/site/techmart
/site/fashionhub
/site/homestyle

Server vs Client Components:

Server Components
Data fetching
Metadata / SEO
ISR caching

Client Components
Search
Sorting
Pagination UI

Pagination:
Mobile: 4 products per page
Desktop: 3 products per page
Prev / Next navigation
Auto-resets on search or sort changes

Data Caching (ISR)
export const revalidate = 60;
Pages revalidate every 60 seconds.

Image Optimization:
Handled via Next.js Image and Vercel’s edge optimization.

UI Approach:
Dark theme for focus and contrast
Mobile-first layout
Minimal UI chrome
Clear content hierarchy

Running Locally
npm install
npm run dev

Deployment
Deployed on Vercel
Auto-deploys on push
ISR, caching, and image optimization handled by the platform

📄 License
MIT — free to use.

Author
Built as part of the Padisquare Frontend Assessment