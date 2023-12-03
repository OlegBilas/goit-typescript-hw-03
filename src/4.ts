
class Key{
    private signature: number = Math.random();
    
    //  constructor() {
    //     this.signature = Math.random();
    //  }
    getSignature() {
        return this.signature;
    }
    
}

class Person{
    constructor(private key: Key) {
        
    }

    getKey() {
        return this.key;
    }
}


abstract class House{
    protected door: true | false;
    tenants: Person[];

    constructor(protected key: Key) { 
        this.door = false;
    }

    comeIn (person:Person){
        if (this.door === true) {
    this.tenants.push(person);
        }
        console.log("Come in");
        
    }

    abstract openDoor(key: Key): void;
}


class MyHouse extends House{

    constructor(key: Key) { 
        super(key);
    }
    openDoor(key: Key){
    
    if (this.key === key) {
        this.door = true;
        }
    };
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};