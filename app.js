const express = require('express');
const axios = require('axios');

var app = express();

app.use(express.static('build'));

app.get('/api/get-questions', function(req, resp){
    var triviaSite = 'https://opentdb.com/api.php?amount=10';
    axios.get(triviaSite)
      .then(function(response){
        console.log("you have questions...");
        resp.json(response.data.results);
      })
      .catch(function(err){
        console.error("Something went wrong", err);
      });
});

app.listen(8080, function() {
    console.log('Listening on port 8080');
});