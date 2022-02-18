import { useState } from 'react'
import About from './components/About'
import Contact from './components/ContactV1'
import Greetings from './components/Greetings'
import Layout from './components/Layout/Layout'
import Portfolio from './components/Portfolio'

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ContactAlt from './components/ContactAlt'

function App() {

  const [battleBoobas, setBattleBoobas] = useState(false);
  const [rsvpStaking, setRsvpStaking] = useState(false);
  const [portfolioWebsite, setPortfolioWebsite] = useState(false);

  const portfolioProps = {
    battleBoobas,
    setBattleBoobas,
    rsvpStaking,
    setRsvpStaking,
    portfolioWebsite,
    setPortfolioWebsite
  };

  return (
    <Layout {...portfolioProps}>
      <div>
        <Greetings />
        <AnimationOnScroll animateIn='animate__fadeInDownBig' animateOut='animate__fadeOutDownBig'>
          <About />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__slideInLeft' animateOut='animate__slideOutRight'>
          <Portfolio {...portfolioProps}/>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__slideInRight'>
          <ContactAlt />
        </AnimationOnScroll>
      </div>
    </Layout>
  )
}

export default App
