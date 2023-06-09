export interface Card {
  id: number;
  type: string;
  content: string;
}

export interface Player {
    id: number,
    name: string,
}

export interface Type {
    id: number,
    label: string
}

export const truths: Card[] = [
  {
    id: 1,
    type: 'Verdade',
    content: 'O que pode ser melhorado no relacionamento?',
  },
  {
    id: 2,
    type: 'Verdade',
    content: 'O que você mais ama nele (a)?',
  },
  {
    id: 3,
    type: 'Verdade',
    content: 'Onde e como foi o primeiro beijo?',
  },
  {
    id: 4,
    type: 'Verdade',
    content: 'Pelo o quê você é grato no relacionamento?',
  },
  {
    id: 5,
    type: 'Verdade',
    content: 'Como foi o primeiro encontro? Relembre tudo.',
  },
  {
    id: 6,
    type: 'Verdade',
    content: 'O que você acha mais engraçado nele (a)?',
  },
  {
    id: 7,
    type: 'Verdade',
    content: 'Que música te faz lembrar dele (a)?',
  },
  {
    id: 8,
    type: 'Verdade',
    content: 'Qual seu sonho para os dois?',
  },
  {
    id: 9,
    type: 'Verdade',
    content: 'O que você aprendeu com ele (a)?',
  },
  {
    id: 10,
    type: 'Verdade',
    content: 'O que ele(a) faz que te deixa muito feliz?',
  },
  {
    id: 11,
    type: 'Verdade',
    content: 'O que te faz sentir ciúmes?',
  },
  {
    id: 12,
    type: 'Verdade',
    content: 'Pra você qual foi o momento mais feliz do relacionamento?',
  },
  {
    id: 13,
    type: 'Verdade',
    content:
      'Qual foi o primeiro pensamento que passou pela sua cabeça quando nos conhecemos?',
  },
  {
    id: 14,
    type: 'Verdade',
    content: 'Qual é a coisa mais romântica que você já fez por mim?',
  },
  {
    id: 15,
    type: 'Verdade',
    content:
      'Se pudéssemos ter uma segunda lua de mel, para onde você gostaria de ir?',
  },
  {
    id: 16,
    type: 'Verdade',
    content: 'Qual é a sua memória favorita de nós dois juntos?',
  },
  {
    id: 17,
    type: 'Verdade',
    content:
      'Qual é a coisa mais engraçada que já aconteceu durante nosso relacionamento?',
  },
  {
    id: 18,
    type: 'Verdade',
    content:
      'Descreva uma fantasia romântica que você tem, mas nunca compartilhou comigo.',
  },
  {
    id: 19,
    type: 'Verdade',
    content: 'Qual é o segredo mais estranho que você já manteve de mim?',
  },
  {
    id: 20,
    type: 'Verdade',
    content: 'Se pudéssemos trocar de corpo por um dia, o que você faria?',
  },
  {
    id: 21,
    type: 'Verdade',
    content: 'Qual é a sua música favorita que sempre te faz pensar em mim?',
  },
  {
    id: 22,
    type: 'Verdade',
    content:
      'Se você tivesse que me descrever usando apenas três palavras, quais seriam?',
  },
  {
    id: 23,
    type: 'Verdade',
    content: 'Qual é a sua parte favorita do meu corpo?',
  },
  {
    id: 24,
    type: 'Verdade',
    content: 'Qual é a nossa viagem dos sonhos que ainda não fizemos juntos?',
  },
  {
    id: 25,
    type: 'Verdade',
    content: 'Se você pudesse mudar uma coisa sobre mim, o que seria?',
  },
  {
    id: 26,
    type: 'Verdade',
    content:
      'Qual foi o momento mais emocionante do nosso relacionamento até agora?',
  },
  {
    id: 27,
    type: 'Verdade',
    content: 'O que você acha que nos torna um casal único?',
  },
];

