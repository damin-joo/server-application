//server basic setting (express library)
const express = require('express');
const app = express();

app.listen(8080, function() {       //open server in port 8080
    console.log('listening on 8080')
});

//localhost:8080/pet
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/pet', function(request, response) {
    response.send('Pet related shopping site.');
});
