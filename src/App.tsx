import { useState, useEffect } from 'react';
import { musicData, type Musica } from './data/musicData';
import dacingGif from './assets/dacing.gif';
import iconePage from './assets/icon.ico';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div 
      className="d-flex gap-1 mb-2 mt-1" 
      onClick={(e) => e.stopPropagation()} 
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const isAtivo = star <= (hover || rating);
        return (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={isAtivo ? "#fbbf24" : "rgba(255, 255, 255, 0.08)"}
            stroke={isAtivo ? "#fbbf24" : "rgba(255, 255, 255, 0.15)"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ 
              cursor: "pointer", 
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: star <= hover ? "scale(1.15)" : "scale(1)",
              filter: isAtivo ? "drop-shadow(0 0 5px rgba(251, 191, 36, 0.5))" : "none"
            }}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        );
      })}
    </div>
  );
};

function App() {
  const [generoSelecionado, setGeneroSelecionado] = useState('');
  const [musicaAtiva, setMusicaAtiva] = useState<Musica | null>(null);
  const [mostrarRegistroMemoria, setMostrarRegistroMemoria] = useState(false);
  const [conectado, setConectado] = useState(true);
  const [musicasAleatorias, setMusicasAleatorias] = useState<Musica[]>(() => [...musicData].sort(() => Math.random() - 0.5));
  const listaGeneros = Array.from(new Set(musicData.map((musica) => musica.genero)));

  useEffect(() => {
    document.title = 'MusicEra';

    const favicon = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (favicon) {
      favicon.href = iconePage;
    }
  }, []);

  let musicasFiltradas = generoSelecionado === '' ? musicasAleatorias : musicData.filter((musica) => musica.genero === generoSelecionado);


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

      <header className="text-center pt-5 pb-4 position-relative">
        {/* Área de Configurações no canto superior esquerdo */}
        <div className="position-absolute top-0 start-0 mt-2 mt-md-3 ms-2 ms-md-4">
          <button
            className="btn btn-link p-2 border-0 shadow-none"
            style={{
              color: 'var(--cor-texto-suave)',
              transition: 'all 0.4s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'rotate(45deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--cor-texto-suave)';
              e.currentTarget.style.transform = 'rotate(0deg)';
            }}
            title="Configurações"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>
        </div>

        {/* Área Social e de Login no canto superior direito */}
        <div className="position-absolute top-0 end-0 mt-3 me-4 d-flex align-items-center gap-3" style={{ zIndex: 10 }}>

          {/* Campo de Busca de Amigos (aparece apenas se estiver conectado) */}
          {conectado && (
            <div className="position-relative d-none d-md-block">
              <style>
                {`
                  .input-busca-amigos::placeholder {
                    color: rgba(255, 255, 255, 0.6) !important;
                  }
                `}
              </style>
              <input
                type="text"
                className="form-control rounded-pill shadow-sm input-busca-amigos"
                placeholder="Procurar perfil de amigos..."
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: 'var(--cor-texto-claro)',
                  fontSize: '0.85rem',
                  paddingRight: '2.5rem',
                  width: '240px',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                }}
              />
              <svg className="position-absolute top-50 end-0 translate-middle-y me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--cor-texto-suave)', pointerEvents: 'none' }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          )}

          <button
            className="btn rounded-pill px-3 px-sm-4 py-2 d-flex align-items-center gap-2 shadow-sm"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              color: 'var(--cor-texto-claro)',
              fontSize: '0.85rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
            }}
            onClick={() => setConectado(!conectado)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span className="fw-medium d-none d-sm-inline">{conectado ? 'Felipe Marques' : 'Fazer Login'}</span>
          </button>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-3">
          <img src={dacingGif} alt="Logo MusicEra" style={{ height: '80px', width: 'auto', objectFit: 'contain', marginLeft: '-7px', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }} />
          <h1 className="display-4 fw-bold mb-0" style={{ color: 'var(--cor-texto-claro)', lineHeight: '1', marginLeft: '-20px', textShadow: '2px 4px 6px rgba(0,0,0,0.3)' }}>
            MusicEra
          </h1>
        </div>
        <div className="mx-auto" style={{ width: '335px', maxWidth: '90%', height: '3px', backgroundColor: '#c8a2c8', borderRadius: '2px', marginTop: '-0px', boxShadow: '0 3px 8px rgba(200, 162, 200, 0.5)' }}></div>
        <p className="lead mt-3" style={{ color: 'var(--cor-texto-suave)' }}>
          Registre e explore os sons que marcaram cada fase da sua vida.       </p>
      </header>

      <main className="container">

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          <button
            onClick={() => {
              setGeneroSelecionado('');
              setMusicaAtiva(null);
              setMusicasAleatorias([...musicData].sort(() => Math.random() - 0.5));
            }}
            className={`btn rounded-pill px-4 py-2 ${generoSelecionado === '' ? 'btn-ativo' : 'btn-inativo'}`}
          >
            Aleatório
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
          <button
            className="btn rounded-pill px-4 py-2 btn-inativo d-flex align-items-center gap-2"
            style={{ borderStyle: 'dashed' }}
            title="Demonstração: Adicionar novo gênero"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>

        {musicaAtiva && (
          <div className="mb-5" style={{ animation: 'fadeInDown 0.4s ease-in-out' }}>
            <div className="mx-auto mb-3 d-flex justify-content-between align-items-center" style={{ maxWidth: '1200px' }}>
              <h3 className="fw-bold mb-0 text-start" style={{ color: 'var(--cor-texto-claro)' }}>
                Tocando Agora: <span style={{ color: 'var(--cor-primaria)' }}>{musicaAtiva.nome}</span>
              </h3>
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn rounded-pill px-3 py-1 fw-medium shadow-sm d-flex align-items-center gap-2"
                  style={{
                    backgroundColor: mostrarRegistroMemoria ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--cor-texto-claro)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    fontSize: '0.85rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = mostrarRegistroMemoria ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)';
                  }}
                  onClick={() => setMostrarRegistroMemoria(!mostrarRegistroMemoria)}
                  title={mostrarRegistroMemoria ? 'Ocultar' : 'Registrar'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  {mostrarRegistroMemoria ? 'Ocultar' : 'Registrar'}
                </button>
                <button
                  className="btn rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--cor-texto-claro)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    width: '36px',
                    height: '36px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 50, 50, 0.2)';
                    e.currentTarget.style.color = '#ff6b6b';
                    e.currentTarget.style.borderColor = 'rgba(255, 50, 50, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.color = 'var(--cor-texto-claro)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onClick={() => {
                    setMusicaAtiva(null);
                    setMostrarRegistroMemoria(false);
                  }}
                  title="Fechar Player"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            </div>

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

            {mostrarRegistroMemoria && (
              <div
                className="mt-4 mx-auto p-2 text-start d-flex align-items-center gap-2"
                style={{
                  maxWidth: '800px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <textarea
                  key={musicaAtiva.id}
                  className="form-control text-white shadow-none border-0 textarea-memoria px-3 py-2 m-0 flex-grow-1"
                  style={{
                    backgroundColor: 'transparent',
                    resize: 'none',
                    fontSize: '1rem',
                    lineHeight: '1.5'
                  }}
                  rows={1}
                  placeholder="Como essa música marcou a sua vida?..."
                ></textarea>
                <button
                  className="btn rounded-pill px-4 shadow-sm"
                  style={{
                    backgroundColor: 'var(--cor-texto-claro)',
                    color: 'var(--cor-fundo)',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    whiteSpace: 'nowrap'
                  }}
                  onClick={() => alert('Em breve suas memórias serão salvas no seu perfil!')}
                >
                  Salvar
                </button>
              </div>
            )}
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
                    <p className="card-text text-truncate mb-2" style={{ color: 'var(--cor-primaria)' }} title={musica.artista}>
                      {musica.artista}
                    </p>

                    <StarRating />

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

        {/* Botão Flutuante de Adicionar Música */}
        <button
          className="btn rounded-circle shadow-lg d-flex align-items-center justify-content-center position-fixed"
          style={{
            bottom: '2rem',
            right: '2rem',
            width: '60px',
            height: '60px',
            backgroundColor: 'rgba(168, 85, 247, 0.2)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(168, 85, 247, 0.4)',
            color: 'var(--cor-texto-claro)',
            zIndex: 1000,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.2)';
          }}
          onClick={() => alert('Em breve: Formulário para adicionar nova música!')}
          title="Adicionar Música"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>

      </main>
    </div>
  );
}

export default App;
