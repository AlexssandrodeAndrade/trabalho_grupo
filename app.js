const express = require("express");
const app = express();

app.use(express.json());

const perguntas = [
{
    pergunta: "Quantas Copas do Mundo o Brasil possui?",
    alternativas: ["4", "5", "6", "7"],
    correta: 1
}
];

app.post("/verificar-resposta", (req, res) => {

    const { perguntaId, respostaEscolhida } = req.body;

    const pergunta = perguntas[perguntaId];

    if (!pergunta) {
        return res.status(404).json({
            erro: "Pergunta não encontrada"
        });
    }

    const acertou =
        respostaEscolhida === pergunta.correta;

    res.json({
        correta: acertou,
        mensagem: acertou
            ? "Resposta correta!"
            : "Resposta incorreta. Tente novamente."
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});