// Fetches data from url
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
    var container = document.getElementById('data'); // Contains all data
    var user_container; // Contains user
    var data_container; // Contains title and body
    var title_div; // Contains title
    var body_div; // Contains body
    var prev_user = ''; // Contains previous user id
    var i;

    // Displays elements from JSON
    for(i = 0; i < data.length; i++) {
      // Displays changes in user id
      if(data[i].userId != prev_user) {
        user_container = document.createElement('li');
        user_container.setAttribute('class', 'user-' + data[i].userId);
        user_container.innerHTML = 'User ID: ' + data[i].userId;
        container.appendChild(user_container);
        prev_user = data[i].userId;
      }

      // Sets containers and classes
      data_container = document.createElement('li');
      data_container.setAttribute('class', 'user-' + data[i].userId, 'post-' + data[i].id, 'container');
      title_div = document.createElement('div');
      title_div.className = 'title';
      body_div = document.createElement('div');
      body_div.className = 'body';

      // Sets content in containers
      title_div.innerHTML = data[i].id + '. ' + data[i].title;
      body_div.innerHTML = data[i].body;
      data_container.appendChild(title_div);
      data_container.appendChild(body_div);
      container.appendChild(data_container);
    }
  }

  // Filters data by user-# or post-#
  // Modified code from https://www.w3schools.com/howto/howto_js_filter_lists.asp
  function filter() {
    var input, filter, ul, li, elem, i, txtValue;
    input = document.getElementById('input'); // Input in text box
    filter = input.value.toUpperCase(); // Ignores casing
    ul = document.getElementById("data"); // List container
    li = ul.getElementsByTagName('li'); // List elements

    // Goes through list changing style to only display based on filter
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
