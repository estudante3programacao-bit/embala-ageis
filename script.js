// ========================================
// EMBALA-ÁGEIS
// JAVASCRIPT PRINCIPAL
// ========================================


// ========================================
// 1. MENU MOBILE
// ========================================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("aberto");

    const aberto = menu.classList.contains("aberto");

    if (aberto) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// ========================================
// 2. FECHAR MENU AO CLICAR EM UM LINK
// ========================================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("aberto");

        menuBtn.textContent = "☰";

    });

});


// ========================================
// 3. ELEMENTOS DO CARRO
// ========================================

const carroArea = document.getElementById("carroArea");

const notificacao = document.getElementById("notificacao");


// ========================================
// 4. FUNÇÃO DE NOTIFICAÇÃO
// ========================================

function mostrarNotificacao(texto) {

    notificacao.textContent = texto;

    notificacao.classList.add("mostrar");

    setTimeout(() => {

        notificacao.classList.remove("mostrar");

    }, 2500);

}


// ========================================
// 5. SOM DA BUZINA
// ========================================

function buzina() {

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

    if (!AudioContext) {
        return;
    }

    const audio = new AudioContext();

    const agora = audio.currentTime;


    // Criando o oscilador
    const oscilador = audio.createOscillator();


    // Criando o volume
    const ganho = audio.createGain();


    // Tipo do som
    oscilador.type = "sawtooth";


    // Frequência inicial
    oscilador.frequency.setValueAtTime(
        220,
        agora
    );


    // Frequência final
    oscilador.frequency.exponentialRampToValueAtTime(
        175,
        agora + 0.28
    );


    // Volume inicial
    ganho.gain.setValueAtTime(
        0.0001,
        agora
    );


    // Aumenta o volume
    ganho.gain.exponentialRampToValueAtTime(
        0.16,
        agora + 0.02
    );


    // Diminui o volume
    ganho.gain.exponentialRampToValueAtTime(
        0.0001,
        agora + 0.3
    );


    // Conecta o oscilador ao volume
    oscilador.connect(ganho);


    // Conecta o volume ao alto-falante
    ganho.connect(audio.destination);


    // Começa o som
    oscilador.start(agora);


    // Para o som
    oscilador.stop(agora + 0.31);


    // Fecha o áudio
    setTimeout(() => {

        audio.close();

    }, 500);

}


// ========================================
// 6. CLIQUE NO CARRO
// ========================================

carroArea.addEventListener("click", () => {


    // Remove a animação anterior
    carroArea.classList.remove("acendeu");


    // Força o navegador a reiniciar a animação
    void carroArea.offsetWidth;


    // Adiciona o efeito de iluminação
    carroArea.classList.add("acendeu");


    // Aciona a buzina
    buzina();


    // Mostra mensagem
    mostrarNotificacao(
        "🚐 Faróis acesos! Buzina acionada."
    );


    // Depois de 1,5 segundo remove o efeito
    setTimeout(() => {

        carroArea.classList.remove("acendeu");

    }, 1500);

});


// ========================================
// 7. FORMULÁRIO DE CONTATO
// ========================================

const formulario =
    document.getElementById("formContato");

const mensagemForm =
    document.getElementById("mensagemForm");


formulario.addEventListener("submit", (evento) => {


    // Impede o formulário de recarregar a página
    evento.preventDefault();


    // Pega o nome digitado
    const nome =
        document.getElementById("nome").value.trim();


    // Mostra mensagem
    mensagemForm.textContent =
        `Obrigado, ${nome}! Sua mensagem foi preenchida com sucesso.`;


    // Limpa os campos
    formulario.reset();

});


// ========================================
// 8. ANO AUTOMÁTICO DO RODAPÉ
// ========================================

document.getElementById("ano").textContent =
    new Date().getFullYear();
