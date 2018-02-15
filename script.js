let display = document.querySelector('.display');

fetch('https://api.github.com/users/camilufer')
  .then(function(response) {
    //Turns the the JSON into a JS object
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    //Let's make some HTML!
    let html = `<h2><a href="${data.html_url}">${data.login}</a></h2>
      <p>${data.name}</p>
      <p>Followers: ${data.followers}</p>
    `;

    //Put that HTML on the page
    display.innerHTML = html;
  });

// //Gonna go get some cool data with this.
// let req = new XMLHttpRequest();
//
// //Start the XHR setup.
// //I am going to GET it at the location in the URL.
// req.open("GET", "https://api.github.com/users/drpepper");
// //I want to know when it is done.
// req.addEventListener("load", reqListener);
// //Okay, send the request now.
// req.send();
