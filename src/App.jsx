import users from "./jason/Myjson"

import './App.css'
import { QuoteBox } from './componentes/QuoteBox'
import { useState } from "react"

let confusion = 'https://img.lovepik.com/free-png/20220126/lovepik-confucius-png-image_401791753_wh860.png'
const ColorsArray = ["#c2185b", "#e91e63", "#e040fb", "#757575", "#0288d1", "#00796b", "#009688", "#ff5722", "#303f9f", "#4caf50", "#607d8b"]


function App() {
  const getRandomNumbers = array => {
    return Math.floor(Math.random() * array.length)
  }

  const clikings = array => {
    const i = getRandomNumbers(array)
    return array[i]
  }

  const [userRandom, SetControlUsers] = useState(clikings(users))
  const [ColorRandom, SetControlColors] = useState(clikings(ColorsArray))

  const nextQuote = () => {
    SetControlUsers(clikings(users))
    SetControlColors(clikings(ColorsArray))
  }





  const backgroundColor = {
    backgroundColor: ColorRandom
  }


  return (
    <div style={backgroundColor} className="App" >
      <QuoteBox userRandom={userRandom}
        colorRandom={ColorRandom}
        Cliking={nextQuote}
      />

      <img src={confusion} />

    </div>
  )
}

export default App
