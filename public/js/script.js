let indiceAtual = 0;

const tituloPergunta =
    document.getElementById("tituloPergunta");

const alternativasDiv =
    document.getElementById("alternativas");

const mensagem =
    document.getElementById("mensagem");

const btnProximo =
    document.getElementById("btnProximo"); 



async function carregarPerguntas() {

    const resposta = await fetch(
        "http://localhost:3000/verificar-pergunta"
    );

    const perguntas = await resposta.json();

    return perguntas;
}

function resetarAlternativas() {

    const botoes =
        document.querySelectorAll(
            "#alternativas button"
        );

    botoes.forEach(botao => {

        botao.classList.remove(
            "btn-success",
            "btn-danger"
        );

        botao.classList.add(
            "btn-outline-primary"
        );
    });
}

btnProximo.addEventListener(
    "click",
    () => {

    indiceAtual++;

    if (indiceAtual < perguntas.length) {

        carregarPergunta();

    } else {

        document.querySelector(".card-body")
        .innerHTML = `
            <h2 class="text-center text-success">
                🎉 Parabéns!
            </h2>

            <p class="text-center">
                Você concluiu o quiz da
                Seleção Brasileira.
            </p>
        `;
    }
});
function botaoQuiz() {
    let lista_perguntas = carregarPerguntas();
    console.log(lista_perguntas)

    for(let i=0; i < lista_perguntas.length; i++) {
        
    }
}