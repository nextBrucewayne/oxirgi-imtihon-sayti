import React from 'react'
import Header from './components/header/Header'
import Headernitag from './components/headerni tagi/headernitag'
import Ourservices from './components/ourservices/Ourservices'
export const App = () => {
  return (
    <div className='container w-[1920px] m-auto'>

      <Header />
      <Headernitag />
      <Ourservices />
    </div>
  )
}
