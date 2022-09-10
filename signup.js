function signup() {
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

    fetch('http://192.168.0.110:5000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData),
      }).then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        console.log(data);
  
      }).catch(error => {
        console.log(error);
      });
}

