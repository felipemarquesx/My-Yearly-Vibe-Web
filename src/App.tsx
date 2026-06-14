import { useState } from 'react';
import { musicData, type Musica } from './data/musicData';
import dacingGif from './assets/dacing.gif';

function App() {
  const [generoSelecionado, setGeneroSelecionado] = useState('');
  const [musicaAtiva, setMusicaAtiva] = useState<Musica | null>(null);
  const listaGeneros = Array.from(new Set(musicData.map((musica) => musica.genero)));

  let musicasFiltradas = musicData;

  if (generoSelecionado !== '') {
    musicasFiltradas = musicData.filter((musica) => musica.genero === generoSelecionado);
  }


  const obterLinkEmbed = (url: string) => {
    if (!url) return '';
    let videoId = '';
    if (url.includes('v=')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;
  };

  return (
    <div className="container-fluid min-vh-100 pb-5" style={{ backgroundColor: 'var(--cor-fundo)' }}>

      <header className="text-center pt-5 pb-4">
        <div className="d-flex justify-content-center align-items-center gap-3">
          <img src={dacingGif} alt="Logo MusicEra" style={{ height: '80px', width: 'auto', objectFit: 'contain', marginLeft: '-7px', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }} />
          <h1 className="display-4 fw-bold mb-0" style={{ color: 'var(--cor-texto-claro)', lineHeight: '1', marginLeft: '-20px', textShadow: '2px 4px 6px rgba(0,0,0,0.3)' }}>
            MusicEra
          </h1>
        </div>
        <div className="mx-auto" style={{ width: '310px', height: '3px', backgroundColor: '#c8a2c8', borderRadius: '2px', marginTop: '-0px', boxShadow: '0 3px 8px rgba(200, 162, 200, 0.5)' }}></div>
        <p className="lead mt-3" style={{ color: 'var(--cor-texto-suave)' }}>
          Explore seus grandes sucessos favoritos por gênero e ano
        </p>
      </header>

      <main className="container">

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          <button
            onClick={() => {
              setGeneroSelecionado('');
              setMusicaAtiva(null);
            }}
            className={`btn rounded-pill px-4 py-2 ${generoSelecionado === '' ? 'btn-ativo' : 'btn-inativo'}`}
          >
            Todos
          </button>
          {listaGeneros.map((genero) => {
            const estaAtivo = generoSelecionado === genero;

            return (
              <button
                key={genero}
                onClick={() => {
                  setGeneroSelecionado(genero);
                  setMusicaAtiva(null);
                }}
                className={`btn rounded-pill px-4 py-2 ${estaAtivo ? 'btn-ativo' : 'btn-inativo'}`}
              >
                {genero}
              </button>
            );
          })}
        </div>

        {musicaAtiva && (
          <div className="mb-5 text-center" style={{ animation: 'fadeInDown 0.4s ease-in-out' }}>
            <h3 className="fw-bold mb-3" style={{ color: 'var(--cor-texto-claro)' }}>
              Tocando Agora: <span style={{ color: 'var(--cor-primaria)' }}>{musicaAtiva.nome}</span>
            </h3>
            <div className="mx-auto shadow-lg" style={{ maxWidth: '1200px', borderRadius: '16px', overflow: 'hidden' }}>
              <div className="ratio ratio-16x9">
                <iframe
                  src={obterLinkEmbed(musicaAtiva.link)}
                  title="Player do YouTube"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <button
              className="btn mt-4 rounded-pill px-4 py-2 fw-bold"
              style={{ backgroundColor: 'var(--cor-texto-suave)', color: 'var(--cor-fundo)' }}
              onClick={() => setMusicaAtiva(null)}
            >
              X
            </button>
          </div>
        )}

        <div className="row g-4">
          {musicasFiltradas.map((musica, index) => {
            const tituloDaMusica = musica.nome;
            const imagemDaMusica = musica.urlImagem;
            const linkDoYoutube = musica.link;

            return (
              <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div
                  onClick={() => linkDoYoutube ? setMusicaAtiva(musica) : null}
                  className="card h-100 cartao-musica text-decoration-none shadow"
                  title={linkDoYoutube ? "Clique para ouvir a música" : "Música sem link"}
                  style={{ cursor: linkDoYoutube ? 'pointer' : 'default' }}
                >

                  <div className="espaco-imagem d-flex align-items-center justify-content-center">
                    {imagemDaMusica && (
                      <img src={imagemDaMusica} alt={tituloDaMusica} className="imagem-cartao" />
                    )}
                  </div>

                  <div className="card-body d-flex flex-column p-0 pt-3">
                    <h5 className="card-title fw-bold text-truncate mb-1" style={{ color: 'var(--cor-texto-claro)' }} title={tituloDaMusica}>
                      {tituloDaMusica}
                    </h5>
                    <p className="card-text text-truncate mb-3" style={{ color: 'var(--cor-primaria)' }} title={musica.artista}>
                      {musica.artista}
                    </p>

                    <div className="d-flex align-items-center gap-2 mt-auto">
                      <span className="badge rounded-pill etiqueta-genero">
                        {musica.genero}
                      </span>
                      <span className="ano-lancamento">
                        {musica.ano}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
