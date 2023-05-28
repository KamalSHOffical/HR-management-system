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
function Employee(fullName, department, level, imageUrl) {
    this.employeeId = this.uniqueId();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = this.calculateSalary(level);

    allEmployees.push(this);
}

// Use div elements in html pages that have the id "js-container"
const container = document.getElementById('js-container');

Employee.prototype.renderEmployees = function () {

    //document.getElementById("employee").innerHTML = employees;

    /* document.write(
         `<p class="font1">
         Employee name: ${this.fullName} 
         <br/> Department: ${this.department}
         <br/> Employee salary: $${this.salary}
         </p>`
     );*/

    // Creating div element for employee's card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    // Adding image element to the card's div element
    const cardImage = document.createElement('img');
    cardImage.src = this.imageUrl;
    cardImage.alt = `${this.fullName}`;
    cardDiv.appendChild(cardImage);

    // Text element
    const cardText = document.createElement('div');
    cardText.classList.add('card-text');

    const nameId = document.createElement('p');
    nameId.textContent = `Name: ${this.fullName} - ID: ${this.employeeId}`;
    cardText.appendChild(nameId);

    const depLevel = document.createElement('p');
    depLevel.textContent = `Department: ${this.department} - Level: ${this.level}`;
    cardText.appendChild(depLevel);

    cardDiv.appendChild(cardText);

    // Append the card to the container
    container.appendChild(cardDiv);
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
    "assets/Ghazi.jpg",
);

let lana = new Employee(
    "Lana Ali",
    departments[3],
    levels[2],
    "assets/Lana.jpg",
);

let tamara = new Employee(
    "Tamara Ayoub",
    departments[1],
    levels[2],
    "assets/Tamara.jpg",
);

let safi = new Employee(
    "Safi Walid",
    departments[0],
    levels[1],
    "assets/Safi.jpg",
);

let omar = new Employee(
    "Omar Zaid",
    departments[2],
    levels[2],
    "assets/Omar.jpg",
)

let rana = new Employee(
    "Rana Saleh",
    departments[2],
    levels[0],
    "assets/Rana.jpg",
)

let hadi = new Employee(
    "Hadi Ahmed",
    departments[3],
    levels[1],
    "assets/Hadi.jpg",
)

/*function renderMain() {
    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].renderEmployees();
    }

    //document.getElementById("unique").innerHTML = `${uniqueId()}`;
}*/

function renderMain() {

    // Seperating each card depending on their department
    for (let i = 0; i < departments.length; i++) {
        const depRow = document.createElement('div');
        depRow.classList.add('card-row');
        const textRow = document.createElement('div');
        const depName = document.createElement('h3');
        depName.textContent = `${departments[i]}'s employees: `
        textRow.appendChild(depName);

        for (let j = 0; j < allEmployees.length; j++) {
            if (allEmployees[j].department === departments[i]) {
                allEmployees[j].renderEmployees();
                depRow.appendChild(container.lastElementChild);
            }
        }

        if (depRow.childElementCount > 0) {
            // Append the department row container to the main container
            container.appendChild(textRow);
            container.appendChild(depRow);
        }
    }

}


renderMain();


