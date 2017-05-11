
//My Code

/* $(document).ready(function() {

var count = 0;

$('#new').on('submit', addNewItem);
$('#todos').on('click', '.edit', editItem);
$('#todos').on('click', '.remove', removeItem);
$('#todos').on('submit', '.editor', saveItem);

function updateCount(){
  console.log(count)

  count = $('#todos li').not('.done').length();
  console.log(count);
}

function addNewItem(event) {
  event.preventDefault();
  var newItem = $('#newItem').val();
  $('#todos').append('<li><span class="item">' + newItem + '</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');
  updateCount();
}

function removeItem(event) {
  event.preventDefault();
  $(this).parent().remove();
  updateCount();
}

function editItem(event) {
  event.preventDefault();
  var itemText = $(this).siblings('.item').html();
  var listItem = $(this).parent();

  listItem.html('<form class="editor"><input value=' + itemText + '</span>')
  listItem.find('input').focus();
}

function saveItem(event) {
  event.preventDefault();
  var itemText = $(this).children('input').val();
  var listItem = $(this).parent();
  listItem.html('<span class-"item">' + itemText + '</span> <a class="edit">Edit</a><a class="remove">Remove</a>')
}

});

*/

//Arthur's Code

$(function () {
  // Inital Count
  var count = 0;

  // Event Listeners

  // When an item is submitted in the #new form add item to list
  $('#new').on('submit', addNewItem);
  // When the user clicks remove link, remove that item
  $('#todos').on('click', '.remove', removeItem);
  //When the edit link is clicked go into edit mode
  $('#todos').on('click', '.edit', editItem);
  //What the item editor is submitted, save the changes
  $('#todos').on('submit', '.editor', saveItem);
  $('#clearCompleted').on('click', clearAll);

  // Functions

  function updateCount(){
    // Log the current count
    console.log(count)
    // Count of the number of items
    count = $('#todos li').not('.done').length;
    console.log(count);

    // Print the new count
    $('#count').html(count);
  }

  function addNewItem(event) {
    // Prevent page reload
    event.preventDefault();
    // Get the text the user entered
    var newItem = $('#newItem').val();
    // ADd an <li> with that the text submitted
    $('#todos').append('<li><span class="item">' + newItem + '</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');

    updateCount();
  }

  function removeItem(event) {
    // Prevent page reload
    event.preventDefault();
    // The parent is the item that we need to remove
    //$(this).parent().remove();
    $(this).parent().addClass('done')

    updateCount();
  }

  function clearAll(event) {
    // Prevent page reload
    event.preventDefault();
    $('.done').remove();

    updateCount();
  }

  function editItem(event){
    // Prevent page reload
    event.preventDefault();
    var itemText = $(this).siblings('.item').html();
    var listItem = $(this).parent();

    listItem.html('<form class="editor"><input value="' + itemText + '"></form>');
    listItem.find('input').focus();
  }

  function saveItem(event){
    // Prevent page reload
    event.preventDefault();
    var itemText = $(this).children('input').val();
    var listItem = $(this).parent();
    listItem.html('<span class="item">' + itemText + '</span><a class="edit">Edit</a><a class="remove">Remove</a>')
  }

  // if div has class done, add strikethrough
  // 

});