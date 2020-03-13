fetch('https://jsonplaceholder.typicode.com/posts')
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
    var user_container;
    var data_container;
    var title_div;
    var body_div;
    let prev_user = '';
    for(let i = 0; i < data.length; i++) {
      if(data[i].userId != prev_user) {
        user_container = document.createElement('div');
        user_container.innerHTML = 'User ID: ' + data[i].userId;
        container.appendChild(inner_container);
      }

      data_container = document.createElement('div');
      title_div = document.createElement('div');
      body_div = document.createElement('div');

      title_div.innerHTML = data[i].id + '. ' + data[i].title;
      body_div.innerHTML = data[i].body;
      data_container.appendChild(title_div);
      data_container.appendChild(body_div);
      container.appendChild(data_container);
    }
  }
