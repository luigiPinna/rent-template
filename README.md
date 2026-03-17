# rent-template

Website template for B&Bs and short-term rental properties. Built with Next.js, TypeScript and Tailwind CSS.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

The static output will be generated in the `out/` folder.

## Images

Place template images in `public/images/templates/<template-name>/`.

```
public/
└── images/
    └── templates/
        ├── elegance/
        │   ├── elegance1.png
        │   └── elegance2.png
        └── minimal/
            ├── minimal1.png
            ├── minimal2.png
            └── ...
```

Images must be `.png` and referenced in `lib/data.ts` starting with `/images/...` (no `/public` prefix).

## Deploy

Pushes to `main` automatically deploy to GitHub Pages via GitHub Actions.
