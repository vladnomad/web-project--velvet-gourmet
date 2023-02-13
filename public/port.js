
const jsonServer = require('json-server'),
      server = jsonServer.create(),
      router = jsonServer.router('db.json'),
      middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
});