class Student {
    #firstName: null;
    #lastName: null;
    #birthYear: null;
    #grades: [];

    constructor(firstName, lastName, yearOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    get firstName (){
      return this.#firstName;
    };

    set firstName (str){
        if(typeof str !== 'string' || str.trim().length < 2) throw new Error(`Cannot set ${str} as student FirstName`);
        this.#firstName = str;
    };

    get lastName (){
      return this.#lastName
    };

    set lastName (str){
        if(typeof str !== 'string' || str.trim().length < 2) throw new Error(`Cannot set ${str} as student LastName`);
        this.#lastName = str;
    };

    get age() {
        const currentYear = new Date().getFullYear()
    };

    set birthYear (){

    }

    get avGrade(){

    };
}

export default Student