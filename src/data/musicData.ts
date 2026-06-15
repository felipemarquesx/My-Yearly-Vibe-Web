export interface Musica {
  id: number;
  nome: string;
  artista: string;
  ano: number;
  epoca: string;
  genero: string;
  tipoArtista: string; // Homem, Mulher, Boygroup, Girlgroup, Banda
  urlImagem: string;
  curiosidade: string;
  link: string;
}

export const musicData: Musica[] = [
  // ==================== FUNK ====================
  {
    id: 43, nome: "Mc Sapão", artista: " Mc sapão", ano: 2006, epoca: "Anos 2010", genero: "Funk", tipoArtista: "Homem", urlImagem: "https://i.imgur.com/nbYxqLo.jpeg", link: "https://www.youtube.com/watch?v=JtWJYmHDDi8&list=RDJtWJYmHDDi8&start_radio=1&pp=ygUQZXUgdG8gdHJhbnF1aWxhb6AHAQ%3D%3D",
    curiosidade: "Música adicionada como placeholder para o ano de 2019."
  },


  // ==================== MPB ====================
  {
    id: 11, nome: "Superman", artista: "Banda Vingadora", ano: 2015, epoca: "Anos 2020", genero: "MPB", tipoArtista: "Banda", urlImagem: "https://i.imgur.com/neCHgpb.jpeg", link: "https://www.youtube.com/watch?v=YzCoZGsod0c&list=RDYzCoZGsod0c&start_radio=1&pp=ygUMTUVUUkFMSEFET1JBoAcB",
    curiosidade: "Liniker fez história no Grammy Latino com seu estilo que mistura MPB e Soul."
  },
  {
    id: 11, nome: "Superman", artista: "LevaNóiz", ano: 2011, epoca: "Anos 2020", genero: "MPB", tipoArtista: "Banda", urlImagem: "https://i.imgur.com/Zq78GQR.jpeg", link: "https://www.youtube.com/watch?v=1RfA2sEXPIA&list=RD1RfA2sEXPIA&start_radio=1&pp=ygUVZm9nZSBtdWxoZXIgbWFyYXZpbGhhoAcB",
    curiosidade: "Liniker fez história no Grammy Latino com seu estilo que mistura MPB e Soul."
  },
  {
    id: 11, nome: "Acontecimentos", artista: "Marisa Monte", ano: 2017, epoca: "Anos 2020", genero: "MPB", tipoArtista: "Mulher", urlImagem: "https://i.imgur.com/vwQKmM8.jpeg", link: "https://www.youtube.com/watch?v=O3WOEOAqsG4&list=RDO3WOEOAqsG4&start_radio=1&pp=ygUNQWNvbnRlY2ltZW50b6AHAQ%3D%3D",
    curiosidade: "Liniker fez história no Grammy Latino com seu estilo que mistura MPB e Soul."
  },
  {

    id: 44, nome: "Meu abrigo ", artista: "Melim", ano: 2019, epoca: "Anos 2010", genero: "MPB", tipoArtista: "Homem", urlImagem: "https://i.imgur.com/IlglKcC.jpeg", link: "https://www.youtube.com/watch?v=gUpGTRR4Tt4&list=RDgUpGTRR4Tt4&start_radio=1&pp=ygURbWV1IGFicmlnw7MgbWVsaW2gBwHSBwkJPgsBhyohjO8%3D",
    curiosidade: "Música adicionada como placeholder para o ano de 2019."
  },
  {
    id: 9, nome: "Zap Zum", artista: "Pabllo Vitta", ano: 2021, epoca: "Anos 2020", genero: "MPB", tipoArtista: "Mulher", urlImagem: "https://i.imgur.com/OZKW9hw.jpeg", link: "https://www.youtube.com/watch?v=Fepa9dKg7N4&list=RDFepa9dKg7N4&start_radio=1",
    curiosidade: "Marcou o aguardado retorno da cantora com um álbum de inéditas após anos."
  },
  {
    id: 10, nome: "Várias Queixas", artista: "Gilsons", ano: 2022, epoca: "Anos 2020", genero: "MPB", tipoArtista: "Boygroup", urlImagem: "https://i.imgur.com/wjuJ7MQ.jpeg", link: "https://www.youtube.com/watch?v=bBHPq3UQFsw&list=RDbBHPq3UQFsw&start_radio=1&pp=ygUXdmFyaWFzIHF1ZWl4YXMgZGUgdm9jw6qgBwE%3D",
    curiosidade: "O trio, formado por filho e netos de Gilberto Gil, trouxe o tempero baiano para a nova MPB."
  },

  {
    id: 14, nome: "Carnaval", artista: "Marina Sena", ano: 2025, epoca: "Anos 2020", genero: "MPB", tipoArtista: "Mulher", urlImagem: "https://i.imgur.com/1Q6MxxO.jpeg", link: "https://www.youtube.com/watch?v=mwg0izESzgg&list=RDmwg0izESzgg&start_radio=1&pp=ygUIY2FybmF2YWygBwE%3D",
    curiosidade: "Misturando ritmos regionais com pop, Marina Sena se consagrou na nova geração."
  },

  // ==================== POP ====================
  {
    id: 47, nome: "7 rings", artista: "Ariana Grande", ano: 2019, epoca: "Anos 2010", genero: "Pop", tipoArtista: "Mulher", urlImagem: "https://i.imgur.com/BAPLERL.png", link: "https://www.youtube.com/watch?v=QYh6mYIJG2Y&list=RDQYh6mYIJG2Y&start_radio=1&pp=ygUHNyBSSU5HU6AHAQ%3D%3D",
    curiosidade: "Música adicionada como placeholder para o ano de 2019."
  },
  {
    id: 29, nome: "Blinding Lights", artista: "The Weeknd", ano: 2020, epoca: "Anos 2020", genero: "Pop", tipoArtista: "Homem", urlImagem: "https://i.imgur.com/D6Hrwxo.jpeg", link: "https://www.youtube.com/watch?v=4NRXx6U8ABQ&list=RD4NRXx6U8ABQ&start_radio=1&pp=ygUadGhlIHdlZWtuZCBibGluZGluZyBsaWdodHOgBwE%3D",
    curiosidade: "Passou mais de um ano inteiro no Top 10 da Billboard."
  },
  {
    id: 30, nome: "Good 4 U", artista: " Olivia Rodrigo", ano: 2021, epoca: "Anos 2020", genero: "Pop", tipoArtista: "Mulher", urlImagem: "https://i.imgur.com/nYFVzWk.jpeg", link: "https://www.youtube.com/watch?v=gNi_6U5Pm_o&list=RDgNi_6U5Pm_o&start_radio=1&pp=ygUIZ29vZCA0IHWgBwE%3D",
    curiosidade: "O hino das pistas de dança responsável pelo revival da música disco."
  },
  {
    id: 31, nome: "As It Was", artista: "Harry Styles", ano: 2022, epoca: "Anos 2020", genero: "Pop", tipoArtista: "Homem", urlImagem: "https://i.imgur.com/xfyqnfW.jpeg", link: "https://www.youtube.com/watch?v=H5v3kku4y6Q&list=RDH5v3kku4y6Q&start_radio=1&pp=ygUWYXMgaXQgd2FzIGhhcnJ5IHN0eWxlc6AHAQ%3D%3D",
    curiosidade: "Foi a música mais ouvida do ano no Spotify globalmente."
  },
  {
    id: 32, nome: "Greedy", artista: "Tate McRae", ano: 2023, epoca: "Anos 2020", genero: "Pop", tipoArtista: "Mulher", urlImagem: "https://i.imgur.com/t7WiPxh.jpeg", link: "https://www.youtube.com/watch?v=To4SWGZkEPk&list=RDTo4SWGZkEPk&start_radio=1",
    curiosidade: "Lançada estrategicamente no dia do aniversário de seu ex-marido."
  },
  {
    id: 33, nome: "Espresso", artista: "Sabrina Carpenter", ano: 2024, epoca: "Anos 2020", genero: "Pop", tipoArtista: "Mulher", urlImagem: "https://i.imgur.com/juCGV31.jpeg", link: "https://www.youtube.com/watch?v=eVli-tstM5E&list=RDeVli-tstM5E&start_radio=1&pp=ygUHZXNwcmVzb6AHAQ%3D%3D",
    curiosidade: "A batida viciante transformou Sabrina de ex-estrela teen em ícone pop absoluto."
  },
  {
    id: 34, nome: "Gnarly", artista: "Katseye", ano: 2025, epoca: "Anos 2020", genero: "Pop", tipoArtista: "Mulher", urlImagem: "https://i.imgur.com/4oFeFT7.jpeg", link: "https://www.youtube.com/watch?v=PkMKJEkE8Mo&list=RDPkMKJEkE8Mo&start_radio=1",
    curiosidade: "A potência vocal inegável provou que os duetos dramáticos sempre terão espaço."
  },
  {
    id: 35, nome: "The Subway", artista: "Chappell Roan", ano: 2026, epoca: "Anos 2020", genero: "Pop", tipoArtista: "Mulher", urlImagem: "https://i.imgur.com/mAklS8d.png", link: "https://www.youtube.com/watch?v=woLfAvD5iXI&list=RDwoLfAvD5iXI&start_radio=1&pp=ygUNY2hhcHBlbGwgcm9hbqAHAQ%3D%3D",
    curiosidade: "Lançamento surpresa que quebrou as plataformas de streaming nas primeiras horas."
  },

  // ==================== K-POP ====================
  {
    id: 48, nome: "Feel Special", artista: "Twice", ano: 2019, epoca: "Anos 2010", genero: "K-Pop", tipoArtista: "Homem", urlImagem: "https://i.imgur.com/YfRwX4M.png", link: "https://www.youtube.com/watch?v=3ymwOvzhwHs&list=RDATg0XdVafkZ2lybCBncm91cA&start_radio=1",
    curiosidade: "Música adicionada como placeholder para o ano de 2019."
  },
  {
    id: 36, nome: "Wannabe'", artista: "Itzy", ano: 2020, epoca: "Anos 2020", genero: "K-Pop", tipoArtista: "Girlgroup", urlImagem: "https://i.imgur.com/yatbbRW.jpeg", link: "https://www.youtube.com/watch?v=fE2h3lGlOsk&list=RDfE2h3lGlOsk&start_radio=1",
    curiosidade: "A estética anos 80 da música conquistou o mercado ocidental de vez."
  },
  {
    id: 37, nome: "Thunderous", artista: "Stray Kids", ano: 2021, epoca: "Anos 2020", genero: "K-Pop", tipoArtista: "Boygroup", urlImagem: "https://i.imgur.com/sXfVpAi.jpeg", link: "https://www.youtube.com/watch?v=EaswWiwMVs8&list=RDEaswWiwMVs8&start_radio=1&pp=ygUPc3RyYXkga2lkcyAyMDIxoAcB",
    curiosidade: "Coreografia com conceito 'máfia' que virou desafio obrigatório no TikTok K-Pop."
  },
  {
    id: 38, nome: "Love Dive", artista: "IVE", ano: 2022, epoca: "Anos 2020", genero: "K-Pop", tipoArtista: "Girlgroup", urlImagem: "https://i.imgur.com/IgdngVq.png", link: "https://www.youtube.com/watch?v=Y8JFxS1HlDo&list=RDY8JFxS1HlDo&start_radio=1&pp=ygUJbG92ZSBkaXZloAcB",
    curiosidade: "Grupo conhecido por compor e produzir 100% de suas próprias músicas."
  },
  {
    id: 39, nome: "OMG", artista: "NewJeans", ano: 2023, epoca: "Anos 2020", genero: "K-Pop", tipoArtista: "Girlgroup", urlImagem: "https://i.imgur.com/D4u5BYm.jpeg", link: "https://www.youtube.com/watch?v=sVTy_wmn5SU&list=RDsVTy_wmn5SU&start_radio=1",
    curiosidade: "Mudou a indústria sul-coreana ao popularizar o estilo Y2K (anos 2000) e vocais suaves."
  },
  {
    id: 40, nome: "Magnetic", artista: "ILLIT", ano: 2024, epoca: "Anos 2020", genero: "K-Pop", tipoArtista: "Girlgroup", urlImagem: "https://i.imgur.com/tCzpBQJ.jpeg", link: "https://www.youtube.com/watch?v=Vk5-c_v4gMU&list=RDVk5-c_v4gMU&start_radio=1&pp=0gcJCfMCOCosWNin",
    curiosidade: "O grupo é famoso por integrar inteligência artificial e avatares virtuais nas performances."
  },
  {
    id: 41, nome: "Whiplash", artista: "aespa", ano: 2025, epoca: "Anos 2020", genero: "K-Pop", tipoArtista: "Girlgroup", urlImagem: "https://i.imgur.com/vxNtUfy.jpeg", link: "https://www.youtube.com/watch?v=jWQx2f-CErU&list=RDjWQx2f-CErU&start_radio=1&pp=ygUHV0hJUExBU6AHAQ%3D%3D",
    curiosidade: "Consolidaram a imagem de mulheres fortes, desafiando os padrões típicos dos ídols."
  },
  {
    id: 42, nome: "Rude", artista: "HEARTS2HEARTS", ano: 2026, epoca: "Anos 2020", genero: "K-Pop", tipoArtista: "Girlgroup", urlImagem: "https://i.imgur.com/tja6Gzw.jpeg", link: "https://www.youtube.com/watch?v=F7sGJVUrkjQ&list=RDF7sGJVUrkjQ&start_radio=1",
    curiosidade: "A turnê deste álbum teve os ingressos esgotados globalmente em menos de 10 minutos."
  },
];