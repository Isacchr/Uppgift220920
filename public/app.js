
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
    var customerPhoneNr = document.getElementById('customerPhoneNr').value;
    var customerAdress = document.getElementById('customerAdress').value;
    var customerEmail = document.getElementById('customerEmail').value;

    var orderCustomerInfo = {Name: customerName, PhoneNumber: customerPhoneNr, Adress: customerAdress, Email: customerEmail};
    customerInfo.push(orderCustomerInfo);

    const ULcustomers = document.getElementById('customerListUL');
    ULcustomers.innerHTML = '';

    customerInfo.forEach(customer => {
        var listElements = document.createElement('li');
        listElements.innerHTML = (`Customers: Name: ${customer.Name} || Phone-Number: ${customer.PhoneNumber} || Email: ${customer.Email}`);

        ULcustomers.appendChild(listElements);
    })

    console.log(customerInfo);

    document.getElementById('customerName').value = '';
    document.getElementById('customerPhoneNr').value = '';
    document.getElementById('customerAdress').value = '';
    document.getElementById('customerEmail').value = '';

}
