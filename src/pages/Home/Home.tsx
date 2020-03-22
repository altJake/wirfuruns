import React from 'react'
import { Link } from 'react-router-dom'
import SecondaryButton from '../../components/SecondaryButton'
import './Home.less'


const Home = () => (
  <div className='home-page'>
    <h1 className='title'>#Wirfüruns</h1>
    <h2 className='subtitle'>Dein Netzwerk für gelebte Solidarität</h2>

    <p>
      #wirfüruns ist Deine Plattform, die Dich und die unterschiedlichsten Beteiligungsmöglichkeiten zusammenbringt.<br />
      Wir zeigen Dir, wie du Dich einbringst - im Großen, oder mit ganz kleinen Dingen.<br />
      Eben genau so, wie es am besten zu Dir und Deinen Bedürfnissen passt.
    </p>

    <iframe
      className='youtube-video'
      title='#WirfürUns - solidarische Beteiligungsplattform'
      id='ytplayer'
      width='560'
      height='315'
      src='https://www.youtube-nocookie.com/embed/WX1Pv6W6td8'
      // @ts-ignore 
      frameborder='0'
      allow='accelerometer; autoplay; encrypted-media; picture-in-picture'
      allowfullscreen
    >
    </iframe>

    <SecondaryButton className='link-button' size='large'>
      <Link to='/aktiv_werden'>Finde Dein Projekt</Link>
    </SecondaryButton>
  </div>
)

export default Home
