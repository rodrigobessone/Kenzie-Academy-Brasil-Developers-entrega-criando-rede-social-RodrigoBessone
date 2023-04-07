
// Este código cria uma função chamada "renderModal" que recebe um objeto "postToRender" como 
// parâmetro e renderiza uma janela modal contendo as informações do post. Ele cria elementos 
// HTML, adiciona classes e atributos a eles, insere o conteúdo do post e adiciona um botão 
// para fechar a janela. Finalmente, ele exibe a janela modal e adiciona um evento de clique 
// ao botão para fechar a janela.

export function renderModal(postToRender) {
    const modal = document.getElementById("modal")
    modal.innerHTML = ""
        const divUser = document.createElement("div")
        divUser.dataset.id = postToRender.id
        divUser.classList.add("div__user", "div__user-modal")
        const userContainer = document.createElement("div")
        userContainer.classList.add("user-container-div")
        const divImg = document.createElement("div")
        divImg.classList.add("div__img")
        const img = document.createElement("img")
        img.src = postToRender.img
        divImg.appendChild(img)
        const divUserName = document.createElement("div")
        divUserName.classList.add("div__user-name")
        const h3 = document.createElement("h3")
        h3.textContent = postToRender.user
        const span = document.createElement("span")
        span.textContent = postToRender.stack
        divUserName.appendChild(h3)
        divUserName.appendChild(span)
        userContainer.appendChild(divImg)
        userContainer.appendChild(divUserName)
        const h2 = document.createElement("h2")
        h2.classList.add("h2-modal")
        const p = document.createElement("p")
        p.classList.add("p-modal")
        p.textContent = postToRender.text
        h2.textContent = postToRender.title
        divUser.appendChild(userContainer)
        divUser.appendChild(h2)
        divUser.appendChild(p)
        const buttonClose = document.createElement("button")
        buttonClose.classList.add("buttonClose")
        buttonClose.textContent = "X"

        divUser.id = "div__user-id"

        modal.appendChild(divUser)
        modal.appendChild(buttonClose)

        modal.showModal()
        buttonClose.addEventListener("click", () => {
            modal.close()
        })
    
    }

   
