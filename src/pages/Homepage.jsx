import React from 'react'
import Hero from "../components/HomePage/Hero"
import Category from "../components/HomePage/Category"
import MostProduct from '../components/HomePage/MostProduct'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Category />
      <MostProduct />
    </div>
  )
}

export default Homepage
