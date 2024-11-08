function verificarCookies(){
    let cookies = navigator.cookieEnabled;
    alert(cookies);
}

document.getElementById("cookies").addEventListener("click", verificarCookies);