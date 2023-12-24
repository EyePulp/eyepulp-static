# eyepulp.github.io


## 🚀 Project Structure

This is an astro project, so things are laid out a bit like this:

```
/
├── src/
│   ├── public/
│   │   └── favicon.svg
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── .github/
├── .gitignore
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn run dev`             | Starts local dev server at `localhost:3000`      |
| `yarn run build`           | Build your production site to `./dist/`          |
| `yarn run preview`         | Preview your build locally, before deploying     |
| `yarn run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn run astro -- --help` | Get help using the Astro CLI                     |

## Built with:
- [Astro](https://docs.astro.build)
