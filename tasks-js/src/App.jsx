import { useState } from 'react'
import './App.css'
import {productsInicial} from './constantes/dataProducts'
import {Main} from './Components/Main'



function App() {
const [products,setProducts] = useState(productsInicial)
  
  return (
    <>
      <Main products={products} setProducts={setProducts} />
    </>
  )
}

export default App
