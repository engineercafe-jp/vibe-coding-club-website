# High-End Editorial Design System: The Digital Curator

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Curator."** We are moving away from the cluttered, "boxed-in" aesthetic of traditional tech platforms and toward a high-end editorial experience. This system prioritizes intellectual clarity, premium restraint, and intentional asymmetry.

To achieve the "Apple" or "Stripe" level of polish, we do not rely on borders to contain ideas; we rely on **Ample Whitespace** (using the `20` and `24` spacing tokens) and **Tonal Depth**. The layout should feel like a high-end gallery—objects breathe, typography leads the eye, and the interface recedes to let the community’s content shine.

## 2. Colors & Surface Architecture
Our palette is rooted in a "Pure" foundation, using light grays and whites to create a sense of infinite space, punctuated by authoritative Deep Purple and Indigo.

### The "No-Line" Rule
**Standard 1px borders are strictly prohibited for sectioning.** To separate content, use background shifts. For example, a main content area in `surface` (#f8f9fa) transitions into a footer or sidebar using `surface-container-low` (#f3f4f5). This creates a seamless, modern flow that feels engineered rather than "templated."

### Surface Hierarchy & Nesting
Depth is achieved through a "Physical Layering" model. Imagine sheets of premium vellum stacked on top of each other:
*   **Base Layer:** `surface` (#f8f9fa) – The infinite canvas.
*   **Secondary Content:** `surface-container-low` (#f3f4f5) – Used for subtle grouping.
*   **Interactive Cards:** `surface-container-lowest` (#ffffff) – Sitting on top of a `low` container to create a natural "lift."
*   **Persistent Elements (Nav/Modals):** Use `surface` with a 70% opacity and a `backdrop-blur` of 20px (Glassmorphism) to maintain context.

### Signature Textures
Avoid flat `#6200EE` for large hero areas. Instead, apply a subtle linear gradient from `primary` (#4800b2) to `primary_container` (#6200ee) at a 135-degree angle. This adds "visual soul" and prevents the tech-heavy purple from feeling sterile.

## 3. Typography: The Editorial Voice
We utilize a dual-font strategy to balance high-tech precision with humanistic warmth. While the system uses `Zen Kaku Gothic New` for a modern, clean feel, we map it across two functional families: `Manrope` for impact and `Inter` for utility.

*   **Display & Headlines (Manrope):** Use `display-lg` (3.5rem) with negative letter-spacing (-0.02em) for hero sections. This creates a dense, authoritative "Stripe-like" headline.
*   **Body (Inter):** Use `body-lg` (1rem) for long-form content. Ensure a line height of 1.6 to maintain the "Editorial" feel.
*   **Labels (Inter):** Use `label-md` in `on-surface-variant` (#494456) for metadata. This keeps the hierarchy clear without needing bold weights.

## 4. Elevation & Depth
In this system, shadows are a last resort, not a default. We convey importance through **Tonal Layering**.

*   **The Layering Principle:** A `surface-container-highest` element should never have a shadow if it sits on a `surface-dim` background. The color contrast is enough to define the boundary.
*   **Ambient Shadows:** For floating elements (like a dropdown or a primary modal), use a "Super-Diffuse" shadow:
    *   `box-shadow: 0 20px 50px rgba(25, 28, 29, 0.06);`
    *   The shadow color is derived from `on-surface` at a very low opacity to mimic natural light.
*   **The "Ghost Border" Fallback:** If a UI element (like a search bar) disappears into the background, use a 1px border of `outline-variant` at **15% opacity**. It should be felt, not seen.

## 5. Components

### Buttons
*   **Primary:** A pill-shaped (`rounded-full`) button using the `primary` to `primary-container` gradient. No border. Text in `on-primary` (#ffffff).
*   **Secondary:** `surface-container-high` background with `primary` text. This feels more integrated into the page than a ghost button.
*   **Tertiary:** Pure text with a 2px underline that appears only on hover.

### Cards & Containers
*   **The "No-Divider" Rule:** Never use horizontal lines to separate list items. Use spacing (`spacing-4` or `6`) and subtle background color shifts.
*   **Interaction:** On hover, a card should transition from `surface-container-lowest` to `surface-bright`, with a subtle scale increase (1.02x).

### Input Fields
*   **Soft Minimalist Inputs:** Use `surface-container-lowest` for the field background. Instead of a heavy border, use a 2px bottom-border of `primary` that animates from the center outward when the field is focused.

### Global Navigation
*   **The Glass Header:** Use a fixed top navigation with `surface` at 80% opacity and a heavy blur. This allows the community content to scroll elegantly beneath it, creating a sense of depth and transparency.

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace extreme whitespace. If you think there is enough space, add 20% more.
*   **Do** use asymmetrical layouts. Place a headline on the left and a description on the right with a `spacing-24` gap to create an editorial rhythm.
*   **Do** use `primary_fixed_dim` (#cfbdff) for subtle highlights in dark-mode-ready components.

### Don't:
*   **Don't** use 100% black (#000000) for text. Always use `on-surface` (#191c1d) to maintain a premium, softer look.
*   **Don't** use standard "Material Design" shadows. They are too heavy for this "Apple-esque" aesthetic.
*   **Don't** use sharp corners. Every container should have at least `rounded-md` (0.375rem) or `rounded-xl` (0.75rem) to feel approachable and high-end.