const displayScore = document.getElementById("score");
const backToQuizButton = document.getElementById("back-to-quiz")
let score = localStorage.getItem("score");
let totalQuiz = localStorage.getItem("totalQuiz");
let converTotalToNumber = JSON.parse(totalQuiz);
let converToNumber = JSON.parse(score);
let percentage = (converToNumber/converTotalToNumber) * 100;
displayScore.innerHTML = `
Total Quiz: ${converTotalToNumber}
<br>
Correct Quiz: ${converToNumber}
<br>
Percentage: ${percentage}%
`

backToQuizButton.addEventListener("click", () => {
    localStorage.clear();
    window.location.replace("./index.html")
})