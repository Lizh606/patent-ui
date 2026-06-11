# UI Components Mapping

Our system implements a customized local registry under `src/components/ui/` styled with Tailwind and our design tokens.

## Composite Components
- **InfoBanner (`src/components/common/InfoBanner.tsx`)**: Global workspace metadata warnings and legal notices.
- **EmptyState (`src/components/common/EmptyState.tsx`)**: Feedback container shown when table results are fully filtered.
- **LoadingState (`src/components/common/LoadingState.tsx`)**: Table skeleton loading indicator with micro animated steps.

## Base Components Map
1. **Button**: Primary (brand background), Secondary (slate outline), Ghost.
2. **Card**: Light padding, crisp edge border with shadow.
3. **Table**: Structured table grid containing dense text.
4. **Badge**: Formats, markets, and status color codes.
5. **Popover & Dropdown Selection**: Absolute overlays with responsive action items.
