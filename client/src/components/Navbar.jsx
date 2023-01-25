import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { getData } from '../redux/basketSlice/basketSlice'
const Navbar = () => {
  const dispatch = useDispatch()
  let totalPrice = 0
  const items = useSelector((state) => state.basket.items)
  useEffect(() => {
    axios.get('http://localhost:8080/basket').then((res) => {
      dispatch(getData(res.data))
    })
  }, [items])
  return (
    <header>
      <nav>
        <div className="left">LOGO</div>
        <div className="right">
          <ul>
            <Link className="link" to={'/'}>
              Home
            </Link>
            <Link className="link" to={'/add'}>
              Add Card
            </Link>
            <div></div>
            <div className="dropdown_btn">
              <div>WishList({items.length})</div>
              <div className="dropdown_body">
                <ul>
                  {items.map((item, index) => {
                    {
                      totalPrice +=
                        parseInt(item.count) * parseInt(item.product.price)
                    }
                    return (
                      <li key={index}>
                        {item.product.name}{' '}
                        <button
                          onClick={() => {
                            axios
                              .delete(`http://localhost:8080/basket/${item.id}`)
                              .then((res) => {
                                console.log(res.data)
                              })
                          }}
                        >
                          Delete
                        </button>
                      </li>
                    )
                  })}
                  totalPrice: {totalPrice} AZN
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
