
let salaryCount = 0; // this variable is keeping track of salary

let employeeArray = [];

$(document).ready(onReady);

function onReady() {
    $('#submitButton').on('click', clickedHandler);
    $('#submitButton').on('click', addEmployee);
}

function clickedHandler() {
    console.log('Button has been clicked');
    addNewEmployee();
    addExpenses();
    deleteButton();
    removeFields();
    // addEmployee();
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



class Employee {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

function addEmployee() {
    const employee = new Employee(
      $('#firstNameInput').val(),
      $('#lastNameInput').val(),
      $('#idInput').val(),
      $('#titleInput').val(),
      $('#annualSalaryInput').val()
    );
    console.log('New employee', employee);
  
    // Add it to the array
    employeeArray.push(employee);

}




