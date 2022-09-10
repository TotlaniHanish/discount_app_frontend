export function get(url, functionToCallOnSuccess, functionToCallOnError) {
    fetch('http://192.168.0.110:5000' + url, {
        method: 'GET',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
          'Authorization': getAuth()
        }
      }).then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        console.log(data);
        functionToCallOnSuccess(data);
      }).catch(error => {
        console.log(error);
        functionToCallOnError();
      });
}

export function post(url, body, functionToCallOnSuccess, functionToCallOnError) {
    fetch('http://192.168.0.110:5000' + url, {
        method: 'POST',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
          'Authorization': getAuth()
        },
        body: body,
      }).then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        console.log(data);
        if (functionToCallOnSuccess)
            functionToCallOnSuccess(data);
      }).catch(error => {
        console.log(error);
        if (functionToCallOnError)
            functionToCallOnError();
      });
}


function getAuth() {
    return sessionStorage.getItem('auth');
}