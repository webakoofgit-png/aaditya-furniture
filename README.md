# Aaditya Furniture

Responsive showroom frontend built with React, TypeScript, TanStack Start, Tailwind, shadcn/ui, Framer Motion and Lucide.

## Run locally

```sh
npm install
npm run dev
```

## Validate

```sh
npm run build
npx tsc --noEmit
npm test
```

## Demo content and configuration

Eight page types are included: home, about, collections, product detail, bespoke furniture, trade/bulk, inspiration gallery and contact. Collection search, category filtering, sorting, quick view, finish selection, product zoom, gallery filtering/lightbox, testimonials and mobile navigation run locally.

All products, materials, inspiration images and testimonial placeholders are illustrative. Business address, phone, email, map and opening hours must be supplied and verified before launch. No prices, business history, numerical guarantees or completed customer projects are asserted.

Set `businessConfig.whatsappNumber` in `src/lib/furniture-data.ts` to a verified international number, using digits only (for example, country code followed by the business number). An empty value opens WhatsApp recipient selection. Forms validate locally and prepare a message; they do not send it automatically or store enquiries in a database. The visitor chooses whether to send it in WhatsApp.

Set `businessConfig.wholesaleEnabled` to false to hide the trade navigation and homepage promotion if bulk service is unavailable. The trade page describes proposed offerings pending business confirmation.

Business details and map placeholders are in `src/routes/contact.tsx` and `src/components/site.tsx`. Demo data is centralized in `src/lib/furniture-data.ts`.

No checkout, payment gateway, external form backend or live map is configured. This checkout remains connected to the original Lovable project conventions. No live deployment is configured.
