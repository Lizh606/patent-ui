# Color Semantics & Business Meanings

Patent EvidenceFlow utilizes specific color maps to support decision-making in patent risk workspaces:

## Corporate Palette (using official `--pef-*` design tokens)
*   **Deep Navy Workspace (`#061a3b`)**: `--pef-shell-sidebar-bg`. Used for the sidebar container layout, conveying ultimate gravity and high-trust analytical security.
*   **Dominant CTA Brand Blue (`rgb(13, 92, 255)`)**: `--pef-brand`. Active links, dominant CTA buttons, and interactive elements.
*   **Aesthetic Neutrals (`rgb(10, 24, 61)` to `rgb(86, 104, 148)`)**: `--pef-text-primary`, `--pef-text-secondary`, and `--pef-text-tertiary` to establish professional visual hierarchy across headings, body texts, and labels.

## Business Status Meanings
*   **Ready (`rgb(18, 163, 86)`)**: `--pef-success`. Assessments completed, attorney-review-readied export package successfully synthesized.
*   **Generating / Weak (`rgb(245, 141, 0)`)**: `--pef-warning`. Background LLM claim mapping or active content synthesis occurring, or mapping needs verification.
*   **Failed / Missing (`rgb(239, 68, 68)`)**: `--pef-error`. Processing exceptions encountered during patent reference extraction. Requires retry action.
*   **Info / Banners (`rgb(37, 99, 235)`)**: `--pef-info`. Informational and legal advisory banners regarding workstation constraints.
