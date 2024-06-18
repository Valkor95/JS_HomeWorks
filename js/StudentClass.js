class Student {
    #firstName = null;
    #lastName = null;
    #birthYear = null;
    #grades = [];
    #attendance = [];
    #currentLessonIndex = 0;

    constructor(firstName, lastName, yearOfBirth, lessonsCount = 25) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = yearOfBirth;
        this.#lessonsCount = 25;
    }

    #setAttendance (bool){
        if (typeof bool !== 'boolean') throw new Error(`${bool} should be boolean`)

        this.#attendance[this.#currentLessonIndex] = bool;
        this.#currentLessonIndex += 1;
    }

    present (){
        this.#setAttendance(true)
    };

    absent (){
        this.#setAttendance(false)
    };

    summary (){
        if (this.avGrade > 90 && this.avAttendance > 0.9){
            return 'Молодець!';
        } else if (this.avGrade > 90 || this.avAttendance > 0.9){
            return 'Добре, але можно краще!';
        } else {
            return 'Редиска!'
        }

    }

    setGrade(grade){
        if(typeof grade !== 'number') throw new Error('Grade is invalid');
        if(grade > 100 || grade < 0) throw new Error(`Grade cannot be ${grade}`);
        if(!this.#attendance[this.#currentLessonIndex - 1]) throw new Error(`Student ${this.firstName} is absent`);
        this.#grades[this.#currentLessonIndex - 1] = grade
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
        const currentYear = new Date().getFullYear();
        return currentYear - this.#birthYear;
    };

    set birthYear (year){
        if(typeof year !== 'number' || year.toString().length < 4 || year >= new Date().getFullYear()) throw new Error('Invalid Year');
        this.#birthYear = year;
    }

    get avGrade(){
        let sum = 0;
        let lessonsWithGrades = 0;
        for(let i = 0; i < this.#currentLessonIndex; i++){
            if(this.#grades[i] !== null) lessonsWithGrades += 1;
            sum += this.#grades[i]
        }

        return  +Number(sum/lessonsWithGrades).toFixed(2)
    };

    get avAttendance(){
        let visitedLessons = 0;
        for(let i = 0; i < this.#currentLessonIndex; i++){
            if(!this.#attendance[i]) continue;
            visitedLessons += 1
        }

        return +Number(visitedLessons/this.#currentLessonIndex).toFixed(2)
    };

    set #lessonsCount(count){
       if(typeof count !== 'number' || count < 1) throw new Error('Lessons Count is invalid');
       this.#grades = new Array(count).fill(null);
       this.#attendance = new Array(count).fill(null)

    }
}


export default Student