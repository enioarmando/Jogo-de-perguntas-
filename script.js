const perguntas = [
    { pergunta: "Qual é a capital de Angola?", opcoes: ["Luanda", "Benguela", "Lubango", "Huambo"], resposta: "Luanda" },
    { pergunta: "Em que ano Angola tornou-se independente?", opcoes: ["1965", "1975", "1980", "1990"], resposta: "1975" },
    { pergunta: "Quem foi o primeiro presidente de Angola?", opcoes: ["José Eduardo dos Santos", "Agostinho Neto", "Jonas Savimbi", "Holden Roberto"], resposta: "Agostinho Neto" },
    { pergunta: "Qual é a língua oficial de Angola?", opcoes: ["Kimbundu", "Umbundu", "Português", "Tchokwe"], resposta: "Português" },
    { pergunta: "Quantas províncias Angola tem?", opcoes: ["12", "18", "20", "24"], resposta: "18" },
    { pergunta: "Qual é a moeda oficial de Angola?", opcoes: ["Real", "Kwanza", "Euro", "Dólar"], resposta: "Kwanza" },
    { pergunta: "Qual desses rios passa por Angola?", opcoes: ["Nilo", "Zambeze", "Amazonas", "Sena"], resposta: "Zambeze" },
    { pergunta: "Que país faz fronteira ao sul com Angola?", opcoes: ["Namíbia", "Zâmbia", "Congo", "Botsuana"], resposta: "Namíbia" },
    { pergunta: "Que grande evento ocorreu em Angola em 2010?", opcoes: ["Independência", "Copa Africana de Nações", "Fim da Guerra Civil", "Criação da nova moeda"], resposta: "Copa Africana de Nações" },
    { pergunta: "Qual é o prato típico de Angola?", opcoes: ["Feijoada", "Funge", "Moamba de galinha", "Pirão"], resposta: "Funge" },
    { pergunta: "Quem foi Rainha Nzinga?", opcoes: ["Rainha do Reino do Kongo", "Líder do Reino de Matamba", "Esposa de Agostinho Neto", "Ministra da Cultura"], resposta: "Líder do Reino de Matamba" },
    { pergunta: "O maior parque nacional de Angola é:", opcoes: ["Kissama", "Iona", "Cangandala", "Mupa"], resposta: "Iona" },
    { pergunta: "Qual é o estilo musical mais popular em Angola?", opcoes: ["Semba", "Forró", "Kizomba", "Fado"], resposta: "Kizomba" },
    { pergunta: "Que cidade angolana é famosa por suas praias?", opcoes: ["Huambo", "Benguela", "Malanje", "Moxico"], resposta: "Benguela" },
    { pergunta: "Qual o maior grupo étnico de Angola?", opcoes: ["Ovimbundu", "Bakongo", "Tchokwe", "Lunda"], resposta: "Ovimbundu" },
    { pergunta: "Quem foi Jonas Savimbi?", opcoes: ["Líder do MPLA", "Fundador da UNITA", "Presidente de Angola", "Ministro da Defesa"], resposta: "Fundador da UNITA" },
    { pergunta: "Que província é conhecida pelas Cataratas do Ruacaná?", opcoes: ["Namibe", "Cunene", "Bengo", "Uíge"], resposta: "Cunene" },
    { pergunta: "Qual é a segunda maior cidade de Angola?", opcoes: ["Huambo", "Benguela", "Lobito", "Lubango"], resposta: "Huambo" },
    { pergunta: "Qual desses países NÃO faz fronteira com Angola?", opcoes: ["Zâmbia", "Namíbia", "Moçambique", "Congo"], resposta: "Moçambique" }
];

let perguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta() {
    let quizContainer = document.getElementById("quiz-container");
    let perguntaEl = document.getElementById("pergunta");
    let opcoesEl = document.getElementById("opcoes");
    let proximaBtn = document.getElementById("proxima");

    perguntaEl.textContent = perguntas[perguntaAtual].pergunta;
    opcoesEl.innerHTML = "";

    perguntas[perguntaAtual].opcoes.forEach(opcao => {
        let botao = document.createElement("button");
        botao.textContent = opcao;
        botao.classList.add("opcao");
        botao.onclick = function() { verificarResposta(opcao); };
        opcoesEl.appendChild(botao);
    });

    proximaBtn.style.display = "none";
}

function verificarResposta(resposta) {
    let correta = perguntas[perguntaAtual].resposta;
    let resultadoEl = document.getElementById("resultado");

    if (resposta === correta) {
        pontuacao++;
        resultadoEl.textContent = "Correto!";
        resultadoEl.style.color = "green";
    } else {
        resultadoEl.textContent = "Errado! A resposta correta é: " + correta;
        resultadoEl.style.color = "red";
    }

    document.getElementById("proxima").style.display = "block";
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
        document.getElementById("resultado").textContent = "";
    } else {
        document.getElementById("quiz-container").innerHTML = `<h2>Você acertou ${pontuacao} de ${perguntas.length} perguntas!</h2>`;
    }
}

carregarPergunta();