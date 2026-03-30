const button = document.getElementById("btn");
const status = document.getElementById("status");

button.addEventListener("click", () => {
  status.textContent = "Button clicked. Project is alive.";
});
