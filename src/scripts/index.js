import { suggestUsers } from "./database.js";
import { renderPosts } from "./posts.js";

renderItems();
renderPosts();

// Código que define uma função chamada renderItems(), que cria uma lista de sugestões de 
// usuários a partir de um array suggestUsers. A função usa um loop for para iterar sobre cada 
// objeto do array suggestUsers. Em cada iteração, a função cria uma lista (<li>) de sugestões 
// de usuário e adiciona elementos HTML à lista. Os elementos incluem uma imagem, um nome de 
// usuário e um botão de "Seguir". A função também adiciona classes CSS aos elementos HTML para 
// que possam ser estilizados posteriormente. O evento "click" é adicionado ao botão de "Seguir", 
// permitindo que ele seja alternado entre "Seguir" e "Seguindo". Por fim, a função adiciona a 
// lista de sugestões de usuário criada ao HTML da página.

function renderItems() {
    for (let i = 0; i < suggestUsers.length; i++) {

        const ulSuggestion = document.querySelector(".suggestions__list");
        const listSuggestion = document.createElement("li");
        listSuggestion.classList.add("suggestions__item");
        const divSuggestion = document.createElement("div");
        divSuggestion.classList.add("div__user");
        const divSuggestionImg = document.createElement("div");
        divSuggestionImg.classList.add("div__img");
        const imgSuggestions = document.createElement("img");
        const divSuggestionUser = document.createElement("div");
        divSuggestionUser.classList.add("div__user-name");
        const h3SuggestionUser = document.createElement("h3");
        const spanSuggestionUser = document.createElement("span");
        const buttonSuggestion = document.createElement("button");
        buttonSuggestion.addEventListener("click", () => {
            buttonSuggestion.classList.toggle("following")
            if (buttonSuggestion.textContent == "Seguir") {
                buttonSuggestion.textContent = "Seguindo"
            }
            else {
                buttonSuggestion.textContent = "Seguir"
            }
        })
        buttonSuggestion.classList.add("section__aside--button");

        h3SuggestionUser.textContent = suggestUsers[i].user;
        spanSuggestionUser.textContent = suggestUsers[i].stack;
        imgSuggestions.src = suggestUsers[i].img
        buttonSuggestion.textContent = "Seguir";

        divSuggestionImg.appendChild(imgSuggestions);
        divSuggestionUser.appendChild(h3SuggestionUser);
        divSuggestionUser.appendChild(spanSuggestionUser);

        divSuggestion.appendChild(divSuggestionImg);
        divSuggestion.appendChild(divSuggestionUser);

        listSuggestion.appendChild(divSuggestion);
        listSuggestion.appendChild(buttonSuggestion);
        ulSuggestion.appendChild(listSuggestion);

    }




}

