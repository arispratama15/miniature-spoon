/*
let html = '';
let red;
let green;
let blue;
let randomRGB;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">1</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">2</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">3</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">4</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">5</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">6</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">7</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">8</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">9</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">10</div>`;

document.querySelector('main').innerHTML = html;
*/

/*
let html = '';
let red;
let green;
let blue;
let randomRGB;

const main = document.querySelector('main');

for (let i = 1; i <= 10 ; i++){
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
    main.innerHTML = html;
}
*/
// it can be more like this

let html = '';

const randomRGB = function (){
  const rgb = Math.floor(Math.random() * 256);
  return rgb;
};

function warna(){
  color = `rgb( ${randomRGB()}, ${randomRGB()}, ${randomRGB()} )`
  return color;
}

for (let i = 1; i <= 10 ; i++){
    html += `<div style="background-color: ${warna()}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;