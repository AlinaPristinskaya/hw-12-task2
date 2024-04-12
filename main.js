

// Define the grocery items array
let groceryItems = ["Apples", "Milk", "Bread", "Eggs"];

// Function to display items in the list
function displayItems() {
  const ol = document.getElementById("grocery-list");
  ol.innerHTML = ""; // Clear existing list items

  // Loop through each item in the array
  groceryItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    // Create a span element for delete functionality
    const span = document.createElement("span");
    span.textContent = "\u00D7"; // Unicode 'x'
    span.className = "delete";
    span.addEventListener("click", function () {
      deleteItem(index);
    });

    // Append the delete span to the list item
    li.appendChild(span);

    // Append the list item to the ul element
    ol.appendChild(li);
  });

  // Call the deleteItem function to delete an item from the grocery list
  deleteItem();
}

// Function to add item to the list
function addItem() {
  const input = document.getElementById("input");
  const newItem = input.value.trim(); // Trim to remove leading/trailing whitespaces

  if (newItem === "") {
    console.log("Please insert an item."); // Alert if input is empty
  } else {
    groceryItems.push(newItem); // Add item to the array
    input.value = ""; // Reset input field
    displayItems(); // Display the updated items
  }
}

// Function to delete item from the list
function deleteItem(index) {
  const deleteButtons = document.querySelectorAll(".delete");

  deleteButtons.forEach((button, i) => {
    button.addEventListener("click", function () {
      groceryItems.splice(i, 1); // Remove item from the array
      displayItems(); // Display the updated items
    });
  });
}

// Event listener for clicking the Add button
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);

// Event listener for clicking on list items to toggle checked class
const itemList = document.getElementById("grocery-list");
itemList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});

// Event listener for pressing Enter key to add new item
const inputField = document.getElementById("input");
inputField.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});

// Display initial items
displayItems();
