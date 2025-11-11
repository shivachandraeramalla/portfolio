// ==== Smooth Floating Cursor Logic ====
const cursor = document.createElement("div");
cursor.classList.add("cursor-dot");
document.body.appendChild(cursor);

// Start position
let mouseX = 0,
  mouseY = 0;
let currentX = 0,
  currentY = 0;

// Smooth motion loop
function animateCursor() {
  currentX += (mouseX - currentX) * 0.5; // delay effect
  currentY += (mouseY - currentY) * 0.5;
  cursor.style.transform = `translate(${currentX - 50}%, ${currentY - 50}%)`;
  cursor.style.left = `${currentX}px`;
  cursor.style.top = `${currentY}px`;
  requestAnimationFrame(animateCursor);
}

// Track mouse position
window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Start loop
animateCursor();
