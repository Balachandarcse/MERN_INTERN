import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './components/functionalComponents/home.jsx'
import About from './components/functionalComponents/about.jsx'
import ClassComponent from './components/classComponents/eg.jsx'
import Gallery from './components/functionalComponents/gallary.jsx'
import Contact from './components/functionalComponents/contact.jsx'
import NavBar from './components/functionalComponents/navBar.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/gallery" element={<Gallery/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Routes>
    
    </BrowserRouter>
    
  </StrictMode>,
)
