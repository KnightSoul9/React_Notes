  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'

  function App() {

    const [counter, setCounter]  = useState(15)

    //let counter = 15

    const addValue = () => {
      //counter = counter + 1  
      //counter = counter + 1
      //counter = counter + 1
      //counter = counter + 1
      // the result of all the above lines will be 16 not 19 because fibre will bundle all the event as one and send 
      //to get the change 
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      //but these above line will give 19 answer because we are changing the prev counter 
    }

    const removeValue = () => {
      setCounter(counter - 1)
    }
    
    return (
      <>
        <h1>Chai aur react</h1>
        <h2>Counter value: {counter}</h2>

        <button
        onClick={addValue}
        >Add value {counter}</button> 
        <br />
        <button
        onClick={removeValue}
        >remove value {counter}</button>
        <p>footer: {counter}</p>
      </>
    )
  }

  export default App
