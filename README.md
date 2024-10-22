# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

fetch categories in app.vue
put categories in state
https://nuxt.com/docs/getting-started/state-management
use fetched categories in tool bar



Anthony Ngure
9:58 AM
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "printWidth": 112,
  "arrowParens": "always",
  "vueIndentScriptAndStyle": true,
  "bracketSameLine": true,
  "bracketSpacing": true
}
node_modules/
dist/
.nuxt/
*.log
Anthony Ngure
9:59 AM
-----------------------
node_modules/
dist/
.nuxt/
*.log
----------------------------------------------
{
  "editor.formatOnSave": true, // Format files on save
  "editor.defaultFormatter": "esbenp.prettier-vscode", // Use Prettier as the default formatter
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
Anthony Ngure
10:00 AM
npx prettier --write .