import React from 'react'
import Footer from '../MyComp/Footer.jsx'
import MyNav from '../MyComp/MyNav.jsx'

const Layout = ({ children }) => {
  return (
    <div>
        <MyNav></MyNav>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
