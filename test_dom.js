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
        user_container = document.createElement('li');
        user_container.setAttribute('class', 'user-' + data[i].userId);
        user_container.innerHTML = 'User ID: ' + data[i].userId;
        container.appendChild(user_container);
        prev_user = data[i].userId;
      }

      data_container = document.createElement('li');
      data_container.setAttribute('class', 'user-' + data[i].userId, 'post-' + data[i].id, 'container');
      title_div = document.createElement('div');
      title_div.className = 'title';
      body_div = document.createElement('div');
      body_div.className = 'body';

      title_div.innerHTML = data[i].id + '. ' + data[i].title;
      body_div.innerHTML = data[i].body;
      data_container.appendChild(title_div);
      data_container.appendChild(body_div);
      container.appendChild(data_container);
    }
  }

  function filter() {
    var input, filter, ul, li, elem, i, txtValue;
    input = document.getElementById('input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("data");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
      elem = li[i];
      txtValue = elem.className;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
