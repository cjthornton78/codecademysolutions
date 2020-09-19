const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  let isClown = true;
  let returnArray = [];
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    isClown = false;
    returnArray[0] = userInput;
  }
  else if (userInput === "bomb") {
    isClown = false;
    returnArray[0] = userInput;
  }
  else {
    console.log("Input error");
    returnArray[0] = "Enter a valid choice, clown.";
  }
  returnArray[1] = isClown;
  return returnArray;
}

const getComputerChoice = () => {
  switch(Math.floor(Math.random()*4)) {
    case 0:
    return "rock";
    break;
    case 1:
    return "paper";
    break;
    case 2:
    return "scissors";
    break;
    default:
    return "velociraptor";
    break;
  }
}

const determineWinner = (userChoiceArray, computerChoice) => {
  if (userChoiceArray[1] === false) {
    console.log("You chose: " + userChoiceArray[0] +", the computer chose: " + computerChoice);
    if (userChoiceArray[0] === computerChoice) {
      return "Tie";
    }
    else if (userChoiceArray[0] === "bomb") {
      return "KABOOM, YOU WIN!";
    }
    else {
      //console.log("Not a tie");
      if (userChoiceArray[0] === "rock" && computerChoice === "scissors") {
        return "You win";
      }
      else if (userChoiceArray[0] === "paper" && computerChoice === "rock") {
        return "You win";
      }
      else if (userChoiceArray[0] === "scissors" && computerChoice === "paper") {
        return "You win";
      }
      else {
        return "You lose";
      }
    }
  }
  else {
    return "Epic Fail";
  }
}

const playGame = userChoice => {
  console.log(determineWinner(getUserChoice(userChoice), getComputerChoice()));
}

let muhPick = "scissors";

playGame(muhPick);
