import * as common from './httpRequest.js';

const logout = () => {
    common.post('/logout', JSON.stringify({}), logoutSuccess);
    sessionStorage.removeItem("auth");
    sessionStorage.removeItem("userfirstname");
    sessionStorage.removeItem("userlastname");
    window.location.reload();
}

const logoutSuccess = () => {
    console.log('logout successful');       
}

document.getElementById('logoutbtn').onclick = logout;