class ClassName {

    propertyName = "default value";

    static staticPropertyName = "default static value";

    public publicPropertyName = "default value";

    private privatePropertyName = "default value";

    protected protectedPropertyName = "default value";

    constructor( name:string ){
        this.propertyName = name;
    }

    action(){
        return this.privatePropertyName;
    }

}

class AnotherClassName extends ClassName {

}


const instance1 = new ClassName("defaultName");
const valueOf_privatePropertyName = instance1.action();

instance1.publicPropertyName = "none of your business";

const instance2 = new AnotherClassName("new name");

console.log( ClassName );

console.log( instance1 );

console.log( instance2 );