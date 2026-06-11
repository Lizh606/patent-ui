# Border Radii & Depth Shadows

The Patent EvidenceFlow design limits corner rounding and depth shadows to ensure an official, rigorous workstation theme.

## Border Radii Systems (mapped to `--pef-*` variables)
*   **Small (`--pef-radius-sm` / `6px`)**: Softest rounding, applied to secondary pill tags and labels.
*   **Medium (`--pef-radius-md` / `8px`)**: Applied to intermediate lists.
*   **Large (`--pef-radius-lg` / `10px`)**: Applied to dropdown menus, sheet flyouts, and dialog overlays.
*   **Control Radius (`--pef-radius-control` / `8px`)**: Universal radius for inputs, textareas, select tags, and buttons.
*   **Card Radius (`--pef-radius-card` / `10px`)**: Standard radius for dashboard panels, tables, and statistics card sheets.

## Depth Shadow systems (mapped to `--pef-*` variables)
*   **Card Shadow (`--pef-shadow-card`)**: `0 1px 3px rgba(15, 23, 42, 0.06)`. Provides a subtle tactile raise above the `#f8fafc` canvas background.
*   **Overlay Deep Shadow (`--pef-shadow-overlay`)**: `0 16px 40px rgba(8, 20, 48, 0.18)`. Applied to interactive dropdown listings, select option boxes, and edit sidebars to preserve legibility.
