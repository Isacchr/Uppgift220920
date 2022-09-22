
var customerInfo = [];

var orderCustomerInfo = {
    Name: '',
    PhoneNumber: '',
    Adress: '',
    Email: ''
};

function submitInfo() {

    var customerName = document.getElementById('customerName').value;
    var customerTelephoneNr = document.getElementById('customerTelephoneNr').value;
    var customerAdress = document.getElementById('customerAdress').value;
    var customerEmail = document.getElementById('customerEmail').value;

    var orderCustomerInfo = {Name: customerName, PhoneNumber: customerTelephoneNr, Adress: customerAdress, Email: customerEmail};
    customerInfo.push(orderCustomerInfo);

    console.log(customerInfo);

}