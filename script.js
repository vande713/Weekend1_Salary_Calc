
let salaryCount = 0; // this variable is keeping track of salary

$(document).ready(onReady);

function onReady() {
    $('#submitButton').on('click', clickedHandler);
}

function clickedHandler() {
    console.log('Button has been clicked');
    addNewEmployee();
    addExpenses();
    deleteButton();
    removeFields();
}

function addNewEmployee() { // this function adds/appends name, ID, title and salary for each new employee
    $('#employeeList').append(
        '<tr>' + 
            '<td>'+ $('#firstNameInput').val() +'</td>' + 
            '<td>' + $('#lastNameInput').val() + '</td>' +
            '<td>' + $('#idInput').val() + '</td>' +
            '<td>' + $('#titleInput').val() + '</td>' +
            '<td>' + '$'+$('#annualSalaryInput').val() + '</td>' +
            '<td class="delete">' + '<button class="deleteButton">Delete</button> ' + '</td>' +
        '</tr>'
    )
}

function removeFields() { // this function removes text in the inputs when the submit button is pressed
    $('.inputs').val('');
}

function addExpenses() { // this function adds monthly expenses to the bottom of the table
    let updateMonthlyExpenses = $('#annualSalaryInput').val(); // setting new variable to equal the value of annual salary for each employee
    salaryCount += (updateMonthlyExpenses / 12); // incrementing the salary counter by employee annual salary then dividing by 12 to get monthly salary
    $('#totalMonthlyCounter').text('$' + salaryCount.toFixed(2)); // adding the monthly salary to DOM and keeping salary to 2 decimal points
}


function deleteButton() { // this function deletes the employee information when the delete button is clicked
    $('.deleteButton').on('click', function(){
        $(this).parent().parent().remove(); // this removes the entire row when delete button is pressed
    }
)}


// the code below this line is only for Hard Mode in which we have to create a Class Employee and store new employee info into array.
// also note this is not finished

let employeeArray = [];

class Employee {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

let employee1 = new Employee('Sam', 'Vanderlinden', 3245, 'Manager', 202020);
employeeArray.push(employee1);
console.log(employeeArray);
console.log(employee1.title);

let employee2 = new Employee('Jessica', 'Vanderlinden', 2345, 'Manager', 202020);
employeeArray.push(employee2);
console.log(employeeArray);

let employee3 = new Employee($('#firstNameInput').val(), 'Vanderlinden', 2345, 'Lead', 234435);
employeeArray.push(employee3);
console.log(employee3.lastName);