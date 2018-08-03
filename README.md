# rantudot-official-page

* [Basic](#basic)

## Basic

* This project is based on `nextjs`
  > See [nextjs in github](https://github.com/zeit/next.js/)
* Run following command to start `development mode`
  ```bash
  $ npm install | $ yarn install
  $ npm run dev | $ yarn dev
  ```
* Run these command to get the `website static files`
  ```bash
  $ npm install | $ yarn install
  $ npm run build | $ yarn build
  ```
* The static files will be in "/out" directory
* Then you can just use a static server to host this site

  ```javascript
  const server = express();
  server.use(express.static("out"));

  // const port = 8080;
  server.listen(port, () => {
    console.log(`server listen at ${port} `);
  });
  ```
