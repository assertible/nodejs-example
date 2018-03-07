const express = require('express')
const app = express()


/* Express settings */
app.set('port', (process.env.PORT || 5000))


/* Handler for "/" */
app.get('/', function(request, response) {
    response.setHeader('Content-Type', 'text/plain')
    response.send('Hello, world!')
})

/* Handler for "/json" JSON response */
app.get('/json', function(request, response) {
    response.setHeader('Content-Type', 'application/json')
    response.send({
        a: 1,
        b: 2
    })
})

/* Initialize the server */
const server = app.listen(app.get('port'), function() {
    console.log("app is running at localhost:" + app.get('port'))
})

module.exports = server
