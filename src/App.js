import logo from './assets/logo.png';
import Dot from './dot.js'
import './App.css'

const linkList = [
  'https://google.com',
  'https://yahoo.com',
  'https://vg.no',
  // 'https://nrk.no',
]

function App() {
  return (
    <div className="app">
      {/* <header className="header">
        <img className="header__logo" src={logo} alt="Logo for Studio Oslo Landskapsarkitekter" />
        <p className="header__text">Se fremtidens Gartnerløkke</p>
      </header> */}
      <section className="container">
        {linkList && linkList.map((link, index) => {
          return(
            <a href={link} id={`link-${index}`} className="link" key={index} target="_blank" rel="noopener noreferrer">
              <Dot />
            </a>
          )
        })}

      </section>
    </div>
  );
}

export default App;
