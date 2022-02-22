import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/ContactV1'
import Greetings from './components/Greetings'
import Layout from './components/Layout/Layout'
import Portfolio from './components/Portfolio'

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ContactAlt from './components/ContactAlt'

function App() {

  const [width, setWindowWidth] = useState(0);

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

  const updateWidth = () => {
    const width = window.screen.width;
    setWindowWidth(width);
  }

  useEffect(() => {
    updateWidth();
    
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  }, [])

  return (
    <Layout width={width} {...portfolioProps}>
      <div>
        <Greetings />
        <AnimationOnScroll animateIn='animate__fadeInDownBig'>
          <About />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__slideInLeft'>
          <Portfolio width={width} {...portfolioProps}/>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__slideInLeft'>
          <ContactAlt />
        </AnimationOnScroll>
      </div>
    </Layout>
  )
}

export default App
