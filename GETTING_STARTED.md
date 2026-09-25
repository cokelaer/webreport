# Getting Started with Webreport Framework

## For Report Authors (Using Claude Code)

### Generate a New Report

```bash
/webreport-generator basic my_report 3
```

This creates a report template with correct relative paths for a project 3 directories deep.

### Available Generators

**Basic report** (empty template)
```
/webreport-generator basic <name> <depth>
```

**Report with gallery** (image grid + modal)
```
/webreport-generator gallery <name> <depth>
```

**Report with statistics** (stat boxes + grid)
```
/webreport-generator stats <name> <depth>
```

**Integration into external project**
```
/webreport-generator link <project-path> <report-depth>
```

### Directory Depth Examples

- Project root (`/my-project/reports/index.html`) → depth = 2
- Nested (`/my-project/data/analysis/report/index.html`) → depth = 4
- Framework at `/path/to/webreport`

## For Framework Developers

### Structure

```
webreport/
├── css/webreport.css          # Styles (220px sidebar + responsive)
├── js/webreport.js            # TOC generation + image modal
├── templates/
│   └── sample-report.html     # Full example (all components)
├── .claude/skills/
│   └── webreport-generator.md # Claude Code skill definition
├── README.md                   # Component reference
└── GETTING_STARTED.md          # This file
```

### Extending the Framework

**Add new CSS component:**
1. Edit `css/webreport.css`
2. Document in README.md (Components section)
3. Add to sample template if widely useful

**Add new JavaScript feature:**
1. Edit `js/webreport.js`
2. Document function signature in README.md
3. Ensure DOMContentLoaded hook doesn't conflict

**Add new template variant:**
1. Create in `templates/` with clear naming
2. Reference in GETTING_STARTED.md
3. Update skill docs if new generator needed

### Design Principles

- **Lightweight:** No dependencies, ~5KB CSS + 3KB JS
- **Semantic HTML:** Uses standard heading hierarchy (h1-h3)
- **Accessible:** Native HTML modals, keyboard support
- **Reusable:** Framework copied/symlinked into external projects
- **Consistent:** Shared color palette and typography across reports

### Testing New Features

1. Develop in webreport directory
2. Test with `templates/sample-report.html` locally
3. Update sample template with new features
4. Commit with detailed message

### Maintenance

- Keep CSS self-contained (no preprocessor)
- Avoid breaking JS API changes (functions public)
- Update skill docs when generators change
- Track projects using framework in README.md

## Migration Guide (Adopting Webreport)

If you have an existing report:

1. Copy `css/webreport.css` and `js/webreport.js` to your project
2. Add `<link>` and `<script>` tags to your HTML
3. Wrap content in `<main><div class="container">` 
4. Create `<div id="toc-sidebar">` with empty `<ul id="toc-list">`
5. Create `<div id="imageModal" class="modal">` (see sample template)
6. Use semantic h2/h3 headings (TOC auto-generated)
7. Update image links: `onclick="openImage('path/to/img')"`

Most existing styles will auto-apply. Custom tweaks go in project-specific CSS loaded after webreport.css.

## Common Issues

| Problem | Solution |
|---------|----------|
| Framework not loading | Check console; verify CSS/JS paths in `<link>` / `<script>` |
| TOC empty | Use h2/h3 headings with text; first h1 is page title (skipped) |
| Modal doesn't open | Ensure `id="imageModal"` exists; images need `onclick="openImage(...)"` |
| Wrong font/colors | Framework CSS loaded after project CSS? Load webreport.css first |
| Sidebar overlaps content | Check `margin-left: 220px` on `<main>`; adjust if sidebar width changed |

## Examples

See `templates/sample-report.html` for:
- Complete HTML structure
- Stats grid usage
- Image gallery with captions
- Method/code boxes
- Highlight boxes
- Table styling
- Multiple sections (h2/h3 hierarchy)

Open in browser to see sidebar TOC auto-generate and image modal work.

---

**Questions?** Check README.md for component reference or search the skill docs: `/webreport-generator`
