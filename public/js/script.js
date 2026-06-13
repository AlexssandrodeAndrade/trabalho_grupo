const perguntas = [
{
    pergunta: "Quantas Copas do Mundo o Brasil possui?",
    alternativas: ["4", "5", "6", "7"],
    correta: 1
},
{
    pergunta: "Quem é o maior artilheiro da história da Seleção Brasileira?",
    alternativas: ["Romário", "Pelé", "Neymar", "Ronaldo"],
    correta: 2
},
{
    pergunta: "Em que ano o Brasil ganhou sua primeira Copa do Mundo?",
    alternativas: ["1958", "1962", "1970", "1950"],
    correta: 0
},
{
    pergunta: "Qual jogador era conhecido como 'Fenômeno'?",
    alternativas: ["Ronaldinho", "Pelé", "Rivaldo", "Ronaldo"],
    correta: 3
},
{
    pergunta: "Qual país sediou a Copa de 1970?",
    alternativas: ["México", "Alemanha", "Brasil", "Argentina"],
    correta: 0
},
{
    pergunta: "Quem foi o técnico do Brasil no pentacampeonato de 2002?",
    alternativas: [
        "Felipão",
        "Parreira",
        "Dunga",
        "Tite"
    ],
    correta: 0
},
{
    pergunta: "Qual era o número da camisa de Pelé?",
    alternativas: ["7", "9", "10", "11"],
    correta: 2
},
{
    pergunta: "Contra quem o Brasil venceu a final de 2002?",
    alternativas: [
        "França",
        "Alemanha",
        "Itália",
        "Argentina"
    ],
    correta: 1
},
{
    pergunta: "Quem marcou os dois gols na final de 2002?",
    alternativas: [
        "Rivaldo",
        "Ronaldinho",
        "Kaká",
        "Ronaldo"
    ],
    correta: 3
},
{
    pergunta: "Qual é o apelido da Seleção Brasileira?",
    alternativas: [
        "La Roja",
        "Canarinho",
        "Azzurra",
        "Albiceleste"
    ],
    correta: 1
}
];

let indiceAtual = 0;

const tituloPergunta =
    document.getElementById("tituloPergunta");

const alternativasDiv =
    document.getElementById("alternativas");

const mensagem =
    document.getElementById("mensagem");

const btnProximo =
    document.getElementById("btnProximo"); 



function carregarPergunta() {

    mensagem.innerHTML = "";
    btnProximo.style.display = "none";

    const pergunta = perguntas[indiceAtual];

    tituloPergunta.innerHTML =
        `${indiceAtual + 1}. ${pergunta.pergunta}`;

    alternativasDiv.innerHTML = "";

    pergunta.alternativas.forEach(
        (alternativa, indice) => {

        const botao =
            document.createElement("button");

        botao.className =
            "btn btn-outline-primary";

        botao.innerText = alternativa;

        botao.onclick = () =>
            verificarResposta(indice);

        alternativasDiv.appendChild(botao);
    });
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
