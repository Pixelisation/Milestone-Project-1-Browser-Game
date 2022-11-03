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
 
 if (q1 == "2001") {score++};
 if (q2 == "Elf") {score++};
 if (q3 == "ottsel") {score++};
 if (q4 == "500 years in the future") {score++};
 if (q5 == "17") {score++};
 if (q6 == "10 hours") {score++};
 if (q7 == "Jak and Daxter: the Precursor Legacy") {score++};
 if (q8 == "because naughty dog thought that mute protagonists were the way at the time") {score++};
 if (q9 == "2") {score++};
 if (q10 == "Morgan") {score++};
 document.write(score)
}

/*
console.log score
making a score out of 10
somehow show score to the user with JS
*/