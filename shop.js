import * as common from './httpRequest.js';

const create = () => {
    let name = document.getElementById('name').value;
    let mobileNumber = document.getElementById('contact').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let id = document.getElementById('id').value;
    let shopData = {
        name,
        mobileNumber,
        address,
        city,
        id
    };
    if (!id)
        common.post('/shop/add', JSON.stringify(shopData),  createShopSuccess);
    else {
        common.post('/shop/update/'+id, JSON.stringify(shopData), createShopSuccess);
    }
}

const createShopSuccess = (data) => {
    console.log("shop created succesfully");
    console.log(data)
    document.location.href = "index.html";
}

const getShopSuccess = (data) => {
    console.log(data);
    document.getElementById('name').value = data?.data?.name;
    document.getElementById('contact').value = data?.data?.mobileNumber;
    document.getElementById('address').value = data?.data?.address;
    document.getElementById('city').value = data?.data?.city;
    document.getElementById('id').value = data?.data?.id;
}

const getShop = () => {
    common.get('/shop/getShopByUserId', getShopSuccess);
};


document.getElementById('createshop').onclick = create;

getShop();