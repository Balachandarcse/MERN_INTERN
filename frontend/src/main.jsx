import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/functionalComponents/home.jsx'
import About from './components/functionalComponents/about.jsx'
import Gallery from './components/functionalComponents/gallary.jsx'
import Contact from './components/functionalComponents/contact.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/functionalComponents/signUp.jsx'
import UseState from './components/functionalComponents/Hooks/useState.jsx'
import UseEffect from './components/functionalComponents/Hooks/useEffect.jsx'
import UseEffectApi from './components/functionalComponents/Hooks/useEffectApi.jsx'
import UseReducer from './components/functionalComponents/Hooks/useReducer.jsx'
import UseEffectApiImage from './components/functionalComponents/Hooks/useEffectApiimage.jsx'
import UseRef from './components/functionalComponents/Hooks/useRef.jsx'
import UseMemo from './components/functionalComponents/Hooks/useMemo.jsx'
import UseCallBack from './components/functionalComponents/Hooks/useCallback.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/gallery" element={<Gallery/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/usestate" element={<UseState/>}></Route>
      <Route path="/use-effect" element={<UseEffect/>}></Route>
      <Route path="/use-effect-api" element={<UseEffectApi/>}></Route>
      <Route path="/use-effect-Image" element={<UseEffectApiImage/>}></Route>
      <Route path="/use-reducer" element={<UseReducer/>}></Route>
      <Route path="/use-ref" element={<UseRef/>}></Route>
      <Route path='/use-memo' element={<UseMemo/>}></Route>
      <Route path='/use-callback' element={<UseCallBack/>}></Route>
    </Routes>
    
    </BrowserRouter>
    
  </StrictMode>,
)
