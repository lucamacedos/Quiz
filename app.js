const form = document.querySelector("#form");
const userScore = document.querySelector(".user__score");
const correctAnswers = ["A", "B", "C", "A", "B"];

const addClassAndScrollUp = () => {
  userScore.classList.add("visible");
  scrollTo(0, 0);
};

// const

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let counter = 0;
  let value = 0;

  const checkAnswers = (answers, index) => {
    const checkAnswers = answers === userAnswers[index];
    if (checkAnswers) {
      counter += 20;
    }
  };

  const increaseCounter = () => {
    if (value === counter) {
      clearInterval(scoreAnimation);
    }
    document.querySelector(".score").textContent = `${value}`;
    value++;
  };

  const userAnswers = [
    event.target.question1.value,
    event.target.question2.value,
    event.target.question3.value,
    event.target.question4.value,
    event.target.question5.value,
  ];

  correctAnswers.forEach(checkAnswers);
  addClassAndScrollUp();
  const scoreAnimation = setInterval(increaseCounter, 10);
});
