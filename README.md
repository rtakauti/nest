# Boilerplate NestJS - Equipe de Integrações

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## 📚 Description

This boilerplate is made to quickly prototype backend applications. It comes with database, logging, security, and authentication features out of the box.

NOTE: We are still at the beginning so feel free to make suggestions and pull requests.

## 🔗 URLs

| Environment | URL |
| ----------- | --- |
| Development | xxx |
| Testing     | xxx |
| Production  | xxx |
| Sonar       | xxx |

## 🚀 CI/CD

CI/CD tool link.

## 🛠️ Installation

```bash
# download dependencies
$ npm install
```

## 🔒 Environment

By default, the application comes with a config module that can read in every environment variable from the `.env` file.

```bash
# create a .env file using the .env.example
$ cp .env.example .env
```

| Key                       | Description                      | Default Value              |
| ------------------------- | -------------------------------- | -------------------------- |
| PORT                      | The application port.            | 4000                       |
| API_PREFIX                | The API base url.                | /api                       |
| API_VERSION               | The API version.                 | 1                          |
| LOG_LEVEL                 | The application log level.       | error                      |
| LOG_SILENT                | Turn log off.                    | false                      |
| SWAGGER_PREFIX            | The url endpoint for Swagger UI. | /docs                      |
| SAP_HOST                  | The SAP host                     | host.cloud.com             |
| SAP_USERNAME              | The SAP username                 | john_doe                   |
| SAP_PASSWORD              | The SAP password                 | sap_senha                  |
| SAP_SYSNR                 | The SAP system number            | 10                         |
| SAP_CLIENT                | The SAP client number            | 100                        |
| SAP_LANG                  | The SAP language                 | PT                         |
## 🏃 Running the app

```bash
# development
$ npm run start

# watch mode (recommended in development)
$ npm run start:dev

# production mode
$ npm run start:prod

# debug mode
$ npm run start:debug
```

## ✅ Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 💡 Generate Docs

The docs can be generated on-demand. This will produce a **documentation** folder with the required front-end files.

```bash
# generate docs for code
$ npm run doc

# generate docs for code and serve on http://localhost:8080
$ npm run doc:serve
```

## 🐳 Docker

Default timezone: America/Sao_Paulo

```bash
# Build an image from a Dockerfile
$ docker build -t template-nest-integration-api .

# Run the image
$ docker run -d --env-file .env --name my-integration-api -p 4000:4000 template-nest-integration-api

# Watch the logs
$ docker logs -f my-integration-api

# Stop the container
$ docker stop my-integration-api
```

## 🔦 Sonar

```bash
# Run the sonar image
$ docker-compose -f docker-compose.sonar.yml up -d

# create a .env file using the .env.example
$ cp sonar-project.properties.example sonar-project.properties

# Run the scanner
$ npm run sonar-scanner
```

## 🔊 Logs

This boilerplate comes with an integrated Winston module for logging.

see [logging.module](src/common/logging/logging.module.ts)

## 📝 Open API

Out of the box, the web app comes with Swagger; an [open api specification](https://swagger.io/specification/), that is used to describe RESTful APIs. Nest provides a [dedicated module to work with it](https://docs.nestjs.com/recipes/swagger).

**Swagger UI on [localhost](http://localhost:4000/docs)**

## ⬆️ Commitizen

[commitizen](https://github.com/commitizen/cz-cli) is a command line utility that makes it easier to create commit messages following the [conventional commit format](https://conventionalcommits.org) specification.

Use `npm run commit` instead of `git commit` to use commitizen.

**Configuration file**: [`.czrc`](.czrc).

## 👥 Stay in touch

- E-mail - [G_TI_Arq_Integracoes](mailto:G_TI_Arq_Integracoes@grupoboticario.com.br)
- Slack - [#talk-to-arquitetura-integracoes](https://grupoboticario-corp.slack.com/archives/C0179HKG07L)

## 🔨 Built With

- [NestJS](https://github.com/nestjs/nest)
- [class-validator](https://github.com/typestack/class-validator)
- [class-transformer](https://github.com/typestack/class-transformer)
- [fastify](https://github.com/fastify/fastify)
- [@fastify/helmet](https://github.com/fastify/fastify-helmet)
- [@fastify/compress](https://github.com/fastify/fastify-compress)
- [@fastify/request-context](https://github.com/fastify/fastify-request-context)

## ✔️ Roadmap

The following improvements are currently in progress:

- [ ] YOUR ROADMAP HERE
