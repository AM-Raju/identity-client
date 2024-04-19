# Identity - Know the best you

## Project Summery

This is a nextJS web application for a cloth store.

#### Features:

This web application have basic functionality for the user to choose dress.

In homepage there are Flash Sale, Top Categories, and Trending Products section with relevant card. You can view the details by clicking on the card.

Clicking on the category section card you will landed on a dynamic page with relevant dress images.

On Flash Sale page you can see all flash sale products. And All Dresses page displays the all products of this store.

There is also a dashboard to show all products in a table format.

This web application is fully responsive.

#### Used technologies:

- Next JS - TypeScript
- Tailwind CSS
- Daisy UI
- Express JS as server.
- MongoDB as database.

Live URL: `https://identity-client2-iota.vercel.app/`

Live server: `https://indentity-server.vercel.app/`

========================================================

### Cloning the Next JS Project

#### Install Git:

Make sure you have Git installed on your machine.

#### Clone the Repository:

Open a terminal and navigate to the directory where you want to clone the project. Run the following command.

`git clone https://github.com/AM-Raju/identity-client2`

#### Navigate to Project Directory:

Change your working directory to the cloned project folder.

` cd your-project-folder`

========================================================

### Installing Dependencies

#### Install Node.js

Ensure that you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [Node.js official website](https://nodejs.org/en).

#### Install Project Dependencies

Run the following command to install the project dependencies.

`npm install
`

#### Run the Development Server

To run the development server, use the following command.

`npm run dev
`

========================================================

## # Vite template guide (Follow if necessary)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
