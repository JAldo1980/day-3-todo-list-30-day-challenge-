// declare variables
const addItemBtn = document.getElementById("add-item-btn");

addItemBtn.addEventListener("click", createObject);

// construct object
function ConstructObject(item, id, star) {
  this.item = item;
  this.id = id;
  this.star = star;
}

// create object
let newObjectArr = [];

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
  let star = false;
  const newObject = new ConstructObject(item, itemId, star);
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
            ${item.star ? "★" : "✩"}
            </div>
        </div>
        `;
  });

  changeStarState();
  clearValues();
  deleteItem();
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

// change star state

function changeStarState() {
  const starIcons = document.querySelectorAll(".star-icon");
  starIcons.forEach((starIcon) => {
    starIcon.addEventListener("click", (e) => {
      let targetId = e.target.parentElement.id;
      let targetItem = newObjectArr.find((item) => item.id === targetId);
      if (targetItem) {
        targetItem.star = !targetItem.star;
        starIcon.textContent = targetItem.star ? "★" : "✩";
      }
    });
  });
}

// filter items
const filterBtn = document.getElementById("filter-btn");
filterBtn.addEventListener("click", filterItems);

function filterStarredItems() {
  // creates a new array with the filtered items
  return newObjectArr.filter((item) => item.star === true);
}

function filterItems() {
  // this basically 'filteredItems' is a NEW array...
  const filteredItems = filterStarredItems();

  // Hide all items
  const itemBoxes = document.querySelectorAll(".item-box-el");
  itemBoxes.forEach((itemBox) => {
    itemBox.classList.toggle("hide"); // To hide an item
  });

  // Show only the filtered items
  filteredItems.forEach((item) => {
    const itemBox = document.getElementById(item.id);
    if (itemBox) {
      itemBox.classList.toggle("hide"); // To show an item
    }
  });
}

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
