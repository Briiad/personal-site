import React from 'react'
import Navbar from './Navbar'
import SideContact from './SideContact'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <SideContact />
      {children}
    </div>
  )
}

export default Layout