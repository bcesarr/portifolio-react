// Com o "App.module.css" nós importamos os arquivos CSS assim agora. Ele fara com que cada clase seja individual e não tenha mais conflito entre as de mesmo nome.
import styles from './App.module.css';

// Importando images
import { LogoDefault, LogoOutline, ArrowDown, ArrowUp, IconGithub, IconFigma, IconDribble, ImagePeaple, RectanglePink, Aspas, RectangleOutlineSmall } from './assets/images';

export default function App() {

  return (
    // "Div" geral do site
    // Utilizamos chaves "{}" ao invés de aspas simples - '' no nome das classes e, "styles.", por que estamos utilizando o "App.modules.css" e chamando/importando ele pelo nome "styles".
    <div className={styles.portifolioContainer}>

      {/* Header - Topo da Página */}
      <header className={styles.header}>
        <div className={styles.headerTitle}>

          <img src={LogoDefault} alt="Imagem do logo" />

          <h1>Bruno</h1>
        </div>

        {/* Links do Header */}
        <nav className={styles.nav}>
          <ul>
            <li><a href="#"><span>#</span>home</a></li>
            <li><a href="#"><span>#</span>works</a></li>
            <li><a href="#"><span>#</span>about-me</a></li>
            <li><a href="#"><span>#</span>contacts</a></li>

            {/* Botão de Idioma */}
            <select>
              <option value="EN">EN</option>
              <option value="PT-BR">PT</option>
              <img src={ArrowDown} alt="Icone de setinha para baixo" />
            </select>
          </ul>
        </nav>
        
        {/* Icons ao Lado Esquerdo da Página */}
        <aside className={styles.asideMedia}>
          <div className={styles.line}></div>
          <a href="#">
            <img src={IconGithub} alt="Icone do Github" />
          </a>

          <a href="#">
            <img src={IconFigma} alt="Icone do Dribble" />
          </a>

          <a href="#">
            <img src={IconDribble} alt="Icone do Figma" />
          </a>
        </aside>
        
      </header>


      {/* Main - Meio do Site */}
      <main>

        {/* Hero da Página */}
        <section className={styles.hero}>
          {/* Titulo e Descrição do Hero */}
          <div className={styles.heroDescription}>
            <h2><span>Elias is a</span> web designer <span>and</span> front-end developer</h2>

            <p>He crafts responsive websites where technologies meet creativity</p>

            <button type='button'>Contact me!!</button>
          </div>

          {/* Imagem do Hero */}
          <div className={styles.heroImage}>
            <img src={ImagePeaple} alt="Imagem de uma pessoa" />
            <div className={styles.heroWorking}>
              <img src={RectanglePink} alt="Imagem de um quadrado rosa" />
              <p>Currently working on <span>Portfolio</span></p>
            </div>
          </div>
        </section>

        {/* Seção da Frase de Dr. Who */}
        <section className={styles.phraseContainer}>

          <div className={styles.phraseContent}>
            <img className={styles.quotationMarks1} src={Aspas} alt="Imagem de aspas" />
            <p>With great power comes great electricity bill</p>
            <img className={styles.quotationMarks2} src={Aspas} alt="Imagem de aspas" />
          </div>


          <div className={styles.authorPhrase}>
            <p>- Dr. Who</p>
          </div>
        </section>

        <section className={styles.projects}>

        </section>

      </main>

    </div>
  );
}
