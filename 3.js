function mudarFundo() {
    let estaVermelho = false;
    
    if (estaVermelho) {
        // Se o fundo está vermelho, muda para branco
        document.body.style.backgroundColor = "white";
    } else {
        // Se o fundo não está vermelho, muda para vermelho
        document.body.style.backgroundColor = "red";
    }
    estaVermelho = !estaVermelho; // Alterna o estado (true <=> false)
}
