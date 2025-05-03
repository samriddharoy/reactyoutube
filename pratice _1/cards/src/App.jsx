import { useState } from 'react'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cards name ="techno" />
      <Cards />
    </>
  )
}

export default App
