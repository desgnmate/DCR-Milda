# DCR MILDA — Design system

## Direction

The site is a monochrome gallery shell around high-impact artist photography. Pure black is the canvas; photographs carry all chromatic energy. Display typography is oversized, light in weight, tightly tracked, and always paired with a short 1px underline mark. Interface copy uses a quiet mono face at 10–12px.

The experience should feel like moving through rooms in an artist exhibition, not navigating a conventional music template.

## Tokens

- Void `#000000`: universal canvas
- Bone `#ffffff`: primary type and high-contrast rules
- Frost `#e2e2e2`: hairlines and quiet dividers
- Charcoal `#444345`: pressed-in controls
- Ash `#b8bab9`: supporting copy
- Display: Inter Tight 400, used as the Roobert substitute
- Interface: JetBrains Mono 400, used as the GT America Mono substitute
- Interactive radius: 2px
- Shadows and decorative gradients: none. Gradients are permitted only as image-legibility scrims.

## Signature devices

- Full-bleed art frames with no card chrome
- Monumental left-aligned titles with aggressive line-height
- Frost underline marks beneath display lines
- Sequential mono section codes (`001`, `002`, …)
- Thin viewport progress rule
- Slow image parallax and masked type reveals
- Horizontal travel through the visual archive on desktop

## Motion principles

Motion should feel weighty and editorial. Use transforms and opacity only. The route loader moves like a white stage curtain; titles reveal from clipped baselines; photography drifts by no more than 12% across a scroll range. All motion is disabled or reduced under `prefers-reduced-motion`.

## Content voice

Short, declarative, and physical. Avoid marketing filler. The central idea is movement without borders: three continents, one dance floor.
