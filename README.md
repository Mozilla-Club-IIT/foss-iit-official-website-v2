# FOSS IIT Website V2

[![Netlify Status](https://api.netlify.com/api/v1/badges/60e43ae2-6974-46d6-aa1a-16d2d11c24fb/deploy-status)](https://app.netlify.com/projects/mozilla-iit-v2-preview/deploys)

This repository holds the sourcecode for the [Mozilla Campus Club and the FOSS Community of IIT](https://mozilla-iit.org).

## Prerequisites

This project includes a [Nix flake](flake.nix) that provides a reproducible development environment, ensuring all contributors use the same set of tools and dependencies.

### For Nix Users

If you have [Nix](https://nixos.org/download.html) installed with [flakes enabled](https://nixos.wiki/wiki/Flakes#Enable_flakes), you can bypass the manual setup of prerequisites.

For the best development experience, we recommend using [direnv](https://direnv.net/) with [nix-direnv](https://github.com/nix-community/nix-direnv) to automatically load the development environment when you enter the project directory.

1. **Install `direnv` and `nix-direnv`**: Follow the installation instructions for your system.
2. **Hook `direnv` into your shell**: For `fish` shell, add `status --is-interactive && direnv hook fish | source` to your `~/.config/fish/config.fish`. For other shells, follow the `direnv` documentation.
3. **Enable `nix-direnv`**: Add `source <(nix-direnv direnv hook)` to your shell's startup file (e.g., `~/.config/fish/config.fish`).
4. **Allow `direnv` in the project**: Run `direnv allow` in the project root.

Once set up, `direnv` will automatically activate the Nix environment whenever you `cd` into the project, providing you with the correct versions of Node.js and pnpm.

### Manual Setup

If you are not using Nix, ensure you have the following installed:

- **Node.js**: Version 18 or higher.
- **pnpm**: This project uses `pnpm` as the package manager. To install it, you first need to enable `corepack`, which is bundled with Node.js. Run the following command in an elevated terminal:
  ```bash
  corepack enable
  ```
  Then, you can use `pnpm` globally:
  ```bash
  pnpm -v
  ```
  For more details, refer to the [official Corepack documentation](https://nodejs.org/api/corepack.html).

## Development

1. **Install Dependencies**:
   ```bash
   pnpm install
   ```

2. **Run the Development Server**:
   ```bash
   pnpm dev
   ```
   This will start the Next.js development server with Turbopack on [http://localhost:3000](http://localhost:3000).

3. **Run Prismic Slice Machine**:
   To edit and create new Prismic slices, run:
   ```bash
   pnpm slicemachine
   ```
   This will open the Slice Machine interface, which is an invaluable tool for content modeling.

## Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts a production server.
- `pnpm lint`: Lints the codebase using ESLint.
- `pnpm fmt`: Formats the code using dprint.
- `pnpm slicemachine`: Starts the Prismic Slice Machine.

**Important**: Always run `pnpm fmt` before committing your changes to maintain code consistency.

## Project Structure

Here is an overview of the project's structure:

```
.
├── customtypes/      # Prismic Custom Type models
├── public/           # Static assets (images, fonts, etc.)
├── src/
│   ├── app/          # Next.js App Router pages and layouts
│   ├── assets/       # Static assets used within components
│   ├── components/   # Reusable React components
│   ├── constants/    # Site-wide constants (links, data, etc.)
│   ├── slices/       # Prismic Slices components
│   ├── types/        # TypeScript type definitions
│   ├── utils/        # Utility functions
│   └── prismicio.ts  # Prismic client configuration
├── next.config.mjs   # Next.js configuration
├── unocss.config.ts  # UnoCSS configuration
├── tsconfig.json     # TypeScript configuration
├── flake.nix         # Nix flake for reproducible environments
└── ...
```

### Key Directories

- **`src/app`**: Contains all the routes of the application, following the Next.js App Router convention. Each folder represents a URL segment.
- **`src/components`**: Home to all the general-purpose React components like buttons, cards, and layouts.
- **`src/slices`**: Contains the React components for Prismic Slices. These are mapped to the Slice models defined in Prismic.
- **`customtypes`**: Defines the schema for different content types in Prismic (e.g., a blog post, an event page).
- **`public`**: For static files that are served directly, like images and icons.

### Configuration Files

- **`next.config.mjs`**: Configuration for the Next.js framework.
- **`unocss.config.ts`**: Configuration for UnoCSS, the utility-first CSS framework used in this project.
- **`slicemachine.config.json`**: Configuration for Prismic's Slice Machine.
- **`dprint.json`**: Configuration for the `dprint` code formatter.
- **`flake.nix`**: Defines a reproducible development environment using Nix.
