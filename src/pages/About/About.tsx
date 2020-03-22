import React from 'react'
import { Link } from 'react-router-dom'
import SecondaryButton from '../../components/SecondaryButton'
import './About.less'


const About = () => (
  <div className='about-page'>
    <h1 className='title'>#Wirfüruns</h1>
    <h2 className='subtitle'>Dein Netzwerk für gelebte Solidarität</h2>

    <p>
      Wir alle erleben gerade, was Begeisterung für <span className='highlight'>solidarische Beteiligung</span> bedeutet, was sie bewirkt.<br />
      Wenn wir für uns da sind, bewältigen wir nicht nur diese Krise, <span className='highlight'>wir bewegen die Welt</span>.
    </p>

    <p>
      Denn wir, das sind nicht nur du und ich – das sind 82 Millionen, das sind 800 Millionen, das sind 7,5 Milliarden.
    </p>

    <p>
      <span className='highlight'>Füreinander dasein</span>, das sind bei uns nicht nur leere Worte, sondern <span className='highlight'>gelebte Selbstverständlichkeiten</span>.<br />
      Zusammenhalt, das gilt bei uns <span className='highlight'>nicht nur in Krisenzeiten</span> – das gilt jetzt, morgen und <span className='highlight'>über alle Grenzen hinweg</span>.
    </p>

    <p>
      <span className='highlight'>#wirfüruns</span> – das ist nicht nur ein Hashtag – das ist DEIN Netzwerk.<br />
      Dein Netzwerk, das dir zeigt wie wertvoll du für uns, wir für dich, wir für unsere Gesellschaft sind.
    </p>

    <p>
      #wirfüruns ist deine Plattform, die dich und die unterschiedlichsten Beteiligungsmöglichkeiten zusammenbringt<br />
      Wir zeigen dir, wie du dich einbringst - <span className='highlight'>im Großen, oder mit ganz kleinen Dingen</span>. Eben genau so wie es am besten zu dir und deinen Bedürfnissen passt.
    </p>

    <SecondaryButton className='link-button' size='large'>
      <Link to='/aktiv_werden'>Finde Dein Projekt</Link>
    </SecondaryButton>
  </div>
)

export default About
