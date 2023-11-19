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
  console.log("NOT YET IMPLEMENTED"); 
}

function deleteToDoItem(todoId) {
  
for (let i=0; i<todoItems.length; i++) {
  if (todoItems[i].id === todoId) {
    todoItems.spliced(i, 1);
  }
}
console.log(todoItems);
  console.log("NOT YET IMPLEMENTED");
}

function clearCompletedTasks() {
 
  console.log("NOT YET IMPLEMENTED"); 
}
