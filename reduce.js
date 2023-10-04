// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];

// let sum = nums.reduce((acc, curr) => acc + curr, 0);

let sum = nums.reduce((acc, curr) => {
    console.log(
        "Accumulator: ", acc,
        "Current Value: ", curr,
        "Total Value: ", acc + curr
    );
    return acc + curr;
}, 0);
console.log(sum);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience
    }
    return acc;
}, {});
console.log(experienceByProfession);

//challenge: 
// Use reduce method to execute a function on each item resulting in a single object. 
//The object should be that of the student with the highest english score and should show the student's name and english score. 
//You can either create the arrow function within the reduce method. 
//or create an arrow function outside and pass it into the reduce method.

//steps
//1.Create a variable named biggest using the keyword const
//2.Assign it a value from using the reduce method on the students array
//3.Use either an arrow function inside the reduce method, or create a function and pass it into the reduce method
//4.Use a default value with the reduce method
//5.log out the variable biggest to see the value

//Code:

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

//Solution: 

const biggest = students.reduce((max, student) => {
    if (student.results.english > max.max) {
      return { name: student.name, max: student.results.english };
    } else {
      return max;
    }
  }, { name: '', max: 0 });
  
  console.log(biggest);
  