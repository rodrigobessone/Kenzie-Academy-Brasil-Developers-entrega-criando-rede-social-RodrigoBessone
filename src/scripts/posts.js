import { posts } from "./database.js";
import { renderModal } from "./modal.js";

// Código que renderiza uma lista de postagens em uma página web. Ele percorre uma 
// matriz de objetos "posts" e cria um elemento HTML para cada postagem. Cada postagem contém 
// uma imagem, nome de usuário, título, texto e botão para expandir a postagem. Também inclui 
// um botão de "curtir" para cada postagem que atualiza o contador de curtidas quando clicado. 
// A função "renderPosts()" limpa o elemento HTML pai e adiciona as postagens renderizadas ao 
// elemento pai. Por fim, a função "openPost()" é chamada para permitir que o botão de expandir 
// postagem seja clicado e abra a postagem completa.

export function renderPosts() {
    const fatherElement = document.querySelector(".container")
    fatherElement.innerHTML = ""

    for (let i = 0; i < posts.length; i++) {
        const divUser = document.createElement("div")
        divUser.dataset.id = posts[i].id
        divUser.classList.add("div__user")
        const userContainer = document.createElement("div")
        userContainer.classList.add("user-container-div")
        const divImg = document.createElement("div")
        divImg.classList.add("div__img")
        const img = document.createElement("img")
        img.src = posts[i].img
        divImg.appendChild(img) 
        const divUserName = document.createElement("div")
        divUserName.classList.add("div__user-name")
        const h3 = document.createElement("h3")
        h3.textContent = posts[i].user
        const span = document.createElement("span")
        span.textContent = posts[i].stack
        divUserName.appendChild(h3)
        divUserName.appendChild(span)
        userContainer.appendChild(divImg)
        userContainer.appendChild(divUserName)
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        p.textContent = posts[i].text
        h2.textContent = posts[i].title
        divUser.appendChild(userContainer)
        divUser.appendChild(h2)
        divUser.appendChild(p)
        const divButtons = document.createElement("div")
        divButtons.classList.add("divButtons")
        const button = document.createElement("button")
        button.classList.add("post-button")
        button.textContent = "Abrir post"
        const secondImg = document.createElement("img")
        secondImg.src = "./src/assets/img/heart-grey.jpeg"
        const spanLikes = document.createElement("span")
        let count = posts[i].likes
        spanLikes.textContent = count
        secondImg.addEventListener("click", () => {
            if (secondImg.id != "clicked") {
                secondImg.id = "clicked"
                secondImg.src = "./src/assets/img/heart-red.jpeg"
                count = count + 1;
            } else {
                count = count - 1;
                secondImg.id = "unclicked"
                secondImg.src = "./src/assets/img/heart-grey.jpeg"
            }
            spanLikes.textContent = count
        })

        divButtons.appendChild(button)
        divButtons.appendChild(secondImg)
        divButtons.appendChild(spanLikes)
        divUser.appendChild(divButtons)
        divUser.id = "div__user-id"

        fatherElement.appendChild(divUser)




    }
    openPost()
}

// Este é um código JavaScript que adiciona um evento de clique a todos os botões de "expandir 
// postagem" na página. Quando um botão é clicado, a função procura na matriz "posts" o objeto 
// com o mesmo "id" que o botão clicado e chama a função "renderModal()" para renderizar uma 
// janela modal com o conteúdo completo da postagem.

function openPost() {
    const allButton = document.querySelectorAll(".post-button")
    allButton.forEach(btn => {
        btn.addEventListener("click", (event) => {
            const getEvent = event.target.closest(".div__user")
            console.log(getEvent)
            const getId = getEvent.dataset.id
            console.log(getId)

            for (let i = 0; i < posts.length; i++) {
                if (getId == posts[i].id) {
                    const getPost = posts[i]
                    renderModal(getPost)
                }
            }
        }
        )
    })
}

