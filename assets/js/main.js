async function getPosts() {
  try {
    //API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //if del error
    if (!response.ok) {
      throw new Error(`🔴Error en el HTTP! Estado: ${response.status}`);
    }
    //convertimos a Json
    const posts = await response.json();
    // fx para mostrar posts
    mostrarPosts(posts); // Actualiza el nombre de la función aquí
  } catch (error) {
    //clg if error
    console.error(
      "🔴Hey, atencion! Existe un problema en la operación: " + error.message
    );
  }
}

//mostrar posts en html

function mostrarPosts(posts) {
  //getElement
  const postInfoDiv = document.getElementById("post-data");
  postInfoDiv.innerHTML = "";

  //post>li
  posts.forEach((post) => {
    const postElement = document.createElement("li");

    // strong para el title
    const titleElement = document.createElement("strong");
    titleElement.textContent = post.title;
    postElement.appendChild(titleElement);

    // p para el body
    const bodyElement = document.createElement("p");
    bodyElement.textContent = post.body;
    postElement.appendChild(bodyElement);

    postInfoDiv.appendChild(postElement);
  });
}
