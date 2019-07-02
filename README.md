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

  knex init
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
Make a migration
  ```shell
  knex migrate:make initial
  ```

  ```shell
  ```


  ```shell
  npm install
  ```


  ```shell
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

In order to see your application running on production:

1. From the command line, run `npm run build`.

2. Commit and push your application to GitHub.

3. Visit your repository on Github

4. Go to Settings

5. Under the Github Pages section of Options, select 'master' as your source and click `Save`

Be sure to `npm run build` and commit before each push to master. A few seconds after you push up, you should be able to see your application at <https://your-github-username.github.io/quantified-self-fe>.

## Built With

* [JavaScript](https://www.javascript.com/)
* [jQuery](https://jquery.com/)
* [Express](https://expressjs.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://chaijs.com/)
