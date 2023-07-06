import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FirstBlock, UniqueWord, WrapperHeader } from './home'
import FreshProducts from '../products/FreshProducts'
import About from '../about/About.jsx'
import Menu from '../menu/Menu.jsx'
import Intro from '../Intro/Intro.jsx'

function Home() {
  return (
    <WrapperHeader>
      <FirstBlock>
        <h3
          style={{
            fontWeight: '400',
            fontFamily: 'inter',
            fontSize: '90px'
          }}
        >
          Beautiful food &<br /> takeaway,
          <UniqueWord>delivered</UniqueWord>
          <br /> to your door.
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
          Place an Order
        </button>
      </FirstBlock>
      <div>
        <img className="img-fluid" src="img/home.png" alt="Home" />
      </div>
      <FreshProducts />
      <About />
      <Menu />
      <Intro />
    </WrapperHeader>
  )
}

export default Home
