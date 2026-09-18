# Inovus: agent instructions

## Context

Read `docs/project-brief.md` before product, content, or visual work. It records
the agreed identity, navigation, palette, placeholders, and delivery stages.
Follow the user's current request when it updates these decisions and keep the brief in sync.

## Working conventions

- Keep changes focused on the requested milestone so the owner can commit each stage separately. Do not commit or push unless requested.
- Preserve unrelated local changes.
- Prefer Astro components, static pages, and scoped CSS. Add client JavaScript only for interactions that need it.
- Keep strict TypeScript. Use Bun and the existing `bun.lock`; avoid introducing other lockfiles.
- Add dependencies only when needed for the requested feature. AI development support does not require an AI SDK, chatbot, backend, or CMS.
- Reuse layouts and components. Separate member/gallery data from presentation when implementing those features.
- Write public-facing copy in natural Indonesian.
- Use semantic HTML, keyboard-accessible controls, visible focus states, descriptive image alternatives, and reduced-motion support.
- Check narrow and wide viewports after visual changes.
- Once global CSS exists, use shared semantic color variables instead of duplicating color literals across components.
- Never invent real members, counts, achievements, social links, or events. Label demo content and placeholders clearly.

## Repository map

- `src/pages/`: routes; currently only the starter homepage exists.
- `src/layouts/`: shared document layouts.
- `src/components/`: reusable UI; currently includes the starter Welcome component.
- `src/assets/`: assets processed by Astro.
- `public/`: files served as-is.
- `docs/project-brief.md`: agreed product direction and planned work.

## Development

Install with `bun install`. Use the local Astro CLI through `bun run astro`.

When starting the dev server, use background mode: `astro dev --background`.
Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Repository commands:

```sh
bun run dev --background
bun run astro dev status
bun run astro dev logs
bun run astro dev stop
bun run build
bun run preview
```

## Verification

- Documentation-only: check links, paths, command accuracy, and `git diff --check`; no build needed.
- Code/configuration: run `bun run build` and report the result.
- UI changes: check affected routes and interactions in the browser when tooling is available; disclose anything unverified.
- No lint, test, or type-check script is configured yet. Do not claim these checks ran or silently install tooling to run them.
- Summarize changes, checks, and remaining work. Distinguish planned features from implemented ones.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
