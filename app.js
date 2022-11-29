const form = document.querySelector("#form");
const userScore = document.querySelector(".user__score");

const correctAnswers = ["A", "B", "A", "A", "B"];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let counter = 0;

  const userAnswers = [
    event.target.question1.value,
    event.target.question2.value,
    event.target.question3.value,
    event.target.question4.value,
    event.target.question5.value,
  ];

  correctAnswers.forEach((answers, index) => {
    if (answers === userAnswers[index]) {
      counter = counter + 20;
    }
  });

  userScore.classList.add("visible");
  scrollTo(0, 0);

  let value = 0;

  const scoreAnimation = setInterval(() => {
    if (value === counter) {
      clearInterval(scoreAnimation);
    }
    document.querySelector(".score").textContent = `${value}`;
    value++;
  }, 10);
});
