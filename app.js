const getInput = document.querySelector(".container input");
const getPlus = document.querySelector(".container i");
const getUl = document.querySelector(".todo-liste");

getPlus.addEventListener("click", creatItems);
getUl.addEventListener("click", removeUl);
getUl.addEventListener("click", checkUl);

function creatItems() {
  //creat div
  const newDiv = document.createElement("div");
  newDiv.classList.add("newDiv");
  //creat li
  const newLi = document.createElement("li");
  newLi.classList.add("newLi");
  newLi.innerText = getInput.value;
  newDiv.appendChild(newLi);
  //creat remove button
  const firstButton = document.createElement("button");
  firstButton.innerHTML = '<i class="fas fa-trash"></i>';
  firstButton.classList.add("first-btn");
  newDiv.appendChild(firstButton);
  //creat second button
  const secondButton = document.createElement("button");
  secondButton.classList.add("second-btn");
  secondButton.innerHTML = '<i class="fas fa-check"></i>';
  newDiv.appendChild(secondButton);
  // link with dom
  getUl.appendChild(newDiv);
  //same fixe
  getInput.value = "";
}

const tl = gsap.timeline();
tl.to(".title", {
  duration: 3,
  rotation: 720,
});

function removeUl(e) {
  const item = e.target;
  if (item.classList[0] === "first-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
}

function checkUl(e) {
  const item = e.target;
  if (item.classList[0] === "second-btn") {
    const todo = item.parentElement;
    todo.classList.add("check");
  }
}
