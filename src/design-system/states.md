# Visual States Matrix

The design maps key user interfaces and table elements across several functional states:

## Interface States
1. **Default**: Standard workbench displays and data rows.
2. **Hover**: Soft background change with interactive pointers (`state-hover`).
3. **Active/Focus**: Brand-colored outline rings (`focus-visible:outline-brand`).
4. **Disabled**: Reduced opacity (`opacity-50`) and block cursor (`cursor-not-allowed`).
5. **Loading**: Structured pulsate bone skeleton.
6. **EmptyState**: Descriptive icons, text message guidance, and clear-filters buttons.
7. **PermissionDenied**: Message block indicating that download credentials are missing and actions are fully restricted.

## Operational Status Codes
- **Ready for Download**: Strong green badge with solid border.
- **Generating**: Shimmering amber loader, indicating server task alignment.
- **Failed**: High-contrast red indicator with troubleshooting retry pathways.
