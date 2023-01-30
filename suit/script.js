class gameRules {

    getResult(h, c) {
        this.human = h;
        this.com = c;

        if (h === c) {
            return 'Draw';
        }
        
        else if (h === 'rock' && c === 'scissor' 
            || h === 'paper' && c === 'rock' 
            || h === 'scissor' && c === 'paper' ) 
            {
            return 'Player Win';
        }  
        
        else {
            return 'Com Win';
        };
    }

    getComChoice() {
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        
        if (randomNumber === 1) {
            return 'rock';
        } 

        else if (randomNumber === 2) {
            return 'paper';
        } 

        else {
            return 'scissor';
        };
    }

    
}

let rockPaperScissor = new gameRules();

    //GET DOCUMENT
    let humanChoices = document.querySelectorAll('.humOpt');
    let comChoices = document.querySelectorAll('.comOpt');

    let showWinner = document.getElementById('result');
    let refreshBtn = document.getElementById('refreshBtn');

    //GET USER CHOICE AND COMPUTER CHOICE
    humanChoices.forEach
    (h => h.addEventListener('click', function(h) {
    let comChoice = rockPaperScissor.getComChoice();
    let humChoice = h.target.id;
    result = rockPaperScissor.getResult(humChoice, comChoice);

    // Show Winner
    if (result === "Draw" ){
        showWinner.innerText = `${result}`;
        showWinner.classList.add('draw');
        showWinner.classList.remove('vsText');
    } else {
        showWinner.innerText = `${result}`;
        showWinner.classList.add('theWinner');
        showWinner.classList.remove('vsText'); 
    }

    // Disable Player's Button
    humanChoices[0].setAttribute("disabled", "");
    humanChoices[1].setAttribute("disabled", "");
    humanChoices[2].setAttribute("disabled", "");

    //Player and Computer Higlights
    let showhumChoice = document.getElementById(humChoice);
    let showComChoice = document.getElementById(`com-${comChoice}`);
    showhumChoice.classList.add('btn-light');
    showComChoice.classList.add('btn-light');
    
}));


    refreshBtn.addEventListener('click', function() {

    // Remove human's choices
    humanChoices[0].classList.remove('btn-light');
    humanChoices[1].classList.remove('btn-light');
    humanChoices[2].classList.remove('btn-light');
    
    // Remove Computer's Choices
    comChoices[0].classList.remove('btn-light');
    comChoices[1].classList.remove('btn-light');
    comChoices[2].classList.remove('btn-light');
    
    // Enable Choices Button
    humanChoices[0].removeAttribute("disabled");
    humanChoices[1].removeAttribute("disabled");
    humanChoices[2].removeAttribute("disabled");

    // Remove Winner Text
    showWinner.innerText = "VS";
    showWinner.classList.add('vsText');
    showWinner.classList.remove('theWinner');
    showWinner.classList.remove('draw');
});
