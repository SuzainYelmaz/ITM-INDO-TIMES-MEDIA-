<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Indo Times Media - Project Guidelines

## Architecture & Technology
- **Framework**: Next.js (App Router).
- **Directory Structure**: 
  - Routes and layouts are located in `src/app/`.
  - Reusable modular UI components (e.g., Header, HeroStory, NewsGrid) are located in `src/components/`.

## Styling Conventions
- **Vanilla CSS ONLY**: Do not use Tailwind CSS or any other utility-first framework. Stick to standard CSS.
- **Global Styles**: All core styles, layout classes, and design system tokens are maintained in `src/app/globals.css`.
- **Color Palette**: Utilize the authoritative color palette defined as CSS variables in `globals.css` (e.g., `--brand-color: #B80000;`, `--nav-bg: #111111;`).

## Typography Guidelines
- **Body/UI Font**: `Roboto` for general body copy, meta details, and standard UI text.
- **Headings Font**: `Merriweather` for section titles, headlines, and article titles.
- **Logo/Premium Font**: `Playfair Display` is exclusively used for the "INDO TIMES" logo and other ultra-premium typographic elements (always implement with subtle text-shadows for a premium feel).
