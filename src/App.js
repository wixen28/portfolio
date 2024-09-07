
import React from "react"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import Socials from "./components/socials/Socials"
import Footer from './components/footer/Footer'
import {useState, useEffect} from 'react'
import BarLoader from "react-spinners/BarLoader";

const App = () => {

  const [loading, setLoading] = useState(false)

  useEffect( () => {
      setLoading(true)
      setTimeout( () => {
        setLoading(false)
      }, 3000)
    }, [])

  return <div className="App">
    {loading ? (
      <BarLoader
        color={'#36d7b7'}
        loading={loading}
        size={150}
        width={150}
        height={5}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="loading"
        />
      ) : ( 
        <div>
          <Navbar />
          <Home />
          <Skills />
          <Projects />
          <Socials />
          <Footer />
        </div>
      )
    }
  </div>
}

export default App