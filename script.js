function mudarCor() {
    // Essa lista tem as cores que o site vai sortear
    const cores = ['#ffedff', '#e0f7fa', '#f1f8e9', '#fff3e0', '#fce4ec'];
    
    // Aqui o computador escolhe uma cor da lista
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    
    // Aqui ele dá a ordem para o site mudar a cor do fundo
    document.body.style.backgroundColor = corAleatoria;
}
function mudarTexto() {
    const elementoTitulo = document.getElementById("titulo")
    if (elementoTitulo.innerText === "olá, mundo!") {
        elementoTitulo.innerText = "Eu sou programadora!";
    } else {
        elementoTitulo.innerText = "olá, mundo!";
    }
}
function celebrar() {
    document.body.style.backgroundColor = "#2c3e50";
    document.getElementById("titulo").style.color = "white";
    alert("Respire fundo. Você é maior que seus problemas e 2026 será o ano da sua virada! ✨");
}
function salvarNoDiario() {
    const campoTexto = document.getElementById("texto-sentimento");
    const listaHistorico = document.getElementById("historico-sentimentos");

    if (campoTexto.value !== "") {
        const horaAtual = new Date().toLocaleTimeString();
        const textoCompleto = "<strong>" + horaAtual + ":</strong> " + campoTexto.value;

        // 1. Mostrar na tela agora
        exibirNaTela(textoCompleto);

        // 2. Salvar no "baú" do navegador
        let registrosAntigos = JSON.parse(localStorage.getItem("meuDiario")) || [];
        registrosAntigos.push(textoCompleto);
        localStorage.setItem("meuDiario", JSON.stringify(registrosAntigos));

        campoTexto.value = "";
        alert("Sentimento guardado. Respira fundo!");
    }
}
// Esta função apenas desenha o balão branco na tela
function exibirNaTela(texto) {
    const listaHistorico = document.getElementById("historico-sentimentos");
    const novoItem = document.createElement("p");
    novoItem.innerHTML = texto;
    novoItem.style.backgroundColor = "white";
    novoItem.style.padding = "10px";
    novoItem.style.borderRadius = "8px";
    novoItem.style.borderLeft = "5px solid #FFD700";
    novoItem.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    listaHistorico.prepend(novoItem);
}

// Esta função roda SOZINHA assim que você abre o site
window.onload = function() {
    let registros = JSON.parse(localStorage.getItem("meuDiario")) || [];
    registros.forEach(item => {
        exibirNaTela(item);
    });
};