import '../styles/globals.css'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import React, { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Navbar setToggle={setToggle} toggle={toggle} />
      <Sidebar setToggle={setToggle} toggle={toggle} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
