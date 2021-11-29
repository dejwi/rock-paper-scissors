function playRound(playerSel) {
    let computerSel = computerPlay();
    let gametxt = '';
    if(playerSel == computerSel){
        playerScore++;
        computerScore++;
        gametxt = 'Tie!';
    }
    else if((playerSel === 'rock' && computerSel === 'scissors') ||
    (playerSel === 'paper' && computerSel === 'rock') ||
    (playerSel === 'scissors' && computerSel === 'paper')){
        playerScore++;
        gametxt = 'You won!';
    }else{
        computerScore++;
        gametxt ='you lost little bitch';
    }
    document.querySelector('#usrScore').innerHTML = `User: ${playerScore}`;
    document.querySelector('#botScore').innerHTML = `Bot: ${computerScore}`;
    document.querySelector('#gametxt').innerHTML = gametxt;
}
function computerPlay(){
    let x = +(Math.random()*3).toFixed();
    switch(x){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        case 3:
            return computerPlay();
            break;
            
    }
}
let playerScore = 0;
let computerScore = 0;

let rockbtn = document.querySelector('#rockbtn');
let paperbtn = document.querySelector('#paperbtn');
let scissorsbtn = document.querySelector('#scissorsbtn');

rockbtn.addEventListener('click', ()=>playRound('rock'));
paperbtn.addEventListener('click', ()=>playRound('paper'));
scissorsbtn.addEventListener('click', ()=>playRound('scissors'));