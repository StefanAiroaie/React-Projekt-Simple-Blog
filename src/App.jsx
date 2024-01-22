
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './assets/components/header/Header.jsx'
import HomePage from './assets/pages/home/HomePage.jsx'
import Blog from './assets/pages/blog/Blog.jsx'
import BlogArticle from './assets/pages/blogArticle/BlogArticle.jsx'



function App() {


  return (
    <>

      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogArticle />} />
      </Routes>


    </>
  )
}

export default App
