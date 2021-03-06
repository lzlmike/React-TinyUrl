/**
 * Created by Mike on 11/30/17.
 */
// server.js
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('urls.json')
var middlewares = jsonServer.defaults()

var count = 0;
server.use(middlewares)

server.use(jsonServer.bodyParser)

server.use(function (req, res, next) {
    if (req.method === 'POST') {
        // Converts POST to GET and move payload to query params
        // This way it will make JSON Server that it's GET request
        req.method = 'GET'
        req.query = req.body
        count += 1;
        console.log("I am handling request! " + 3001 + " times: " + count);
    }
    // Continue to JSON Server router
    next()
})

server.use(router)
server.listen(3001, function () {
    console.log('JSON Server is running')
})