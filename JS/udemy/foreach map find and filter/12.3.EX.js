const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics","biology"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
   };

console.log("========================== TASK 1 ==========================================");
// 1. A method called “findPerson” that takes two arguments,
// a type (either a student or teacher), and an id.
// It will return a particular object of that person.


school.findPerson = function(type,id){
    return this[type].find(i => i.id === id)
};

console.log(school.findPerson('teachers',2));
console.log(school.findPerson('students',13));
// console.log(school.findPerson('students',131));

console.log("========================== TASK 2 ==========================================");
// A method called “assignStudent” that takes two
// arguments, a student’s id and a subject.
// Assign all of the students to the first available teacher who
// teaches that subject and who is not in full capacity. If all of
// the teachers are in full capacity log to the console “Sorry,
// no available teachers left”.

school.assignStudent = function(id,subject){
    // this.students.find(i => i.id == id)
    
    const studentName = this.students.find(i => i.id === id).name;
    
    if(this.students.find(i => i.id === id) !== undefined){
        this.teachers.forEach(element => {
            if(element.subjects.includes(subject) && element.capacityLeft > 0){
                element.students.push(studentName);
                element.capacityLeft--; 
                if(element.capacityLeft <= 0){
                    console.log(`${studentName}, sorry,no available teachers left.`);
                }
            }
            
        });
        this.students.find(i => i.id === id).subject = [subject];//this line is extra for me
    }
}
school.assignStudent(10,"history");
// school.assignStudent(14,"history");
school.assignStudent(13,"ethics");
school.assignStudent(12,"ethics");
school.assignStudent(10,"chemistry");
// console.log(school.students);
console.log(school.teachers);
// console.log();

console.log("========================== TASK 3 ==========================================");
// A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, a new subject.
// Assign the new subject to that particular teacher if that
// subject doesn’t exist in their array of subjects

school.assignTeachersSubject = function (ID,subject){
    this.teachers.find(teacher => teacher.id === ID).subjects.includes(subject) || this.teachers.find(teacher => teacher.id === ID).subjects.push(subject);
}
school.assignTeachersSubject(1,"programing");
console.log(school.teachers);

console.log("========================== TASK 4 ==========================================");
// Create a new method of anything you want

school.countTeathcersSubjects = function (){
    const schoolSubject = {};
    this.teachers.forEach(teacher  => {
        for(sub of teacher.subjects){
            schoolSubject[sub]   ?  schoolSubject[sub] += 1 : schoolSubject[sub] = 1;
        }
    });
    return schoolSubject;
}

console.log(school.countTeathcersSubjects());



