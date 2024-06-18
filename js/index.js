import Student from "./StudentClass.js";

const s = new Student('Petr', 'Bulkin', 2008);
const s2 = new Student('Ivan', 'Ptica', 2011);

console.log(s)

s.absent();
s.present();
s.setGrade(70);
s.present();
s.setGrade(90);
s.present();
s.setGrade(90);

console.log(s.avGrade);
console.log(s.avAttendance);
console.log(s.summary());
console.log('---------------')
console.log(s2)
s2.present();
s2.present();
s2.setGrade(92);
s2.present();
s2.setGrade(90);
s2.present();
s2.setGrade(90);

console.log(s2.avGrade);
console.log(s2.avAttendance);
console.log(s2.summary());