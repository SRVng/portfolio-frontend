import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Greetings from './components/Greetings'
import Layout from './components/Layout/Layout'
import Portfolio from './components/Portfolio'

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

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

  const sideNavBarProps = {
    setBattleBoobas,
    setRsvpStaking,
    setPortfolioWebsite
  };

  return (
    <Layout>
      <div>
        <Greetings />
        <AnimationOnScroll animateIn='animate__fadeInDownBig' animateOut='animate__fadeOutDownBig'>
          <About {...sideNavBarProps} />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__slideInLeft' animateOut='animate__slideOutRight'>
          <Portfolio {...portfolioProps}/>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__slideInRight'>
          <Contact {...sideNavBarProps}/>
        </AnimationOnScroll>
      </div>
    </Layout>
  )
}

export default App
