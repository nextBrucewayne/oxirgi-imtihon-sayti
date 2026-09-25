import React from 'react'
import Header from './components/header/Header'
import Headernitag from './components/headerni tagi/headernitag'
import Ourservices from './components/ourservices/Ourservices'
import OurservicesniTagi from './components/ourservicesniTagi/OurservicesniTagi'
import Rasm2tali from './components/rasm2tali/Rasm2tali'
import Footertepasi from './components/footertepasi/Footertepasi'
import Footer from './components/footer/Footer'
export const App = () => {
  return (

    <div className='container w-[1920px] m-auto'>


      <Header />
      <Headernitag />
      <Ourservices />
      <OurservicesniTagi />
      <Rasm2tali />
      <Footertepasi />
      <Footer />
    </div>
  )
}
