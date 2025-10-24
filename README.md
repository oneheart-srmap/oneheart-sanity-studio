# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open-source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the Sanity community](https://www.sanity.io/community/join?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

## CI/CD with GitHub Actions

This repo includes a workflow at `.github/workflows/sanity-deploy.yml` that:

- Installs dependencies, lints, and builds on every push/PR to `main`.
- Automatically deploys the Studio on pushes to `main` using the Sanity CLI.

Setup required:

1. Create a token in your Sanity project (Manage > API > Tokens) with `Viewer` is sufficient for deploys, or `Editor` if also deploying GraphQL.
2. In your GitHub repository, add the following secrets:
	- `SANITY_AUTH_TOKEN`: The token value from step 1.
	- `DEPLOY_GRAPHQL` (optional): Set to `true` to also run `npm run deploy-graphql`.

The workflow uses `sanity.config.js` to determine `projectId` and `dataset` (currently `sxacwtq0` / `production`).
