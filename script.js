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
             texto: 'Destruir qualquer forma de exploração humana.',
             afirmacao: 'Você será escravo até morrer.',

        },

        {
            texto: 'Acabar com todas as drogas do mundo.',
            afirmacao: 'Os usuários de drogas morreram por sua causa.',

       }
    ]
    },
   
    {
        enunciado: 'No âmbito ambiental, você prefere:',
        alternativas: [
        {
             texto: 'Extinguir a Floresta Amazônica.',
             afirmacao: 'Os problemas ambientais desapareceram por sua decisão.',

        },

        {
            texto: 'Acabar com a água do mundo.',
            afirmacao: 'Parabéns, o ser humano não terá sede.',

       }
    ]
    },

    {
        enunciado: 'No âmbito tecnológico, você prefere:',
        alternativas: [
        {
             texto: 'Ter internet para sempre.',
             afirmacao: 'Parabéns, ninguém pode se comunicar nas redes sociais ou qualquer meio de comunicação digital.',

        },

        {
            texto: 'Criar a cura do Câncer.',
            afirmacao: 'Parabéns, todos os habitantes do mundo terão tumores com sequelas visuais.',

       }
    ]
    }

]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas () {
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
    atual++;
    mostraPerguntas();

}



mostraPerguntas();
