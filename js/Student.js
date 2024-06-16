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

        Student.prototype.arrAttendance = function (boolItem){
                if (this.currentIndex < 25) {
                        this.attendance[this.currentIndex] = boolItem;
                        this.currentIndex++;
                } else {
                        throw new Error('Attendance is full')
                }
        };

        Student.prototype.arrBoolAttendance = function (attendanceArr){
                attendanceArr.forEach(item => {
                        if(this.currentIndex < 25){
                                this.arrAttendance(item)
                        }
                });
        };

        Student.prototype.present = function (){
                this.arrAttendance(true)
        };

        Student.prototype.absent = function (){
                this.arrAttendance(false)
        };

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



