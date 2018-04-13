

$(document).ready(onReady);

function onReady() {
    $('#submitButton').on('click', clickedHandler);
}

function clickedHandler() {
    console.log('Button has been clicked');
    addNewEmployee();
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