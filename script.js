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
             texto: 'VOCÊ PREFERE ACABAR COM O RACISMO.',
             afirmacao: 'A PESSOA MAIS IMPORTANTE DA SUA VIDA É MORTA NA SUA FRENTE.',

        },

        {
            texto: 'VOCÊ PREFERE SALVAR A VIDA DESSA PESSOA IMPORTANTE.',
            afirmacao: 'O RACISMO AUMENTA EM 50%.',

       }
    ]
    },
   
    {
        enunciado: 'No âmbito ambiental, você prefere:',
        alternativas: [
        {
             texto: 'REVERTER A SITUAÇÃO CRÍTICA AMBIENTAL DO MUNDO.',
             afirmacao: ' VOCÊ PERDE SU CAPACIDADE DE RACIOCINIO.',

        },

        {
            texto: 'NÃO PERDER SUA CAPACIDADE LÓGICA.',
            afirmacao: 'A CRIE AMBIENTL AUMENTA NOS PRÓXIMOS 5 ANOS.',

       }
    ]
    },

    {
        enunciado: 'No âmbito tecnológico, você prefere:',
        alternativas: [
        {
             texto: 'Ter internet para sempre.',
             afirmacao: 'ninguém pode se comunicar com os pais'
        },

        {
            texto: 'Criar a cura do Câncer.',
            afirmacao: 'todos terem diabetes',

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
    caixaPerguntas.textContent = "bom dia queridos amigos..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPerguntas();
