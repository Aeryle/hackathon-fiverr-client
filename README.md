# REACT-STARTER-WCS

bootstrapper CLI for React App with basic conf for Caprover deployment.

It uses [ViteJS](https://vitejs.dev/) ⚡️

## Getting started :pushpin:

You can install it globally OR use npx instead

```bash
npx react-starter-wcs my-fresh-app

cd my-fresh-app

npm run dev

```

## Extra dependencies :pushpin:

You can add some extra dependencies during the install prompt.

Currently, none of them add the extra template files.

## Caprover :pushpin:

You can add pre-made config files if you use Caprover as your deployment solution.
Those are a Nginx config file, a Dockerfile and a `captain-definition` (needed for every Caprover app).

For CI/CD with Github Actions, see [below](#build-and-push-to-production-branch).

## GitHub Actions :pushpin:

Those create files for automate different actions, [give an eye here](https://github.com/features/actions).

### ESLint on PR :pencil2:

Running ESLint on Pull Request on `master` and `dev`.
Customize it in the `.github/workflows/eslint.yml` file.
