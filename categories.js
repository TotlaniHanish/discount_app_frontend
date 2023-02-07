import * as common from './httpRequest.js';

const getAllShopsOfCategoryProvidedSuccess = (data) => {
    console.log(data);

    const shops = document.getElementById('shops');

    if (data?.data?.length) {
        let shopsHtml = '';

        for (const shop of data.data) {
            shopsHtml += htmlOfOffer(shop);
        }

        shops.innerHTML = shopsHtml;
    } else {
        shops.innerHTML = '<p>No Shops having this Offer!!!.</p>';
    }
}

function getAllShopsOfCategoryProvided() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const categoryId = urlParams.get('category');

    common.get('/shop/getShopByCategoryId/'+categoryId, getAllShopsOfCategoryProvidedSuccess);
}

const htmlOfOffer = (shop) => {
    return `
    <div class="card mb-3 mt-4" style="border: none;">
    <div class="row g-0">
      <div class="col-md-2">
        <img src="${shop.file}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-10">
        <div class="card-body">
          <h5 class="card-title">${shop.name}</h5>
          <p class="card-text">${shop.address}</p>
          <p class="card-text">${shop.city}</p>
          <p class="card-text">${shop.mobileNumber}</p>
        </div>
      </div>
    </div>
  </div>
    `;
}


getAllShopsOfCategoryProvided();