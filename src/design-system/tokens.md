# Design Tokens - Single Source of Truth

Patent EvidenceFlow uses a unified Namespace Token system (`--pef-*`) to coordinate design parameters, typography scales, colors, layouts, and animation across our legal operations workbench.

## Core Variable Registry

All variables are defined centrally in `/src/styles/tokens.css` and are automatically made available through Tailwind CSS custom directives in `/src/styles/globals.css`.

### Colors & Semantics
- `--pef-bg-page` (rgb): Base application canvas (`248, 250, 252`)
- `--pef-bg-panel` (rgb): Table headers and control ribbons (`255, 255, 255`)
- `--pef-bg-card` (rgb): Foreground containers and document tables (`255, 255, 255`)
- `--pef-text-primary` (rgb): Display titles, dense body text (`10, 24, 61`)
- `--pef-text-secondary` (rgb): Label headings, secondary information column texts (`36, 56, 104`)
- `--pef-text-tertiary` (rgb): Helper details, secondary IDs, deactivated labels (`86, 104, 148`)
- `--pef-brand` (rgb): Main interactive CTA color (`13, 92, 255`)

### Typography Scales (T1 - T7)
- `T1` (Display Metrics): `28px` / Line-height `36px` / Semi-bold (`600`)
- `T2` (Page Header): `24px` / Line-height `32px` / Semi-bold (`600`)
- `T3` (Section Header): `20px` / Line-height `28px` / Semi-bold (`600`)
- `T4` (Subhead Details): `16px` / Line-height `24px` / Semi-bold (`600`)
- `T5` (Dense Body): `14px` / Line-height `22px` / Regular (`400`)
- `T6` (Caption / Meta labels): `12px` / Line-height `18px` / Regular (`400`)
- `T7` (Dense Table Metrics / Mono): `13px` / Line-height `20px` / Regular (`400`)

### Spacing Grid (4px Base Grid)
- `--pef-space-1`: `4px`
- `--pef-space-2`: `8px`
- `--pef-space-3`: `12px`
- `--pef-space-4`: `16px`
- `--pef-space-5`: `20px`
- `--pef-space-6`: `24px`
- `--pef-space-8`: `32px`

### Radii rules
- `--pef-radius-sm`: `6px`
- `--pef-radius-md`: `8px`
- `--pef-radius-lg`: `10px`
- `--pef-radius-control`: `8px`
- `--pef-radius-card`: `10px`
