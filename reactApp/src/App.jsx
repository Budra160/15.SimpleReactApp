import { useState } from 'react'
import {getProizvod} from "./data/api.jsx"
import ProductSection from "./components/productSection.jsx"
import UserSection from './components/usersSection.jsx'

import './App.css'

function App() {
 
  return (
    <>
    <h1>Primjeri</h1>
    <ProductSection/>
    <UserSection />
    </>
  )
}

export default App
