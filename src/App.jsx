import { useState, useEffect } from 'react'
import logo from './assets/logo2.png'
import aboutImg from './assets/aboutImg.jpeg'
import equipeImg from './assets/equipe.jpeg'
import heroImg from './assets/hero.png'


// ── Icons ─────────────────────────────────────────────────────────────────────

import pinIcon from './assets/pin.png';
import approveIcon from './assets/approve.png';
import squareRulerIcon from './assets/square-ruler.png';
import rulerIcon from './assets/ruler.png';
import propertyIcon from './assets/property.png';
import contractIcon from './assets/contract.png';
import mansionIcon from './assets/mansion.png';
import landIcon from './assets/land.png';
import tripodIcon from './assets/tripod.png';
import snowedMountainsIcon from './assets/snowed-mountains.png';
import handshakeIcon from './assets/handshake.png';


// ── Icons ─────────────────────────────────────────────────────────────────────

const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const IconX = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const IconWhatsapp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e00000" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const IconArrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
  </svg>
)

const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const IconMapPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)


// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Levantamento Topográfico",
    desc: "Realizamos levantamentos topográficos para identificar e representar com precisão as características do terreno, incluindo medidas, limites, desníveis, edificações e demais elementos existentes.",
    icon: tripodIcon,
  },

  {
    title: "Georreferenciamento",
    desc: "Executamos serviços de georreferenciamento para determinar a localização e os limites de um imóvel com precisão, utilizando coordenadas geográficas e equipamentos apropriados.",
    icon: pinIcon,
  },

  {
    title: "Usucapião",
    desc: "Elaboramos levantamentos, plantas, memoriais descritivos e demais documentos técnicos necessários para subsidiar processos de usucapião, conforme as características do imóvel.",
    icon: approveIcon,
  },

  {
    title: "Retificação de Área",
    desc: "Realizamos o levantamento e a elaboração da documentação técnica necessária para adequar a área e as características do imóvel à realidade encontrada no local.",
    icon: rulerIcon,
  },

  {
    title: "Desdobro e Unificação de Lotes",
    desc: "Elaboramos plantas, memoriais e levantamentos necessários para processos de desdobro ou unificação de lotes, conforme a legislação e as exigências municipais.",
    icon: landIcon,
  },

  {
    title: "Regularização de Imóveis",
    desc: "Prestamos suporte técnico para a regularização de imóveis, realizando levantamentos, plantas, memoriais descritivos e demais documentos necessários.",
    icon: propertyIcon,
  },

  {
    title: "REURB – Regularização Fundiária",
    desc: "Atuamos na elaboração de levantamentos e documentos técnicos relacionados à Regularização Fundiária Urbana (REURB), contribuindo para a organização e regularização de áreas e imóveis.",
    icon: mansionIcon,
  },

  {
    title: "Plantas e Memoriais Descritivos",
    desc: "Elaboramos plantas técnicas e memoriais descritivos com informações precisas sobre o imóvel, como dimensões, confrontações, áreas, coordenadas e demais características.",
    icon: squareRulerIcon,
  },

  {
    title: "Locação de Obras",
    desc: "Realizamos a locação de pontos, eixos, alinhamentos e demais elementos necessários para posicionar a obra corretamente no terreno, conforme o projeto.",
    icon: handshakeIcon,
  },

  {
    title: "Levantamento Planialtimétrico",
    desc: "Realizamos levantamentos planialtimétricos para representar os elementos existentes e as variações de relevo do terreno, fornecendo informações para projetos e implantação de obras.",
    icon: snowedMountainsIcon,
  },

  {
    title: "Apoio Técnico para Projetos e Aprovações",
    desc: "Oferecemos suporte técnico com levantamentos, plantas, memoriais e informações topográficas necessárias para projetos e processos de aprovação junto a prefeituras, cartórios e demais órgãos competentes.",
    icon: contractIcon,
  },
];
 

const diferenciais = [
  'Compromisso e atenção em cada etapa do projeto',
  'Atendimento personalizado de acordo com as necessidades de cada cliente',
  'Experiência e conhecimento técnico aplicados a diferentes demandas',
  'Tecnologia e equipamentos de alta qualidade para maior eficiência',
  'Precisão técnica na coleta, análise e representação dos dados',
  'Cumprimento de prazos com organização e responsabilidade',
]

