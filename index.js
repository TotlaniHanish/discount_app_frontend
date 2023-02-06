import * as common from './httpRequest.js';

const getAllCategories = () => {
    common.get('/category/getAll', getAllCategoriesSuccess);
};

const getAllCategoriesSuccess = (data) => {
    console.log(data);

    if (data?.data) {
        processDataAndCreateDiv(data.data);
    }
}

function processDataAndCreateDiv(data) {
    const categoryDiv = document.getElementById('category-cards');
    let flexDivArr = [];
    let flexDiv = null;
    let categoryElementString = '';
    for (let i = 0; i < data.length; i++) {
        if (i%2 == 0) {
            flexDiv = createFlexDiv(categoryDiv);
            flexDivArr.push(flexDiv);
            categoryElementString = '';
        }
        categoryElementString += createCategory(data[i]);
        if (i%2 == 1 || !data[i+1])
            flexDiv.innerHTML = categoryElementString;
    }

}

function createFlexDiv(categoryDiv) {
    const flexDiv = document.createElement('div');
    flexDiv.className = 'd-flex m-4 justify-content-evenly ';
    categoryDiv.appendChild(flexDiv);
    return flexDiv;
}

document.goToCategory = (categoryName) => {
    console.log(categoryName);
}

function createCategory(category) {
    return `<div class="card" style="width: 18rem;" onclick="goToCategory('${category.name}')">
        <div class="card-header">
            ${category.name}
        </div>
        <img src="${category.fileUrl}" class="card-img-top h-100" alt="..." style="padding: 0.5em;">
    </div>`;
}



getAllCategories();