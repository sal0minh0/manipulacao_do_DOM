// Função para alterar a cor de fundo ao passar o mouse
function mudarCor() {
    document.getElementById("wallpaper").style.backgroundColor = "rgb(255, 165, 0)"; // Cor laranja
}

// Função para restaurar a cor original quando o mouse sair
function restaurarCor() {
    document.getElementById("wallpaper").style.backgroundColor = "rgb(195, 240, 255)"; // Cor original
}

// Adicionando os eventos de mouse após o carregamento da página
window.onload = function() {
    const fundoElement = document.getElementById("wallpaper");
    fundoElement.addEventListener("mouseover", mudarCor);
    fundoElement.addEventListener("mouseout", restaurarCor);
};