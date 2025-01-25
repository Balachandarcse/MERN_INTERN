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
import ReactLifecycleMethods from './components/classComponents/react-life-cycle.jsx'
import Usecontext from './components/functionalComponents/Hooks/usecontext.jsx'
import Memo from './components/Memoization/Memo.jsx'
import LazyLoading from './components/Memoization/LazyLodingAndSuspense.jsx'
import UseLocalStorage from './components/functionalComponents/customHooks/useLocalStorage.jsx'
import HoC from './components/functionalComponents/HOC/hoc.jsx'
import ApiData from './components/functionalComponents/customHooks/fectdata.jsx'

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
      <Route path='/react-lcm' element={<ReactLifecycleMethods/>}></Route>
      <Route path='/use-context' element={<Usecontext/>}></Route>
      <Route path='/memo' element={<Memo/>}></Route>
      <Route path='/lazy' element={<LazyLoading/>}></Route>
      <Route path='/customHook' element={<UseLocalStorage/>}></Route>
      <Route path='/hoc' element={<HoC/>}></Route>
      <Route path='/custom-useApi-hook' element={<ApiData/>}></Route>
    </Routes>
    
    </BrowserRouter>
    
  </StrictMode>,
)
