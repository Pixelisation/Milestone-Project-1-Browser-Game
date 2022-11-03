const result = document.getElementById("submit-btn");
result.addEventListener("click", results);


// check if the user answer is correct or not 
function results() {
 let score = 0
 
 const q1 = document.getElementById("Quiz").question1.value
 const q2 = document.getElementById("Quiz").question2.value
 const q3 = document.getElementById("Quiz").question3.value
 const q4 = document.getElementById("Quiz").question4.value
 const q5 = document.getElementById("Quiz").question5.value
 const q6 = document.getElementById("Quiz").question6.value
 const q7 = document.getElementById("Quiz").question7.value
 const q8 = document.getElementById("Quiz").question8.value
 const q9 = document.getElementById("Quiz").question9.value
 const q10 = document.getElementById("Quiz").question10.value
 
 if (q1 == "A") {score++}
 if (q2 == "B") {score++}
 if (q3 == "A") {score++}
 if (q4 == "C") {score++}
 if (q5 == "A") {score++}
 if (q6 == "A") {score++}
 if (q7 == "D") {score++}
 if (q8 == "D") {score++}
 if (q9 == "C") {score++}
 if (q10 == "A") {score++}
 console.log(score)
}




/*
console.log score
making a score out of 10
some how show score to the user with JS
*/










