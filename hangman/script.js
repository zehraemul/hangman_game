const word = document.getElementById("word");
const popup = document.getElementById("popup-container");
const wrong = document.getElementById("wrongLetters");
const message = document.getElementById("message");
const items = document.querySelectorAll(".item");
const error = document.querySelector("#error");
const btn = document.getElementById("btn");
const hint = document.querySelector(".hint");
const correctLetters = [];
const wrongLetters = [];
let selectedWord=getRandomWord();
function getRandomWord(){
 let words=["freedom", "speak", "knight", "always" , "random" ,"mudafer", "opening","javascript", "star", "homeless","element", "pink", "monster", "learning"];
     return words[Math.floor(Math.random()*words.length)];
   };


   /*
function displayWords(){
   
    word.innerHTML=`
        ${selectedWord.split('').map(letter=>`
            <div class="letter">${correctLetters.includes(letter) ? letter : ''}</div>
        `).join('')}
    `;
    const w = word.innerText.replace(/\n/g,'');
    if(w===selectedWord){
            popup.style.display="flex";
    }
}
*/
function displayWord() {    
    word.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
            </div>
        `).join('')}
    
    `;

    const w = word.innerText.replace(/\n/g,'');
    if (w === selectedWord) {
        popup.style.display = 'flex';
        message.innerText = 'You have won :)';
    }
}
function displayWrongWords(){
    wrong.innerHTML = `
        ${wrongLetters.length>0?'<h3>Hatalı harfler</h3>':''}
        ${wrongLetters.map(letter=> `<span>${letter}<span>`)}
    `;
    items.forEach((item, index)=>{
        if(index<wrongLetters.length){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    });
    if(wrongLetters.length===items.length){
        popup.style.display = 'flex';
        message.innerText = 'You have lost :(';
    }
}
function displayMessage(){
      error.classList.add("show");
      setTimeout(function(){
        error.classList.remove("show");
      },2000)
}
btn.addEventListener("click",()=>{
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord=getRandomWord();

    displayWord();
    displayWrongWords();

    popup.style.display="none";
})
window.addEventListener('keydown', function(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {        
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
              displayMessage();
            }
        } else {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                displayWrongWords();
            }
        }
    }
});

displayWord();

