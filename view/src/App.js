import './App.css'
import About from './page/about/About.jsx'
import Header from './page/header/Header.jsx'
import Home from './page/home/Home.jsx'
import FreshProducts from './page/products/FreshProducts'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <FreshProducts />
      <About />
    </div>
  )
}

export default App
