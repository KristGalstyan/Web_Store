import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Header from './page/header/Header.jsx'
import Home from './page/home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
