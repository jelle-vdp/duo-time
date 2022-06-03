//changing html and css
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
gridQuery[11].innerText = "lazy , handy , supersmart (like superpower)";
//challenge
const challengeBox = document.getElementsByClassName('challenge-box')[0];
console.log(challengeBox);
const challengeBoxRect = challengeBox.getBoundingClientRect();
console.log(challengeBoxRect);
challengeBox.addEventListener('click',function(){
    const image = document.createElement('img');
    const shrimps = ["img/shrimp.png","img/shrimp2.png","img/shrimp3.png","img/shrimp4.png","img/shrimp5.png","img/shrimp6.png","img/shrimp7.png","img/shrimp8.png","img/shrimp9.png","img/shrimp10.png"];
    let index = Math.round(Math.random()*(shrimps.length-1));
    image.src = shrimps[index];
    console.log(image.src,index);
    image.style.width = "50px";
    image.style.height = "50px";
    image.style.position = "absolute";
    image.style.transition = "all 0.5s ease-in-out";
    let deg = 0;
    let x1 = challengeBoxRect.x + 50;
    let x2 = x1 + (challengeBoxRect.width - 50);
    let y1 = challengeBoxRect.y + 50;
    let y2 = y1 +(challengeBoxRect.height - 50);
    image.style.left = `${Math.round(Math.random()*(x2 - x1)) + challengeBoxRect.x}px`;
    image.style.top = `${Math.round(Math.random()*(y2 - y1)) + challengeBoxRect.y}px`;
    challengeBox.appendChild(image);
    console.log(image.style.left)
    image.addEventListener('click',function(){
        this.style.transform = 'rotate('+(deg+=360)+'deg)';
    })
})
let elements = [];
const header = document.getElementsByTagName('header')[0];
//console.log(header);
let headerH1 = header.getElementsByTagName('h1')[0];
headerH1.innerHTML = `<span>${headerH1.innerText}</span>`;
//console.log(headerH1.innerText)
let headerQuote = header.getElementsByTagName('q')[0];
headerQuote.innerHTML = `<span>${headerQuote.innerText}</span>`;
const section = document.getElementsByClassName('grid-qualities')[0];
//console.log(section);
let sectionDivs = section.getElementsByTagName('div');
//console.log(sectionDivs)
for (let i = 0 ; i<sectionDivs.length;i++){
    sectionDivs[i].innerHTML = `<span>${sectionDivs[i].innerText}</span>`;
}
const challenges = document.getElementsByClassName('challenge')[0];
console.log(challenges);
const challengesParagrafs = challenges.getElementsByTagName('p');
console.log(challengesParagrafs);
for (let i = 0 ; i < challengesParagrafs.length ; i++){
    challengesParagrafs[i].innerHTML = `<span>${challengesParagrafs[i].innerText}</span>`;
}
setTimeout(() => {
    const text = document.getElementsByTagName('span');
    for (let i = 0 ; i<text.length;i++){
        text[i].addEventListener('click',function(){
            this.innerText = "shrimp";
        })
    }
}, 3000);
