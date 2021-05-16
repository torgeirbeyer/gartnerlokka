import Dot from './dot.js'
import map from './assets/map.jpg';
import './App.css'


const linkList = [
  'https://google.com',
  'https://yahoo.com',
  'https://vg.no',
]

function App() {
  return (
    <div className="w-full sm:w-mobile md:w-tablet p-4">
      <header className="">
        <p className="text-base">Her kommer det masse tekst<br /> med brutte greier der det trengs</p>
      </header>
      <section className="">
        <img 
          className="w-full object-contain"
          src={map} 
          alt="Map of Gartnerlokka"/>
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
