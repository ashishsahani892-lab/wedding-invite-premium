function startExperience() {
  document.querySelector(".overlay").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  document.getElementById("bgMusic").play();

  launchConfetti();
}

// Countdown
const date = new Date("Feb 20, 2027 19:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = date - now;

  const d = Math.floor(gap / (1000 * 60 * 60 * 24));
  const h = Math.floor((gap / (1000 * 60 * 60)) % 24);

  document.getElementById("countdown").innerHTML =
    `${d} Days ${h} Hours left`;
}, 1000);

// Simple Confetti
function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    document.body.appendChild(confetti);

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
  }
}
