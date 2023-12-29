const itemInput = document.querySelector("input[type='text']");
const form = document.querySelector("form");
const itemList = document.querySelector("#items");

form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();

  let newItem = itemInput.value;
  let li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.appendChild(document.createTextNode(newItem));

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Remove";


  deleteBtn.addEventListener("click", function () {
    itemList.removeChild(li);
  });

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", function () {
    li.classList.toggle("checked", checkbox.checked);
  });

  li.appendChild(checkbox);

  li.appendChild(deleteBtn);
  
  itemList.appendChild(li);
  itemInput.value = "";
}