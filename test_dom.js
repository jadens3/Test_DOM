'use strict';
let url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    display(data);
  })
  .catch(function (err) {
    console.log(err);
  });

  function display(data) {
    var container = document.getElementById('data');
    let prev_user = '';
    for(let i = 0; i < data.length; i++) {
      if(data[i].userId != prev_user) {
        let user_container = document.createElement('div');
        div.innerHTML = 'User ID: ' + data[i].userId;
        container.appendChild(inner_container);
      }

      let data_container = document.createElement('div');
      let title_div = document.createElement('div');
      let body_div = document.createElement('div');

      title_div.innerHTML = data[i].id + '. ' + data[i].title;
      body_div.innerHTML = data[i].body;
      data_container.appendChild(title_div);
      data_container.appendChild(body_div);
      container.appendChild(data_container);
    }
  }
