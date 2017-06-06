const express = require('express');
const app     = express();
const server = require('http').createServer(app);
server.listen(process.env.PORT, function() {
  console.log("Am up");
});

app.use(express.static(__dirname + '/static/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/static/landing.html');
});
app.get('/home', (req, res) => {
  res.sendFile(__dirname+'/static/home.html');
});
app.get('/show', (req, res) => {
  res.sendFile(__dirname+'/static/show.html');
});