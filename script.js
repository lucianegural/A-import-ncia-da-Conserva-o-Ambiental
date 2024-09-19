const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A Conservação Ambiental é essencial para proteger a biodiversidade e manter o equilíbrio dos ecossistemas, que são fundamentais para a sobrevivẽncia de todas as espécies,incluindo a humana.Quais são as principais medidas que podem ser adotadas por indivíduos e governos para mitigar os impactos das mudanças climáticas e promover a conservação dos recursos naturais?",
        alternativas: [
            {
                texto: "Indivíduos podem adotar ações cotidianas para a sustentabilidade, como reduzir o uso de plásticos, economizar água e recolher transportes sustentáveis.",
            },
            {
                texto: "Já os governos devem criar políticas que promovam energias renováveis, reflorestamento e proteção de áreas naturais.",
            }
        ]
    },
    {
        enunciado: "De que maneira a educação ambiental pode influenciar a conscientização da população sobre a importância da preservação dos recursos naturais especialmente em um mundo onde as informações estão facilmente disponíveis?",
        alternativas: [
            {
                texto: "A educação ambiental aumenta a conscientização sobre os impactos das ações humanas."
            },
            {
                texto: "A educação ambiental capacita indivíduos a entenderem as consequências de suas ações, estimulando a adoção de hábitos sustentáveis.
            }
        ]
    },
    {
        enunciado: "Quais são os desafios enfrentados na implementação de políticas efetivas de conservação ambiental em diferentes regiões do mundo?",
        alternativas: [
            {
                texto: "Um dos pincipais desafios é a falta de recursos financeiros e infraestruturas adequada para executar projetos de conservação em regiões mais pobres.",
            },
            {
                texto: "Outro desafio e a .",
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();