import { Routes, Route } from 'react-router-dom';
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
import './link.css'
import Login from './pages/auth/Login';
import AuthLayout from './pages/auth/AuthLayout';
import HomeLayout from './pages/home/HomeLayout';

function App() {
  
  return (

    <>
      
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index={true} element={<Home/>}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<BlogLayout />} >
            <Route index={true} element={<Blog />} />
            <Route path='categories' element={<Categories />} />
            <Route path='post/:url-:id' element={<Post />} />
          </Route>
          <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Route>
        <Route path='*' element={<Page404 />} />
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
