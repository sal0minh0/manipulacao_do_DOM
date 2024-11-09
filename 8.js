function detectarTecla(event) {
    console.log(`Tecla pressionada: ${event.key}`);
    alert(`Tecla pressionada: ${event.key}`);

    // Impedir a inserção de números
    if (event.key >= '0' && event.key <= '9') {
        console.log("Tecla numérica bloqueada.");
        alert("Tecla numérica bloqueada.");
        event.preventDefault(); // Impede a inserção da tecla
    }
}

// Adicionando o evento de teclado ao campo de texto
document.getElementById("campoTexto").addEventListener("keydown", detectarTecla);