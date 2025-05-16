// Task 1: Array Manipulation Basics
let shoppingList = []; // Create an empty array

// Function to add an item
function addItem(item) {
    if (item && !shoppingList.includes(item)) {
        shoppingList.push(item); // Add item to the shopping list
        displayList(); // Update displayed list
    }
}

// Function to remove the last item
function removeLastItem() {
    shoppingList.pop(); // Remove the last item
    displayList(); // Update displayed list
}

// Function to display the shopping list
function displayList() {
    const listElement = document.getElementById('shoppingList');
    listElement.innerHTML = ''; // Clear the list

    shoppingList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listElement.appendChild(listItem); // Append item to the list
    });
}

// Task 2: Filter and Search an Array
function filterItems(searchTerm) {
    return shoppingList.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
}

// Event listeners
document.getElementById('addButton').addEventListener('click', () => {
    const itemInput = document.getElementById('itemInput').value;
    addItem(itemInput);
    document.getElementById('itemInput').value = ''; // Clear input field
});

document.getElementById('removeButton').addEventListener('click', () => {
    removeLastItem();
});

// Task 3: Filter and Search an Array
document.getElementById('searchInput').addEventListener('input', () => {
    const searchTerm = document.getElementById('searchInput').value;
    const filteredItems = filterItems(searchTerm);
    
    // Display filtered list
    const listElement = document.getElementById('shoppingList');
    listElement.innerHTML = ''; // Clear current list
    
    filteredItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listElement.appendChild(listItem); // Append filtered item
    });
});


//Reflection on the Lab:
//How did array methods like push() and filter() help you manipulate data in this activity?

//push() helped add new items to the shopping list, making it easy to update the array.

//filter() allowed me to search and display only the items that match a search term, making it easier to find specific items in the list.

//What challenges did you face when trying to filter and search for items in the array?

//Ensuring the search was case-insensitive was a bit tricky, but converting both the items and the search term to lowercase solved it.

//Updating the list in real-time without errors was challenging, especially with large lists.

//How would you modify this code to make it more efficient or user-friendly?

//Efficiency: Adding a delay before the search filter runs (debouncing) would help reduce performance issues with fast typing.

//User-friendliness: Adding a "No items found" message and a clear search button would improve the user experience. Allowing users to remove specific items would also be useful.//