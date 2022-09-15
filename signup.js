import * as common from './httpRequest.js';

const signup = () => {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let mobileNumber = document.getElementById('mobileNumber').value;
    let isShopOwner = document.getElementById('isShopOwner').value ? 1 : 0;
    let signupData = {
        firstName,
        lastName,
        password,
        email,
        mobileNumber,
        isShopOwner
    };

    common.post('/signup', JSON.stringify(signupData), signupSuccess, null);
}

const signupSuccess = (data) => {
    document.location.href = "login.html";
};

document.getElementById('signup').onclick = signup;


