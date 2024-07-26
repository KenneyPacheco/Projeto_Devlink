// Função para através do clique do botão mudar o tema da página
function toggleMode() {
    const html = document.documentElement
        html.classList.toggle("light")

// Seletor de elementos vai selecionar a imagem e atribui-la a variável "img"        
    const img = document.querySelector("#profile img")
    
// Vericar se no HTML contém a classe "light"    
        if (html.classList.contains("light")) {

// Caso a resposta seja não, altera a imagem para light            
           img.setAttribute("src","./assets/avatar-light.png")

// Caso esteja em light, altera para dark  
        } else { 
            img.setAttribute("src","./assets/avatar-dark.png")
        }

}