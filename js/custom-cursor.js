const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const hoverElements = document.querySelectorAll(
  "a, button, .card, .skill"
);

hoverElements.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-grow");
  });

  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-grow");
  });
});

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";

  requestAnimationFrame(animateCursor);
}

animateCursor();