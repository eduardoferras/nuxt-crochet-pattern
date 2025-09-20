https://medium.com/@gabrieldrouin/node-js-2025-guide-how-to-setup-express-js-with-typescript-eslint-and-prettier-b342cd21c30d
https://dev.to/a0viedo/nodejs-typescript-and-esm-it-doesnt-have-to-be-painful-438e

<div align="center">
<h1>Crochet Patterns</h1>
<p>
	<strong>
		Marketplace of Crochet Patterns for Clothing, Amigurumi and Special Dates.
	</strong>
</p>
<h4 align="center">
	🚧  Status: 🚀 In progress...  🚧
</h4>

[Technologies](#technologies) •
[Docker](#-development-with-docker) •
[devcontainer](#development-with-devcontainer) •
[Running Locally](#running-locally)

</div>

## Technologies

- [Nuxt](https://nuxt.com) - Vue Framework
- [Vue](https://vuejs.org)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/) - Styles
- [Vitest](https://vitest.dev) - Test
- [ESlint](https://eslint.org/) - Linter
- [Prettier](https://prettier.io/) - Code Formatter

## 💻 Development with [Docker](https://docs.docker.com/engine/install/)

`./dev` allows you to quickly run a development server and execute commands inside Docker container.

#### Set environment variables

Before running the project, you need to configure your environment variables. To do this, create a `.env` file based on the provided example:

```bash
cp .env.example .env
```

#### Start the development server

```bash
./dev start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Stop the development server

```bash
./dev stop
```

#### For more information

```bash
./dev
```

#### Alias

To make it easier to run the commands, you can add the following alias to your `~/.bashrc`, `~/.profile`, or `~/.zshrc` file.

```bash
alias dev='./dev'
```

## Running Locally

Make sure to install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
