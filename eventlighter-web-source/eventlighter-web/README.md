# EventLighter Web

Landing page for the EventLighter mobile app.

- `/` English
- `/pl/` Polish

## Stack

React 19, TypeScript, Tailwind CSS 4, Vite.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static output is generated in `dist/`.

## Configuration

`src/config.ts`

| Key             | Description                                            |
| --------------- | ------------------------------------------------------ |
| `appStoreUrl`   | App Store listing. Badge stays inactive while empty.   |
| `googlePlayUrl` | Google Play listing. Badge stays inactive while empty. |
| `siteUrl`       | Production origin, e.g. `https://eventlighter.app`.    |

Copy for both languages lives in `src/i18n.ts`.

## Deployment

Netlify: build command `npm run build`, publish directory `dist` (see `netlify.toml`).
The `dist` folder can also be uploaded manually or served from any static host.
