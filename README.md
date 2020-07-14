# DRDB API
> Developer Resources Database API

## Install

Requirements:
- NodeJS
- yarn
- postgres DB instance

Install dependencies
```sh
yarn
```

Add database config
- Create `.env` based on `.env.example`
- Update dev DB information

Run the api using
```sh
yarn start
```

You can now access on [https://localhost:4000/graphql](https://localhost:4000/graphql)

## Make requests

Currently the following are in play

### Auth (register/login/me)

You can register, login and get your details using the above mutation/queries. See schema docs for input information

### Videos (videos/createVideo/updateVideo/deleteVideo)

You can do some basic CRUD for Videos currently. See schema docs for input information

## Deploy

TBD