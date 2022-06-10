const trigram = document.querySelector("#trigram");
const ul = document.querySelector("#ul-navbar");

trigram.addEventListener("click", () => {
  if (ul.className === "lista-navbar") {
    ul.className += " responsiva";
  } else {
    ul.className = "lista-navbar";
  }
});
