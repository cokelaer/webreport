---
name: webreport-generator
description: Generate HTML reports using the webreport framework with automatic setup
version: 1.0
tags:
  - html
  - reports
  - web
  - templates
---

# Webreport Generator

Skill for creating HTML reports using the webreport CSS/JS framework. Auto-generates structure, links framework assets, and provides template boilerplate.

## When to Use

- Creating new HTML reports in external projects
- Setting up webreport integration
- Generating gallery/stat boxes/modal structure
- Verifying framework asset paths

## What It Does

1. **Project setup** — creates report directory structure with correct symlink/path to webreport assets
2. **Template generation** — builds full HTML boilerplate with TOC sidebar, main content area, and modal
3. **Asset verification** — checks that webreport CSS/JS are accessible from the report location
4. **Best practices** — applies styling conventions (colors, typography, spacing) documented in README.md

## Usage Examples

### Generate basic report template
```
/webreport-generator basic <report-name> <depth>
```
Creates `<report-name>/index.html` with correct relative paths from depth (e.g., depth=3 → `../../../webreport/`)

### Generate report with gallery
```
/webreport-generator gallery <report-name> <depth>
```
Adds gallery grid structure, image paths, and modal viewer boilerplate.

### Generate report with statistics
```
/webreport-generator stats <report-name> <depth>
```
Adds statistics grid with sample stat boxes.

### Link framework to external project
```
/webreport-generator link <target-project-path> <report-depth>
```
Symlink or copy webreport assets into an external project, set correct paths.

## Framework Components Reference

### CSS Classes Available
- `.container` — main wrapper
- `.stats-grid` + `.stat-box` — statistics display
- `.gallery` + `.gallery-item` — image gallery with modal
- `.section`, `.section-header` — content sections
- `.method-box` — code/method display
- `.highlight` — emphasized text
- `.modal` — image viewer (auto-managed by JS)

### JavaScript Functions
- `openImage(imgSrc)` — open image in modal
- `closeImage()` — close modal
- `generateTOC()` — auto-generate from h1/h2/h3 headings
- `updateActiveLink()` — highlight current section in TOC

Auto-init on DOMContentLoaded: TOC generation + scroll tracking.

### Design System
- Primary: `#3498db` (blue)
- Dark text: `#2c3e50` (blue-grey)
- Light bg: `#f5f5f5`, `#ecf0f1` (greys)
- Accent: `#7f8c8d` (muted)

Font: "Segoe UI", Tahoma, Geneva, Verdana

## Common Tasks

### Create multi-section report with images
1. Generate base template: `/webreport-generator basic report_name depth`
2. Add h2 section headers for TOC auto-generation
3. Add gallery: `<div class="gallery">` with `.gallery-item` + `<img onclick="openImage(...)">` children
4. Modal auto-wired; image clicks managed by webreport.js

### Verify asset paths
- CSS: `../../../webreport/css/webreport.css` (adjust `../` for depth)
- JS: `../../../webreport/js/webreport.js` (same depth)
- Test: open report in browser, check console for "Webreport framework loaded"

### Add statistics
```html
<div class="stats-grid">
  <div class="stat-box">
    <div class="label">Total Items</div>
    <div class="value">1,234</div>
  </div>
</div>
```

### Custom styling
Override variables in a project-specific CSS file loaded AFTER webreport.css:
```html
<link rel="stylesheet" href="../../../webreport/css/webreport.css">
<link rel="stylesheet" href="custom.css"> <!-- override here -->
```

## Error Handling

- **Framework not loaded** → check console; verify CSS/JS paths in `<link>` and `<script>` tags
- **Modal doesn't open** → ensure image has `onclick="openImage(...)"` and modal element has `id="imageModal"`
- **TOC empty** → h2/h3 headings must have text content; first h1 is skipped (page title)
- **Path issues** → count directory depth; `../` is one level up per `../`

## Framework Limits

- TOC auto-gen: h1/h2/h3 only (h4+ ignored)
- Gallery: no lazy-load (all images load on page)
- Modal: single image viewer (not carousel)
- Sidebar: 220px fixed width (no responsive collapse on mobile)

For multi-page reports, create separate HTML files with same framework; cross-link manually or with JS nav.

---

**Framework repo:** `/home/cokelaer/Work/github/webreport`  
**Main docs:** see README.md in repo root
