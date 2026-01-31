export default class ListItem { 
    constructor(name, date=null) {
         this.name = name; 
         this.date = date; 
        this.completed = false;
        this.id = Date.now();
    }

    get name() {
        return this._name;
    }

    set name(value) { 
        this._name = value; 
    }
    
    get completed() {
        return this._completed;
    }

    set completed(value) { 
        this._completed = value;
    }
}