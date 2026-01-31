export default class ListItem { 
    constructor(name, date=null) {
         this.name = name; 
         this.date = date; 
        this.completed = false;
        this.id = Date.now();

    
    }

    set name(value) { 
        this._name = value; 
    }
    
    set completed(value) { 
        this._completed = value;
    }


}