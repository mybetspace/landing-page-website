# MyBetSpace Landing page

[![Netlify Status](https://api.netlify.com/api/v1/badges/2479c8a8-78e3-48cc-a79a-baca6a424432/deploy-status)](https://app.netlify.com/sites/flamboyant-clarke-7cfb2b/deploys)

MyBetSpace launch landing page. Main purpose: collecting leads. https://www.mybetspace.com

## Build Setup

```bash
# Install dependencies
$ npm install

# Copy .env file
$ cp .env.example .env

# Serve with hot reload at localhost:3000
$ npm run dev

# Serve lambda functions (api) with hot reload at localhost:9000
$ npm run lambda
```

## Deployment

Current deployment uses Netlify as hosting platform. Just push to branch master, manually or through opening a new Pull Request.

```bash
# Pushing changes to master triggers netlify auto deployment
$ git push origin master
```

## About Nuxt.js

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
