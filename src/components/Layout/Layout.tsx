import React, { useEffect } from 'react'
import MobileMenu from '../MobileMenu'
import MySideBar from '../MySideBar'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  battleBoobas: boolean
  setBattleBoobas: Function
  rsvpStaking: boolean
  setRsvpStaking: Function
  portfolioWebsite: boolean
  setPortfolioWebsite: Function
  children: React.ReactChild
  width: number
}

const Layout = (props: LayoutProps) => {

  return (
    <div>
        <Header />
        <MySideBar {...props}/>
        <MobileMenu {...props}/>
        <main>{props.children}</main>
        <Footer />
    </div>
  )
}

export default Layout