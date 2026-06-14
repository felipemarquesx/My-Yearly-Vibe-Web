// 💡 Por que estamos usando dados locais (MOCK) em vez de uma API real?
//
// Pense em uma apresentação ao vivo como uma peça de teatro. Se você depender de uma
// API externa (como o Spotify), é como depender que a companhia de energia elétrica não 
// falhe no meio do seu show. Se a internet cair ou a chave da API expirar, seu sistema quebra.
// 
// Usar um "Mock" (um dublê de dados) garante que sua apresentação seja 100% à prova de falhas,
// rodando totalmente isolada e offline. É uma estratégia madura de engenharia para criar
// protótipos seguros e previsíveis.

// 1. O Molde (Interface)
// Pense na Interface como uma "Forma de Bolo". Ela diz exatamente quais 
// ingredientes cada música precisa ter para existir no nosso sistema.
export interface Musica {
  id: number;
  nome: string;
  artista: string;
  ano: number;
  epoca: string;
  genero: string;
  tipoArtista: string; // Homem, Mulher, Boygroup, Girlgroup
  urlImagem: string;
  curiosidade: string;
  link: string;
}

export const musicData: Musica[] = [
  // ==================== FUNK ====================
  {
    id: 43, nome: "Música Genérica", artista: "Artista Genérico", ano: 2019, epoca: "Anos 2010", genero: "Funk", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "Música adicionada como placeholder para o ano de 2019."
  },
  {
    id: 1, nome: "Oh Juliana", artista: "MC Niack", ano: 2020, epoca: "Anos 2020", genero: "Funk", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "Foi um dos maiores virais do TikTok no Brasil durante o período de isolamento."
  },
  {
    id: 2, nome: "Bipolar", artista: "MC Don Juan", ano: 2021, epoca: "Anos 2020", genero: "Funk", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "A batida misturou funk com elementos que depois influenciariam o mandelão."
  },
  {
    id: 3, nome: "Tubarão Te Amo", artista: "MC Ryan SP", ano: 2022, epoca: "Anos 2020", genero: "Funk", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "A dancinha da música quebrou as fronteiras do Brasil e foi parar em redes sociais gringas."
  },
  {
    id: 4, nome: "Tá OK", artista: "MC Kevin o Chris e Dennis DJ", ano: 2023, epoca: "Anos 2020", genero: "Funk", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "O hit reviveu a estética do funk tamborzão dos anos 2000."
  },
  {
    id: 5, nome: "Let's Go 4", artista: "MC Ig e MC Ryan SP", ano: 2024, epoca: "Anos 2020", genero: "Funk", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "O projeto 'Let's Go' se tornou uma das maiores franquias de sucesso do funk paulista."
  },
  {
    id: 6, nome: "Vem de Nave", artista: "MC PH", ano: 2025, epoca: "Anos 2020", genero: "Funk", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "MC PH consolidou a cena do 'funk consciente ostentação' no topo das paradas."
  },
  {
    id: 7, nome: "Giro Louco", artista: "MC Hariel", ano: 2026, epoca: "Anos 2020", genero: "Funk", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "Hariel comemorou uma década de sucessos ininterruptos com este lançamento."
  },

  // ==================== MPB ====================
  {
    id: 44, nome: "Música Genérica", artista: "Artista Genérico", ano: 2019, epoca: "Anos 2010", genero: "MPB", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "Música adicionada como placeholder para o ano de 2019."
  },
  {
    id: 8, nome: "Talvez", artista: "Caetano Veloso", ano: 2020, epoca: "Anos 2020", genero: "MPB", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "Gravada em casa, trouxe um respiro acústico para os fãs da MPB tradicional."
  },
  {
    id: 9, nome: "Calma", artista: "Marisa Monte", ano: 2021, epoca: "Anos 2020", genero: "MPB", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "Marcou o aguardado retorno da cantora com um álbum de inéditas após anos."
  },
  {
    id: 10, nome: "Várias Queixas", artista: "Gilsons", ano: 2022, epoca: "Anos 2020", genero: "MPB", tipoArtista: "Boygroup", urlImagem: "", link: "",
    curiosidade: "O trio, formado por filho e netos de Gilberto Gil, trouxe o tempero baiano para a nova MPB."
  },
  {
    id: 11, nome: "Tudo", artista: "Liniker", ano: 2023, epoca: "Anos 2020", genero: "MPB", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "Liniker fez história no Grammy Latino com seu estilo que mistura MPB e Soul."
  },
  {
    id: 12, nome: "Alinhamento Milenar", artista: "Jão", ano: 2024, epoca: "Anos 2020", genero: "MPB", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "Jão lotou estádios no Brasil inteiro com a super turnê do álbum 'SUPER'."
  },
  {
    id: 13, nome: "Partilhar", artista: "Rubel", ano: 2025, epoca: "Anos 2020", genero: "MPB", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "A canção virou um hino indie, sendo tocada em inúmeros casamentos pelo Brasil."
  },
  {
    id: 14, nome: "Dança dos Ventos", artista: "Marina Sena", ano: 2026, epoca: "Anos 2020", genero: "MPB", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "Misturando ritmos regionais com pop, Marina Sena se consagrou na nova geração."
  },

  // ==================== GOSPEL ====================
  {
    id: 45, nome: "Música Genérica", artista: "Artista Genérico", ano: 2019, epoca: "Anos 2010", genero: "Gospel", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "Música adicionada como placeholder para o ano de 2019."
  },
  {
    id: 15, nome: "Lugar Secreto", artista: "Gabriela Rocha", ano: 2020, epoca: "Anos 2020", genero: "Gospel", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "Uma das músicas cristãs mais tocadas da década nas plataformas digitais."
  },
  {
    id: 16, nome: "Alívio", artista: "Jessé Aguiar", ano: 2021, epoca: "Anos 2020", genero: "Gospel", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "A canção furou a bolha do gospel e emocionou pessoas de diversas crenças."
  },
  {
    id: 17, nome: "Deserto", artista: "Maria Marçal", ano: 2022, epoca: "Anos 2020", genero: "Gospel", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "Cantada por uma adolescente, a música viralizou de forma absurda no YouTube e TikTok."
  },
  {
    id: 18, nome: "Bênçãos Que Não Têm Fim", artista: "Isadora Pompeo", ano: 2023, epoca: "Anos 2020", genero: "Gospel", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "A faixa dominou não apenas as rádios gospel, mas também figurou no Top 50 geral do Spotify Brasil."
  },
  {
    id: 19, nome: "Eu Sou Teu Pai", artista: "Valesca Mayssa", ano: 2024, epoca: "Anos 2020", genero: "Gospel", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "Um dos maiores fenômenos de coral e adoração gravados ao vivo nesse ano."
  },
  {
    id: 20, nome: "Fogo Santo", artista: "Aline Barros", ano: 2025, epoca: "Anos 2020", genero: "Gospel", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "Aline reafirmou seu pioneirismo trazendo inovações de produção pop para o gospel."
  },
  {
    id: 21, nome: "Apenas Um Toque", artista: "Theo Rubia", ano: 2026, epoca: "Anos 2020", genero: "Gospel", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "Música caracterizada por longos momentos de adoração espontânea nos cultos."
  },

  // ==================== SERTANEJO ====================
  {
    id: 46, nome: "Música Genérica", artista: "Artista Genérico", ano: 2019, epoca: "Anos 2010", genero: "Sertanejo", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "Música adicionada como placeholder para o ano de 2019."
  },
  {
    id: 22, nome: "A Gente Fez Amor", artista: "Gusttavo Lima", ano: 2020, epoca: "Anos 2020", genero: "Sertanejo", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "O 'Embaixador' bateu todos os recordes de acessos simultâneos durante a pandemia."
  },
  {
    id: 23, nome: "Batom de Cereja", artista: "Israel & Rodolffo", ano: 2021, epoca: "Anos 2020", genero: "Sertanejo", tipoArtista: "Boygroup", urlImagem: "", link: "",
    curiosidade: "O sucesso foi alavancado pela participação de Rodolffo em um famoso reality show de TV."
  },
  {
    id: 24, nome: "Arranhão", artista: "Henrique & Juliano", ano: 2022, epoca: "Anos 2020", genero: "Sertanejo", tipoArtista: "Boygroup", urlImagem: "", link: "",
    curiosidade: "Uma das duplas que mais arrastou multidões no formato 'Sertanejo Premium'."
  },
  {
    id: 25, nome: "Nosso Quadro", artista: "Ana Castela", ano: 2023, epoca: "Anos 2020", genero: "Sertanejo", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "A 'Boiadeira' liderou a revolução do movimento Agroplay no Brasil."
  },
  {
    id: 26, nome: "Escrito nas Estrelas", artista: "Lauana Prado", ano: 2024, epoca: "Anos 2020", genero: "Sertanejo", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "Uma regravação com pegada sertaneja raiz que estourou após viralizar nas redes sociais."
  },
  {
    id: 27, nome: "Barulho do Foguete", artista: "Zé Neto & Cristiano", ano: 2025, epoca: "Anos 2020", genero: "Sertanejo", tipoArtista: "Boygroup", urlImagem: "", link: "",
    curiosidade: "Música que reforçou a identidade de 'sofrência com modão' da dupla."
  },
  {
    id: 28, nome: "Roça no Topo", artista: "Luan Pereira", ano: 2026, epoca: "Anos 2020", genero: "Sertanejo", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "Mistura imbatível de funk de interior com sertanejo de paredão."
  },

  // ==================== POP ====================
  {
    id: 47, nome: "Música Genérica", artista: "Artista Genérico", ano: 2019, epoca: "Anos 2010", genero: "Pop", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "Música adicionada como placeholder para o ano de 2019."
  },
  {
    id: 29, nome: "Blinding Lights", artista: "The Weeknd", ano: 2020, epoca: "Anos 2020", genero: "Pop", tipoArtista: "Homem", urlImagem: "https://i.imgur.com/D6Hrwxo.jpeg", link: "https://www.youtube.com/watch?v=4NRXx6U8ABQ&list=RD4NRXx6U8ABQ&start_radio=1&pp=ygUadGhlIHdlZWtuZCBibGluZGluZyBsaWdodHOgBwE%3D",
    curiosidade: "Passou mais de um ano inteiro no Top 10 da Billboard."
  },
  {
    id: 30, nome: "Levitating", artista: "Dua Lipa", ano: 2021, epoca: "Anos 2020", genero: "Pop", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "O hino das pistas de dança responsável pelo revival da música disco."
  },
  {
    id: 31, nome: "As It Was", artista: "Harry Styles", ano: 2022, epoca: "Anos 2020", genero: "Pop", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "Foi a música mais ouvida do ano no Spotify globalmente."
  },
  {
    id: 32, nome: "Flowers", artista: "Miley Cyrus", ano: 2023, epoca: "Anos 2020", genero: "Pop", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "Lançada estrategicamente no dia do aniversário de seu ex-marido."
  },
  {
    id: 33, nome: "Espresso", artista: "Sabrina Carpenter", ano: 2024, epoca: "Anos 2020", genero: "Pop", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "A batida viciante transformou Sabrina de ex-estrela teen em ícone pop absoluto."
  },
  {
    id: 34, nome: "Die With A Smile", artista: "Lady Gaga", ano: 2025, epoca: "Anos 2020", genero: "Pop", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "A potência vocal inegável provou que os duetos dramáticos sempre terão espaço."
  },
  {
    id: 35, nome: "Midnight Spark", artista: "Taylor Swift", ano: 2026, epoca: "Anos 2020", genero: "Pop", tipoArtista: "Mulher", urlImagem: "", link: "",
    curiosidade: "Lançamento surpresa que quebrou as plataformas de streaming nas primeiras horas."
  },

  // ==================== K-POP ====================
  {
    id: 48, nome: "Música Genérica", artista: "Artista Genérico", ano: 2019, epoca: "Anos 2010", genero: "K-Pop", tipoArtista: "Homem", urlImagem: "", link: "",
    curiosidade: "Música adicionada como placeholder para o ano de 2019."
  },
  {
    id: 36, nome: "I Can't Stop Me", artista: "Twice", ano: 2020, epoca: "Anos 2020", genero: "K-Pop", tipoArtista: "Girlgroup", urlImagem: "https://i.imgur.com/gjTwfD8.png", link: "https://www.youtube.com/watch?v=CM4CkVFmTds&list=RDCM4CkVFmTds&start_radio=1",
    curiosidade: "A estética anos 80 da música conquistou o mercado ocidental de vez."
  },
  {
    id: 37, nome: "In the morning", artista: "Itzy", ano: 2021, epoca: "Anos 2020", genero: "K-Pop", tipoArtista: "Girlgroup", urlImagem: "https://i.imgur.com/F5Xfg7z.jpeg", link: "https://www.youtube.com/watch?v=_ysomCGaZLw&list=RD_ysomCGaZLw&start_radio=1",
    curiosidade: "Coreografia com conceito 'máfia' que virou desafio obrigatório no TikTok K-Pop."
  },
  {
    id: 38, nome: "MANIAC", artista: "Stray Kids", ano: 2022, epoca: "Anos 2020", genero: "K-Pop", tipoArtista: "Boygroup", urlImagem: "https://i.imgur.com/zOUBEFc.jpeg", link: "https://www.youtube.com/watch?v=OvioeS1ZZ7o&list=RDOvioeS1ZZ7o&start_radio=1",
    curiosidade: "Grupo conhecido por compor e produzir 100% de suas próprias músicas."
  },
  {
    id: 39, nome: "OMG", artista: "NewJeans", ano: 2023, epoca: "Anos 2020", genero: "K-Pop", tipoArtista: "Girlgroup", urlImagem: "https://i.imgur.com/D4u5BYm.jpeg", link: "https://www.youtube.com/watch?v=sVTy_wmn5SU&list=RDsVTy_wmn5SU&start_radio=1",
    curiosidade: "Mudou a indústria sul-coreana ao popularizar o estilo Y2K (anos 2000) e vocais suaves."
  },
  {
    id: 40, nome: "Supernova", artista: "aespa", ano: 2024, epoca: "Anos 2020", genero: "K-Pop", tipoArtista: "Girlgroup", urlImagem: "https://i.imgur.com/7g2ENfn.jpeg", link: "https://www.youtube.com/watch?v=phuiiNCxRMg&list=RDphuiiNCxRMg&start_radio=1&pp=ygUJU1VQRVJOT1ZBoAcB0gcJCToLAYcqIYzv",
    curiosidade: "O grupo é famoso por integrar inteligência artificial e avatares virtuais nas performances."
  },
  {
    id: 41, nome: "CRAZY", artista: "LE SSERAFIM", ano: 2025, epoca: "Anos 2020", genero: "K-Pop", tipoArtista: "Girlgroup", urlImagem: "https://i.imgur.com/M0VV2sb.jpeg", link: "https://www.youtube.com/watch?v=n6B5gQXlB-0&list=RDn6B5gQXlB-0&start_radio=1&pp=ygUFY3JhenmgBwE%3D",
    curiosidade: "Consolidaram a imagem de mulheres fortes, desafiando os padrões típicos dos ídols."
  },
  {
    id: 42, nome: "Rude", artista: "HEARTS2HEARTS", ano: 2026, epoca: "Anos 2020", genero: "K-Pop", tipoArtista: "Girlgroup", urlImagem: "https://i.imgur.com/tja6Gzw.jpeg", link: "https://www.youtube.com/watch?v=F7sGJVUrkjQ&list=RDF7sGJVUrkjQ&start_radio=1",
    curiosidade: "A turnê deste álbum teve os ingressos esgotados globalmente em menos de 10 minutos."
  },
];