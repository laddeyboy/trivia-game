const express = require('express');
const axios = require('axios');
const cors = require('cors');

var app = express();
app.use(cors());

app.use(express.static('build'));

app.get('/api/get-questions', function(req, resp, next){
    var triviaSite = 'https://opentdb.com/api.php?amount=10';
    axios.get(triviaSite)
      .then(function(response){
        console.log("you have questions...");
        resp.json(response.data.results);
      })
      .catch(next);
});

app.listen(8080, function() {
    console.log('Listening on port 8080');
});