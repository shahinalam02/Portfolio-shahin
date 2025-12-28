Assets folder for images

- Path: `assets/images/`
- Purpose: store image assets intended for manual import into components or for moving into `public` if you need direct URL access.

Vite notes and usage examples:

1. Import inside a component (bundled):

```tsx
import hero from "../assets/images/hero.jpg";

export default function Hero() {
  return <img src={hero} alt="Hero" />;
}
```

2. Serve directly as a static URL (recommended: use `public/assets`):

- Move images to `public/assets/images/` then reference as `/assets/images/hero.jpg` in HTML or `img` `src`.

3. If you keep `assets` at project root and import them, use relative imports from files under `src`/`components` so Vite processes them.
