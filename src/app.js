const Form = require('./components/Form');
const Confirmation = require('./components/Confirmation');

const app = document.getElementById('app');

function renderComponent(component) {
    app.innerHTML = '';
    app.appendChild(component());
}

let isConfirmed = false;

function handleFormSubmission(data) {
    // Here you would call the function to send data to Google Sheets
    // For example: googleSheetsAPI.sendData(data);
    isConfirmed = true;
    renderComponent(Confirmation);
}

function init() {
    renderComponent(() => Form({ onSubmit: handleFormSubmission }));
}

init();