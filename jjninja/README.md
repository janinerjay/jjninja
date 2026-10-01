# jjninja

Personal website for Janine Jay, built with React and [Vite](https://vite.dev).

## Deploy to Github Pages

```
npm run predeploy
npm run deploy
```
Then go back to settings and make sure the DNS name is up to date

## Available Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
The page reloads when you make changes.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run preview`

Serves the production build locally to check it before deploying.

## Updating the content

All resume content lives in `src/resume.js`. The page, the code view, the
terminal and the console object all read from it, so edit it there once.

## Easter eggs

Everything under `src/fun/` is optional developer fun:

- **Console:** a greeting plus a `janine` object (`janine.help()`).
- **Code view:** the `</>` button in the nav re-renders the page in the style
  of the developer resume.
- **Terminal:** press `` ` `` or use the footer link. Type `help`.
- **Konami code:** ↑ ↑ ↓ ↓ ← → ← → B A.
- **View source:** a comment at the top of `index.html`.
- **Static files:** `public/humans.txt`, `public/robots.txt` and
  `public/404.html` (GitHub Pages serves the 404 page automatically).
