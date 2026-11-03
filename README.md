# ATELIER — Phase 0
A local Next.js App Router foundation only. No navbar, hero, portfolio, or other final sections have been implemented. No reference PNG was supplied; the palette and fonts follow the written brief.

## Open and run
Open atelier-interiors.code-workspace in VS Code. In its terminal:
```powershell
node --version
npm --version
npm ci
npm run dev
```
Visit http://localhost:3000. Stop with Ctrl+C.

Use Node 22 LTS **22.13 or newer**, or Node 24 LTS. The machine currently has 22.12.0: the dev server and lint ran, but one ESLint dependency declares a newer patch minimum. Update Node using the official installer at https://nodejs.org/en/download. Validation also used an isolated Node 22.23.4 runtime without changing the system installation.

## Exact fresh-scaffold commands
Run these only to recreate a NEW project, not inside this existing folder:
```powershell
node --version
npm --version
cd "$env:USERPROFILE\Desktop"
npx create-next-app@latest atelier-interiors --typescript --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm --disable-git --yes
cd atelier-interiors
npm install motion locomotive-scroll@^5 split-type lucide-react clsx tailwind-merge
code .
npm run dev
```
The foundation files in this delivery replace the scaffold defaults. package-lock.json records the resolved versions. The current scaffold uses Tailwind v4's Turbopack integration and CSS-first @theme configuration, with no legacy tailwind.config file.

## Commands
- npm run dev — development server, port 3000.
- npm run typecheck — generate route types and run strict TypeScript.
- npm run lint — ESLint flat configuration.
- npm run build — optimized production output.
- npm start — serve the completed production build.
- npm audit --omit=dev — audit production dependencies.

## Structure
```text
atelier-interiors/
  .vscode/{extensions.json,settings.json}
  public/
    images/.gitkeep
    icons/.gitkeep
  src/
    app/{layout.tsx,page.tsx,globals.css}
    components/
      providers/{app-providers.tsx,smooth-scroll-provider.tsx}
      animations/{foundation-sample.tsx,split-text.tsx}
      layout/.gitkeep
      sections/.gitkeep
      ui/.gitkeep
    hooks/.gitkeep
    lib/{motion.ts,utils.ts}
    data/.gitkeep
    types/.gitkeep
  .gitignore
  .nvmrc
  AGENTS.md
  atelier-interiors.code-workspace
  eslint.config.mjs
  next-env.d.ts
  next.config.ts
  package.json
  package-lock.json
  tsconfig.json
  README.md
```
Empty future directories have only .gitkeep files. No placeholder components or content models.

## Dependencies
| Dependency | Purpose |
| --- | --- |
| Next.js 16.4.5, React 19.3.0 | App Router, server rendering, optimized fonts and images |
| TypeScript | Strict type checking |
| Tailwind CSS v4 | CSS-first design tokens and responsive utilities |
| motion | React animation and native scroll tracking; imports from motion/react |
| locomotive-scroll 5 | The sole smooth scroll engine; its internal Lenis dependency is transitive, not a second instance |
| split-type | Opt-in line, word, and character wrapping |
| lucide-react | Lightweight SVG icons |
| clsx, tailwind-merge | Conditional classes with Tailwind conflict resolution |
| ESLint, eslint-config-next | Code and framework checks |

## Design foundation
Six named colors, Cormorant Garamond headings and DM Sans body text (400/500/600, normal/italic), fluid display type, fluid gutters, container and section-spacing tokens, border tokens, transition durations and editorial easing. Breakpoints: 768, 1024, 1440px. Colors remain adjustable. Focus rings, a skip link, semantic landmarks, and normal browser scrollbars are retained.

## Motion and scrolling
SmoothScrollProvider dynamically imports Locomotive only inside an effect. Async generation guards prevent late or duplicate initialization in Strict Mode. Cleanup destroys the instance. A live media query enables it only at 1024px+ with a fine pointer and no reduced-motion preference. Touch/mobile and reduced motion use native scrolling. There is no transformed page wrapper or independent Lenis instance.

MotionConfig has reducedMotion="user". The sample line demonstrates useScroll, useSpring and useTransform on the actual window scroll. Future client components can directly import useMotionValueEvent, useReducedMotion, AnimatePresence, and motion from motion/react; use whileInView on motion elements. No extra wrapper abstractions are needed. Explicitly disable scroll-linked motion values under reduced motion, as the sample does.

Locomotive owns scrolling; Motion owns element animation; CSS owns sticky. Never apply Locomotive and Motion transforms to the same element. Use nested wrappers if both are required. Prefer transform and opacity. Keep sticky ancestors free of overflow/transform containment.

## Text splitting
Use SplitText only where future sections request it:
```tsx
<SplitText as="h2" text="Considered spaces" types="lines,words,chars" />
```
Supported modes: lines, words, chars, or their combined mode. It waits for fonts, resplits on width or font changes, reverts before rebuilding and on cleanup, and skips splitting for reduced motion. The semantic text copy is screen-reader accessible; the imperative visual copy is aria-hidden. Initial server/client markup matches. Lines are clipped for future reveals; word/character staggering can be added locally. Do not mutate React-owned semantic text or animate all headings globally.

## Images and performance
Use next/image for future real image assets in public/images. No random photographs or screenshot crops were downloaded.
- Supply intrinsic width/height or fill inside a positioned parent with a stable aspect ratio.
- Always give responsive sizes (for example "(max-width: 767px) 100vw, 50vw").
- AVIF and WebP output formats are configured; source imagery can be JPEG/WebP/AVIF.
- For a single clearly identified LCP hero, use Next.js 16's preload prop; avoid preloading multiple candidates. Below-fold images use default lazy loading.
- Supply meaningful alt text, or alt="" for decorative imagery.
- Add explicit remotePatterns only when an approved image host is known.
- Reserve space to prevent layout shift. Animate a nested image wrapper for zoom/parallax, with restrained overscan. Avoid persistent will-change across all images.
- next/font downloads Google fonts at build time and serves them locally. The first build needs internet access.

## Executed validation
- Strict TypeScript: passed after correcting SplitType's comma-separated option syntax.
- ESLint: passed.
- Production build: passed; home and not-found routes prerendered.
- npm run dev: started successfully on port 3000.
- Browser: page rendered with warm ivory styles and loaded fonts; no error/warning console entries observed during inspection.
- Anchor: Explore the foundation navigated to #palette and scrolled the page.
- Mobile 390px: no horizontal overflow; Locomotive classes removed, confirming native-scroll fallback.
- Desktop: Locomotive classes present.
- Production audit: zero vulnerabilities.
- Full audit: 16 moderate development-tooling findings (ESLint/minimatch chain). No forced major downgrades or overrides applied.

## Remaining manual checks
The browser controller did not expose reduced-motion emulation, so the live reduced-motion toggle was not executed. Enable reduced motion in the browser/OS and verify native scrolling, no animated progress line, and preference changes without reloading. Also check keyboard navigation, sticky behavior when future sticky sections exist, and SplitText reveals when a future section uses them. The unused SplitText component was typechecked but not exercised in this foundation page. No screenshot-reference matching claim is made.

