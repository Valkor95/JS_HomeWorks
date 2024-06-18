import Student from './Student.js';

const student1 = new Student('Henry', 'Garfield', 2014)
const student2 = new Student('Ivan', 'Stepko', 2009)
const student3 = new Student('Sergey', 'Stepanenko', 2011)

student1.grades.push(95, 92, 89)
student2.grades.push(89, 90, 95)
student3.grades.push(69, 72, 55)

try{
    student1.arrBoolAttendance([true, true, true, true, true, true, true, true, true, false, true, true, true,
        true, true, true, true, true, true, true, true, true, true, true]);
    student2.arrBoolAttendance([true, true, true, true, false, true, true, true, true, false, true, true, true,
        true, false, true, true, true, true, false, true, true, true, false]);
    student3.arrBoolAttendance([true, true, false, true, true, false, true, true, false, true, true, false, true,
        true, false, true, true, false, true, true, false, true, true, false]);
} catch (error){
    console.log(error.message)
}



console.log(`Студент №1: ${student1.summary()}`)
console.log(`Студент №2: ${student2.summary()}`)
console.log(`Студент №3: ${student3.summary()}`)
console.log(`---------------------`)
console.log(`Возраст ${student1.name}: ${student1.age()}`);
console.log(`Средняя оценка ${student1.name}: ${student1.averageMark()}`);
console.log(`Средняя посещаемость ${student1.name}: ${student1.averageAttendance()}`);
console.log(`---------------------`)
console.log(`Возраст ${student2.name}: ${student2.age()}`);
console.log(`Средняя оценка ${student2.name}: ${student2.averageMark()}`);
console.log(`Средняя посещаемость ${student2.name}: ${student2.averageAttendance()}`);
console.log(`---------------------`)
console.log(`Возраст ${student3.name}: ${student3.age()}`);
console.log(`Средняя оценка ${student3.name}: ${student3.averageMark()}`);
console.log(`Средняя посещаемость ${student3.name}: ${student3.averageAttendance()}`);
console.log('---------------------')







