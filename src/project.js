import TodoList from "./TodoList";
/**
 *
 */
export default class Project {
  constructor(name) {
    this.name = name;
    this.lists = []; // Array of todolists
  }

  addList(list) {
    if (!(list instanceof TodoList)) {
      throw new Error("Only TodoList Instances are Allowed");
    }
    this.lists.push(list);
  }

  removeLiist(list) {}
}
