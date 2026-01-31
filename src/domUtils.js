import './template.html';

const container = document.querySelector(".todo-container"); 

/**
 * Renders a todo list item using the appendTodoListItem utility
 * @param {object} item - The ListItem object with name and date
 */
export function renderListItem(item) { 
    if (!item) return;
    appendTodoListItem(item.name, item.date ? item.date : "");
}

/**
 * Appends a todo item to the .todo-list container
 * @param {string} title - The task title
 * @param {string} date - The task date (e.g., 'Today')
 */
export function appendTodoListItem(title, date) {
  const list = document.querySelector('.todo-list');
  if (!list) return;

  const itemDiv = document.createElement('div');
  itemDiv.className = 'todo-list-item';

  const radio = document.createElement('span');
  radio.className = 'radio-icon';

  const titleSpan = document.createElement('span');
  titleSpan.className = 'item-title';
  titleSpan.textContent = title;

  const dateSpan = document.createElement('span');
  dateSpan.className = 'item-date';
  dateSpan.style.cssText = 'color:#43a047;font-size:13px;margin-left:10px;';
  dateSpan.textContent = date;

  itemDiv.appendChild(radio);
  itemDiv.appendChild(titleSpan);
  itemDiv.appendChild(dateSpan);

  list.appendChild(itemDiv);
}