
let salaryCount = 0;

$(document).ready(onReady);

function onReady() {
    $('#submitButton').on('click', clickedHandler);
}

function clickedHandler() {
    console.log('Button has been clicked');
    addNewEmployee();
    addExpenses();
}

function addNewEmployee() {
    $('#employeeList').append(
        '<tr>' + 
            '<td>'+ $('#firstNameInput').val() +'</td>' + 
            '<td>' + $('#lastNameInput').val() + '</td>' +
            '<td>' + $('#idInput').val() + '</td>' +
            '<td>' + $('#titleInput').val() + '</td>' +
            '<td>' + $('#annualSalaryInput').val() + '</td>' +
        '</tr>'
    )
}

function addExpenses() {
    let updateMonthlyExpenses = $('#annualSalaryInput').val();
    salaryCount += (updateMonthlyExpenses / 12);
    $('#totalMonthlyCounter').text('$' + salaryCount.toFixed(2));
}