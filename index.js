'use strict';

// The Model ///////////////////////////////////
// store holds the shopping list item data
// the 'checked' property for each item indicates whether or not the item is checked (i.e. crossed off)
// some items are pre-added here so the DOM renders a non-empty list to start

const store = [
    {name: 'apples', checked: false},
    {name: 'oranges', checked: false},
    {name: 'milk', checked: true},
    {name: 'bread', checked: false}
]

// Controller Functions //////////////////////////////

function generateShoppingListItems(arr) {
    // generate the final string of <li>s to render the shopping list in the DOM
    console.log("Generating Shopping List");
    return `
        <li>apples</li>
        <li>oranges</li>
        <li>milk</li>
        <li>bread</li>
    `;
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
    const shoppingListItems = generateShoppingListItems(store);
    $(".js-shopping-list").append(shoppingListItems);
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