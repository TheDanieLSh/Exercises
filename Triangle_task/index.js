'use strict'

function triangle(floors) {
    const outputIndexBigToLittle = [];
    for (let i = floors; i >= 0; i--) {
        outputIndexBigToLittle.push(1 + 2 * i);
    }
    const outputIndexLittleToBig = [...outputIndexBigToLittle].reverse();
    
    const result = {};

    function output(count, fl, side) {
        const spacesAmout  =  ((1 + 2 * floors) - count) / 2;
        let stars = ''
        let spaces = '';
        for (let i = 0; i < count; i++) {
            stars += '*';
        }
        for (let i = 0; i < spacesAmout; i++) {
            spaces += ' ';
        }
        if (!Array.isArray(result[fl])) {
            result[fl] = [];
        }
        if (!Array.isArray(result[fl][side])) {
            result[fl][side] = [];
        }
        if (side == 'left') {
            result[fl][side].push(spaces + stars);
        }
        if (side == 'right') {
            result[fl][side].push(stars + spaces);
        }
    }
    outputIndexLittleToBig.forEach((el, i) => {
        output(el, i, 'left');
    });
    outputIndexBigToLittle.forEach((el, i) => {
        output(el, i, 'right');
    })
    Object.values(result).forEach(el => {
        console.log(el['left'] + ' ' + el['right']);
    })
}

triangle(5);