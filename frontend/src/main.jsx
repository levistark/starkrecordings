import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AutoScrollToTop from './utill/AutoScrollToTop.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogArticle from './pages/blog/articles/BlogArticle.jsx'
import BlogPosts from './pages/blog/BlogPosts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AutoScrollToTop />
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/blog/posts' element={<BlogPosts/>}/>
        <Route path='/posts/playlists2023' element={<BlogArticle/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
