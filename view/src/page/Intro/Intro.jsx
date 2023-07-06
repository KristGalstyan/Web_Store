import React from 'react'
import { FirstBlock, WrapperHeader } from '../home/home'

function Intro() {
  return (
    <WrapperHeader>
      <div>
        <img className="img-fluid" src="img/intro.png" alt="Home" />
      </div>
      <FirstBlock>
        <h3
          style={{
            fontWeight: '400',
            fontFamily: 'inter',
            fontSize: '90px',
            color: '#35b8be'
          }}
        >
          Order online with <br /> our simple checkout.
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
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          style={{ minHeight: '50px' }}
        >
          See our FAQ
        </button>
      </FirstBlock>

      <FirstBlock>
        <h3
          style={{
            fontWeight: '400',
            fontFamily: 'inter',
            fontSize: '90px',
            color: '#35b8be'
          }}
        >
          Call our store and takeaway when it suits you best.
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
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500.
        </p>
        <button
          type="button"
          className="btn btn-primary     "
          style={{ minHeight: '50px' }}
        >
          Ph. +61 233 2333
        </button>
      </FirstBlock>
      <div>
        <img className="img-fluid" src="img/restorant.png" alt="Home" />
      </div>
    </WrapperHeader>
  )
}

export default Intro
