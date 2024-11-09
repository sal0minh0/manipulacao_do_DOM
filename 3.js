let estaVermelho = false;

function mudarFundo() {
    if (estaVermelho) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "red";
    }
    estaVermelho = !estaVermelho;
}