import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'
import TotalPrice from './TotalPrice'
import useAction from '../hook/useAction'

function Basket() {
  const { basket } = useSelector((state) => state)
  const { deleteFromBasket } = useAction()

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
              <div className="d-flex flex-column align-items-center">
                <h5>Quantity - {elm.quantity}</h5>
                <strong style={{ fontSize: '30px' }}>
                  {elm.price * elm.quantity}$
                </strong>
                <button
                  type="button"
                  onClick={() => deleteFromBasket(elm)}
                  class="btn btn-dark h-25"
                >
                  Delete
                </button>
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
