var q = document.querySelector.bind(document);

var addItemBtn = q('#addItemBtn');
var userInput = q('#newItem');
var itemList = q('#list');
var removeItemBtn = q('#removeItemBtn');
var error = q('.error');

function addItem (e) {
  e.preventDefault();
  if (userInput.value === "" || userInput.value === null){
    error.innerHTML = 'Please enter an item.';
    error.classList.add('showError');
  } else {
    var newItem = document.createElement('li');
    newItem.innerHTML = userInput.value;

    itemList.appendChild(newItem);
    userInput.value = null;
    error.classList.remove('showError');
  }
  
}

function removeLastItem (e) {

  e.preventDefault();
  if (itemList.childElementCount <= 0){
    error.innerHTML = 'There are no items in the list.';
    error.classList.add('showError');
  }else {
    var lastItem = itemList.lastElementChild;
    lastItem.classList.add('strikeOut');

    setTimeout(function(){
      lastItem.remove();
    }, 1000); 
  }
}

function removeItem (e){
  var currentItem = e.target;
  currentItem.classList.add('strikeOut');

  setTimeout(function(){
      currentItem.remove();
    }, 1000); 
  
}

addItemBtn.addEventListener('click', addItem);
removeItemBtn.addEventListener('click', removeLastItem);
itemList.addEventListener('click', removeItem);



