<p align="center">
  <img src="docs/assets/hi-lol.png" alt="Meme Will it work? dengan komentar hi lol." width="225" />
</p>

# Inovus

Class profile website of PTI-B batch 2025, State University of Malang. Built with Astro as a place to get to know the classmates, see the togetherness, and store stories through photos. One place for our college journey, from the beginning until it becomes memories.

## About website

Inovus is designed as a website with several pages:

| Pages          | Planned content                                               |
| -------------- | ------------------------------------------------------------- |
| **Home**       | A brief introduction to Inovus and a glimpse into class life. |
| **Our Story**  | PTI-B's identity, class stories, and management structure.    |
| **The People** | Membership card, nickname, and social media are optional.     |
| **Moments**    | Photo album of activities and moments together.               |

The focus is on class profiles and a digital yearbook, without articles or blogs. Member photos and galleries use placeholders until the real assets are available.

## Visual Identity

A bright theme with white as the base, blue as the main color, and orange as the accent. The agreed palette for implementation:

| Color          | Hex       | Role                         |
| -------------- | --------- | ---------------------------- |
| Warm white     | `#FAFAF8` | Main Background.             |
| White          | `#FFFFFF` | Navbar, Card, dan Panel.     |
| Persian Blue   | `#0C35C6` | Identity Brand & Main Button |
| Blazing Flame  | `#FC480E` | Accent & Decoration Detail   |
| Alabaster Grey | `#E0E0E0` | Border & Placeholders        |
| Onyx           | `#151515` | Title & Main Text            |
| Text grey      | `#626262` | Supporting Text              |

## Status

The project is still using the Astro starter page. The context for the coding agent is ready; global CSS and the website page are the next stages.

The pages and palettes above are still just plans, not the finished look yet.

## Running the Project

Use Node.js `>=22.12.0` and Bun. Dependency follow `package.json` and `bun.lock`.

```sh
bun install
bun run dev --background
```

The default port is `4321`. Follow the URL from the CLI if that port is already in use.

| Command                    | Use                                   |
| -------------------------- | ------------------------------------- |
| `bun run astro dev status` | Checking status background server     |
| `bun run astro dev logs`   | Read log server.                      |
| `bun run astro dev stop`   | Stop background server.               |
| `bun run build`            | Creating production build di `dist/`. |
| `bun run preview`          | Reviewing the build results locally.  |

There’s no separate lint, test, or type-check script yet.

## Reference

- [Astro Documentation](https://docs.astro.build)
- [WRI Community Reference](https://wridev.id/en/)
