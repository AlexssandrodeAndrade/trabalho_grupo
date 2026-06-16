const express = require("express");
const app = express();


const perguntas = require("./perguntas");

app.use(express.json());

app.get("/verificar-pergunta", (req, res) => {
    res.json(perguntas);
});

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

app.use(express.static('public'))
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});