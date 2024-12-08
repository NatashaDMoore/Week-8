const body = document.body;
const h1 = document.getElementsByTagName('h1')[0];

let lightValue = 0;
let darkValue = 255;

// Lightens the body
const light = setInterval(() => {
    lightValue++;

    if ( lightValue === 255) {
        clearInterval(light);
    }
    body.style.backgroundColor = `rgb(${lightValue}, ${lightValue}, ${lightValue})`;
}, 20);


// Darkens the first h1 element
const darkness = setInterval(() => {
    darkValue--;

    if ( darkValue <= 0) {
        darkValue = 0;
        clearInterval(darkness);
    }
    h1.style.color = `rgb(${darkValue}, ${darkValue}, ${darkValue})`;
}, 20);