/// <reference path="../../../typings/main.d.ts" />
/* global $:false */



// Toggle the input for new todos

$(".fa-pencil").on("click", function() {

  $("#todo-input").fadeToggle();

});



// Making a new todo
$("#todo-input").on("keypress", function(event){

  var newTodo = $(this).val();

  // Insert on enter, no blank todos
  if (event.which === 13 &&  newTodo.length > 0 ) {

    $("ul").append(makeTodoHTML(newTodo));

    $(this).val("");   

  } else {
    // Do nothing
  }

});



// Return a proper todo li with correct HTML
function makeTodoHTML(todoText) {
 
  return "<li class=\"todo-item\"><span class=\"delete-todo\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span> " + todoText + "</li>";

}



// Check off a todo by clicking on it
$("#todo-list").on("click", ".todo-item", function(){

  $(this).toggleClass("todo-done");

});



// Delete a todo by clicking on the X
$("#todo-list").on("click", ".delete-todo", function(event) {

  $(this).parent().fadeOut(200, function(){

    $(this).remove(); 

  });

  event.stopPropagation();

});



