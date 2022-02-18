import React from 'react'
import MySideBar from '../MySideBar'
import Footer from './Footer'
import Header from './Header'

interface PortfolioProps {
  battleBoobas: boolean
  setBattleBoobas: Function
  rsvpStaking: boolean
  setRsvpStaking: Function
  portfolioWebsite: boolean
  setPortfolioWebsite: Function
  children: React.ReactChild
}

const Layout = (props: PortfolioProps) => {

  return (
    <div>
        <Header />
        <MySideBar {...props}/>
        <main>{props.children}</main>
        <Footer />
    </div>
  )
}

export default Layout