const messages = [
  "Gaming helped me learn coding!",
  "I built my own PC and now I fix my family's laptops.",
  "My console taught me teamwork and strategy."
];

function showRandomMessage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  alert(msg);
}
function checkQuiz() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const result = document.getElementById("quizResult");

  if (q1 && q2) {
    if (q1.value === "yes" && q2.value === "yes") {
      result.textContent = "Your child is ready for a gaming setup!";
    } else {
      result.textContent = "Consider discussing responsibilities before investing.";
    }
  } else {
    result.textContent = "Please answer both questions.";
  }
}
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});