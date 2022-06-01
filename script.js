const mug = document.getElementsByClassName('mugshot')[0];
console.log(mug);
mug.style.background = "url(img/chad.jpg)";
mug.style.backgroundSize = "200px 200px";
const quote = document.getElementsByTagName('q')[0];
console.log(quote);
quote.innerText = "PIZZA TIME - Toby Mguire"
const grid = document.getElementsByClassName('grid-qualities')[0];
console.log(grid);
const gridQuery = grid.querySelectorAll('div');
console.log(gridQuery[1]);
gridQuery[1].innerText = "blue dabadee dabadaa";
gridQuery[3].innerText = "Koala";
gridQuery[5].innerText = "soccer/football";
gridQuery[7].innerText = "Corazon / doflamingo rosinanté";
gridQuery[9].innerText = "Robin Williams RIP";
gridQuery[11].innerText = "lazy , handy , supersmart (like superpower)"