import Form from './Form';
import CircleLink from './circleLink';
import map from './assets/map.jpg';

const linkList = [
{
  title: "Toppen",
  href: 'https://kuula.co/share/7Btmp',
  color: "bg-choral",
  position: "top-1/2 left-2/3",
  text: "Toppen av Gartnerløkka er en rolig, grønn møteplass med god utsikt og dempet belysning."
},
{
  title: "Skogen",
  href: 'https://kuula.co/share/7Btmf',
  color: "bg-yellow",
  position: "top-1/2 left-3/5",
  text: "I nytt forslag spiller skogen en større rolle i parken. Ved hjelp av enkle installasjoner vil man kunne sette seg ned ved, eller leke i trærne."
},
{
  title: "Snarveien",
  href: 'https://kuula.co/share/7BtmG',
  color: "bg-blue",
  position: "top-1/5 left-1/4",
  text: "En ny snarvei åpner opp områder som i dag er mørke. Snarveien vil lyssettes på en spennende, kunstnerisk måte og åpne nye deler av parken."
},
{
  title: "Løkka",
  href: 'https://kuula.co/share/7Btm0',
  color: "bg-green",
  position: "bottom-1/3 left-1/2",
  text: "Et flatere plenområde med et naturlig sitteamfi kan brukes til lokale aktiviteter som loppemarked, trening, utekino eller forestilling."
},
]

function Home() {
  return (
    <div className="w-mobile mx-auto p-4">
      <header className="">
        <p className="text-base">
          Bydel Gamle Oslo og SOLA landskapsarkitekter har laget et forslag til oppgradering av Gartnerløkka som du kan oppleve i 3D. Klikk på ønsket område under for å se. Hvis du står på området blir effekten best.
        </p>
        <p className="font-bold my-2">
          Gjerne del dine tanker i skjemaet under kartet.
        </p>          
      </header>
      <section className="">
        <div 
          className="object-fit w-full h-96" 
          style={{
            backgroundImage: `url(${map})`,
            backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
          {linkList && linkList.map((link, index) => {
            return (
              <CircleLink key={index} href={link.href} title={link.title} color={link.color} position={link.position} />
            )
          })}
        </div> 
      </section>
      <section id="information">
        <p className="text-sm mb-4">
          Over 1000 personer har delt sine meninger om Gartnerløkka i to medvirkningsrunder. Forslaget til SOLA legger vekt på å ta i bruk flere deler av parken, men bevare den rolige bynaturfølelsen og øke naturmangfoldet.
        </p>
      {linkList && linkList.map((link, index) => {
        return (
          <div className="flex mb-2">
            <div className="mr-2 self-center">
              <div className={`flex flex-1 h-16 w-16 rounded-full ${link.color}`}>
                <p className="m-auto self-center text-xs">
                  {link.title}
                </p>
              </div>
            </div>
              <p className="text-sm">{link.text}</p>
          </div>
        );
      })}
      </section>
      <section id="form">
        <Form />
      </section>
    </div>
  );
}

export default Home;
