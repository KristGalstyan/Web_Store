import React from 'react'
import { useSelector } from 'react-redux'

function TotalPrice() {
  const { basket } = useSelector((state) => state)
  console.log(basket)

  const sumWithInitial = basket?.data.reduce((acc, cur) => {
    console.log(cur)
    return acc + +cur.price
  }, 0)

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex">
        <div style={{ fontSize: '30px', fontWeight: 'bold' }}>
          The total amount is {sumWithInitial.toFixed(2)}$
        </div>

        <div className=""></div>
      </div>
    </div>
  )
}

export default TotalPrice
