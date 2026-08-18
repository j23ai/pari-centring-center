# Real equipment photos go here

Drop the shop's actual photos in this folder, then point to them from
`src/lib/site-data.ts` with a path like `/images/your-file.jpg`
(files here are served from the site root — no `public/` prefix).

## Flooring / Power Trowel Machine — currently no photo, on purpose

Confirmed: this shop rents an **electric** trowel only (the blue unit
from earlier photos), not a petrol/engine one. The photo previously
here (`power-trowel-machine.jpg`, cropped from an AI-generated
marketing graphic) showed a petrol machine, so it's been removed —
`services[].image` for this item is now `null` in
`src/lib/site-data.ts`, which falls back to the plain icon tile
(see `Services.tsx`) instead of a real photo.

Free stock libraries (Unsplash, Pexels, Pixabay) turned up nothing for
"power trowel" / "electric concrete trowel" except large gas-engine
walk-behind units, so a generic stock swap wasn't a safe fix either —
it would just trade one wrong machine for another.

To finish this: drop a real photo of the shop's electric trowel here
as `power-trowel-electric.jpg` (or similar) and set
`image: "/images/power-trowel-electric.jpg"` on that entry.
