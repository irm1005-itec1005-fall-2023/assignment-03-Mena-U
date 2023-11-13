let counter = 0;
let todoItems = [
  /*  {
  id: Counter,
    text: "This is a todo item",
    completed: false,
  },
  {
    id: Counter + 1,
    text: "This is a todo item",
    completed: false,
  },
  {
    id: Counter + 2,
    text: "This is a todo item",
    completed: false,
  },
  {
    id: Counter + 3,
    text: "This is a todo item",
    completed: false,
  },
  {
    id: Counter + 4,
    text: "This is a todo item",
    completed: false,
  }*/
];  
console.log(todoItems);

function addToDoItem(text) {
  console.log("NOT YET IMPLEMENTED");

let toDoItem = {
  id: counter,
  text: text,
  completed: false,
}
counter=counter+1;
todoItems.push(toDoItems);
console.log(todoItems);
}

function removeToDoItem(todoId) {
for(let i=0; i<todoItems.length; i++) {
  todoItems.splice(i, 1);
}
 else(print("Error"));
}
console.log(todoItems);
  console.log("NOT YET IMPLEMENTED"); 

function markToDoItemAsCompleted(todoId) {
for (let i=0; i<todoItems.length; i++) {
  if (todoItems[i]. id === todoId) {
    todoItems[i].completed = true;
  }
}
console.log(todoItems);
  console.log("NOT YET IMPLEMENTED"); // Remove this line when you start working on the function
}

// Function to delete a task from the array
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything, though you can return
// true or false depending on whether the item was successfully deleted
function deleteToDoItem(todoId) {
  // Implement the logic to remove a task here
for (let i=0; i<todoItems.length; i++) {
  if (todoItems[i].id === todoId) {
    todoItems.spliced(i, 1);
  }
}
console.log(todoItems);
  console.log("NOT YET IMPLEMENTED"); // Remove this line when you start working on the function
}

// Function to clear all completed tasks
// Loop through the array of todos, and when you find a todo item that is marked
// as completed, remove it completely from the array
function clearCompletedTasks() {
  // Implement the logic to clear completed tasks here

  console.log("NOT YET IMPLEMENTED"); // Remove this line when you start working on the function
}

// You can write your own tests here if you would like to test
// your code before using the automated tests
// For example, you could run:
//  addToDoItem("Test ToDo"); // This should add a new todo item to the array
//  console.log(todoItems); // This should show the todo item you added
//  removeToDoItem(0); // This should remove the todo item with ID 0 from the array
//  markToDoItemAsCompleted(0); // This should mark the todo item with ID 0 as completed
