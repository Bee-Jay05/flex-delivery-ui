# Flex Delivery UI (static mock)

This is a static React project that reproduces two Figma screens (Marketplace list + Delivery Details).

## Run locally

1. Install Node.js (v18+ recommended)
2. In the project folder:
   ```bash
   npm install
   npm start
   ```
3. Open http://localhost:3000

## Deploy

Push to GitHub and deploy to Vercel or Netlify.



## Polishing added
- Included the Figma screenshots as `public/assets/marketplace.png` and `public/assets/delivery.png`.
- Added Inter font import in `styles.css` so typography matches the Figma mock.
- Included `vercel.json` for easy deployment.

## Vercel deploy (quick)
1. Create a GitHub repo and push this project.
2. Go to https://vercel.com/import and import the repo.
3. Vercel will auto-detect React (Create React App). Use default build command `npm run build`.
4. After deployment, enable 'Clean URLs' and set the root to `/` if asked.

If you'd like, I can also prepare a single-click GitHub repo with these files (I can generate an export you can upload directly).
