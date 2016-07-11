//2016-07-03, MW
//2016-07-05, MW

var todos = [];

//While loop for being in the app
//If quit then exit loop
while (userAction !== "quit") {

  //Ask for user action
  var userAction = prompt("What would you like to do?");
  
  //If new then create a todo
  if (userAction === "new") {
    addTodo();
  }

  //If list then show all todos
  else if (userAction === "list") {
    viewTodos();    
  }

  //If delete then delete a todo
  else if (userAction === "delete") {
    deleteTodo();    
  }

  //If quit then acknowledge
  else if (userAction === "quit") {
    console.log("Thank you for using this todo-service!");    
  }
}



//Add a todo to the todo-array
function addTodo() {

  var newTodo = prompt("Enter a new todo");
  var currentIndex = todos.push(newTodo) - 1;

  console.log("Added [" + newTodo + "] to the list at index " + currentIndex + ".");
}



//List all todos in the todo-array
function viewTodos() {

  console.log("*****************************"); 
  console.log("Listing all current totos:"); 

  todos.forEach(function(todo, index) {
    console.log(index + ": " + todo);
  });

  // for (var index = 0; index < todos.length; index++) {
  //   console.log(index + ": " + todos[index]);
  // }
  
  console.log("*****************************");
}



//Delete a specific todo
function deleteTodo() {

  var deleteItem = prompt("Which todo do you want to delete? (Enter an index)");

  var deletedItem = todos.splice(deleteItem, 1);

  console.log("Removed item [" + deleteItem + ": " + deletedItem + "] from the list.");
}






