# Webreport Framework

Common CSS and JavaScript for coherent HTML reports across projects.

## Features

- **Dynamic TOC sidebar**: Fixed left sidebar auto-generated from headings
- **Sticky navigation**: Stays visible while scrolling
- **Active link highlighting**: Shows current section as you scroll
- **Smooth scroll navigation**: Click TOC links to jump to sections
- **Responsive layout**: Container with max-width 1200px, centered
- **Statistics grid**: Grey (#ecf0f1) stat boxes with left border
- **Table styling**: Blue (#3498db) headers with white text
- **Image gallery**: Click to enlarge modal with keyboard/click-outside close
- **Modal viewer**: Full-screen image enlargement (93vh max height)
- **Dark theme for modal**: Semi-transparent dark overlay
- **Consistent typography**: "Segoe UI" font stack

## Quick Start

Use Claude Code's webreport skill for automated setup:
```
/webreport-generator basic <report-name> <depth>
```

Or manually link in your HTML:

```html
<link rel="stylesheet" href="../../../webreport/css/webreport.css">
<script src="../../../webreport/js/webreport.js"></script>
```

Adjust `../../../webreport/` path based on your project depth.

See `templates/sample-report.html` for a complete working example.

## Components

### CSS Classes

- `.container`: Main wrapper div
- `.stats-grid`: Grid layout for statistics
- `.stat-box`: Individual stat box with label + value
- `.gallery`: Image gallery grid
- `.gallery-item`: Clickable image container
- `.section`: Content section with padding/shadow
- `.section-header`: Header for content sections
- `.method-box`: Code/method display box
- `.modal`: Image viewer modal
- `.highlight`: Emphasized text box

### JavaScript Functions

- `openImage(imgSrc)`: Open image in modal
- `closeImage()`: Close modal
- Auto-close on Escape key
- Auto-close on click outside modal

## File Structure

```
webreport/
├── css/
│   └── webreport.css       # Common stylesheet
├── js/
│   └── webreport.js        # Common JavaScript
├── templates/              # Template HTML (future)
└── README.md
```

## Colors

- Primary: #3498db (blue)
- Background: #f5f5f5 (light grey)
- Stat boxes: #ecf0f1 (grey)
- Text: #2c3e50 (dark blue-grey)
- Accent: #7f8c8d (muted grey)

## Developer Tools

### Claude Code Skill
Use the `/webreport-generator` skill for:
- Generating HTML templates with correct asset paths
- Creating gallery/statistics/modal structures
- Setting up reports in external projects
- Verifying framework integration

### Templates
- `templates/sample-report.html` — Full working example with all components
- Shows best practices: sidebar TOC, stats grid, gallery, tables, sections
- Copy and customize for new reports

## Projects Using This Framework

- paper_SicilianHybrids/analysis/NewAnalysis (DB1 report)
- (Add more as adopted)
