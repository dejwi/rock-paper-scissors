function playRound(playerSel) {
    let computerSel = computerPlay();
    console.log(computerSel);
    if(playerSel === computerSel){
        playerScore++;
        computerScore++;
        return 'Tie!';
    }
    if((playerSel === 'rock' && computerSel === 'scissors') ||
    (playerSel === 'paper' && computerSel === 'rock') ||
    (playerSel === 'scissors' && computerSel === 'paper')){
        playerScore++;
        return 'You won!';
    }
    computerScore++;
    return 'you lost little bitch';
}
function computerPlay(){
    let x = +(Math.random()*3).toFixed();
    console.log(x);
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

let playerSel = () => prompt('rock | paper | scissors');

for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSel())+` ur score: ${playerScore} bot: ${computerScore}`);
}