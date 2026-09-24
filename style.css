// ============================================
// EMBALA-ÁGEIS
// JAVASCRIPT
// ============================================


// ============================================
// ANO AUTOMÁTICO DO RODAPÉ
// ============================================

document.getElementById("year").textContent =
    new Date().getFullYear();



// ============================================
// MENU MOBILE
// ============================================

const menuBtn =
    document.getElementById("menuBtn");

const mainNav =
    document.getElementById("mainNav");


menuBtn.addEventListener("click", () => {

    mainNav.classList.toggle("open");

});


document
    .querySelectorAll("#mainNav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

        });

    });



// ============================================
// VAN
// LUZ + BUZINA + MÚSICA
// ============================================

const vanScene =
    document.getElementById("vanScene");


let audioContext = null;



function beep(
    frequency,
    duration,
    startTime = 0
) {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }


    const oscillator =
        audioContext.createOscillator();


    const gain =
        audioContext.createGain();


    oscillator.type =
        "sawtooth";


    oscillator.frequency.setValueAtTime(
        frequency,
        audioContext.currentTime +
        startTime
    );


    gain.gain.setValueAtTime(
        0.0001,
        audioContext.currentTime +
        startTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.14,
        audioContext.currentTime +
        startTime +
        0.02
    );


    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime +
        startTime +
        duration
    );


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    oscillator.start(
        audioContext.currentTime +
        startTime
    );


    oscillator.stop(
        audioContext.currentTime +
        startTime +
        duration +
        .03
    );

}



// ============================================
// SOM DA VAN
// ============================================

function playVehicleSound() {

    // Buzina

    beep(
        420,
        .18,
        0
    );


    beep(
        330,
        .24,
        .20
    );


    // Pequena sequência musical

    setTimeout(() => {

        const notes = [
            392,
            440,
            494,
            440,
            392,
            330,
            392
        ];


        notes.forEach(
            (note, i) => {

                beep(
                    note,
                    .25,
                    i * .27
                );

            }
        );

    }, 450);

}



// ============================================
// CLIQUE NA VAN
// ============================================

vanScene.addEventListener(
    "click",
    () => {

        vanScene.classList.add(
            "active"
        );


        playVehicleSound();


        setTimeout(() => {

            vanScene.classList.remove(
                "active"
            );

        }, 1700);

    }
);



// ============================================
// CATÁLOGO DE PRODUTOS
// ============================================

const modal =
    document.getElementById(
        "productModal"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalText =
    document.getElementById(
        "modalText"
    );


const modalItems =
    document.getElementById(
        "modalItems"
    );



const catalog = {


    "Copos": {

        text:
            "Linha de descartáveis para lanchonetes, restaurantes, eventos e comércio.",

        items: [

            "Copos 50 ml",

            "Copos 180 ml",

            "Copos 300 ml",

            "Tampas",

            "Potes descartáveis",

            "Canudos"

        ]

    },


    "Alimentos": {

        text:
            "Embalagens práticas para armazenamento, transporte e apresentação de alimentos.",

        items: [

            "Marmitas",

            "Potes",

            "Tampas",

            "Bandejas",

            "Embalagens para delivery",

            "Filmes"

        ]

    },


    "Higiene": {

        text:
            "Produtos para manter ambientes comerciais limpos e organizados.",

        items: [

            "Detergentes",

            "Desinfetantes",

            "Sacos para lixo",

            "Papel toalha",

            "Papel higiênico",

            "Luvas"

        ]

    },


    "Papelão": {

        text:
            "Caixas e materiais para proteção, transporte e organização.",

        items: [

            "Caixas de papelão",

            "Caixas para delivery",

            "Papel kraft",

            "Fitas",

            "Envelopes",

            "Proteção interna"

        ]

    },


    "Comércio": {

        text:
            "Itens para facilitar a operação diária de lojas e estabelecimentos.",

        items: [

            "Sacolas",

            "Bobinas",

            "Etiquetas",

            "Embalagens",

            "Materiais para balcão",

            "Acessórios"

        ]

    }

};



// ============================================
// ABRIR MODAL
// ============================================

function openProductModal(category) {

    const item =
        catalog[category];


    modalTitle.textContent =
        category;


    modalText.textContent =
        item.text;


    modalItems.innerHTML =
        "";


    item.items.forEach(
        product => {

            const div =
                document.createElement(
                    "div"
                );


            div.textContent =
                "✓ " + product;


            modalItems.appendChild(
                div
            );

        }
    );


    modal.classList.add(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );

}



// ============================================
// BOTÕES DOS PRODUTOS
// ============================================

document
    .querySelectorAll(".product-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            (event) => {

                const card =
                    event.target.closest(
                        ".product-card"
                    );


                openProductModal(
                    card.dataset.category
                );

            }
        );

    });



// ============================================
// FECHAR MODAL
// ============================================

function closeModal() {

    modal.classList.remove(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);



// ============================================
// FORMULÁRIO → WHATSAPP
// ============================================

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );



// IMPORTANTE:
//
// TROQUE ESTE NÚMERO PELO
// WHATSAPP REAL DA EMPRESA.
//
// Formato:
// 55 + DDD + número
//
// Exemplo:
// 5561999999999

const whatsappNumber =
    "5561000000000";



contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const nome =
            document
                .getElementById("nome")
                .value
                .trim();


        const telefone =
            document
                .getElementById("telefone")
                .value
                .trim();


        const mensagem =
            document
                .getElementById("mensagem")
                .value
                .trim();


        const texto =

            `Olá, Embala-Ágeis!%0A%0A` +

            `Nome: ${
                encodeURIComponent(nome)
            }%0A` +

            `WhatsApp: ${
                encodeURIComponent(telefone)
            }%0A` +

            `Mensagem: ${
                encodeURIComponent(mensagem)
            }`;


        const url =
            `https://wa.me/${whatsappNumber}?text=${texto}`;


        formMessage.textContent =
            "Abrindo o WhatsApp...";


        window.open(
            url,
            "_blank"
        );

    }
);



// ============================================
// ACESSIBILIDADE
// ============================================

const accessibilityBtn =
    document.getElementById(
        "accessibilityBtn"
    );


accessibilityBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "high-contrast"
        );

    }
);



// ============================================
// ANIMAÇÃO DOS CARDS
// ============================================

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";


                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },

        {
            threshold: .12
        }

    );



document
    .querySelectorAll(
        ".product-card, .about-card, .contact-form"
    )
    .forEach(element => {

        element.style.opacity =
            "0";


        element.style.transform =
            "translateY(18px)";


        element.style.transition =
            "opacity .6s ease, transform .6s ease";


        observer.observe(
            element
        );

    });
