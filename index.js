'use strict';

// The Model ///////////////////////////////////
// store holds the shopping list item data
// the 'checked' property for each item indicates whether or not the item is checked (i.e. crossed off)
// some items are pre-added here so the DOM renders a non-empty list to start

const store = [
    {id: cuid(), name: 'apples', checked: false},
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
    $(".js-shopping-list").append(shoppingListItemsString);
}

function handleNewItemSubmit() {
    // facilitate users adding a new shopping list item
    console.log("'handleNewItemSubmit' ran");
}

function handleItemCheckClicked() {
    // toggle strikethrough for shopping list item when user marks it as 'checked'
    console.log("'handleItemCheckclicked' ran");
}

function handleDeleteItemClicked() {
    // remove item from the list when users deletes the item
    console.log("'handleDeleteItemClicked' ran");
}

// View ////////////////////////////////////////////////////

function handleShoppingList() {
    // callback function when the page loads.
    // render the list and activate the functions responsible for handling
    // user events (i.e. add, check, delete)
    renderShoppingList();
    handleNewItemSubmit();
    handleItemCheckClicked();
    handleDeleteItemClicked();
}

// when the page loads, call handleShoppingList
$(handleShoppingList);