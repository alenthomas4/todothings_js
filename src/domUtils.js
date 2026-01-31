import './template.html';

const container = document.querySelector(".todo-container"); 
const header = document.createElement("div"); 
header.innerHTML = "<strong>New content appended!</strong>"; 

export function renderListItem(item) { 
    header.appendChild(header); 
}