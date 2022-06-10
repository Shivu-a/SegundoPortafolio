const form = document.querySelector("form");

const asterisco = document.querySelector("*");
const fondoNegro = document.createElement("div");
const container = document.createElement("div");
const p = document.createElement("p");
const boton = document.createElement("button");

fondoNegro.style.background = "rgba(0, 0, 0, 0.6)";
fondoNegro.style.position = "fixed";
fondoNegro.style.top = "0";
fondoNegro.style.left = "0";
fondoNegro.style.width = "100vw";
fondoNegro.style.height = "100vh";

container.style.backgroundColor = "#1e1e1e";
container.style.width = "75vw";
container.style.height = "30vh";
container.style.position = "fixed";
container.style.left = "13%";
container.style.top = "25%";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.borderRadius = "8px";
container.style.flexDirection = "column";
container.style.padding = "10px";

p.innerText = `Esta función aun no se agrego`;
p.style.color = "white";
p.style.fontSize = "2.2rem";
p.style.textAlign = "center";

boton.innerHTML = "Entendido";
boton.style.all = "unset";
boton.style.border = "1px solid white";
boton.style.color = "white";
boton.style.padding = "10px";
boton.style.marginTop = "20px";

fondoNegro.appendChild(container);
container.appendChild(p);
container.appendChild(boton);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("body").appendChild(fondoNegro);
  asterisco.style.overflow = "hidden";
});

boton.addEventListener("click", () => {
  document.querySelector("body").removeChild(fondoNegro);
  asterisco.style.overflow = "auto";
});
