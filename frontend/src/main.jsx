import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/functionalComponents/home.jsx'
import About from './components/functionalComponents/about.jsx'
import ClassComponent from './components/classComponents/eg.jsx'
import Gallery from './components/functionalComponents/gallary.jsx'
import Contact from './components/functionalComponents/contact.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <About/>
    <ClassComponent/>
    <Gallery a="yo!"/>
    <Contact/>
  </StrictMode>,
)
