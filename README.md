# Just another react boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app),
and written with [TypeScript](https://www.typescriptlang.org).

[Prettier](https://prettier.io),
[husky](https://github.com/typicode/husky)
and [lint-staged](https://github.com/okonet/lint-staged)
watching for code formatting.

Styles and styled component got from [Material UI](https://material-ui.com).

[Mobx State Tree](https://mobx-state-tree.js.org) used as application state holder.

For split application per pages used [React Router Dom](https://reactrouter.com/web/guides/quick-start).

## Installation

Just click big green button "Use this template" up ⬆

Or you can clone this repo directly:

```bash
git clone git@github.com:Bolid1/react-typescript-mui-mobx-boilerplate.git my-project
```

The next step is install dependencies and start coding:

```bash
cd my-project && yarn install
```

## Contributing

Contributors are welcome, I need your help to make this template better 🙂

## Directories and files structure

You can change your directories structure as you wish,
but now I provide your following directories:

### `public/index.html`

Entrypoint of your application.
There are some modifications from standard [CRA index.html](https://github.com/facebook/create-react-app/blob/master/packages/cra-template-typescript/template/public/index.html):

- `minimum-scale=1` added to meta `viewport`
- [Loader](@link https://loading.io/css/) added to `root` element, because I hate white pages on [slow internet](#slow-internet-problem)

### `src/index.tsx`

JS entrypoint of your application.
There are many modifications from standard [CRA index.tsx](https://github.com/facebook/create-react-app/blob/master/packages/cra-template-typescript/template/src/index.tsx):

- Every app component loaded with [lazy loading](https://reactjs.org/docs/concurrent-mode-suspense.html),
  it is our duty to users.
- When the main application chunk become loaded, loader change it's color to another,
  to show user that loading has some progress.
- Application providers, baseline and application itself loads independently.

### `src/App.tsx`

Here we store the application layout:

- Top menu available only in mobile application, but in future
  it will become available as context menu.
- Left menu persistent on large screens, and become temporary on small screens.
- Pages wrapped by `Main` component.

### `src/Component`

Here we store application components.

### `src/config`

Application configuration should be stored here.

### `src/Page`

The place for your pages.

### `src/Provider`

Application providers.

### `src/Store`

The palace of application business logic 👑

## Slow internet problem

> Disclaimer. It's just my opinion,
> if your think another way, you can just remove all lazy
> and Suspense usages in your project.

When my internet connection is very slow (for example in the underground),
I prefer to use installed application in my phone to interact.

This is because web applications are becoming extremely unresponsive.
They are very difficult to use.

As a web developer, I believe that the picture can change
with [Progressive Web Apps](https://web.dev/progressive-web-apps/).

So, the first step - is make our application as more responsive as we can:

- We should show to the user when load is in progress,
- We should show to the user when the request failed and show the reason of failure,
- We should react on "no internet" event,
- Finally, we can sync state of application not instantly, but when the connection to internet established.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn analyze`

Source map explorer analyzes JavaScript bundles using the source maps. This helps you understand where code bloat is coming from.

Before usage, you should build the application:

```bash
yarn build
yarn analyze
```

### `yarn style`

To format your code with prettier just run this command.

## Learn More

You can know more by this links:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- [React documentation](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org)
- [Prettier](https://prettier.io)
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
- [Material UI](https://material-ui.com)
- [Mobx State Tree](https://mobx-state-tree.js.org)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
