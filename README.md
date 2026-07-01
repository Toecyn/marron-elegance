# Marron Elegance

Exported source for the Lovable project "Marron Elegance", a luxury event staffing landing page for MARRON EVENTS AND USHERING AGENCY.

Stack: Vite, React 19, TanStack Router / TanStack Start, Tailwind CSS v4, TypeScript.

## Setup

    npm install
    npm run dev

Build for production:

    npm run build
    npm run preview

## Files you need to add

Ten image files are referenced from `src/routes/index.tsx` but are not included in this export because they live on Lovable's private asset storage and could not be downloaded through the API used to pull this code:

    src/assets/logo.png
    src/assets/m1.jpg
    src/assets/m2.jpg
    src/assets/m3.jpg
    src/assets/m4.jpg
    src/assets/m5.jpg
    src/assets/hero-ballroom.jpg
    src/assets/tablescape.jpg
    src/assets/champagne.jpg
    src/assets/wedding.jpg

To get them, open the project in Lovable, go to the code editor, and download each file from `src/assets`, or open the project's GitHub sync (if enabled) and pull the files from there. Once dropped into `src/assets` with the same file names, the imports in `src/routes/index.tsx` will resolve automatically.

## routeTree.gen.ts

`src/routeTree.gen.ts` is generated automatically by the TanStack Router Vite plugin the first time you run `npm run dev` or `npm run build`. You do not need to create it by hand; it will appear on first run.

## Notes

- The original project used an internal Lovable package, `@lovable.dev/vite-tanstack-config`, to wrap the Vite plugins. That package is not published publicly, so `vite.config.ts` here reproduces the same plugin stack directly with `@tanstack/react-start/plugin/vite`, `@tailwindcss/vite`, `vite-tsconfig-paths`, and `@vitejs/plugin-react`.
- `src/components/ui/*` (shadcn/ui, "new york" style) exist in the original project but are not imported by this page, so they were not included here. If you need them, run `npx shadcn@latest add button card dialog` and so on, using the settings already captured in `components.json`.
