
## Getting Started

First, install dependencies:

```bash
npm install
```


run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Figma Sync
`export-tokens.json` is generated by token.studio in Figma. The tokens inside `/tokens` are generated by a GitHub action and converted to css variables.

## Notes
- Hot-reload vanilla-extract not working, so refresh after change is necessary