const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = function(images, thumbnails) {
    const files = fs.readdirSync('Ex1/');
    const jsonFiles = [];
    files.forEach(file => {
        if (path.extname(file) == '.json') {
            jsonFiles.push(file);
            fs.mkdirSync('Ex1/' + path.parse(file).name, {recursive: true});
        }
    })

    const images25 = images.slice(0, 25);
    const thumbnails25 = thumbnails.slice(0, 25);

    const download = async (url, destination) => {
        const response = await axios({
            url: url, method: 'GET', responseType: 'stream'
        })
        response.data.pipe(fs.createWriteStream(destination));
    }

    images25.forEach((url, index) => {
        download(url, 'Ex1/images/' + index + '.jpg');
    })
    thumbnails25.forEach((url, index) => {
        download(url, 'Ex1/thumbnails/' + index + '.jpg');
    })
}