import { Fragment, useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import { Inicio } from './pages/Inicio'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Header />
      <Inicio />
      <Footer />
    </Fragment>
  )
}

export default App
