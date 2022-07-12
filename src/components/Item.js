
class Item {
    static lastId = 0; //static identifica que é uma variável de class
    constructor(text) { //será chamado sempre que querer criar um novo item
        this.id = Item.lastId++
        this.text = text;
        this.done = false; //que a tarefa inicial não foi feita
    }
}

export default Item;