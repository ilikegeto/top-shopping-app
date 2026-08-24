import { useState } from 'react'
import './style/App.css'
import { Header } from './components/allder';
import { Outlet } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isExist = prevCart.find((item) => item.id === product.id)
      if (isExist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prevCart, { ...product, qty: 1 }]
    })
  }

  const totalItems = cart.reduce((total, item) => total + item.qty, 0)

  return (
    <>
      <div className='container'>
        <Header storeName="Suki ship" cartCount={totalItems} />
        <main>
          <Outlet context={{ cart, setCart, addToCart }} />
        </main>
      </div>
    </>
  )
}

export default App