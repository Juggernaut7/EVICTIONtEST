
// //  Write an expression to return on the names starting with letter A.
// 1 //
const names = ['Ali', 'Aisha', 'Omar', 'Fatima', 'Amir'];

const namesStartingWithA = names.filter(name => name.startsWith('A'));
console.log(namesStartingWithA);

// 2 //

// Write an expression to display the number of occurrences of each word.


const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const Count = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(Count);

// 3 //

function orderFood(callback) {
    console.log('Ordering food...');
    setTimeout(callback, 1000);
}

function prepareFood(callback) {
    console.log('Preparing food...');
    setTimeout(callback, 2000);
}

function deliverFood(callback) {
    console.log('Delivering food...');
    setTimeout(callback, 1500);
}

function receiveFood(callback) {
    console.log('Receiving food...');
    setTimeout(callback, 500);
}

function makePayment(callback) {
    console.log('Making payment...');
    setTimeout(callback, 1000);
}

orderFood(() => {
    prepareFood(() => {
        deliverFood(() => {
            receiveFood(() => {
                makePayment(() => {
                    console.log('Food order process completed.');
                });
            });
        });
    });
});

// 4=======/

const students = [
    { name: 'juggernaut', score: 90, passed: true },
    { name: 'scholar', score: 92, passed: true },
    { name: 'akuri', score: 30, passed: false },
    { name: 'dollypee', score: 80, passed: true },
    { name: 'olodo', score: 45, passed: false }
];

// Use forEach to print each student's name along with their score


students.forEach(student => {
    console.log(`${student.name} scored ${student.score}`);
});

// Use map to create a new array containing only the students' names in uppercase


const studentNamesUppercase = students.map(student => student.name.toUpperCase());
console.log(studentNamesUppercase);

// Use filter to create a new array of students who passed the exam (passed: true)

const studentsPassed = students.filter(student => student.passed);
console.log(studentsPassed);

// Use filter and map together to create an array of only the names of students who passed, in uppercase

const passedStudentNamesUppercase = students.filter(student => student.passed).map(student => student.name.toUpperCase());
console.log(passedStudentNamesUppercase);



// 5 //
const studentsScores = {
    juggernaut: [90, 85, 88],
    scholar: [92, 91, 93],
    akuri: [30, 40, 35],
    dollypee: [80, 82, 78],
    olodo: [45, 50, 48]
};

function getStudentScores(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (studentsScores[name]) {
                resolve(studentsScores[name]);
            } else {
                reject(new Error('Student not found'));
            }
        }, 1000);
    });
}

async function calculateAverage(name) {
    try {
        const scores = await getStudentScores(name);
        if (scores.length === 0) {
            return 'No scores available';
        }
        const average = scores.reduce((acc, score) => acc + score, 0) / scores.length;
        return average;
    } catch (error) {
        throw error;
    }
}

calculateAverage('juggernaut')
    .then(average => console.log(`Average score: ${average}`))
    .catch(error => console.error(error.message));

calculateAverage('unknown')
    .then(average => console.log(`Average score: ${average}`))
    .catch(error => console.error(error.message));


// 1) list the different ways to declare functions and their differences with examples 




// Function Declaration
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); 

// Function Expression
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(5, 2)); 

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); 

// Differences:
// Function declarations are hoisted, meaning they can be called before they are defined in the code.
// Function expressions and arrow functions are not hoisted, so they must be defined before they are called.


// 2) Scopes and their types

// Global Scope
var globalVar = 'I am global';

function globalScopeExample() {
    console.log(globalVar); 
}
globalScopeExample();

// Function Scope
function functionScopeExample() {
    var functionVar = 'I am local to this function';
    console.log(functionVar); // I am local to this function
}
functionScopeExample();

// Block Scope
if (true) {
    let blockVar = 'I am block scoped';
    console.log(blockVar); // I am block scoped
}


// Differences:
// - Global Scope: Variables declared outside any function or block are in the global scope and can be accessed from anywhere in the code.
// - Function Scope: Variables declared within a function are in the function scope and can only be accessed within that function.

