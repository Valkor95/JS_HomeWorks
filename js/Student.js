function Student(name, lastname, data){
        this.name = name;
        this.lastname = lastname;
        this.data = data;
        this.grades = [];
        this.attendance = new Array(25).fill(null)
        this.currentIndex = 0;


        Student.prototype.age = function (){
                const currentYear = new Date().getFullYear()
                return currentYear - this.data
        };

        Student.prototype.averageMark = function (){
                const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
                return this.grades.length ? sum/this.grades.length : 0;
        };

        Student.prototype.present = function (){
                if (this.currentIndex < 25){
                        this.attendance[this.currentIndex] = true;
                        this.currentIndex++
                } else {
                        console.log('Attendance is full');
                }
        };

        Student.prototype.absent = function (){
                if(this.currentIndex < 25){
                        this.attendance[this.currentIndex] = false;
                        this.currentIndex++;
                } else {
                        console.log('Attendance is full')
                }
        };

        Student.prototype.arrAttendance = function (arrAttend){
                for (let i = 0; i < arrAttend.length; i++){
                        if (this.currentIndex >= 25) break;
                        this.attendance[this.currentIndex] = arrAttend[i];
                        this.currentIndex++;
                }

        }

        Student.prototype.averageAttendance = function (){
                const attendedClasses = this.attendance.filter(item => item === true).length;
                return attendedClasses/25;
        };

        Student.prototype.summary = function (){
                const avgGrade = this.averageMark();
                const avgAttendance = this.averageAttendance();

                if (avgGrade > 90 && avgAttendance > 0.9){
                        return 'Молодець!';
                } else if (avgGrade > 90 || avgAttendance > 0.9){
                        return 'Добре, але можно краще!';
                } else {
                        return 'Редиска!'
                }
        };
    }

    export default Student



