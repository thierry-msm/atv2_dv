window.onload = function() {
    console.log("Script is working!");
  };

  document.getElementById('fetchButton').addEventListener('click', function() {
    // Fazendo a requisição à API JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            // Selecionando o contêiner onde os posts serão exibidos
            const postContainer = document.getElementById('postContainer');
            postContainer.innerHTML = ''; // Limpa o contêiner antes de adicionar novos posts

            // Iterando sobre os posts e adicionando-os ao DOM
            posts.forEach(post => {
                // Criando os elementos HTML
                const postElement = document.createElement('div');
                const postTitle = document.createElement('h3');
                const postBody = document.createElement('p');

                // Criando os nós de texto para o título e o corpo do post
                const titleText = document.createTextNode(post.title);
                const bodyText = document.createTextNode(post.body);

                // Adicionando os nós de texto aos elementos
                postTitle.appendChild(titleText);
                postBody.appendChild(bodyText);

                // Adicionando o título e o corpo ao contêiner do post
                postElement.appendChild(postTitle);
                postElement.appendChild(postBody);

                // Adicionando o contêiner do post ao DOM (no postContainer)
                postContainer.appendChild(postElement);
            });
        })
        .catch(error => console.log('Erro ao buscar os posts:', error));
});
