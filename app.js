const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();
const http = require('http').Server(app);

// serve static assets normally
app.use(express.static(path.resolve(__dirname, 'public')));

// api route to get therapists
app.get('/api/therapists', function(request, response) {
  response.json({
    status: 200,
    data: [{
      id: 1,
      first_name: 'Sarah',
      last_name: 'Martin',
      qualification: 'PhD',
      title: 'Psychiatrist',
      rating: 4.5,
      review: 'Very attentive and nice!',
      profile_pic: 'https://randomuser.me/api/portraits/women/81.jpg',
    }, {
      id: 2,
      first_name: 'John',
      last_name: 'Hernandez',
      qualification: 'MD',
      title: 'Psychiatrist',
      rating: 5,
      review: 'always productive, helpful and insightful',
      profile_pic: 'https://randomuser.me/api/portraits/men/32.jpg',
    }, {
      id: 3,
      first_name: 'Jacqueline',
      last_name: 'Jacobs',
      qualification: 'MD',
      title: 'Psychologist',
      rating: 5,
      review: 'I had an extremely positive experience with Jacqueline.',
      profile_pic: 'https://randomuser.me/api/portraits/women/52.jpg',
    }],
  });
});

// handle every other route with index.html
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

http.listen(PORT, function() {
	console.log('listening on port ' + PORT + '...');
});
