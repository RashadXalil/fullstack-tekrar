import axios from 'axios'
import React from 'react'

const Card = ({ props }) => {
  console.log(props)
  return (
    <div className="card">
      <div className="card__id">{props.id}</div>
      <div className="card__name">{props.name}</div>
      <div className="card__desc">{props.desc}</div>
      <div className="card__price">{props.price}</div>
      <div>
        <button>detail</button>
        <button
          onClick={() => {
            axios.post(`http://localhost:8080/basket/${props.id}`, {
              id: props.id,
              name: props.name,
              desc: props.desc,
              price: props.price,
            })
          }}
        >
          add basket
        </button>
      </div>
    </div>
  )
}

export default Card
