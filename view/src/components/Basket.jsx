import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'
import TotalPrice from './TotalPrice'

function Basket() {
  const { basket } = useSelector((state) => state)

  return (
    <div>
      {basket?.data.map((elm) => {
        return (
          <div key={elm.id}>
            <div className="d-flex flex-wrap border border-dark">
              <div className="w-25">
                <img src={elm.url} className="img-fluid" alt="Card item" />
              </div>
              <div className="d-flex flex-column">
                <h3>{elm.title}</h3>
                <p className="w-75" style={{ fontSize: '20px' }}>
                  {elm.text}
                </p>
              </div>
              <div>
                <h5>Quantity - {elm.quantity}</h5>
                <strong style={{ fontSize: '30px' }}>
                  {elm.price * elm.quantity}$
                </strong>
              </div>
            </div>
            <div>
              <h3 className="font-weight-bold">
                One product cost {elm.price}$
              </h3>
            </div>
          </div>
        )
      })}
      <TotalPrice />
    </div>
  )
}

export default Basket
