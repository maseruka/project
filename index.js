const app = require('express')();
const server = require('http').createServer(app);
server.listen('2323');
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/static/landing.html');
});
app.get('/home', (req, res) => {
  res.sendFile(__dirname+'/static/home.html');
});
app.get('/show', (req, res) => {
  res.sendFile(__dirname+'/static/show.html');
});