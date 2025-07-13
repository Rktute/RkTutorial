import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Screens/Home/Home'
import AboutUs from './Screens/AboutUs/AboutUs'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Blog from './Screens/Blog/Blog'

const App = () => {
  return (
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus'  element={<AboutUs/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/blog' element={<Blog/>}/>
     </Routes>
  )
}

export default App
