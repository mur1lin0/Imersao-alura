function search() {

    let section = document.getElementById('searchResults');

    let results = '';

    for (let data of dados) {

      results += `
      <div class="itemResult">
        <div class="itemImg">
          <img src="${data.img}">
        </div>
        <div class="itemResultInfo">
          <div class="title">
            <h2>${data.title}</h2>
          </div>
          <div class="description"> 
            <p>${data.description}</p>
          </div>
          <a href="https://minecraft.wiki/w/Mob" target="_blank">Ver mais</a>
        </div>
      </div>
      `
    }
    // Define o conteúdo HTML interno da seção de resultados de pesquisa com o HTML gerado.
    section.innerHTML = results;
  }