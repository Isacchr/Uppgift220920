
var customerInfo = [];

var orderCustomerInfo = {
    Name: '',
    PhoneNumber: '',
    Adress: '',
    Email: ''
};

build = () => {

    const divInput = document.getElementById('divInput');
    const divCustomerList = document.getElementById('customerList');

    const hideShowBtn = document.createElement('button');
    hideShowBtn.onclick = () => divCustomerList.hidden = true; 
    hideShowBtn.innerText = 'Hide/Show Customer List';

    hideShowBtn.onclick = () => divCustomerList.hidden = !divCustomerList.hidden;
    divInput.appendChild(hideShowBtn);

}

submitInfo = () => {

    var customerName = document.getElementById('customerName').value;
    var customerTelephoneNr = document.getElementById('customerTelephoneNr').value;
    var customerAdress = document.getElementById('customerAdress').value;
    var customerEmail = document.getElementById('customerEmail').value;

    var orderCustomerInfo = {Name: customerName, PhoneNumber: customerTelephoneNr, Adress: customerAdress, Email: customerEmail};
    customerInfo.push(orderCustomerInfo);

    console.log(customerInfo);

    document.getElementById('customerName').value = '';
    document.getElementById('customerTelephoneNr').value = '';
    document.getElementById('customerAdress').value = '';
    document.getElementById('customerEmail').value = '';

}
