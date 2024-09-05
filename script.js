const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');


const perguntas = [
    {
        enunciado: 'No âmbito social, você prefere:',
        alternativas: [
        {
             texto: ' VOCÊ AJUDA UMA CRIANÇA QUE ESTÁ SOFRENDO RACISMO; MAS SEU MELHOR AMIGO VIRA RACISTA;',
             afirmacao: 'PARABÉNS, SEU MELHOR AMIGO SE TORNOU RACISTA, MAS VOCÊ AJUDOU UMA CRIANÇA NEGRA;',

        },

        {
            texto: 'VOCÊ AJUDA UMA PESSOA QUE ESTÁ SOFRENDO HOMOFOBIA, MAS SUA MÃE VIRA HOMOFÓBICA;',
            afirmacao: 'VOCÊ AJUDA UMA PESSOA QUE ESTÁ SOFRENDO HOMOFOBIA, MAS SUA MÃE VIROU HOMOFÓBICA;',

       }
    ]
    },
   
    {
        enunciado: 'No âmbito ambiental, você prefere:',
        alternativas: [
        {
             texto: 'REVERTER A SITUAÇÃO CRÍTICA AMBIENTAL DO MUNDO, MAS SUA CASA VIRA UM CHIQUEIRO;',
             afirmacao: ' VOCÊ AJUDOU O MEIO AMBIENTE, MAS SUA CASA ESTÁ O PURO LIXÃO;',

        },

        {
            texto: 'AJUDAR OS MARES E OCEANOS RETIRANDO A POLUIÇÃO, MAS VOCÊ TERÁ QUE VIVER ISOLADO DA SOCIEDADE ATÉ MORRER;',
            afirmacao: 'VOCÊ AJUDOU A VIDA MARINHA, MAS VIVERÁ SOZINHO PARA A ETERNIDADE;',

       }
    ]
    },

    {
        enunciado: 'No âmbito tecnológico, você prefere:',
        alternativas: [
        {
             texto: 'VOCÊ TERÁ INTERNET PARA SEMPRE, MAS PERDE A COMUNICAÇÃO COM SEUS PAIS; .',
             afirmacao: 'VOCÊ TEM INTERNET PARA SEMPRE, MAS NÃO PODE COMUNICAR-SE COM SEUS PAIS.'
        },

        {
            texto: 'VOCÊ CRIA UM PROJETO REVOLUCIONANDO A INTERNET E ENRIQUECE, MAS SUA PESSOA FAVORITA MORRE;. ',
            afirmacao: 'VOCÊ ENRIQUECE COM SEU PROJETO, MAS INFELIZMENTE SUA PESSOA FAVORITA FFOI COM DEUS. ',

       }
    ]
    }

]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas () {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativas();
}


function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(alternativa) {
    const afirmacoes = alternativa.afirmacao;
    historiaFinal +=  afirmacoes +" ";
    atual++;
    mostraPerguntas();

}

function mostraResultado(){
    caixaPerguntas.textContent = "Resultado final do jogo de escolhas:"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPerguntas();
