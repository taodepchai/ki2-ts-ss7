interface Student {
    id: number;
    name: string;
    class: string;
}

let students: Student[] = [
    { id: 1, name: 'Alice', class: 'A' },
    { id: 2, name: 'Bob', class: 'B' },
    { id: 3, name: 'Charlie', class: 'A' },
    { id: 4, name: 'David', class: 'C' },
    { id: 5, name: 'Eva', class: 'B' }
];

function filterStudentsByClass(studentArray: Student[], className: string): Student[] {
    return studentArray.filter(student => student.class === className);
}

let classAStudents: Student[] = filterStudentsByClass(students, 'A');
console.log('Sinh viên trong lớp A:', classAStudents);

let classBStudents: Student[] = filterStudentsByClass(students, 'B');
console.log('Sinh viên trong lớp B:', classBStudents);
