

## Problem

The `FadeInScale` animation on the hero image is not visible because:

1. The hero image is already in the viewport when the page loads
2. `useInView` detects it as "in view" immediately
3. Framer Motion skips from `initial` to `animate` so fast the user never sees the transition

The other sections (Events cards, Paradigm cards, DesignSystem, etc.) work because they start off-screen and the scroll triggers the animation visibly.

## Solution

Modify `FadeInScale` to handle above-the-fold elements by adding a small mount delay. This ensures the component renders in its `initial` state (opacity: 0, scale: 0.9) first, then animates after a brief tick -- even when already in view.

### Technical Details

**File: `src/components/FadeInScale.tsx`**

Add a `mounted` state that starts `false` and flips to `true` after mounting. The animation triggers when **both** `mounted` and `isInView` are true. This gives the browser one render cycle to paint the initial state before animating, making the transition visible for elements already in the viewport.

```tsx
const [mounted, setMounted] = React.useState(false);
const ref = React.useRef(null);
const isInView = useInView(ref, { once: true });

React.useEffect(() => {
  const timer = setTimeout(() => setMounted(true), 50);
  return () => clearTimeout(timer);
}, []);

// animate only when both mounted and in view
animate={mounted && isInView ? { opacity: 1, scale: 1 } : {}}
```

This fix is backward-compatible -- all existing usages (Events, Paradigm, DesignSystem, ExploreProducts, Team) will continue to work exactly the same since they only enter view after mount anyway.
