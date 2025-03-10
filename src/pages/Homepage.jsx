import React from 'react'
import Hero from "../components/HomePage/Hero"
import Category from "../components/HomePage/Category"
import MostProduct from '../components/HomePage/MostProduct'
import Why from '../components/HomePage/Why'
import NewArrival from '../components/HomePage/NewArrival'
import Quotes from '../components/HomePage/Quotes'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Category />
      <MostProduct />
      <NewArrival />
      <Quotes />
      <Why />
    </div>
  )
}

export default Homepage
