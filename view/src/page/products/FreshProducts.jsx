import React from 'react'
import { BlockForProduct, FirstBlock, WrapperHeader } from '../home/home'

function FreshProducts() {
  return (
    <BlockForProduct>
      <FirstBlock>
        <h3
          style={{
            fontWeight: '400',
            fontFamily: 'inter',
            fontSize: '90px'
          }}
        >
          The home of <br />
          fresh products
        </h3>
        <p
          style={{
            maxWidth: '550px',
            fontSize: '18px',
            lineHeight: '24px',
            color: '#546285'
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500.
        </p>
        <button
          type="button"
          className="btn btn-primary     "
          style={{ minHeight: '50px' }}
        >
          Learn about us
        </button>
      </FirstBlock>
      <div>
        <img className="img-fluid" src="img/eating.png" alt="Home" />
      </div>
    </BlockForProduct>
  )
}

export default FreshProducts
