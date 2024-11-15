# Steps

## Install [v]

Install with Vite: `npm create vite@latest`
Inside the project folder, install dependencies: `npm install`
Install tailwind CSS with Vite (Tailwind CSS dependencies): `npm install -D tailwindcss postcss autoprefixer`
Generate `tailwind.config.js` and `postcss.config.js` files: `npx tailwindcss init -p`

## Installing router (TO CHECK)

`npm install react-router-dom` [v]

## Using router

- in main add: `import { BrowserRouter } from 'react-router-dom'`
- wrap `<Add/>` component using `<BrowserRouter>`

BEFORE:

```js
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

AFTER:

```js
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## Adding Display component to App.jsx [Here I get blank page]
