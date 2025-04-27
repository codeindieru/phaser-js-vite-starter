# Phaser.js Vite Starter

A modern, optimized, and developer-friendly starter kit for creating HTML5 games using Phaser 3, TypeScript, and Vite.

## Features

- 🚀 **Vite** - Blazing fast build tool with instant hot module replacement (HMR)
- 📝 **TypeScript** - Type safety and improved developer experience
- 🎮 **Phaser 3** - Powerful HTML5 game framework
- 🏗️ **Modern Structure** - Clean, organized project structure with scenes system

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

```bash
# Clone the repository (or use it as a template)
git clone https://github.com/codeindieru/phaser-js-vite-starter.git
cd phaser-js-vite-starter

# Install dependencies
npm install
# or
yarn install
```

## Development

Start the development server with hot-reload:

```bash
npm run dev
# or
yarn dev
```

Your game will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

Build the project for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory and can be deployed to any static hosting service.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
/
├── src/                    # Source files
│   ├── scenes/             # Phaser game scenes
│   │   └── BootScene.ts    # Initial boot scene
│   ├── index.html          # HTML entry point
│   └── index.ts            # Main game configuration
├── public/                 # Static assets
├── dist/                   # Build output directory
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Customization

- Modify `src/index.ts` to adjust game configuration
- Add new scenes in the `src/scenes` directory
- Place assets in the `public` directory

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Phaser](https://phaser.io/) - HTML5 Game Framework
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale 