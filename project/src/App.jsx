import { useState } from 'react'
import './App.css'
import Hero from './component/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
    <Hero/>
    </main>
  )
}

export default App
