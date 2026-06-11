# Patent EvidenceFlow Design System
**Project Codename:** Patentui

Welcome to the Patent EvidenceFlow Design System, an enterprise-tier workbench interface system built specifically for deep patent risk assessments and legal workpaper review flows.

This documentation serves as a handoff artifact outlining the design semantics, styling tokens, and reusable component architectures of Patent EvidenceFlow.

## Directory Structure
- [README.md](./README.md) - Design System overview
- [tokens.md](./tokens.md) - CSS and Tailwind token layer specifications
- [color.md](./color.md) - Color system and business semantics
- [typography.md](./typography.md) - Typography scales (T1 - T7)
- [spacing.md](./spacing.md) - Spacing rules (4px base grid)
- [radius-shadow.md](./radius-shadow.md) - Control radii, card padding, and depth shadowing
- [components.md](./components.md) - Base shadcn/ui and local composite mapping
- [states.md](./states.md) - Component states, loading states, and business indicators

## Design Principles
1. **Enterprise-grade Density over Marketing Whitespace:** Designed to present dense tabular workpaper data with high clarity.
2. **Architectural Honesty:** No tech-larping logs, ping status lines, or random green terminal blobs.
3. **High-Contrast Semantics:** Business status states are expressed with both rigid, specific colors (green, amber, red) and textual status labels.
4. **Accessible Transitions:** Interactivity relies on standardized hover states, focus outlines, and crisp animations through `@motion`.
