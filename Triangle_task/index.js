'use strict'

function triangle(floors) {
    const outputIndex = [];
    for (let i = floors; i >= 0; i--) {
        outputIndex.push(1 + 2 * i);
    }
    outputIndex.reverse();
    function output(count) {
        let result = '';
        const spacesAmout  =  ((1 + 2 * floors) - count) / 2;
        let spaces = '';
        for (let i = 0; i < count; i++) {
            result += '*';
        }
        for (let i = 0; i < spacesAmout; i++) {
            spaces += ' ';
        }
        console.log(spaces + result);
    }
    outputIndex.forEach(el => {
        output(el);
    });
}

triangle(5);