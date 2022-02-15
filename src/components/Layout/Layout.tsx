import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = (props: {children: React.ReactChild}) => {

  return (
    <div>
        <Header />
        <main>{props.children}</main>
        <Footer />
    </div>
  )
}

export default Layout