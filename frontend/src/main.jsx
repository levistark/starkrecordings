import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AutoScrollToTop from './utill/AutoScrollToTop.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogArticle2023 from './pages/blog/articles/BlogArticle2023.jsx'
import BlogArticle2024 from './pages/blog/articles/BlogArticle2024.jsx'
import BlogPosts from './pages/blog/BlogPosts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AutoScrollToTop />
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/post' element={<BlogPosts/>}/>
        <Route path='/post/playlists2023' element={<BlogArticle2023/>}/>
        <Route path='/post/playlists2024' element={<BlogArticle2024/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
