const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('todos.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(2002, () => {
  console.log('TODOs server up and running on port 2002')
})
