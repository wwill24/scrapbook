This is a pink, animated scrapbook built with [Next.js](https://nextjs.org).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can edit the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Add your photos

Place your photos in `public/photos/<year>/` as static files. Example:

```
public/
  photos/
    2023/
      01.jpg
      02.png
    2024/
      trip-01.webp
```

The home page automatically renders a slideshow per year folder.
