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

    employeeTable.innerHTML += `
    <tr>
        <td>${firstNameVal}</td>
        <td>${lastNameVal}</td>
        <td>${IDVal}</td>
        <td>${titleVal}</td>
        <td>${salaryVal}</td>
        <td><button onClick="removeData(event)">Delete</button></td>
    </tr>`;
}

    let annualSalary = 0;
    let totalSalary = annualSalary += salaryVal;
    for (let i = 0; i < annualSalary.length; i++) {
        totalSalary += annualSalary[i];
    }
    console.log(totalSalary);

    let monthlySalary = (annualSalary / 12);
    console.log (monthlySalary);


// function totalSalary () {
//     for (salaryVal i=0; i < salaryVal.length; i++)

// }

// function salaryTotal(salaryVal) {
//     let monthlySalary = (sum (salaryVal))
// }