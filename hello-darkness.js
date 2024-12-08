// let red = 255;
// let green = 255;
// let blue = 255;
// const body = document.getElementById('body');

// body.style.backgroundColor = 'rgb(255,255,255)';

// const fade = () => {
//     if (red > 0 && green > 0 && blue > 0) {
//         red--;
//         green--;
//         blue--;
//         body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//     } else {
//         clearInterval(countdownInterval);
//     }
// };


const body = document.getElementById('body');

let value = 255;

const darkness = setInterval(() => {
    value--;

    if ( value <= 0) {
        value = 0;
        clearInterval(darkness);
    }
    body.style.backgroundColor = `rgb(${value}, ${value}, ${value})`;
}, 20);

const imgEl = document.getElementById('calie');

let x = 0;
 const animate = function () {
    x++;
    if (x < window.innerWidth) {
        const transform = `translateX(${x}px)`;
        imgEl.style.transform = transform;
        requestAnimationFrame(animate);
    }
 };
 requestAnimationFrame(animate);