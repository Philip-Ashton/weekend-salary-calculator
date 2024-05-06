console.log ('HELLO WORLD');

function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault();


    let firstNameVal = document.querySelector('#firstName-input').value;
    console.log(firstNameVal);
    let lastNameVal = document.querySelector('#lastName-input').value;
    console.log(lastNameVal);
    let IDVal = document.querySelector('#ID-input').value;
    console.log(IDVal);
    let titleVal = document.querySelector('#title-input').value;
    console.log(titleVal);
    let salaryVal = document.querySelector('#salary-input').value;
    console.log(salaryVal);

    let employeeTable = document.querySelector('#employeeData');
}