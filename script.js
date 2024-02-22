function averageNote(note1, note2) {
  const average = (note1 + note2) / 2;
  return average;
}

let students = [
  {
    name: "Adriano",
    firstNote: 10,
    secondNote: 5,
  },
  {
    name: "Bruno",
    firstNote: 8,
    secondNote: 9,
  },
  {
    name: "Carlos",
    firstNote: 7,
    secondNote: 6,
  },
  {
    name: "Douglas",
    firstNote: 6,
    secondNote: 7,
  },
];

function printNote(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${averageNote(
    student.firstNote,
    student.secondNote
  )}`;
}

for (let student of students) {
  let noteMessanger = printNote(student);
  alert(noteMessanger);
}
