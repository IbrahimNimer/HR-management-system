/// Employee constructor
class Employee {
    constructor(id, fullName, department, level, imageUrl) {
        this.id = id;
        this.fullName = fullName;
        this.department = department;
        this.level = level;
        this.salary = this.calculateSalary();
        this.imageUrl = imageUrl;
    }
    // Prototype function to calculate salary
    calculateSalary() {
        let minSalary, maxSalary;
        switch (this.level) {
            case 'Senior':
                minSalary = 1500;
                maxSalary = 2000;
                break;
            case 'Mid-Senior':
                minSalary = 1000;
                maxSalary = 1500;
                break;
            case 'Junior':
                minSalary = 500;
                maxSalary = 1000;
                break;
            default:
                minSalary = 0;
                maxSalary = 0;
        }
        let salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
        let netSalary = salary - (salary * 0.075); // 7.5% tax
        return netSalary;
    }

    // Prototype function to render employee information in a card
    render() {
        let card = `
            <div class="card">
                <img src="${this.imageUrl}" alt="${this.fullName}" class="employee-image">
                <div class="card-content">
                    <span>Full Name: ${this.fullName} - Employee ID:${this.id}</span><br>
                    <span>Department: ${this.department} - Level: ${this.level}</span><br>
                    <span>Salary: ${this.salary}</span><br>
                </div>
            </div>
        `;
        return card;
    }
}

// Function to generate a unique four-digit employee ID number
function generateEmployeeId() {
    return Math.floor(1000 + Math.random() * 9000);
}

// Add event listener to form
let form = document.getElementById('addEmployeeForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let fullName = document.getElementById('fullName').value;
    let department = document.getElementById('department').value;
    let level = document.getElementById('level').value;
    let imageUrl = document.getElementById('imageUrl').value;

    let id = generateEmployeeId();
    let employee = new Employee(id, fullName, department, level, imageUrl);
    employees.push(employee);

    renderEmployees();
});

// Function to render employees in cards
function renderEmployees() {
    let cardContainer = document.querySelector('.employee-list');
    cardContainer.innerHTML = '';
    employees.forEach(employee => {
        cardContainer.innerHTML += employee.render();
    });
}

// Sample employees
let employees = [
    new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', 'img/Ghazi.jpg'),
    new Employee(1001, 'Lana Ali', 'Finance', 'Senior', 'img/Lana.jpg'),
    new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', 'img/Tamara.jpg'),
    new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', 'img/Safi.jpg'),
    new Employee(1004, 'Omar Zaid', 'Development', 'Senior', 'img/Omar.jpg'),
    new Employee(1005, 'Rana Saleh', 'Development', 'Junior', 'img/Rana.jpg'),
    new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'img/Hadi.jpg')
];

// Initial rendering
renderEmployees();
