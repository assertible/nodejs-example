const express = require('express')
const app = express()


/* Express settings */
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


/* Handler for "/" */
app.get('/', function(request, response) {
  response.send('Hello World!')
})


/* Initialize the server */
const server = app.listen(app.get('port'), function() {
  console.log("app is running at localhost:" + app.get('port'))
})

module.exports = server
