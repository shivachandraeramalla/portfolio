const text = "Welcome, I’m SHIVA_  Crafting Interactive Web & 3D Experiences ⚡";
const typingEl = document.getElementById("typing");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingEl.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}

window.onload = () => {
  setTimeout(typeEffect, 1500);
};

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "loading.html";
  }, 1000);
});

