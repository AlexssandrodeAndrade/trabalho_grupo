const express = require("express");
const app = express();


const perguntas = require("./perguntas");

app.use(express.json());

app.get('/verificar-pergunta', (req, res) => {
  const perguntasSemResposta = perguntas.map((pergunta, index) => {
    return {
      id: index,
      pergunta: pergunta.pergunta,
      alternativas: pergunta.alternativas,
    }
  })

  res.json(perguntasSemResposta)
})


app.post('/verificar-resposta', (req, res) => {
  const { id, resposta } = req.body

  const pergunta = perguntas[id]

  if (!pergunta) {
    return res.status(404).json({
      erro: 'Pergunta não encontrada',
    })
  }

  const correta = Number(resposta) === pergunta.correta

  res.json({
    correta,
  })
})

app.use(express.static('public'))
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
