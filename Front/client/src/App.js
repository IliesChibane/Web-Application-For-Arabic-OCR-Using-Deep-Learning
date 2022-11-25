import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages'

function App() {

 /* const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/results").then(
      res =>res.json()
    ).then(
      data =>{
        setData(data)

        // Here you put the output (OCR results) in the component
        console.log(data)
      }
    )
  }, [])
*/

  return (
    <Router>
      <Home/>
    </Router>
  )
}

export default App