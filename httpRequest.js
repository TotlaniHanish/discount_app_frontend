export function get(url, functionToCallOnSuccess, functionToCallOnError) {
    fetch('http://localhost:5000' + url, {
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
    fetch('http://localhost:5000' + url, {
        method: 'POST',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
          'authorization': getAuth()
        },
        body: body,
      }).then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        console.log(data);
        if (functionToCallOnSuccess && (data.statusCode == 200 || data.statusCode == 201))
          functionToCallOnSuccess(data);
        else
          functionToCallOnError(data);
      }).catch(error => {
        // console.log(error);
        if (functionToCallOnError)
            functionToCallOnError();
      });
}

export function postWithFormData(url, event, functionToCallOnSuccess, functionToCallOnError) {
  const files = event.target.files;
  const formData = new FormData();
  formData.append('myFile', files[0]);
  fetch('http://localhost:5000' + url, {
    method: 'POST',
    headers: {
      'authorization': getAuth()
    },
    body: formData
  }).then(response => response.json())
  .then(data => {
    console.log(data);
    if (functionToCallOnSuccess && (data.statusCode == 200 || data.statusCode == 201))
      functionToCallOnSuccess(data);
    else
      functionToCallOnError(data);
  })
}


function getAuth() {
    return sessionStorage.getItem('auth');
}