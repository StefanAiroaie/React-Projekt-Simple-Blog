
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './assets/components/header/Header.jsx'
import HomePage from './assets/pages/home/HomePage.jsx'
import Blog from './assets/pages/blog/Blog.jsx'



function App() {


  return (
    <>

      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='blog' element={<Blog />} />

      </Routes>


    </>
  )
}

export default App
