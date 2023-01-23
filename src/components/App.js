import React from'react'
import CountButton from './CountButton/CountButton'


const App = ()=>{
  
  return(
    <div>
        <CountButton incrementBy={1} buttonColor={"blue"} borderRadius={"2px"}/>
         <CountButton incrementBy={5} buttonColor={"green"} borderRadius={"3px"}/>
          <CountButton incrementBy={677} buttonColor={"red"}/>
        
    </div>

  )
  }

  export default App