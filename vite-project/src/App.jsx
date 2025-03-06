import { useState } from 'react'
import './App.css'
import Card from './components/card';


function App() {
  // const [counter, setCounter] = useState(7)

  // // let counter = 7;

  // const addvalue = () => {
  //   // counter = counter + 1;
    
    
  //   setCounter(counter + 1)
  // }

  // const removevalue = ()=>{

  //   if(counter>0){
  //     setCounter(counter - 1)
      
  //   }
    
    

    

  // }

  return (
    <> 
    <h1 className= ' bg-green-500 text-white text-2xl font-bold text-center'>
      Hello world!
    </h1>
    <Card name  price ="samriddha"/>
    </>
  )
}

export default App
