const startButton = document.getElementById("start-btn")
startButton.addEventListener("click", startGame)

const formContainerElement = document.getElementById("Quiz")

const result = document.getElementById("submit-btn");
result.addEventListener("click", results);



//to Start the game 
function startGame() {
console.log("Hope your have a good day!");
startButton.style.display = "none";
formContainerElement.classList.remove('hide')
}



// check if the user answer is correct or not
function results() {
  let score = 0;

  const q1 = document.getElementById("Quiz").question1.value;
  const q2 = document.getElementById("Quiz").question2.value;
  const q3 = document.getElementById("Quiz").question3.value;
  const q4 = document.getElementById("Quiz").question4.value;
  const q5 = document.getElementById("Quiz").question5.value;
  const q6 = document.getElementById("Quiz").question6.value;
  const q7 = document.getElementById("Quiz").question7.value;
  const q8 = document.getElementById("Quiz").question8.value;
  const q9 = document.getElementById("Quiz").question9.value;
  const q10 = document.getElementById("Quiz").question10.value;
  let results = document.getElementById("results");
  let quiz = document.getElementById("Quiz");

  if (q1 == "2001") {
    score++;
  }
  if (q2 == "Elf") {
    score++;
  }
  if (q3 == "ottsel") {
    score++;
  }
  if (q4 == "500 years in the future") {
    score++;
  }
  if (q5 == "17") {
    score++;
  }
  if (q6 == "10 hours") {
    score++;
  }
  if (q7 == "Jak and Daxter: the Precursor Legacy") {
    score++;
  }
  if (
    q8 ==
    "because naughty dog thought that mute protagonists were the way at the time"
  ) {
    score++;
  }
  if (q9 == "2") {
    score++;
  }
  if (q10 == "Morgan") {
    score++;
  }

  quiz.style.display = "none"; //hides the form and shows the users results
  if (score <= 5) {
    results.textContent = `Your score is ${score}/10. I guess jak and daxter is not one of your favorite games.`;
  } else {
    results.textContent = `Your score is ${score}/10. Jak and daxter is one of your favorite games.`;
  }
}

// Making sure the user clicks on the radio buttons before submitting the form



