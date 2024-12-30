import React from 'react'
import Navbar from './pages/Navbar'
import Bottombar from './pages/Bottombar'
import Searchbar from './pages/Searchbar'
import Footer from './pages/Footer'
import Banner from './pages/Banner'
import Destination from './pages/Destination'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Bottombar/>
      <Searchbar/>
      <Banner/>
      <Destination/>
      <Footer/>
    </div>
  )
}

export default App