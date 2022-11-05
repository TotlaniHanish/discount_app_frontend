import * as common from './httpRequest.js';

const login = () => {
    let name = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let shopData = {
        name,
        contact,
        address,
        city
    };

    common.post('/shop', JSON.stringify(shopData),  createShopSuccess);
}

const createShopSuccess = (data) => {
    console.log("shop created succesfully");
    console.log(data)
    document.location.href = "index.html";
}


document.getElementById('createshop').onclick = login;