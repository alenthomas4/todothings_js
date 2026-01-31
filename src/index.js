import ListItem from './ListItem';
import './styles.css';
import { appendTodoListItem, renderListItem } from './domUtils';




document.addEventListener('DOMContentLoaded', () => {
  const save = document.getElementById("save-todo");
  const titleInput = document.querySelector(".todo-title");

  if (save) {
    save.addEventListener("click", function() { 
      const title = titleInput.value.trim();
      if (!title) {
        console.log("Title is required");
        return;
      }
      
      console.log("new todo item added"); 
      const newItem = new ListItem(title);
      renderListItem(newItem);
      
      // Clear the input
      titleInput.value = "";
    });
  }

  const item1 = new ListItem("buy groceries");
  appendTodoListItem(item1.name, item1.date ? item1.date : "");
  console.log(item1);
});