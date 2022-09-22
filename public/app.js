
var customerInfo = [];

var orderCustomerInfo = {
    Name: '',
    PhoneNumber: '',
    Adress: '',
    Email: ''
};

build = () => {

    const divInput = document.getElementById('divInput');
    const divCustomerList = document.getElementById('divCustomerList');

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
        listElements.innerHTML = (`Customers: Name: ${customer.Name} || Phone-Number: ${customer.PhoneNumber} || Email: <a href="mailto:${customer.Email}">${customer.Email}</a> `);

        ULcustomers.appendChild(listElements);
    })

    console.log(customerInfo);

    document.getElementById('customerName').value = '';
    document.getElementById('customerPhoneNr').value = '';
    document.getElementById('customerAdress').value = '';
    document.getElementById('customerEmail').value = '';

}

Search = () => {

    var inputId = document.getElementById('customerSearch').value;
    var searchIdResult = document.getElementById('searchResult');

    findEmail = (persons => {
        return persons.Email === inputId
    });

    searchIdResult.innerHTML = (` Name: ${customerInfo.find(findEmail).Name} | Phone-Number: ${customerInfo.find(findEmail).PhoneNumber} 
     | Adress: ${customerInfo.find(findEmail).Adress} | Email: <a href="mailto:${customerInfo.find(findEmail).Email}">${customerInfo.find(findEmail).Email}</a>`);
}
