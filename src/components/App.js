import React from'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'

const products =[
  "tooth paste",
  "tooth brush",
  "mouth wash",
  "dental floss",
  "mouth guard",
]


const App = ()=>{
  
  return(
    <div>
       <SearchBar searchItems ={products}/>
    </div>

  )
  }

  export default App