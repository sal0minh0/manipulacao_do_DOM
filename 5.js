function voltarPagina() {
    if (history.length > 1) {
        history.back();
        
    } else if(history.length <= 1) {
        alert("Não há histórico anterior");
    }
}
