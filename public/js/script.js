let perguntas = [];
let indicePergunta = 0;
let acertos = 0;

async function carregarPerguntas() {
  const resposta = await fetch('http://localhost:3000/verificar-pergunta')

  perguntas = await resposta.json()

  mostrarPergunta()
}

function mostrarPergunta() {
  const perguntaAtual = perguntas[indicePergunta]

  document.getElementById('btnResponder').classList.remove('d-none')

  document.getElementById('quizProgresso').textContent =
    `Pergunta ${indicePergunta + 1} de ${perguntas.length}`

  document.getElementById('quizAcertos').textContent = `Acertos: ${acertos}`

  document.getElementById('quizPergunta').textContent = perguntaAtual.pergunta

  document.getElementById('quizMensagem').textContent = ''

  const alternativas = document.getElementById('quizAlternativas')

  alternativas.innerHTML = ''

  perguntaAtual.alternativas.forEach((alternativa, index) => {
    alternativas.innerHTML += `
                <div class="form-check mb-2">

                    <input
                        class="form-check-input"
                        type="radio"
                        name="resposta"
                        id="alt${index}"
                        value="${index}">

                    <label
                        class="form-check-label"
                        for="alt${index}">
                        ${alternativa}
                    </label>

                </div>
            `
  })
}

document.getElementById('formQuiz').addEventListener('submit', responder)

async function responder(event) {
  event.preventDefault()
  const mensagem = document.getElementById('quizMensagem')

  const respostaSelecionada = document.querySelector(
    'input[name="resposta"]:checked',
  )

  if (!respostaSelecionada) {
    mensagem.textContent = 'Selecione uma alternativa.'
    mensagem.className = 'text-center fw-bold mt-4 text-warning'
    return
  }

  const perguntaAtual = perguntas[indicePergunta]

  const resposta = await fetch('http://localhost:3000/verificar-resposta', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: perguntaAtual.id,
      resposta: Number(respostaSelecionada.value),
    }),
  })

  const resultado = await resposta.json()

  if (resultado.correta) {
    acertos++

    mensagem.textContent = '✅ Resposta correta!'
    mensagem.className = 'text-center fw-bold mt-4 text-success'

    setTimeout(() => {
      indicePergunta++

      if (indicePergunta >= perguntas.length) {
        finalizarQuiz()
      } else {
        mostrarPergunta()
      }
    }, 1000)
  } else {
    mensagem.textContent = '❌ Resposta errada! Voltando para o início.'
    mensagem.className = 'text-center fw-bold mt-4 text-danger'

    setTimeout(() => {
      indicePergunta = 0
      acertos = 0
      mostrarPergunta()
    }, 1500)
  }
}

function finalizarQuiz() {
  document.getElementById('btnResponder').classList.add('d-none')
  document.getElementById('quizPergunta').innerHTML =
    '🏆 Parabéns! Você completou o quiz da Seleção Brasileira!'

  document.getElementById('quizAlternativas').innerHTML = ''

  document.getElementById('quizMensagem').innerHTML = `
            <button
                class="btn btn-warning"
                onclick="reiniciarQuiz()">
                Jogar Novamente
            </button>
        `
}

function reiniciarQuiz() {
  indicePergunta = 0
  acertos = 0

  mostrarPergunta()
}

carregarPerguntas()