const passos = [
  {
    num: '01',
    titulo: 'Entre em contato',
    desc: 'Você apresenta sua necessidade e características da área ou projeto.',
  },
  {
    num: '02',
    titulo: 'Analisamos o projeto',
    desc: 'Entendemos o serviço, definimos metodologia e elaboramos proposta técnica.',
  },
  {
    num: '03',
    titulo: 'Realizamos o levantamento',
    desc: 'Nossa equipe executa o serviço em campo com equipamentos de alta precisão.',
  },
  {
    num: '04',
    titulo: 'Entregamos os resultados',
    desc: 'Você recebe os dados, plantas, relatórios e documentos técnicos necessários.',
  },
]


const WHATSAPP_URL = `https://wa.me/5511998884920?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20topografia`

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    servico: '',
    mensagem: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const whatsappMessage = `
Olá! Gostaria de solicitar informações sobre um serviço de topografia.

*Dados do cliente:*

*Nome:* ${formData.nome}
*Telefone/WhatsApp:* ${formData.telefone}
*E-mail:* ${formData.email}
*Serviço de interesse:* ${formData.servico}

*Mensagem:*
${formData.mensagem || 'Não informado.'}
    `.trim()

    const whatsappUrl = `https://wa.me/5511998884920?text=${encodeURIComponent(
      whatsappMessage
    )}`

    window.open(whatsappUrl, '_blank')
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}

      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="container header__inner">

          <button className="logo" onClick={() => scrollTo('inicio')}>
            <img
              src={logo}
              alt="EDN Topografia"
              className="logo__badge"
            />
          </button>

          <nav className="desktop-nav">
            {[
              { label: 'Início', id: 'inicio' },
              { label: 'A Empresa', id: 'empresa' },
              { label: 'Serviços', id: 'servicos' },
              { label: 'Regiões', id: 'regioes' },
              { label: 'Contato', id: 'contato' },
            ].map((item) => (
              <button
                key={item.id}
                className="nav-link"
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa-header"
          >
            <IconWhatsapp /> Fale pelo WhatsApp
          </a>

          <button
            className="btn-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>

        </div>

        {menuOpen && (
          <div className="mobile-drawer">

            {[
              { label: 'Início', id: 'inicio' },
              { label: 'A Empresa', id: 'empresa' },
              { label: 'Serviços', id: 'servicos' },
              { label: 'Regiões de Atendimento', id: 'regioes' },
              { label: 'Contato', id: 'contato' },
            ].map((item) => (
              <button
                key={item.id}
                className="mobile-drawer__link"
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-drawer"
            >
              <IconWhatsapp /> Fale pelo WhatsApp
            </a>

          </div>
        )}

      </header>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}

      <section id="inicio" className="hero">

        <div className="hero__bg">
          <img
            src={heroImg}
            alt="Topógrafo realizando levantamento em campo"
          />
          <div className="hero__overlay-lr" />
          <div className="hero__overlay-tb" />
        </div>

        <div className="hero__grid" />

        <div className="container hero__content">

          <div className="hero__inner">

            <div className="eyebrow">
              <div className="eyebrow__line" />
              <span className="eyebrow__text">
                Topografia de Precisão
              </span>
            </div>

            <h1 className="hero__title">
              Precisão que transforma projetos{' '}
              <em>em realidade.</em>
            </h1>

            <p className="hero__text">
              Há mais de 24 anos oferecemos serviços topográficos de alta
              qualidade para construtoras, engenheiros e proprietários em
              todo o estado de São Paulo, e outros estados.
            </p>

            <div className="hero__ctas">

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <IconWhatsapp /> Solicitar orçamento
              </a>

              <button
                className="btn-outline"
                onClick={() => scrollTo('servicos')}
              >
                Conheça nossos serviços <IconArrow />
              </button>

            </div>

          </div>

          <div className="hero__stats">

            {[
              { val: '24+', label: 'Anos de experiência' },
              { val: '2000+', label: 'Projetos concluídos' },
              { val: '98%', label: 'Satisfação dos clientes' },
            ].map((stat) => (
              <div key={stat.val}>
                <div className="stat__val">{stat.val}</div>
                <div className="stat__label">{stat.label}</div>
              </div>
            ))}

          </div>

        </div>

        <div className="scroll-indicator">
          <div className="scroll-indicator__line" />
          <div className="scroll-indicator__dot" />
        </div>

      </section>

      {/* ── A EMPRESA ──────────────────────────────────────────────────────── */}

      <section id="empresa" className="section section--mid">

        <div className="container">

          <div className="about__grid">

            <div className="about__mosaic">

              <div className="about__mosaic-grid">

                <img
                  src={aboutImg}
                  alt="Equipe EDN em campo"
                  className="about__mosaic-wide"
                />

                <img
                  src={equipeImg}
                  alt="Equipamento de medição topográfica"
                  className="about__mosaic-img"
                />

                <div className="about__mosaic-stat">
                  <span>24 +</span>
                  <span>anos de excelência técnica</span>
                </div>

              </div>

              <div className="about__accent-line" />

            </div>

            <div className="about__content">

              <div className="eyebrow">
                <div className="eyebrow__line" />
                <span className="eyebrow__text">A Empresa</span>
              </div>

              <h2>
                Compromisso com a precisão em cada projeto
              </h2>

              <p className="about__text">
                A EDN Topografia é uma empresa especializada em soluções topográficas 
                e documentação técnica para imóveis, projetos de engenharia, construção 
                civil e processos de regularização. Atuamos com levantamentos topográficos,
                georreferenciamento, usucapião, retificação de áreas, desdobro e unificação
                de lotes, regularização de imóveis, REURB, plantas e memoriais descritivos, 
                locação de obras e levantamento planialtimétrico.

                 Nosso trabalho é baseado na precisão das informações, na qualidade técnica e
                 no compromisso com cada projeto. Transformamos as características reais do 
                 terreno e do imóvel em dados confiáveis e documentos técnicos que auxiliam 
                 nossos clientes em processos de planejamento, aprovação, regularização e execução de obras.
              </p>

              <p className="about__text about__text--muted">
                Atendemos engenheiros, arquitetos, construtoras, proprietários de imóveis e demais profissionais que 
                precisam de informações topográficas precisas para tomar decisões e conduzir seus projetos com segurança.
              </p>

              <div className="about__checks">

                {[
                  'Profissionais registrados no CREA',
                  'Equipamentos certificados',
                  'Atuação em todo o estado de SP',
                  'Entrega dentro do prazo',
                ].map((item) => (
                  <div key={item} className="about__check">
                    <IconCheck />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ── SERVIÇOS ───────────────────────────────────────────────────────── */}

      <section id="servicos" className="section section--dark">

        <div className="container">

          <div className="section-header">

            <div className="eyebrow">
              <div className="eyebrow__line" />
              <span className="eyebrow__text">
                Nossos Serviços
              </span>
            </div>

            <h2>
              Soluções topográficas completas para cada necessidade
            </h2>

          </div>

          <div className="services__grid">

            {services.map((svc) => (
          <div
            key={svc.title}
            className="service-card"
          >
            <div className="service-card__icon">
              <img src={svc.icon} alt="" />
            </div>

            <div className="service-card__line" />

            <h3>{svc.title}</h3>

            <p>{svc.desc}</p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="service-card__more"
            >
              Saiba mais <IconArrow />
            </a>
          </div>
            ))}

          </div>

        </div>

      </section>

      {/* ── DIFERENCIAIS ───────────────────────────────────────────────────── */}

      <section className="section section--amber">

        <div className="container">

          <div className="diff__grid">

            <h2 className="diff__title">
              Por que escolher a EDN Topografia?
            </h2>

            <div className="diff__list">

              {diferenciais.map((item) => (
                <div key={item} className="diff__item">

                  <div className="diff__item-icon">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#e00000"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  <span>{item}</span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ── COMO FUNCIONA ──────────────────────────────────────────────────── */}

      <section className="section section--mid">

        <div className="container">

          <div className="section-header">

            <div className="eyebrow">
              <div className="eyebrow__line" />
              <span className="eyebrow__text">
                Como Funciona
              </span>
            </div>

            <h2>
              Do contato à entrega dos resultados
            </h2>

          </div>

          <div className="steps__grid">

            {passos.map((passo) => (
              <div
                key={passo.num}
                className="step"
              >
                <div className="step__num">
                  {passo.num}
                </div>

                <div className="step__line" />

                <h3>{passo.titulo}</h3>

                <p>{passo.desc}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ── REGIÕES ────────────────────────────────────────────────────────── */}

{/* ══════════════════════════════════════════════════════════════════════════
    REGIÕES
══════════════════════════════════════════════════════════════════════════ */}

<section id="regioes" className="section section--dark">

  <div className="container">

    <div className="regions__grid">

      <div className="regions__content">

        <div className="eyebrow">
          <div className="eyebrow__line" />
          <span className="eyebrow__text">
            Regiões de Atendimento
          </span>
        </div>

        <h2>
          Atendimento em todo o estado de São Paulo
        </h2>

        <p className="regions__text">
          A EDN Topografia atende clientes em todo o estado de São Paulo,
          levando soluções topográficas e documentação técnica para
          diferentes regiões. Também atuamos em estados próximos, como
          Minas Gerais e Rio de Janeiro.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-amber-outline"
        >
          Verificar minha região <IconArrow />
        </a>

      </div>

      <div className="cities__grid">

        <div className="city-item city-item--state">
          <div className="city-item__dot" />
          <span>Todo o estado de São Paulo</span>
        </div>

        <div className="city-item">
          <div className="city-item__dot" />
          <span>Minas Gerais</span>
        </div>

        <div className="city-item">
          <div className="city-item__dot" />
          <span>Rio de Janeiro</span>
        </div>

        <div className="city-item city-item--more">
          <span>
            Outros estados: consulte nossa equipe
          </span>
        </div>

      </div>

    </div>

  </div>

</section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}

      <section className="section section--navy cta">

        <div className="cta__dots" />
        <div className="cta__glow-tr" />
        <div className="cta__glow-bl" />

        <div className="container cta__inner">

          <div className="cta__eyebrow">

            <div className="cta__eyebrow-line" />

            <span className="cta__eyebrow-text">
              Solicite seu orçamento
            </span>

            <div className="cta__eyebrow-line" />

          </div>

          <h2>
            Precisa de um levantamento topográfico?
          </h2>

          <p>
            Fale com nossa equipe agora mesmo e solicite um orçamento
            personalizado. Respondemos em até 2 horas em dias úteis.
          </p>

          <a
            href= "https://wa.me/5511998884920"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa-cta"
          >
            <IconWhatsapp /> Solicitar orçamento pelo WhatsApp
          </a>

        </div>

      </section>

      {/* ── CONTATO ────────────────────────────────────────────────────────── */}

  {/* ── CONTATO ────────────────────────────────────────────────────────── */}

      <section id="contato" className="section section--dark">

        <div className="container">

          <div className="contact__grid">

            <div className="contact__info">

              <div className="eyebrow">

                <div className="eyebrow__line" />

                <span className="eyebrow__text">

                  Contato

                </span>

              </div>

              <h2>

                Entre em contato conosco

              </h2>

              <div className="contact__list">

                {[

                  {

                    icon: <IconWhatsapp />,

                    label: 'WhatsApp',

                    value: '(11) 99888-4920',

                    href: "https://wa.me/5511998884920",

                  },

                  {

                    icon: <IconPhone />,

                    label: 'Telefone',

                    value: '(11) 5344-0886',

                    href: 'tel:+551633333333',

                  },

                  {

                    icon: <IconMail />,

                    label: 'E-mail',

                    value: 'topografiaaedn@gmail.com',

                    href: 'mailto:topografiaaedn@gmail.com',

                  },

                  {

                    icon: <IconMapPin />,

                    label: 'Endereço',

                    value: 'Rua Francisco Pereira de Souza, 309 — Vila Nova, SP',

                    href: 'https://maps.app.goo.gl/WZ1W4H3m694UgYJu8',

                  },

                  {

                    icon: <IconClock />,

                    label: 'Horário',

                    value: 'Seg–Sex: 8h às 17h',

                    href: null,

                  },

                ].map((item) => (

                  <div

                    key={item.label}

                    className="contact__item"

                  >

                    <div className="contact__item-icon">

                      {item.icon}

                    </div>

                    <div>

                      <span className="contact__item-label">

                        {item.label}

                      </span>

                      {item.href ? (

                        <a

                          href={item.href}

                          target={

                            item.href.startsWith('http')

                              ? '_blank'

                              : undefined

                          }

                          rel="noopener noreferrer"

                          className="contact__item-value"

                        >

                          {item.value}

                        </a>

                      ) : (

                        <span className="contact__item-value">

                          {item.value}

                        </span>

                      )}

                    </div>

                  </div>

                ))}

              </div>

            </div>

                 <div className="contact__form-wrap">
                  <h3>Envie uma mensagem</h3>

                  <form
                    className="form"
                    onSubmit={handleSubmit}
                  >
                    <div className="form__row">
                      <div className="form__field">
                        <label className="form__label">
                          Nome completo
                        </label>

                        <input
                          type="text"
                          name="nome"
                          className="form__input"
                          placeholder="João Silva"
                          value={formData.nome}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form__field">
                        <label className="form__label">
                          Telefone / WhatsApp
                        </label>

                        <input
                          type="tel"
                          name="telefone"
                          className="form__input"
                          placeholder="(11) 99999-9999"
                          value={formData.telefone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form__field">
                      <label className="form__label">
                        E-mail
                      </label>

                      <input
                        type="email"
                        name="email"
                        className="form__input"
                        placeholder="joao@exemplo.com.br"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form__field">
                      <label className="form__label">
                        Serviço de interesse
                      </label>

                      <select
                        name="servico"
                        className="form__select"
                        value={formData.servico}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Selecione um serviço
                        </option>

                        {services.map((s) => (
                          <option
                            key={s.title}
                            value={s.title}
                          >
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form__field">
                      <label className="form__label">
                        Mensagem
                      </label>

                      <textarea
                        name="mensagem"
                        className="form__textarea"
                        rows={4}
                        placeholder="Descreva brevemente o seu projeto ou necessidade..."
                        value={formData.mensagem}
                        onChange={handleChange}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-submit"
                    >
                      Enviar mensagem
                    </button>
                  </form>
                </div>
          </div>

        </div>

      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}

      <footer className="footer">

        <div className="container">

          <div className="footer__grid">

            <div>

              <div className="logo">

                <img
                  src={logo}
                  alt="EDN Topografia"
                  className="footer__brand-logo"
                />
              </div>

              <p className="footer__brand-desc">
                Serviços topográficos de precisão para engenharia,
                construção civil e regularização fundiária em todo o estado
                de São Paulo.
              </p>

              <div className="footer__socials">

                <a href="https://www.instagram.com/edntopografia/" 
                className="footer__social" target="_blank"> 
                  <IconInstagram />
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social footer__social--wa"
                >
                  <IconWhatsapp />
                </a>

              </div>

            </div>

            <div>

              <p className="footer__col-title">
                Links Rápidos
              </p>

              <ul className="footer__links">

                {[
                  { label: 'Início', id: 'inicio' },
                  { label: 'A Empresa', id: 'empresa' },
                  { label: 'Serviços', id: 'servicos' },
                  {
                    label: 'Regiões de Atendimento',
                    id: 'regioes',
                  },
                  { label: 'Contato', id: 'contato' },
                ].map((item) => (
                  <li key={item.id}>

                    <button
                      className="footer__link"
                      onClick={() => scrollTo(item.id)}
                    >
                      {item.label}
                    </button>

                  </li>
                ))}

              </ul>

            </div>

            <div>

              <p className="footer__col-title">
                Contato
              </p>

              <ul className="footer__contact-list">

                {[
                  {
                    icon: <IconWhatsapp />,
                    text: '(11)5344-0886',
                    href: "https://wa.me/551153440886"
                  },
                  {
                    icon: <IconMail />,
                    text: 'topografiaaedn@gmail.com',
                    href: 'mailto: topografiaaedn@gmail.com',
                  },
                  {
                    icon: <IconMapPin />,
                    text: 'Santa Isabel, SP',
                    href: 'https://maps.app.goo.gl/WZ1W4H3m694UgYJu8',
                  },
                ].map((item) => (
                  <li key={item.text}>

                    <a
                      href={item.href}
                      target={
                        item.href.startsWith('http')
                          ? '_blank'
                          : undefined
                      }
                      rel="noopener noreferrer"
                      className="footer__contact-item"
                    >

                      <span className="footer__contact-item-icon">
                        {item.icon}
                      </span>

                      {item.text}

                    </a>

                  </li>
                ))}

              </ul>

            </div>

          </div>

          <div className="footer__bottom">

            <p className="footer__copy">
              © 2026 EDN Topografia. Todos os direitos reservados.
            </p>

            <p className="footer__crea">
              CREA-SP · Topografia de Precisão
            </p>

          </div>

        </div>

      </footer>

        <div className="developer-bar">
          <p className="developer-bar__text">
            Desenvolvido por{' '}
            <a
              href="https://wa.me/5511912958998"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-bar__link"
            >
              Dayane Araújo
            </a>

            <span className="developer-bar__separator">&</span>

            <a
              href="https://wa.me/5511988019689"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-bar__link"
            >
              C2 Brasil
            </a>
          </p>
        </div>

      {/* ── Floating WhatsApp ───────────────────────────────────────────────── */}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-wa-float"
        aria-label="WhatsApp"
      >
        <IconWhatsapp />
      </a>

    </div>
  )
}
