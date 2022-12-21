import React from 'react'
import Header from "./Container/Header"
import Tabel from './Container/Tabel'
import Filter from './Container/Filter'
import Card from './Container/Card'

const Home = () => {
  return (
      <div>
          <Header />
          <Tabel />
      <Filter />
      <Card />
          
    </div>
  )
}

export default Home
