const remove = document.querySelectorAll(".delete");
const checkmarks = document.querySelectorAll(".checkmark");
const tasks = document.querySelectorAll(".text"); // Renamed 'task' to 'tasks' to avoid conflict
const taskDiv = document.querySelector(".task");

// checkmarks.forEach((checkmark, index) => {
//   checkmark.addEventListener("click", () => {
//     const task = tasks[index]; // Get the corresponding task element

//     if (
//       checkmark.style.background !== "gray" &&
//       task.style.textDecoration !== "line-through"
//     ) {
//       checkmark.style.background = "gray";
//       task.style.textDecoration = "line-through";
//     } else {
//       checkmark.style.background = "white";
//       task.style.textDecoration = "none";
//     }
//   });
// });

// Using event delegation for all dynamic elements
document.addEventListener('click', function(e) {
  // Handle delete button clicks
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.style.display = "none";
  }
  
  // Handle checkmark clicks
  if (e.target.classList.contains('checkmark')) {
    const task = e.target.nextElementSibling;
    if (e.target.style.background !== "gray") {
      e.target.style.background = "gray";
      task.style.textDecoration = "line-through";
    } else {
      e.target.style.background = "white";
      task.style.textDecoration = "none";
    }
  }
});

// Add new task functionality remains the same
const button = document.querySelector(".btn");
const inputField = document.querySelector("input");
button.addEventListener("click", () => {
  const userInput = inputField.value.trim();
  if (userInput !== "") {
    // Create the new task div
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    // Create the checkmark
    const checkmark = document.createElement("p");
    checkmark.classList.add("checkmark");

    // Create the task text
    const taskText = document.createElement("p");
    taskText.classList.add("text");
    taskText.textContent = userInput;

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Del";

    // Append elements to the new task div
    newTask.appendChild(checkmark);
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);

    // Append the new task to the task list
    document.body.append(newTask);
    inputField.value = "";
  } else {
    alert("please input a character!");
  }
});