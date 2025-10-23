const students = [
  { name: "ann", age: 10 },
  { name: "annnn", age: 20 },
  { name: "annmmm", age: 19 },
  { name: "annmmm", age: 18 },
];

const data = students.filter((st) => st.age >= 18);

console.log(data);
