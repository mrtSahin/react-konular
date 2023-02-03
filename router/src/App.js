import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import BlogLayout from './pages/blog'
import Contact from './pages/Contact'
import Categories from './pages/blog/Categories';
import Post from './pages/blog/Post';
import Blog from './pages/blog/Blog';
import Page404 from './pages/404';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (

    <>
      <nav>
        <NavLink to='/'>Anasayfa</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<BlogLayout />} >
          <Route index={true} element={<Blog />} />
          <Route path='categories' element={<Categories />} />
          <Route path='post/:url-:id' element={<Post />} />
        </Route>
        <Route path='*' element={<Page404 />} />
        <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      </Routes>
    </>

  );
}

export default App;
