// Typing effect
const text = ["Cybersecurity Student", "Developer", "CTF Player", "Tech Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 120);
  }
})();

// Theme toggle
document.querySelector(".toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});
