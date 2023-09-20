// declare variables
const addItemBtn = document.getElementById("add-item-btn");

addItemBtn.addEventListener("click", createObject);

// construct object
function ConstructObject(item, id) {
  this.item = item;
  this.id = id;
}

// create object
const newObjectArr = [];

function createObject() {
  randomId();
  let item = document.getElementById("item-input").value;
  //   no input alert
  if (item === "") {
    alert("Please add Item");
    return;
  }
  //   end of input alert
  let itemId = newId.join(" ");
  const newObject = new ConstructObject(item, itemId);
  newObjectArr.push(newObject);
  renderObject();
}

// render object
const outputEl = document.querySelector(".output-el");

function renderObject() {
  outputEl.innerHTML = "";
  newObjectArr.forEach((item) => {
    outputEl.innerHTML += `
        <div id="${item.id}" class="item-box-el">
            ${item.item}
            <div class="star-icon">
            ✩
            </div>
        </div>
        `;
  });
  clearValues();
  deleteItem();
  changeStarState();
  console.log(newObjectArr);
}

// dark light toggle

const toggleEl = document.getElementById("toggle-el");
const body = document.querySelector("body");

toggleEl.addEventListener("click", function () {
  if (toggleEl.textContent === "🌙") {
    toggleEl.textContent = "☀️";
    body.classList.toggle("dark");
  } else if (toggleEl.textContent === "☀️") {
    toggleEl.textContent = "🌙";
    body.classList.toggle("dark");
  }
});

// clear item values
function clearValues() {
  document.getElementById("item-input").value = "";
}
// delete items
const identOutputEl = document.querySelector(".output-el");

function deleteItem() {
  identOutputEl.addEventListener("click", (e) => {
    let targetId = e.target.id;
    if (targetId) {
      let index = newObjectArr.findIndex((item) => item.id === targetId);
      if (index !== -1) {
        newObjectArr.splice(index, 1);
      }
      renderObject();
    }
  });
}

// star activation function
function changeStarState() {
  let starIcons = document.querySelectorAll(".star-icon");

  starIcons.forEach((starIcon) => {
    starIcon.addEventListener("click", (e) => {
      let targetId = e.target.parentElement.id;
      let targetItem = newObjectArr.find((item) => item.id === targetId);
      if (targetItem) {
        //   this line of code below flips the value of the star property from its current state to the opposite state
        targetItem.star = !targetItem.star;
        starIcon.textContent = targetItem.star ? "★" : "✩";
      }
      console.log(newObjectArr);
    });
  });
}

// PRACTICE

// PRACTICE

// create random id
const randomChar = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "P",
  "M",
  "D",
  "S",
  "R",
  "!",
  "@",
  "£",
  "$",
  "%",
  "&",
  "*",
  "?",
  "+",
];

let newId = [];

function randomId() {
  newId = [];
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * randomChar.length);
    let randomPassword = randomChar[randomNumber];
    newId.push(randomPassword);
  }
}
