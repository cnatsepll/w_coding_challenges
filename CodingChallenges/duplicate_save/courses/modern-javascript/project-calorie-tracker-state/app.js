// Anonymous Functions are functions that do not have a variable name following the function keyword
// function hello() {
//   alert('Hello world');
// }
// hello();
//-----------------------//
// var anon = function () {
//   alert('I am anonymous');
// }
// anon();


// Storage Controller
// IIFE
const StorageCtrl = (function(){

  // public methods
  return {
    storeItem: function(item){
      let items;
      // check local storage for exising items
      if(localStorage.getItem('items') === null){
        items =  [];
        // push new item to items array
        items.push(item);
        // set local storage with items array
        // local storage items have to be string so we will json stringify our element
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        items = JSON.parse(localStorage.getItem('items'));
        // push new item onto items array
        items.push(item);
        // reset local storage to include new item in items
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemsFromStorage: function(){
      let items;
      // check to see if there are items in local storage
      if(localStorage.getItem('items') === null){
        items = [];
      }else{
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemStorage: function(updatedItem){
      // get the items from local storage
      let items = JSON.parse(localStorage.getItem('items'));
      // loop through our items, checking each item and the index of that item
      items.forEach(function(item, index){
        // we will check each element until we find the one that matches the item we want to update
        if(updatedItem.id === item.id){
          // when we find the item to update we will remove the previous version from the items list
          // and then replace it with the updated item
          // here the splice is going to the index of the found item, and removing that one entry
          // then the splice replaces that space with the updated item
          items.splice(index, 1, updatedItem);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    deleteItemFromStorage: function(id){
      // get the items from local storage
      let items = JSON.parse(localStorage.getItem('items'));
      // loop through our items, checking each item and the index of that item
      items.forEach(function (item, index) {
        // we will check each element until we find the one that matches the item we want to update
        if (id === item.id) {
          // delete the found item from local storage
          items.splice(index, 1);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    clearItemsFromStorage: function(){
      // remove all stored items from local storage
      localStorage.removeItem('items');
    }
  }
})();


// Item Controller
// IIFE immedietly invoked function expression
// what ever we return from the module is public
// this is how we transfer data from the private methods to the application
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
  // data structure / state
  // this is private and wont be accesible outside of the method
  const data = {
    // items: [
    //   // commenting out data to make the app dynmic
    //   { id: 0, name: 'Templating', calories: 40 },
    //   { id: 1, name: 'Update Backfill', calories: 60 },
    //   { id: 2, name: 'Notes on Goals', calories: 15 }
    // ],
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }
  // returning data to make it publicly accessible
  return {
    // here we are defining a propery of the return object as log data
    // this is a function that we can access in the console by typeinf ItemCtrl.logData()
    // this will access the public method outlined below in our main return
    // log data will then return info stored in the variable named data
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      // create id for new item
      let ID;
      if(data.items.length > 0){
        // if there are items in the data list,
        // then we will take the id from the last item in the list and incriment to the next ID
        ID = data.items[data.items.length - 1].id + 1;
      }else{
        ID = 0;
      }
      // calorie entry string to number
      calories = parseInt(calories);
      // create new entry item
      newItem = new Item(ID, name, calories);
      // add items to item list
      data.items.push(newItem);
      // return the new item
      return newItem;
    },
    getItemById: function(id){
      let found = null;
      // loop through items to match id
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    updateItem: function(name, calories){
      // convert calorie input to number
      calories = parseInt(calories);
      // then we want to check our list of items for the one that has been edited
      // when we find that item we want to update it with the new info
      // then we will return that updated item to the list as found
      let found = null;
      data.items.forEach(function(item){
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function(id){
      // get item ids
     const ids = data.items.map(function(item){
        return item.id
      });
      // get index
      const index = ids.indexOf(id);
      // remove item 
      data.items.splice(index, 1);
    },
    clearAllItems: function(){
      data.items = [];
    },
    setCurrentItem: function(item){
      data.currentItem = item;
    },
    getCurrentItem: function(){
      return data.currentItem;
    },
    getTotalCalories: function(){
      let total = 0;
      // loop through the items and aggregate total
      data.items.forEach(function(item){
        total += item.calories;
      });
      // set total calories in the data structure
      data.totalCalories = total;
      // return the total
      return data.totalCalories;
    },
    logData: function(){
      return data;
    }
  }
})();



// UI Controller
// IIFE immedietly invoked function expression
const UICtrl = (function () {
  // UI selectors
  // these will make it easier to track and make changes to where we want the UI to update
  // helps keep the code more efficient and scalable
  const UIselectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addbtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearbtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  };
  // public methods
  return {
    populateItemList: function(items){
      // looping through items turning them into list items
      let html = '';
      items.forEach(function(item){
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} minutes</em>
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
        </li>
      `;
      });
      // Insert List Items
      document.querySelector(UIselectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name: document.querySelector(UIselectors.itemNameInput).value,
        calories: document.querySelector(UIselectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item){
      // show the item list
      document.querySelector(UIselectors.itemList).style.display = 'block';
      // create li element
      const li = document.createElement('li');
      // add class
      li.className = 'collection-item';
      // add Id
      li.id = `item-${item.id}`;
      // add HTML
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} minutes</em>
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
      // insert item into the UI item list before the end
      document.querySelector(UIselectors.itemList).insertAdjacentElement('beforeend', li);
    },
    updateListItem: function(item){
      // listItems will return a nodeList
      let listItems = document.querySelectorAll(UIselectors.listItems);
      // since we cant't forEach through a nodeList, we have to first turn it into an array
      listItems = Array.from(listItems);
      listItems.forEach(function(listItem){
        const itemID = listItem.getAttribute('id');
        // looking for the list item node element that we want to update
        if(itemID === `item-${item.id}`){
          // when we match we will update the exising info displayed in the app
          document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} minutes</em>
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
        }
      });
    },
    deleteListItem: function(id){
      const itemId = `#item-${id}`;
      const item = document.querySelector(itemId);
      item.remove();
    },
    clearInput: function(){
      document.querySelector(UIselectors.itemNameInput).value = '';
      document.querySelector(UIselectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function(){
      // grabbing object properties from the current item
      document.querySelector(UIselectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UIselectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    removeItems: function(){
      let listItems = document.querySelectorAll(UIselectors.listItems);
      // turn node list into an array
      listItems = Array.from(listItems);
      listItems.forEach(function(item){
        item.remove();
      });
    },
    hideList: function(){
      document.querySelector(UIselectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories){
      document.querySelector(UIselectors.totalCalories).textContent = totalCalories;
    },
    // after leaving the edit state of the application
    // reset the UI to original position
    showEditState: function(){
      document.querySelector(UIselectors.updateBtn).style.display = 'inline';
      document.querySelector(UIselectors.deleteBtn).style.display = 'inline';
      document.querySelector(UIselectors.backBtn).style.display = 'inline';
      document.querySelector(UIselectors.addbtn).style.display = 'none';
    },
    clearEditState: function () {
      UICtrl.clearInput();
      document.querySelector(UIselectors.updateBtn).style.display = 'none';
      document.querySelector(UIselectors.deleteBtn).style.display = 'none';
      document.querySelector(UIselectors.backBtn).style.display = 'none';
      document.querySelector(UIselectors.addbtn).style.display = 'inline';
    },
    // make the UI Selectors public
    getSelectors: function(){
      return UIselectors;
    }
  }
})();



// App Controller
// IIFE immedietly invoked function expression
// we are going to load the app controller with anything that needs to load with the initial start of the application
const App = (function (ItemCtrl, StorageCtrl, UICtrl) {
  // Load EventListeners
  const loadEventListeners = function(){
    // we will want to use the described UI Selectors
    // we will have to use a public method to get them since they are listed as private methods
    const UIselectors = UICtrl.getSelectors();
    // Add item event
    document.querySelector(UIselectors.addbtn).addEventListener('click', itemAddSubmit);
    // Disable Submit on Enter
    document.addEventListener('keypress', function(e){
      // keyCode for Enter is 13
      // not all browsers support keyCode so we will also check for "which"
      if(e.keyCode === 13 || e.which === 13){
        // preventing deault and returning false will ensure the enter key is disabled
        e.preventDefault();
        return false;
      }
    });
    // Edit Icon Click Event
    // will grab the entire item element and we will pare down with event delegation to the elements we need
    document.querySelector(UIselectors.itemList).addEventListener('click', itemEditClick);
    // Update Item Event
    document.querySelector(UIselectors.updateBtn).addEventListener('click', itemUpdateSubmit);
    // Delete Button Event
    document.querySelector(UIselectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
    // Back Button Event
    document.querySelector(UIselectors.backBtn).addEventListener('click', UICtrl.clearEditState);
    // Clear Button Event
    document.querySelector(UIselectors.clearbtn).addEventListener('click', clearAllItemsClick);
  }
  // Add item submit method
  const itemAddSubmit = function(e){
    // check that there is input before submitting
    // get form input from UI Controller
    const input = UICtrl.getItemInput();    
    // check that both inputs are filled before submitting
    if (input.name !== '' && input.calories !== ''){
      // add item to data list
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // add item to UI list
      UICtrl.addListItem(newItem);
      // get aggregate total
      const totalCalories = ItemCtrl.getTotalCalories();
      // add total to UI
      UICtrl.showTotalCalories(totalCalories);
      // Store in local storage
      StorageCtrl.storeItem(newItem);
      // clear input fields
      UICtrl.clearInput();
    }
    e.preventDefault();
  }
  // Update app state when edit icon is clicked on list element
  const itemEditClick = function(e){
    // if the target of the click event is the edit icon then we will change to the update state
    // we will make the targetted item, as the current item so we can update it
    if(e.target.classList.contains('edit-item')){
      // get list item id (item-0, item-1)
      // going up to the li container to grab the id
      const listId = e.target.parentNode.parentNode.id;
      // break the id into an array
      // this way we can split the id at the dash and get the number more easily
      const listIdArr = listId.split('-');
      // get the id from the array
      // the id will be the second item in the array
      const id = parseInt(listIdArr[1]);
      // get the item element to edit
      const itemToEdit = ItemCtrl.getItemById(id);
      // set current item to found item to edit
      ItemCtrl.setCurrentItem(itemToEdit);
      // add current item to form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  }
  // Submit the updated item element
  const itemUpdateSubmit = function(e){
    // get newly entered item input
    const input = UICtrl.getItemInput();
    // Update the item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
    // update the UI with the updated list item 
    UICtrl.updateListItem(updatedItem);
    // get aggregate total for display
    const totalCalories = ItemCtrl.getTotalCalories();
    // add total to UI
    UICtrl.showTotalCalories(totalCalories);
    // update local storage
    StorageCtrl.updateItemStorage(updatedItem);
    // reset the UI to default by leaving the edit state
    UICtrl.clearEditState();
    e.preventDefault();
  }
  const itemDeleteSubmit = function(e) {
    // get current item
    const currentItem = ItemCtrl.getCurrentItem();
    // delete item from data structure
    ItemCtrl.deleteItem(currentItem.id);
    // delete from UI
    UICtrl.deleteListItem(currentItem.id);
    // get aggregate total for display
    const totalCalories = ItemCtrl.getTotalCalories();
    // add total to UI
    UICtrl.showTotalCalories(totalCalories);
    // delete from local storage
    StorageCtrl.deleteItemFromStorage(currentItem.id);
    // reset the UI to default by leaving the edit state
    UICtrl.clearEditState();
    e.preventDefault();
  }
  const clearAllItemsClick = function(){
    // delete all items from the data structure
    ItemCtrl.clearAllItems();
    // get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // add total calories to UI
    UICtrl.showTotalCalories(totalCalories);
    // remove from UI
    UICtrl.removeItems();
    // clear from local storage
    StorageCtrl.clearItemsFromStorage();
    // hide task list
    UICtrl.hideList();

  }
  return{
    init: function(){
      // set initial state 
      UICtrl.clearEditState();
      // Fetching items from the data structure 
      const items = ItemCtrl.getItems();
      // check if there are any items
      // if there are no items in the list then we will hide the list styling
      // else we will display the list of items
      if(items.length === 0){
        UICtrl.hideList();
      }else{
        // Populate the UI list with items
        UICtrl.populateItemList(items);
      }
    // load list totals on app startup
      // get aggregate total
      const totalCalories = ItemCtrl.getTotalCalories();
      // add total to UI
      UICtrl.showTotalCalories(totalCalories);
      // Load Event Listeners to the app elements on startup
      loadEventListeners();
    }
  }
  // passing in the parameters where the function is invoked
})(ItemCtrl, StorageCtrl, UICtrl);



// Initialize App
App.init();