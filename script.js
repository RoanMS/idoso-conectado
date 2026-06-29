// Função para navegar entre as telas
function mostrarSecao(idSecaoDesejada) {
    document.getElementById('menu-principal').style.display = 'none';
    document.getElementById('seguranca').style.display = 'none';
    document.getElementById('simulador').style.display = 'none';
    document.getElementById('acessibilidade').style.display = 'none';

    document.getElementById(idSecaoDesejada).style.display = 'block';
    window.scrollTo(0, 0);
}

// Função para o Leitor de Áudio (Text-to-Speech nativo do navegador)
function lerTexto(idTexto) {
    const texto = document.getElementById(idTexto).innerText;

    // Cancela qualquer áudio que já esteja tocando para não encavalar
    window.speechSynthesis.cancel();

    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = 'pt-BR'; // Define o idioma para Português do Brasil
    fala.rate = 0.9;     // Deixa a voz um pouco mais lenta e fácil de entender

    window.speechSynthesis.speak(fala);
}

// Funções do Simulador de Golpes
function alertaGolpe() {
    document.getElementById('alerta-modal').style.display = 'block';

    // Vibra o celular se tiver suporte (causa um impacto de "erro")
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
    }
}

function fecharAlerta() {
    document.getElementById('alerta-modal').style.display = 'none';
}

// Função para aumentar e diminuir a fonte do app inteiro
let tamanhoAtual = 18;
function mudarTamanhoFonte(mudanca) {
    tamanhoAtual = tamanhoAtual + (mudanca * 4); // Aumenta/diminui de 4 em 4px

    // Limites para não ficar gigante ou minúsculo demais
    if(tamanhoAtual < 14) tamanhoAtual = 14;
    if(tamanhoAtual > 30) tamanhoAtual = 30;

    document.body.style.fontSize = tamanhoAtual + 'px';
}
