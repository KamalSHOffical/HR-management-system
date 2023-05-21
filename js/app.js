// generate a random Number
function getRandomInt(min, max) {
    // return Math.floor(1000 + Math.random() * 9999);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// Store each generated ID in this array to make sure that every
// -generated id is unique and not duplicated
const generatedIds = [];

// method to generate unique id for each employee
function uniqueId() {
    // generating 4-digits number from 1000 to 9999 in integer value
    let id = getRandomInt(1000, 10000);
    // check if this generated id is within the array
    let checkId = generatedIds.includes(id);
    // it will returns true or false
    while (checkId === true) {
        // if this checked id is not in the array, its a new id so push it to array
        // and return this id  
        id = getRandomInt(1000, 10000);
        checkId = generatedIds.includes(id);
    }
    generatedIds.push(id);
    return id;
}

// employees departements
const departements = ["Administration", "Marketing", "Development", "Finance"]

// employees levels
const levels = ["Junior", "Mid-Senior", "Senior"];

function calculateSalary(level) {
    let salary;

    switch (level) {
        case 'Junior':  // from 500 to 1000
            salary = getRandomInt(500, 1000);
            break;
        case 'Mid-Senior':  // from 1000 to 1500
            salary = getRandomInt(1000, 1500);
            break;
        case 'Senior':  // from 1500 to 2000
            salary = getRandomInt(1500, 2000);
            break;
        default:
            salary = 0;
            break;
    }

    // applying 7.5% tax
    let netSalary = Math.floor(salary - (salary * 0.075));
    return netSalary;
}

// employees
const employee1 = {
    employeeId: 1000,
    fullName: "Ghazi Samer",
    departement: departements[0],
    level: levels[2],
    imageUrl: "image1.jpg",
    salary: calculateSalary(levels[2]),
}

const employee2 = {
    employeeId: 1001,
    fullName: "Lana Ali",
    departement: departements[3],
    level: levels[2],
    imageUrl: "image2.jpg",
    salary: calculateSalary(levels[2]),
}

const employee3 = {
    employeeId: 1002,
    fullName: "Tamara Ayoub",
    departement: departements[1],
    level: levels[2],
    imageUrl: "image3.jpg",
    salary: calculateSalary(levels[2]),
}

const employee4 = {
    employeeId: 1003,
    fullName: "Safi Walid",
    departement: departements[0],
    level: levels[1],
    imageUrl: "image4.jpg",
    salary: calculateSalary(levels[1]),
}

const employee5 = {
    employeeId: 1004,
    fullName: "Omar Zaid",
    departement: departements[2],
    level: levels[2],
    imageUrl: "image5.jpg",
    salary: calculateSalary(levels[2]),
}

const employee6 = {
    employeeId: 1005,
    fullName: "Rana Saleh",
    departement: departements[2],
    level: levels[0],
    imageUrl: "image6.jpg",
    salary: calculateSalary(levels[0]),
}

const employee7 = {
    employeeId: 1006,
    fullName: "Hadi Ahmad",
    departement: departements[3],
    level: levels[1],
    imageUrl: "image7.jpg",
    salary: calculateSalary(levels[1]),
}

function renderMain() {
    document.getElementById("employee1").innerHTML = `Employee name: ${employee1.fullName} 
    <br/> Employee salary: $${employee1.salary}`;

    document.getElementById("employee2").innerHTML = `Employee name: ${employee2.fullName} 
    <br/> Employee salary: $${employee2.salary}`;

    document.getElementById("employee3").innerHTML = `Employee name: ${employee3.fullName} 
    <br/> Employee salary: $${employee3.salary}`;

    document.getElementById("employee4").innerHTML = `Employee name: ${employee4.fullName} 
    <br/> Employee salary: $${employee4.salary}`;
    
    document.getElementById("employee5").innerHTML = `Employee name: ${employee5.fullName} 
    <br/> Employee salary: $${employee5.salary}`;

    document.getElementById("employee6").innerHTML = `Employee name: ${employee6.fullName} 
    <br/> Employee salary: $${employee6.salary}`;

    document.getElementById("employee7").innerHTML = `Employee name: ${employee7.fullName} 
    <br/> Employee salary: $${employee7.salary}`;

    //document.getElementById("unique").innerHTML = `${uniqueId()}`;
}

renderMain();