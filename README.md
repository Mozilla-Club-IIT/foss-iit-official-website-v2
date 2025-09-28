[![Netlify Status](https://api.netlify.com/api/v1/badges/60e43ae2-6974-46d6-aa1a-16d2d11c24fb/deploy-status)](https://app.netlify.com/projects/mozilla-iit-v2-preview/deploys)

## FOSS IIT Website

### Prerequisites

- nodejs@18 or up
- You need to enable corepack bundled with Node.js. To enable, run `corepack enable` in an elevated terminal. Further details are available [here](https://nodejs.org/api/corepack.html#enabling-the-feature).

### Keep in mind

- Always use the `pnpm` package manager instead of `npm` or `yarn`.
  - `npm install` -> `pnpm i`
  - `npm update` -> `pnpm up`
  - `npm install <package>` -> `pnpm add <package>`
  - And so forth...

- Always run `pnpm fmt` before committing.
