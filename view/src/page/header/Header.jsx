import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SignBtn } from '../menu/menu'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogout } from '../../redux/login/registr.slice'

function Header() {
  const dispatch = useDispatch()
  const { data } = useSelector((s) => s.registr)

  if (localStorage.getItem('token')) {
  }

  console.log(data)

  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center  mb-5">
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <div className="img-fluid d-flex flex-wrap justify-content-center align-items-center">
          <img src="img/icons8-store-66.png" alt="Shop icon" />
          <h1 className="text-primary font-italic">Store</h1>
        </div>
      </NavLink>
      <div className="d-flex flex-wrap justify-content-between w-50">
        <p className="mx-2">Home</p>
        <p className="mx-2">Order</p>
        <p className="mx-2">Company</p>
        <p className="mx-2">FAQ</p>
        <p>Contact</p>
        {data ? (
          <>
            <div
              className="d-flex flex-wrap justify-content-center align-items-center rounded bg-primary"
              style={{
                width: '40px',
                height: '40px',
                padding: '5px',
                position: 'relative'
              }}
            >
              <div
                className="rounded-circle bg-light "
                style={{
                  width: '30px',
                  height: '30px',
                  position: 'absolute',
                  bottom: '15px',
                  left: '30px',
                  border: '3px solid white'
                }}
              >
                <strong>0</strong>
              </div>

              <img
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                src="img/icons8-shop-48.png"
                alt="Basket"
              />
            </div>
            <SignBtn onClick={() => dispatch(fetchLogout())}>
              <span>Logout</span>
            </SignBtn>
          </>
        ) : (
          <>
            <NavLink to="signIn">
              <SignBtn>
                <span>Sign In</span>
              </SignBtn>
            </NavLink>
            <NavLink to="signUp">
              <SignBtn>
                <span>Sign Up</span>
              </SignBtn>
            </NavLink>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
