import './App.css'
import Navbar from './Component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/product'
import Footer from './Component/Footer' 
import NotFound from './Pages/NotFound'
import Men from './Pages/men'
import Women from './Pages/women'
import Kids from './Pages/kids'
import Course from './Pages/Course'
import CourseDetails from './Pages/CourseDetails'



function App() {

  return (
    <>
      <div>
       <h1><Navbar /></h1>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path = '/course' element={<Course/>} />
        <Route path = '/course/:id' element={<CourseDetails/>} />

        <Route path='/contact' element={<Contact />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
       </Route>

       <Route path="*" element={<NotFound />} />
        

      </Routes>

      <Footer />
      </div>
    </>
  )
}

export default App
