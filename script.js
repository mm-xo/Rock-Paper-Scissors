let userScore = 0;
let cpuScore = 0;

const choices = document.querySelectorAll(".choice");

const getCpuChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    let cpuChoice = getCpuChoice();
    console.log("cpu choice = ", cpuChoice);
    let msg = document.querySelector("#msg");
    let userScore = document.querySelector("#user-score")
    let cpuScore = document.querySelector("#cpu-score")
    if (userChoice === cpuChoice) {
        msg.innerHTML = "Draw";
    }
    else if (userChoice === "rock") {
        if (cpuChoice === "paper") {
            msg.innerHTML = `CPU wins. ${cpuChoice} beats ${userChoice}`
            cpuScore.innerHTML++
        } else {
            msg.innerHTML = `You win. ${userChoice} beats ${cpuChoice}`
            userScore.innerHTML++
        }
    }
    else if (userChoice === "paper") {
        if (cpuChoice === "scissors") {
            msg.innerHTML = `CPU wins. ${cpuChoice} beats ${userChoice}`
            cpuScore.innerHTML++
        } else {
            msg.innerHTML = `You win. ${userChoice} beats ${cpuChoice}`
            userScore.innerHTML++
        }
    }
    else if (userChoice === "scissors") {
        if (cpuChoice === "rock") {
            msg.innerHTML = `CPU wins. ${cpuChoice} beats ${userChoice}`
            cpuScore.innerHTML++
        } else {
            msg.innerHTML = `You win. ${userChoice} beats ${cpuChoice}`
            userScore.innerHTML++
        }
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
