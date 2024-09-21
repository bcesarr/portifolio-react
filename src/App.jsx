// Com o "App.module.css" nós importamos os arquivos CSS assim agora. Ele fara com que cada clase seja individual e não tenha mais conflito entre as de mesmo nome.
import styles from './App.module.css';

// Importando images
import LogoDefault from './assets/logo-default.svg';
import LogoOutline from './assets/logo-outline.svg';

function App() {
  return (
    // Utilizamos chaves "{}" ao invés de aspas simples - '' no nome das classes, por que estamos utilizando o "App.modules.css"
    <div className={styles.portifolioContainer}> 
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          
          <img src={LogoDefault} alt="Imagem do logo" />
          
          <h1>Bruno</h1>

          <nav>
            <ul>
              <a href="#">Home</a>
              <a href="#">Works</a>
              <a href="#">About-me</a>
              <a href="#">Contacts</a>
            </ul>
          </nav>


        </div>
      </header>
    </div>
  );
}

export default App;
