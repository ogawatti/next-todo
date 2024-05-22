# Next TODO Application

This sample app assumes that ALB and Amazon Cognito authentication has been passed.

## Technology used

- Next.js (14.2.x)
- Tailwind CSS (3.x)
- Prisma (5.x)
- MySQL (8.x)

## Installation

```
$ yarn
```

## Setup

```
$ docker-compose up --build
$ yarn db:migrate
$ yarn db:migrate:test
```

## Running the app

```
$ docker-compose up --build
$ yarn dev
```

## Test

現状、以下はテストできません。

- Async Server Component
- ServerActions (actionが削除される)

またこれらに関するWarningが出るため `--silent` オプションをつけて実行しています。

```
$ yarn test
```

## Lint

```
$ yarn lint
```
