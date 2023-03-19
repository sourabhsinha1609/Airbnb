import React from "react"
import Navbar from "./assets/components/Navbar"
import "./App.css"
import Hero from "./assets/components/Hero"
import Card from "./assets/components/Card"
import data from "./assets/components/data"
export default function App() {

   const cards = data.map(item => {
    return (
      <Card 
      key = {item.id}
      item = {item}
      // img = {item.coverImg}
      // rating = {item.stats.rating}
      // reviewCount = {item.stats.reviewCount}
      // location = {item.location}
      // title = {item.title}
      // price = {item.price}
      // openSpots = {item.openSpots}
      
      />
    )
   })


  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">

      {cards}
      </section>
      
      {/* <Card 
        img = "katie-zaferes.png"
        rating = "5.0"
        reviewCount = {6}
        country = "USA"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
      /> */}
    </div>
  )
}