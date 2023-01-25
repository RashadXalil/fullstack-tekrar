import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Add = () => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          axios.post('http://localhost:8080/products', {
            name: name,
            desc: desc,
            price: price,
          })
        }}
      >
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <input
          type="text"
          name="desc"
          onChange={(e) => {
            setDesc(e.target.value)
          }}
        />
        <input
          type="text"
          name="price"
          onChange={(e) => {
            setPrice(e.target.value)
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Add
