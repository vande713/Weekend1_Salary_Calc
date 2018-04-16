
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