export const dares: Card[] = [
  {
    id: 1,
    type: 'Desafio',
    content: 'Diga ao seu amor que o(a) ama de 5 maneiras diferentes',
  },
  {
    id: 2,
    type: 'Desafio',
    content: 'Faça 5 minutos de massagem no seu amor – ele(a) escolhe onde',
  },
  {
    id: 3,
    type: 'Desafio',
    content: 'Tire uma peça de roupa',
  },
  {
    id: 4,
    type: 'Desafio',
    content: 'Diga algo provocante para seu amor',
  },
  {
    id: 5,
    type: 'Desafio',
    content: 'Fale de seus planos para um futuro juntos',
  },
  {
    id: 6,
    type: 'Desafio',
    content: 'Dê um beijo no seu amor – onde você quiser',
  },
  {
    id: 7,
    type: 'Desafio',
    content: 'Dê um longo e demorado abraço',
  },
  {
    id: 8,
    type: 'Desafio',
    content: 'Dê um longo e demorado beijo na boca',
  },
  {
    id: 9,
    type: 'Coringa',
    content: 'Pausa de 5 minutos para carinhos',
  },
  {
    id: 10,
    type: 'Desafio',
    content: 'Faça um jogo de sedução com seu parceiro(a) usando apenas toques suaves.',
  },
  {
    id: 11,
    type: 'Desafio',
    content: 'Dê uma mordidinha em um lugar de sua escolha nele(a)',
  },
  {
    id: 12,
    type: 'Desafio',
    content: 'Mande uma mensagem ousada para ele(a)',
  },
  {
    id: 13,
    type: 'Desafio',
    content:
      'Invente um apelido carinhoso novo para o seu parceiro(a) e use-o pelo resto do dia.',
  },
  {
    id: 11,
    type: 'Desafio',
    content:
      'Dê um beijo apaixonado no pescoço do seu parceiro(a) por 30 segundos.',
  },
  {
    id: 12,
    type: 'Desafio',
    content:
      'Faça uma massagem sensual nas costas do seu parceiro(a) por 5 minutos.',
  },
  {
    id: 13,
    type: 'Desafio',
    content:
      'Troque uma peça de roupa com seu parceiro(a) e use-a por 10 minutos.',
  },
  {
    id: 14,
    type: 'Desafio',
    content:
      'Faça uma dança sensual para o seu parceiro(a) ao som de uma música escolhida por ele/ela.',
  },
  {
    id: 15,
    type: 'Desafio',
    content:
      'Escreva uma mensagem erótica para o seu parceiro(a) e envie por mensagem de texto.',
  },
  {
    id: 16,
    type: 'Desafio',
    content:
      'Faça um striptease para o seu parceiro(a) com uma música sedutora de fundo.',
  },
  {
    id: 17,
    type: 'Desafio',
    content: 'Dê uma mordida sedutora nos lábios do seu parceiro(a).',
  },
  {
    id: 18,
    type: 'Desafio',
    content:
      'Deixe seu parceiro(a) te vendar e explore seu corpo com toques suaves e beijos.',
  },
  {
    id: 19,
    type: 'Desafio',
    content: 'Faça uma massagem nos pés do seu parceiro(a) por 10 minutos.',
  },
  {
    id: 20,
    type: 'Desafio',
    content: 'Faça um jogo de sedução com seu parceiro(a) usando apenas a voz.',
  },
  {
    id: 21,
    type: 'Desafio',
    content:
      'Provoque seu parceiro(a) com beijos e toques, mas sem permitir que ele/ela te toque por 5 minutos.',
  },
  {
    id: 22,
    type: 'Desafio',
    content:
      'Faça uma serenata improvisada para o seu parceiro(a) usando uma escova de cabelo como microfone.',
  },
  {
    id: 23,
    type: 'Desafio',
    content: 'Faça uma dança engraçada e desajeitada para o seu parceiro(a).',
  },
  {
    id: 24,
    type: 'Desafio',
    content:
      'Escreva um poema romântico para o seu parceiro(a) e leia em voz alta.',
  },
  {
    id: 25,
    type: 'Desafio',
    content:
      'Faça uma declaração de amor improvisada para o seu parceiro(a) usando apenas palavras que começam com a letra "S".',
  },
];
