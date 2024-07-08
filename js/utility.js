function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValue=element.innerText;
    const value=parseInt(elementValue);
    return value;
}

function setValueById(elementId,value){
    const element=document.getElementById(elementId);
    element.innerText=value;
}

function generateARandomAlphabet(){

    // create an alphabet index
    const alphabetString= 'abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');
    // console.log(alphabets);

    // get a random index between 0-25
     const randomNumber=Math.random()*25;
     const index=Math.round(randomNumber);
     
     const alphabet=alphabets[index];
    //  console.log(index,alphabets);
     return alphabet;
}