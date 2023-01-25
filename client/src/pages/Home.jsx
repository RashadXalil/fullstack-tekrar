import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
  let [cards, setCards] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/products').then((res) => {
      setCards(res.data.filter((x) => x.isDeleted === false))
    })
  }, [])
  const sortHandler = () => {
    setCards(
      [...cards].sort((a, b) => {
        return a.price - b.price
      }),
    )
  }
  return (
    <div className="homeContainer">
      <button onClick={sortHandler}>Sort</button>
      <input
        type="text"
        placeholder="search ... "
        onChange={(e) => {
          setCards(
            [...cards].filter((item) => item.name.includes(e.target.value)),
          )
        }}
      />
      {cards.map((card, index) => {
        return <Card key={index} props={card} />
      })}
    </div>
  )
}

export default Home
