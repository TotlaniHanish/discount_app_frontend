import * as common from './httpRequest.js';

const login = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let loginData = {
        email,
        password
    };

    common.post('/login', JSON.stringify(loginData),  loginSuccess);
}

const loginSuccess = (data) => {
    sessionStorage.setItem("auth", data?.data?.token);
    sessionStorage.setItem("userfirstname", data?.data?.user?.firstName);
    sessionStorage.setItem("userlastname", data?.data?.user?.lastName);
    sessionStorage.setItem("isShopOwner", data?.data?.user?.isShopOwner);
    document.location.href = "index.html";
}


document.getElementById('loginbtn').onclick = login;

const checkLogin = () => {
    if (sessionStorage.getItem('auth'))
    document.location.href = "index.html";
};
checkLogin();