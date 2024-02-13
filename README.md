# Evento project: Discover Event Near You

## Overview

An amazing full-stack events content website with the latest Next.js App Router. This project is not just a practical application but also a study in advanced Next.js features, guided by Wesley from [Bytegrad](https://bytegrad.com).

Check out our live deployment: [Evento Website](https://evento-helga.vercel.app/)

### Technologies Stack:

- **Next.js**: For server-side rendering and static site generation.
- **TypeScript**: Ensuring type safety across the application.
- **Tailwind CSS**: For a responsive and customizable UI.
- **Framer Motion**: Adding smooth, sophisticated animations.
- **Prisma**: ORM for handling database operations.
- **Zod**: For schema validation in TypeScript.

### Features

- to simplify app - db is seeded only for two cities: Austin and Seattle

* **Local Event Listing**: View all events happening near you, with a focus on Austin and Seattle areas.
* **City-based Search**: Easily find events in either Austin or Seattle.
* **Date Sorting**: Events are organized chronologically for convenience.
* **Detailed Event Pages**: Each event has its own page with comprehensive details.
* **Pre-generated Events**: To enhance performance, some events are pre-generated at build time.
* **Skeleton Loaders**: Improving user experience with smooth loading placeholders.

### Pages

- `/events/all`: Browse all events.
- `/events/[city]`: Explore events by city (e.g., `/events/austin`).
- `/event/[slug]`: Specific event details (e.g., `/event/comedy-extravaganza`).
- Static Pages: `/privacy-policy`, `/terms-conditions` for legal information.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

#### Prisma

- seeding data to db
  `npx prisma db seed`
