/* ----------------------------------------------------------Задание 1------------------------------------------------------------------------- */
// AJAX сам по себе не является языком программирования, это технология. Он отправляет запрос без перегруза страницы. 
// То есть, он отправляет запрос на сервер, получает ответ и обновляет часть страницы. Его инструменты: fetch(),XMLHttpRequest, axios и т.п. 
// К примеру комментарии в Ютуб, где мы нажимаем "Показать еще" и там просто появляются новые комментарии без перегруза всего сайта. 
// Также можно взять инстраграм. Когда мы скроллим вниз, у нас появляются новые посты и при этом сам он полностью не перегружается. 

/* ----------------------------------------------------------Задание 2------------------------------------------------------------------------- */
const xhr = new XMLHttpRequest();//создаёт новый объект XMLHttpRequest, который позволяет отправлять HTTP-запросы к серверу из JavaScript — без перезагрузки страницы
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); //настраивает GET-запрос на указанный URL, асинхронно (true)
xhr.onload = function () {
    if (xhr.status === 200){
        const data = JSON.parse(xhr.responseText); // парсим JSON в массив объектов
        data.forEach(post => {
            console.log(post.title); // выводим заголовки постов
        });
    } else {
        console.error('Ошибка загрузки данных:', xhr.status); //Обрабатывает ответ: если всё ок (код 200), выводит заголовки.
    }                                                         //В else — обработка ошибки загрузки (например, 404 или 500)
};
xhr.onerror = function() {
    console.error('Ошибка соединения'); //На случай, если вообще не удалось соединиться (интернет, сервер недоступен и т.д.)
};
xhr.send(); //Отправка запроса

/* ----------------------------------------------------------Задание 3------------------------------------------------------------------------- */
const postContainer = document.getElementById("posts-container");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)

xhr.onload = function() {
    const data = JSON.parse(xhr.responseText);
    data.forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.title;

        postContainer.appendChild(li)
    })
}

xhr.onerror = function() {
    console.log('errorrrr')
}

xhr.send()

// /* ----------------------------------------------------------Задание 4------------------------------------------------------------------------- */

const textIdContainer = document.getElementById("post-container");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)

xhr.onload = function() {
    const data = JSON.parse(xhr.responseText);
    data.forEach(post => {

        const li = document.createElement("li");

        const title = document.createElement("h3");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        const userId = document.createElement("small");
        userId.textContent = post.userId;

        li.appendChild(title);
        li.appendChild(body);        
        li.appendChild(userId);

        textIdContainer.appendChild(li)
    })
}

xhr.onerror = function() {
    console.error('error_error')
}

xhr.send()


// /* ----------------------------------------------------------Задание 5------------------------------------------------------------------------- */

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

xhr.onload = function () {
  const errorDiv = document.getElementById('error');
  const container = document.getElementById('posts-container');

  if (xhr.status === 200) {
    const posts = JSON.parse(xhr.responseText);

    const list = document.createElement('ul');

    posts.forEach(post => {
      const postItem = document.createElement('li');
      postItem.textContent = post.title;
      list.appendChild(postItem);
    });

    container.appendChild(list);

  } else {
    errorDiv.textContent = `Ошибка загрузки данных. Код: ${xhr.status}`;
    errorDiv.style.color = 'red';
  }
};

xhr.onerror = function () {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = "Ошибка: не удалось подключиться к серверу.";
  errorDiv.style.color = 'red';
};

xhr.send();

// /* ----------------------------------------------------------Задание 6------------------------------------------------------------------------- */

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const container = document.getElementById('posts-container');

loadingDiv.style.display = 'block';

xhr.onload = function () {
  loadingDiv.style.display = 'none';

  if (xhr.status === 200) {
    const posts = JSON.parse(xhr.responseText);

    const list = document.createElement('ul');

    posts.forEach(post => {
      const postItem = document.createElement('li');
      postItem.textContent = post.title;
      list.appendChild(postItem);
    });

    container.appendChild(list);
  } else {
    errorDiv.textContent = `Ошибка загрузки данных. Код: ${xhr.status}`;
    errorDiv.style.color = 'red';
  }
};

xhr.onerror = function () {
  loadingDiv.style.display = 'none';

  errorDiv.textContent = "Ошибка: не удалось подключиться к серверу.";
  errorDiv.style.color = 'red';
};

xhr.send();

// /* ----------------------------------------------------------Задание 5------------------------------------------------------------------------- */

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

xhr.onload = function () {
  const errorDiv = document.getElementById('error');
  const container = document.getElementById('posts-container');

  if (xhr.status === 200) {
    const posts = JSON.parse(xhr.responseText);

    const list = document.createElement('ul');

    posts.forEach(post => {
      const postItem = document.createElement('li');
      postItem.textContent = post.title;
      list.appendChild(postItem);
    });

    container.appendChild(list);

  } else {
    errorDiv.textContent = `Ошибка загрузки данных. Код: ${xhr.status}`;
    errorDiv.style.color = 'red';
  }
};

xhr.onerror = function () {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = "Ошибка: не удалось подключиться к серверу.";
  errorDiv.style.color = 'red';
};

xhr.send();

// /* ----------------------------------------------------------Задание 6------------------------------------------------------------------------- */

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

const loadingDiv = document.getElementById('loading');
const errorDiv3 = document.getElementById('error');
const container3 = document.getElementById('posts-container');

loadingDiv.style.display = 'block';

xhr.onload = function () {
  loadingDiv.style.display = 'none';

  if (xhr.status === 200) {
    const posts = JSON.parse(xhr.responseText);

    const list = document.createElement('ul');

    posts.forEach(post => {
      const postItem = document.createElement('li');
      postItem.textContent = post.title;
      list.appendChild(postItem);
    });

    container.appendChild(list);
  } else {
    errorDiv.textContent = `Ошибка загрузки данных. Код: ${xhr.status}`;
    errorDiv.style.color = 'red';
  }
};

xhr.onerror = function () {
  loadingDiv.style.display = 'none';

  errorDiv.textContent = "Ошибка: не удалось подключиться к серверу.";
  errorDiv.style.color = 'red';
};

xhr.send();
