'use strict';

const getByQuery = document.querySelectorAll('.box');
const getByClass = document.getElementsByClassName('box');


// getByQuery.forEach(boxes => {
//     if(boxes.matches('.this')) {
//         console.log(boxes);
//     }
// });

console.log(getByQuery[0].closest('.wrapper'));


// for(let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// }

// getByQuery[0].remove();
// getByClass[0].remove();
// console.log(getByQuery);
// console.log(getByClass);
// console.log(document.body.children);

// console.log(Array.from(getByClass));