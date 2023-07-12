import { useEffect } from 'react'
import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Header from './page/header/Header.jsx'
import Home from './page/home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { checkAuth } from './redux/login/registr.slice'
import FullMenu from './components/FullMenu'
import Basket from './components/Basket'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [dispatch])
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/fullMenu" element={<FullMenu />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
