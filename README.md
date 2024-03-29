# Svelte Typescript Boilerplate

This is a project template for [Svelte](https://svelte.dev) apps.

### Featuring
- [Svelte](https://svelte.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Svelte Testing Library](https://testing-library.com/docs/svelte-testing-library/intro/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Rollup](https://rollupjs.org)
- [i18n](https://www.npmjs.com/package/svelte-i18n)


> For boilerplate with [Tailwind support click here](https://github.com/wadehrarshpreet/svelte-typescript-boilerplace/tree/tailwind)

# Pre-requisite

- Install [NodeJS 16.10+](https://nodejs.org/en/download/)
- Install Yarn 1.2x
    ```sh
    npm install --global yarn
    ```

## Get started

- Clone the Repo
    ```bash
    git clone https://github.com/wadehrarshpreet/svelte-typescript-boilerplace.git <project-name>
    ```

- go to project directoy and install dependencies
    ```bash
    cd <project-name> && yarn
    rm -rf .git # remove .git
    git init # setup new git repo
    ```

- Start dev server
    ```bash
    npm run dev
    ```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

----

<br />

> If you want to use `baseUrl` or `path` aliases within your `tsconfig`, you need to set up `@rollup/plugin-alias` to tell Rollup to resolve the aliases. For more info, see [this StackOverflow question](https://stackoverflow.com/questions/63427935/setup-tsconfig-path-in-svelte).


<br />

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```

### With [firebase](https://firebase.google.com/)

Install `firebase-cli` if you haven't already:

```sh
curl -sL https://firebase.tools | bash
```

Login to your account
```sh
firebase login
```

Then, from within your project folder:
```sh
firebase init hosting # set public folder to deploy
npm run build
firebase deploy
```

## Links
* [https://wadehrarshpreet.com](https://wadehrarshpreet.com)
* [LinkedIn](https://www.linkedin.com/in/wadehrarshpreet/)
* [Twitter](https://twitter.com/wadehrarshpreet/)

## License

[MIT](LICENSE.md)
