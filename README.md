<div align="center">
<h1>Crochet Patterns</h1>
<p>
	<strong>
		Digital Catalog of Crochet Patterns for Clothing, Amigurumi, and Special Dates.
	</strong>
</p>
<h4 align="center">
	🚧  Status: 🚀 In progress...  🚧
</h4>

[Technologies](#technologies) •
[Environment Variables](#environment-variables) •
[Docker](#-development-with-docker) •
[Running Locally](#running-locally)

</div>

## Technologies

### Web

- Nuxt - Vue Framework
- Typescript
- Sass - Styles
- Vitest - Test
- ESlint - Linter
- Prettier - Code Formatter

### API
- Express.js - Nodejs Framework
- Typescript
- Biome - Linter and Formatter
- Vitest - Test
- BullMQ - Queues
- Redis

### Mobile
- Expo - React Native Framework
- Typescript
- Biome - Linter and Formatter

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file.

```bash
# Backend
cp apps/backend/.env.example apps/backend/.env

# Web
cp apps/frontend/.env.example apps/frontend/.env
```

## 💻 Development with [Docker](https://docs.docker.com/engine/install/)

`./dev` allows you to quickly run a development server and execute commands inside Docker container.

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
pnpm install --frozen-lockfile
```

Run the development server:

```bash
pnpm --filter backend --filter web dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
