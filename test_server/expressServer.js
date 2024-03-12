const express = require('express');
const app = express();

app.listen(3000, 'localhost', () => {
    console.log(`Express app now listening on port 3000`);
})

app.get('/', (req, res) => {
    res.send('/ get request');
})
app.get('/page', (req, res) => {
    res.send('/page get request');
    console.log('/page get request was commited');
})