export default class ProjectManager {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  removeProject(id) {
    this.projects = this.projects.filter(p > p.id !== id);
  }
}
