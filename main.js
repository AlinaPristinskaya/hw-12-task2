

// Define the grocery items array
let groceryItems = ["Apples", "Milk", "Bread", "Eggs"];

// Function to display items in the list

function displayItems() {
  const ul = document.querySelector('.grocery-list');
  ul.innerHTML = ''; // Clear existing list items
const groceryItemsEl = groceryItems.map(item => {
  const liElement = document.createElement('li');
      liElement.textContent = item;
       // Create a span element for delete functionality
       const span = document.createElement("span");
    span.textContent = "\u00D7"; // Unicode 'x'
    span.className = "delete";
    span.addEventListener("click", deleteItem);
    liElement.appendChild(span);


      return liElement
      
  });
  
  ul.append(...groceryItemsEl)
  
}



// Function to add item to the list
function addItem() {
  const input = document.getElementById("input");
  const newItem = input.value.trim(); // Trim to remove leading/trailing whitespaces
  if (newItem==="") {
    alert("Please insert an item."); // Alert if input is empty
   return
    
  } else {
    groceryItems.push(newItem); // Add item to the array
    input.value = ""; // Reset input field
    displayItems(); // Display the updated items
  }
}



function deleteItem(event) {
  const done=event.target.parentNode.textContent.slice(0, -1)
  const index = groceryItems.findIndex(item => item === done);
  groceryItems.splice(index,1)// Remove item from the array
  displayItems();// Display the updated items
 
}



// Event listener for clicking the Add button
// const addButton = document.getElementById("addButton");
// addButton.addEventListener("click", addItem);

// Event listener for clicking on list items to toggle checked class
const itemList = document.querySelector(".grocery-list");
itemList.addEventListener("click", function (event) {
  console.log('sobitie')
  console.log(event.target.tagName);
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
