# React D3 Course Assignments

Assignments for the React Graph Gallery React + D3 dataviz course:
https://www.react-graph-gallery.com/react-d3-dataviz-course

Each assignment should live in its own folder under `docs/` and be
deployable as a standalone GitHub Pages webpage.

## Folder Structure

```text
.
├── docs/
│   ├── 00-template/
│   └── assignment-name/
├── shared/
│   ├── assets/
│   ├── components/
│   ├── data/
│   └── hooks/
└── .github/
    └── workflows/
```

## Conventions

- Put assignment source code in `docs/<number>-<short-name>/`.
- Keep each assignment independently runnable and deployable.
- Put reusable React components, hooks, assets, and example data in `shared/`.
- Put GitHub Pages deployment workflows in `.github/workflows/`.

## Assignment Naming

Use lowercase folder names with a two-digit prefix:

```text
docs/01-first-chart/
docs/02-responsive-chart/
docs/03-interactions/
```
