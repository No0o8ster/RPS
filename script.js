const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'
const option = [ROCK, PAPER, SCISSORS]
const output = document.querySelector('#output')

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {output.innerHTML = rules(computerOutput(), ROCK)}
);

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {output.innerHTML = rules(computerOutput(), PAPER)});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {output.innerHTML = rules(computerOutput(), SCISSORS)}
);
function computerOutput(){
    return option[Math.floor(Math.random()* option.length)]
}

function rules(computer, user){
    if ((user === ROCK && computer == SCISSORS) || 
    (user === PAPER && computer === ROCK) ||
    (user === SCISSORS && computer === PAPER)
    ){return 'user'}
    if (user === computer){
        return 'tie'
    }

    else {return 'computer'}
}
