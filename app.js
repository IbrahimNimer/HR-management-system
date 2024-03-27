// Employee constructor
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
}


// Sample employees
let employees = [
    new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', 'img/m1.jpg'),
    new Employee(1001, 'Lana Ali', 'Finance', 'Senior', 'img/f1.jpg'),
    new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', 'img/f2.jpg'),
    new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', 'img/m2.jpg'),
    new Employee(1004, 'Omar Zaid', 'Development', 'Senior', 'img/m3.jpg'),
    new Employee(1005, 'Rana Saleh', 'Development', 'Junior', 'img/f3.jpg'),
    new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'img/m4.jpg')
];

// Render employees in the main section
let tableBody = document.querySelector('.employee-list tbody');
employees.forEach(employee => {
    let row = `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.fullName}</td>
            <td>${employee.department}</td>
            <td>${employee.level}</td>
            <td>${employee.salary}</td>
            <td><img src="${employee.imageUrl}" alt="${employee.fullName}" class="employee-image"></td>
        </tr>
    `;
    tableBody.innerHTML += row;
});
