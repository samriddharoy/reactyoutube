import { useState } from 'react'



function App() {
  const [counter, setCounter] = useState(7)

  // let counter = 7;

  const addvalue = () => {
    // counter = counter + 1;
    
    
    setCounter(counter + 1)
  }

  const removevalue = ()=>{

    if(counter>0){
      setCounter(counter - 1)
      
    }
    
    

    

  }

  return (
    <> 
      <h1> test for vite</h1>
      <h2> value {counter}</h2>

      <button 
      onClick={addvalue}
      > add value { counter}</button>

      <button
      onClick={removevalue}
      > remove value {counter}</button>
    </>
  )
}

export default App
