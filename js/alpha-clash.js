// function play(){
//     // hide the home screen
//      const homeScreen= document.getElementById('home');
//      homeScreen.classList.add('hidden');

//     // show the playground
//     const playGround_Section=document.getElementById('playground');
//     playGround_Section.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
    // player pressed
    const playerPressed= event.key;
   console.log('player pressed',playerPressed);

   if(playerPressed === 'Escape'){
    gameOver();
   }
  
   //expected elements
   const currentAlphabetGenerated=document.getElementById('current-alphabet');
   const currentAlphabet=currentAlphabetGenerated.innerText;
   const expectedAlphabet=currentAlphabet.toLowerCase();
   console.log(playerPressed,expectedAlphabet);

   //check the alphabet matched or not
   if(playerPressed === expectedAlphabet){
    console.log('you got a point');
    
    const currentScore= getTextValueById('current-score');
    const newScore=currentScore+1;
    setValueById('current-score',newScore);

    // ---------------------
   //update the score
    // const currentScoreElement= document.getElementById('current-score');
    // const currentScoreValue= currentScoreElement.innerText;
    // const currentScore=parseInt(currentScoreValue);
    // console.log(currentScore);

    // // increase the score
    // const newScore= currentScore+1;
    
    // // display the increased score
    // currentScoreElement.innerText=newScore;


    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    // to play many times...
    continueGame();
   }   

   else{
    console.log('you missed a life');

    const currentLife=getTextValueById('current-life');
    const newLife=currentLife-1;
    setValueById('current-life',newLife);
    
    if(newLife === 0){
        gameOver();
    }

    // -----------------
    // // update the life
    // const currentLifeElement= document.getElementById('current-life');
    // const currentLifeValue= currentLifeElement.innerText;
    // const currentLife= parseInt(currentLifeValue);
    // console.log(currentLife);

    // const updatedLife= currentLife-1;
    
    // currentLifeElement.innerText=updatedLife;

   }
}

// capture key press
document.addEventListener('keyup',handleKeyboardButtonPress)




function continueGame(){

    // set a random alphabet
     const alphabet=generateARandomAlphabet();
    //  console.log('your random alphabets',alphabet);

    //set randomly generated alphabet to the screen(show it)
     const currentAlphabetGenerated= document.getElementById('current-alphabet');
     currentAlphabetGenerated.innerText=alphabet;

    //  set background Color
    addBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home');
    showElementById('playground');
    continueGame();
}

function gameOver(){
   hideElementById('playground');
   showElementById('score');

//    update the final score
  const lastScore= getTextValueById('current-score');
  console.log(lastScore);
  setValueById('lastScore',lastScore)

}

function playAgain(){
    hideElementById('score');
    showElementById('playground');

    setValueById('current-life',10);
    setValueById('current-score',0);
}







