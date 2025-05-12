# CRWD Design System

This document outlines the design system for the CRWD application. It provides guidelines for colors, typography, spacing, and components to ensure a consistent user experience across the application.

## Colors

The CRWD application uses a consistent color palette defined in `lib/colors.ts`. These colors are exposed as CSS variables in `app/globals.css`.

### Primary Colors

The primary color palette is used for primary actions, highlights, and branding elements:

- Primary: `oklch(0.6 0.2 264.376)` - A vibrant blue-purple used for primary buttons, links, and important UI elements
- Primary Foreground: `oklch(0.985 0 0)` - White text on primary backgrounds

### Neutral Colors

The neutral color palette is used for backgrounds, text, and UI elements:

- Background: `oklch(1 0 0)` - White background
- Foreground: `oklch(0.145 0 0)` - Near-black text
- Muted: `oklch(0.97 0 0)` - Light gray for subtle backgrounds
- Muted Foreground: `oklch(0.556 0 0)` - Medium gray for secondary text
- Border: `oklch(0.922 0 0)` - Light gray for borders

### Semantic Colors

These colors convey specific meanings:

- Success: `oklch(0.7 0.17 162.48)` - Green for success states
- Warning: `oklch(0.8 0.19 84.429)` - Yellow for warning states
- Error/Destructive: `oklch(0.65 0.24 27.325)` - Red for error states
- Info: `oklch(0.6 0.18 264.376)` - Blue for informational states

## Typography

The application uses the Geist font family:

- Geist Sans for regular text
- Geist Mono for monospaced text

### Font Sizes

- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)

### Font Weights

- normal: 400
- medium: 500
- semibold: 600
- bold: 700

## Spacing

The application uses a consistent spacing scale:

- 0: 0px
- px: 1px
- 0.5: 0.125rem (2px)
- 1: 0.25rem (4px)
- 2: 0.5rem (8px)
- 3: 0.75rem (12px)
- 4: 1rem (16px)
- 5: 1.25rem (20px)
- 6: 1.5rem (24px)
- 8: 2rem (32px)
- 10: 2.5rem (40px)
- 12: 3rem (48px)
- 16: 4rem (64px)
- 20: 5rem (80px)
- 24: 6rem (96px)

## Border Radius

- sm: 0.225rem
- md: 0.425rem
- lg: 0.625rem
- xl: 1.025rem
- full: 9999px

## Components

### Buttons

Buttons use the following variants:

- `default`: Primary color background with white text
- `destructive`: Red background with white text
- `outline`: Transparent background with border
- `secondary`: Light gray background with dark text
- `ghost`: No background or border, only on hover
- `link`: Appears as a link with underline on hover

Button sizes:

- `default`: h-9 px-4 py-2
- `sm`: h-8 px-3
- `lg`: h-10 px-6
- `icon`: size-9

### Inputs

Input fields have consistent styling with focus states that use the primary color.

### Cards

Cards have a white background with a subtle border and rounded corners.

## Responsive Design

The application uses the following breakpoints:

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

Mobile-first approach: Design for mobile first, then enhance for larger screens.

## Dark Mode

The application supports dark mode with a toggle in the UI. Dark mode colors are defined in `app/globals.css` under the `.dark` class.

## Usage Guidelines

1. Always use the defined color variables instead of hardcoding colors
2. Maintain consistent spacing using the spacing scale
3. Use the appropriate component variants for their intended purpose
4. Follow responsive design principles
5. Test all UI changes in both light and dark mode

## Implementation

The design system is implemented using:

- TailwindCSS for styling
- CSS variables for theming
- React components for UI elements

To update the design system:

1. Modify the color definitions in `lib/colors.ts`
2. Update the CSS variables in `app/globals.css`
3. Update component styles as needed
4. Document changes in this file
