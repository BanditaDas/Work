import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Strips from './components/Strips'
import Products from './components/Products'
import Marques from './components/Marques'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll';



function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full bg-zinc-900 text-white'>
      <Navbar/>
      <Work/>
      <Strips/>
      <Products/>
      <Marques/>
      <Cards/>
    </div>
  )
}

export default App