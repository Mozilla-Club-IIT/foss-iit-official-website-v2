## FOSS IIT Website

### Prerequisites

- nodejs@18 or up
- You need to enable corepack bundled with Node.js. To enable, run `corepack enable` in an elevated terminal. Further details are available [here](https://nodejs.org/api/corepack.html#enabling-the-feature).

### Publishing Blog Content

Read through [this](./src/app/blogs/_data/README.md) document.

### Keep in mind

- Always use the `pnpm` package manager instead of `npm` or `yarn`.
  - `npm install` -> `pnpm i`
  - `npm update` -> `pnpm up`
  - `npm install <package>` -> `pnpm add <package>`
  - And so forth...

- Always run `pnpm fmt` before committing.
