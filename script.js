// game

let computerScore = 0
let playerScore = 0

const choice = ['rock', 'paper', 'scissors']

function getComputerChoice(choice) {
  return choice[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  console.log('Player selection: ' + playerSelection)
  console.log('Computer selection: ' + computerSelection)
  console.log('*'.repeat(50))
  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    console.log(`You lose, ${computerSelection} beats ${playerSelection}`)
    computerScore++
  } else if (playerSelection === computerSelection) {
    console.log(`It's a draw`)
  } else {
    console.log(`You win, ${playerSelection} beats ${computerSelection}`)
    playerScore++
  }
  console.log(playerScore)
  console.log(computerScore)
}


function isGameOver() {
  return playerScore === 5 || computerScore === 5
}

// ui

const pChoice = document.querySelector('.p-choice')
const cChoice = document.querySelector('.c-choice')

const pScore = document.querySelector('.p-score')
const cScore = document.querySelector('.c-score')

const finalMessage = document.querySelector('.final-message')

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
  button.addEventListener('click', () => playGame(button.value))
})

const restartBtn = document.querySelector('.btn-restart')
restartBtn.addEventListener('click', restart)
overlay.addEventListener('click', removeOverlay)

function playGame(playerSelection) {
  if (isGameOver()) {
    addOverlay()
    return
  }
  const computerSelection = getComputerChoice(choice)
  playRound(playerSelection, computerSelection)
  updateChoices(playerSelection, computerSelection)
  updateScore()

  if (isGameOver()) {
    openModal()
    setFinalMessage()
  }
}

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'rock':
      pChoice.textContent = '✊'
      break
    case 'paper':
      pChoice.textContent = '✋'
      break
    case 'scissors':
      pChoice.textContent = '✌'
  }
  switch (computerSelection) {
    case 'rock':
      cChoice.textContent = '✊'
      break
    case 'paper':
      cChoice.textContent = '✋'
      break
    case 'scissors':
      cChoice.textContent = '✌'
      break
  }
}

function updateScore() {
  pScore.textContent = playerScore
  cScore.textContent = computerScore
}

function setFinalMessage() {
  return (finalMessage.textContent =
    playerScore > computerScore ? `You won` : `You lost`)
}

function openModal() {
  modal.classList.add('active')
  overlay.classList.add('active')
}

function restart() {
  playerScore = 0
  computerScore = 0
  pChoice.textContent = '👀'
  cChoice.textContent = '👀'
  pScore.textContent = 0
  cScore.textContent = 0
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function removeOverlay() {
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


function addOverlay() {
  modal.classList.add('active')
  overlay.classList.add('active')
}
