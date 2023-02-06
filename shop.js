import * as common from './httpRequest.js';

var imageName;
var fileLocation;

const create = () => {
    let name = document.getElementById('name').value;
    let mobileNumber = document.getElementById('contact').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let id = document.getElementById('id').value;
    let file = fileLocation ? fileLocation : null;
    let category = document.getElementById('inputCategory').value != 0 ? document.getElementById('inputCategory').value : null;
    let shopData = {
        name,
        mobileNumber,
        address,
        city,
        id,
        file,
        category
    };
    if (!id)
        common.post('/shop/add', JSON.stringify(shopData), createShopSuccess);
    else {
        common.post('/shop/update/' + id, JSON.stringify(shopData), createShopSuccess);
    }
}

const createShopSuccess = (data) => {
    console.log("shop created succesfully");
    console.log(data)
    document.location.href = "index.html";
}

const getShopSuccess = (data) => {
    console.log(data);
    if (data.data) {
        document.getElementById('name').value = data?.data?.name;
        document.getElementById('contact').value = data?.data?.mobileNumber;
        document.getElementById('address').value = data?.data?.address;
        document.getElementById('city').value = data?.data?.city;
        document.getElementById('id').value = data?.data?.id;
        if (data?.data?.file) {
            fileLocation = data.data.file;
            showUploadImage(data.data.file);
        }
        setCategory(data?.data?.category);
    }
}

const getShop = () => {
    common.get('/shop/getShopByUserId', getShopSuccess);
};

const setCategory = (categoryId) => {
    const elements = document.getElementById('inputCategory').children;

    for (let element of elements) {
        if (element.value == categoryId)
            element.setAttribute('selected', 'selected');
    }
}


document.getElementById('createshop').onclick = create;

function showUploadImage(path) {
    document.getElementById('uploadedImage').innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${path}" class="card-img-top h-100">
        <button onclick="hideUploadImage()">Remove Image</button>
    </div>
    `;
}

document.hideUploadImage = () => {
    document.getElementById('uploadedImage').innerHTML = '';
    fileLocation = null;
}


const imageUploadSuccess = (data) => {
    console.log(data);
    fileLocation = data?.data?.location;
    showUploadImage(fileLocation);
}

document.querySelector('#image').addEventListener('change', event => {
    common.postWithFormData('/shop/imageUpload', event, imageUploadSuccess);
})

const getAllCategories = () => {
    common.get('/category/getAll', getAllCategoriesSuccess);
};

const getAllCategoriesSuccess = (data) => {
    console.log(data);
    const categoryDropdown = document.getElementById('inputCategory');
    let dropDownInnerHTML = '<option value="0">None Selected</option>';
    if (data?.data) {
        for (const category of data.data) {
            dropDownInnerHTML += `<option value="${category.id}">${category.name}</option>`
        }
    }

    categoryDropdown.innerHTML = dropDownInnerHTML;

    getShop();
}

getAllCategories();