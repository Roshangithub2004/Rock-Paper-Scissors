let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll('.choice');

const mssg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');



const genComChoice = () =>{
    const option =['rock', 'paper', 'scissors'] ;
    const rendIdx = Math.floor(Math.random()* 3);
    return option[rendIdx];
}

const drawGame = () =>{
    console.log("game was Draw.");
    mssg.innerText = "Game was Draw. Play again";
    mssg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin, userChoise, compChoice) => {
    if(userWin ){
        userScore++
        userScorePara.innerText = userScore;
        // console.log("You Win");
        mssg.innerText = `You Win! Your ${userChoise} bests ${compChoice}`;
        mssg.style.backgroundColor = 'green';
    }
    else{
        comScore++;
        compScorePara.innerText = comScore;
        // console.log("You Lose");
        mssg.innerText = `You Lose! ${compChoice} bests your ${userChoise}`;

        mssg.style.backgroundColor = 'red';

    }
}

const playGame = (userChoise) =>{
    console.log("user choice =",userChoise);
    const compChoice = genComChoice(); 
    console.log("computer choise = ", compChoice);

    if(userChoise ===compChoice){
        drawGame();
    }else{
        let userWin = true;

        if(userChoise === 'rock'){
            userWin = compChoice === "paper" ? false :true;

        }else if(userChoise === 'paper'){
            userWin = compChoice === "scissors"? false: true;
        }
        else if(userChoise === 'scissors'){
            userWin = compChoice === 'rock'? false :true;
        }
        showWinner(userWin);
    }
}


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener('click', () =>{
       const choiceId = choice.getAttribute('id') 
        playGame(choiceId);
    })
})