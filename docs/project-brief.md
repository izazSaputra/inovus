# Inovus project brief

This records the owner's agreed direction. Planned items are not implemented
features and do not authorize building everything in a single task.

## Identity

- Brand: Inovus.
- Class: PTI-B, entering cohort 2025.
- University: Universitas Negeri Malang.
- Purpose: class profile and digital memory album, enjoyable without classmates needing to maintain content themselves.
- Language: Indonesian, friendly and approachable.
- Reference: https://wridev.id/en/ for community presentation and member discovery; retain Inovus's own brand identity.

## Planned navigation

Use separate pages rather than one long page. Paths below are working conventions
for future implementation.

| Label | Path | Content |
| --- | --- | --- |
| Beranda | `/` | Short introduction, identity, visual highlights, links into the site. |
| Tentang | `/tentang/` | Class story, Inovus meaning, university/cohort, class organization when supplied. |
| Anggota | `/anggota/` | Member photos, names, nicknames, optional supplied social links. |
| Galeri | `/galeri/` | Photos grouped by activity or moment. |

Articles/blog are excluded. Karya can be reconsidered later if enough projects
are available; it is not part of the initial navigation. Member detail dialogs
and enlarged gallery photos are optional future interactions.

## Visual direction

Light theme: white/neutral surfaces, primary blue, small orange accents. Generous
spacing, strong typography, subtle motion. Roughly 75% neutral, 20% blue, 5% orange
is a visual guide, not a quota for each page.

| Color | Hex | Role |
| --- | --- | --- |
| Warm white | `#FAFAF8` | Main background. |
| White | `#FFFFFF` | Navbar, cards, panels. |
| Persian Blue | `#0C35C6` | Primary buttons, active navigation, brand emphasis. |
| Blazing Flame | `#FC480E` | Small accents, decoration, labels. |
| Alabaster Grey | `#E0E0E0` | Subtle separators, placeholder surfaces. |
| Onyx | `#151515` | Headings, primary text. |
| Text grey | `#626262` | Secondary text. |

Blue, orange, Alabaster Grey, and Onyx follow the supplied brand board; the other
colors support web use. Verify contrast for actual combinations. Light grey
separators should not be the only indication of interactive controls. Prefer
white text on blue buttons and Onyx text on orange surfaces over small white
text on orange.

Global CSS is the next separate milestone: shared semantic tokens and base
styles. No stylesheet has been added as part of the AI setup.

## Assets and content

- Use placeholders for member and gallery photos until real assets are supplied.
- Member placeholders may use initials or neutral avatars; gallery placeholders should have clear labels.
- Do not imply demo names, photos, events, or statistics are real class data.
- Brand boards were shared in conversation; production logo files have not yet been added to the repository.
- Do not depend on temporary clipboard paths. Use repository assets when supplied and preserve logo proportions and colors.
- Name meaning, member list, organization, and actual events still need owner-provided details.

## Delivery stages

1. AI development context and repository documentation (current milestone).
2. Global CSS and shared visual foundations (next milestone).
3. Shared layout/navigation and four pages with placeholders.
4. Replace placeholders with supplied assets and verify the final experience.

The owner wants to commit the AI setup before moving on to global CSS. Keep
these stages as separate reviewable changes.
