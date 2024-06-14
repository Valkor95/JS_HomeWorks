function Student(name, lastname, data){
        this.name = name;
        this.lastname = lastname;
        this.data = data;
        this.grade = new Array();
        this.attendance = new Array(25).fill(null)
        this.index = 25;


        Student.prototype.age = function (data){

        };

        Student.prototype.averageMark = function (){

        };

        Student.prototype.present = function (){

        };

        Student.prototype.absent = function (){

        };

        Student.prototype.summary = function (){

        };

    }

    export default Student



