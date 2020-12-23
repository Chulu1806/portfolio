const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

const DIST_DIR = path.join(__dirname, '../dist');
app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

server.listen(port);
console.log(`Listening on: ${port}`);
