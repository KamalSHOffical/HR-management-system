'use strict';

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

// employees departments
const departments = ["Administration", "Marketing", "Development", "Finance"]

// employees levels
const levels = ["Junior", "Mid-Senior", "Senior"];

// employees list
const allEmployees = [];

// employee constructor
function Employee( fullName, department, level, imageUrl) {
    this.employeeId = this.uniqueId();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = this.calculateSalary(level);

    allEmployees.push(this);
}

Employee.prototype.renderEmployees = function () {
    document.write(
        `<p class="font1">
        Employee name: ${this.fullName} 
        <br/> Department: ${this.department}
        <br/> Employee salary: $${this.salary}
        </p>`
    );

    //document.getElementById("employee").innerHTML = employees;
};


// method to generate unique id for each employee
Employee.prototype.uniqueId = function () {
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
};

Employee.prototype.calculateSalary = function (level) {
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
};

let ghazi = new Employee(
    "Ghazi Samer",
    departments[0],
    levels[2],
    "ghazi.jpg",
);

let lana = new Employee(
    "Lana Ali",
    departments[3],
    levels[2],
    "lana.jpg",
);

let tamara = new Employee(
    "Tamara Ayoub",
    departments[1],
    levels[2],
    "tamara.jpg",
);

let safi = new Employee(
    "Safi Walid",
    departments[0],
    levels[1],
    "safi.jpg",
);

let omar = new Employee(
    "Omar Zaid",
    departments[2],
    levels[2],
    "omar.jpg",
)

let rana = new Employee(
    "Rana Saleh",
    departments[2],
    levels[0],
    "rana.jpg",
)

let hadi = new Employee(
    "Hadi Ahmed",
    departments[3],
    levels[1],
    "hadi.jpg",
)

function renderMain() {
    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].renderEmployees();
    }

    //document.getElementById("unique").innerHTML = `${uniqueId()}`;
}

renderMain();
