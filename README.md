# Oleksii - Creative Technologist

Cinematic single-page portfolio: hall atmosphere, liquid-glass bio, orbital project cards. Vanilla HTML/CSS/JS - no build step.

## Open locally

```bash
cd /workspace/oleksii-portfolio
python3 -m http.server 8765 --directory .
```

Visit: http://127.0.0.1:8765/

## Files

| Path | Role |
|------|------|
| `index.html` | Structure, bio copy, Olivia modal |
| `styles.css?v=wow41` | Hall stage, neon light-push, glass, orbit, mobile stack |
| `main.js?v=wow41` | Projects, polar placement + exclusion, hover, parallax, particles |
| `assets/hall.jpg` | Full-bleed hall background |

## Orbit exclusion

On desktop (≥861px), cards are placed with polar coordinates around the bio center. Each card’s box is pushed outward along its ray until it clears the bio bounding box **plus 48px padding**. Layout recomputes on resize, font load, and window load. Below 861px, cards stack under the bio (same glass language).

## Accessibility

- Skip link, keyboard focus rings, Olivia dialog with Escape / restore focus
- `prefers-reduced-motion: reduce` disables parallax, particles, float, light travel, cursor spark, badge shimmer

## Notes

- YouTube thumbnails load from `img.youtube.com` (needs network)
- External links use `target="_blank"` `rel="noopener noreferrer"`
