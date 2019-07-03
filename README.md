# Quantified Self

## Initial Setup
Package
```shell
npm install
npm audit fix
```
Knex
  ```shell
  The primary target environment for Knex is Node.js, you will need to install the knex library, and then install the database library: pg for PostgreSQL.

  npm init --yes
  npm install knex -g
  npm install knex --save
  npm install express -g
  npm install express --save
  npm install pg --save
  npm install body-parser --save


```
setup pg database
```pg
psql
CREATE DATABASE tracker_development;
CREATE DATABASE tracker_production;
CREATE DATABASE tracker_staging;
```
to access one of the databases:
```pg
psql tracker_development
\dt
```
  ```
Migrate latest
  ```shell
knex migrate:latest
  ```
seed the database
  ```shell
knex seed:run
  ```

## Running the Server Locally

To see your code in action locally, you need to fire up a development server. Use the command:

```shell
npm start
```

Once the server is running, visit in your browser:

* `http://localhost:8080/` to run your application.

You will need to make sure that your Quantified Self API is also running at `http://localhost:3000`

## GitHub Pages Setup

This site will be served from GitHub Pages in production.

From the command line, run `npm run build`.

## Built With

* [JavaScript](https://www.javascript.com/)
* [jQuery](https://jquery.com/)
* [Express](https://expressjs.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://chaijs.com/)
* [PostgreSQL](https://www.postgresql.org/docs/)
* [Knex](https://knexjs.org/)

### References

knex setup: migrations, seeds
```https
https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261
```
knex setup guide
```https
https://gist.github.com/NigelEarle/80150ff1c50031e59b872baf0e474977
```
Express App with Knex
```https
https://github.com/turingschool/backend-curriculum-site/blob/gh-pages/module4/lessons/express_knex.md
```
