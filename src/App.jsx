import { useState } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Slideshow/>
    {/* <Form/> */}
    <Footer/>
    </>
  )
}

export default App
