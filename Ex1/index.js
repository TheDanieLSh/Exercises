'use strict'

const axios = require('axios');
const fs = require('fs');
const jid = require('./json-image-downloader');

axios
.get('https://jsonplaceholder.typicode.com/photos')
.then(response => {
    const images = response.data.map(item => (
        item.url
    ))
    const thumbnails = response.data.map(item => (
        item.thumbnailUrl
    ))
    fs.writeFileSync('Ex1/images.json', JSON.stringify(images), {encoding: 'utf8', flag: 'w'});
    fs.writeFileSync('Ex1/thumbnails.json', JSON.stringify(thumbnails), {encoding: 'utf8', flag: 'w'});
    
    jid(images, thumbnails);
})