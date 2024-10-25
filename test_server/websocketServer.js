const io = require('socket.io');
const express = require('express');

const app = express();

const server = app.listen(3000, 'localhost', () => {
    console.log('Server successfully started on localhost:3000');
})

const socket = io(server);

socket.on('connection', sock => {
    console.log('A Client connected');

    sock.on('request', data => {
        console.log('Request received:', data);

        socket.emit('4all', 'some request');

        switch (data) {
            case 'da':
                sock.emit('response', 'pizda');
                break;
            case 'net':
                sock.emit('response', 'suda net');
                break;
            default:
                sock.emit('response', 'huh?')
        }
    })
})