function renderShoppingList() {
    // render the shopping list in the DOM
    // notification of successful execution
    console.log("'renderShoppingList' ran");
}

function handleNewItemSubmit() {
    // facilitate users adding a new shopping list item
    // notification of successful execution
    console.log("'handleNewItemSubmit' ran");
}

function handleItemCheckClicked() {
    // toggle strikethrough for shopping list item when user marks it as 'checked'
    // notification of successful execution
    console.log("'handleItemCheckclicked' ran");
}

function handleDeleteItemClicked() {
    // remove item from the list when users deletes the item
    // notification of successful execution
    console.log("'handleDeleteItemClicked' ran");
}

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