'use strict';

// The Model ///////////////////////////////////
// store holds the shopping list item data
// the 'checked' property for each item indicates whether or not the item is checked (i.e. crossed off)
// some items are pre-added here so the DOM renders a non-empty list to start

const store = [
    {id: cuid(), name: 'apples', checked: true},
    {id: cuid(), name: 'oranges', checked: false},
    {id: cuid(), name: 'milk', checked: true},
    {id: cuid(), name: 'bread', checked: false}
]

// Controller Functions //////////////////////////////

function generateItemElement(item) {
   // create an <li> string for an element provided
   return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`; 
}

function generateShoppingItemsString(shoppingList) {
    // generate the final string of <li>s to render the shopping list in the DOM
    console.log("Generating Shopping List");
    const items = shoppingList.map((item) => generateItemElement(item));
    return items.join("");
}

function addItemToShoppingList(item, arr) {
    let shoppingItemObject = {
        id: cuid(),
        name: item,
        checked: false
    }
    arr.push(shoppingItemObject);
}

function getIdFromElement(item) {
    return $(item).closest('li').data("item-id");
}

function crossOff(id, arr) {
    const item = arr.find(item => item.id === id);
    item.checked = !item.checked;
    console.log(item.checked);
}


function renderShoppingList() {
    // render the shopping list in the DOM
    // for each element in the 'store' array generate a string representing an <li>
    // element.name rendered as inner text
    // set the element's index as a data attribute on <li>
    // element.checked rendered as presence of '.shopping-item__checked' class
    // join the individual item strings in one single string
    // insert the final string into the '.js-shopping-list' <ul> in the DOM
    console.log("'renderShoppingList' ran");
    const shoppingListItemsString = generateShoppingItemsString(store);
    $(".js-shopping-list").html(shoppingListItemsString);
}

function handleNewItemSubmit() {
    // facilitate users adding a new shopping list item
    // Listen for when users submit a new list item. And then...
    // Get the name of the new item from the text input in our new item form
    // Clear out the value from the input so eventually new items can be added
    // Create an object representing the new item and add it to the shopping list 'store'
    // Re-render the shopping list in the DOM in light of the updated 'store'
    $("#js-shopping-list-form").submit(function(event) {
        event.preventDefault();
        console.log('`handleNewItemSubmit` ran');
        let shoppingItem = $(".js-shopping-list-entry");
        if(shoppingItem.val().length > 0) {
            console.log(shoppingItem.val());
            addItemToShoppingList(shoppingItem.val(), store);
            shoppingItem.val('');
            console.log(store);
            renderShoppingList();
        }
      });
}

function handleItemCheckClicked() {
    // toggle strikethrough for shopping list item when user marks it as 'checked'
    // Listen for when a user clicks the 'check' button on an item.
    // Retrieve the item's id from the data attribute.
    // Toggle the .shopping-item_checked' class on the target <li> item
    // Re-render the shopping list. When the user marks an item as 'checked' by way of the 'check' button
    $(".js-shopping-list").on('click', '.js-item-toggle', function(event) {
        console.log("'handleItemCheckclicked' ran");
        let id = getIdFromElement(event.currentTarget);
        crossOff(id, store);
        renderShoppingList();
    });
}

function handleDeleteItemClicked() {
    // remove item from the list when users deletes the item
    // When the user chooses to delete the item by way of the 'delete' button
    // Remove the item from the 'store' array
    // Render the updated shopping list
    console.log("'handleDeleteItemClicked' ran");
}

// View ////////////////////////////////////////////////////

function handleShoppingList() {
    // callback function when the page loads.
    // render the list and activate the functions responsible for handling
    // user events (i.e. add, check, delete)
    renderShoppingList();
    handleNewItemSubmit(store);
    handleItemCheckClicked();
    handleDeleteItemClicked();
}

// when the page loads, call handleShoppingList
$(handleShoppingList);