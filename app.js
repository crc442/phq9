const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 3001;

const app = express();

const http = require('http').Server(app);

// serve static assets normally
app.use(express.static(__dirname + '/public'))

// handle every other route with index.html
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

http.listen(PORT, function() {
	console.log("listening on port " + PORT + "...");
});