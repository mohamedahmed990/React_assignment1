import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
// import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
// import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Layout from './components/Layout/Layout';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import SidebarLayout from './components/SidebarLayout/SidebarLayout';
import Article1 from './components/Article1/Article1';
import Article2 from './components/Article2/Article2';
import Article3 from './components/Article3/Article3';

function App() {

  let router = createHashRouter([
    {
      path: '', element: <Layout />, children: [

        { path: '', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '*', element: <NotFound /> },
      ]
    },
    {
      path: '/articles', element: <SidebarLayout />, children: [
        { path: '', element: <Article1 /> },
        { path: 'article1', element: <Article1 /> },
        { path: 'article2', element: <Article2 /> },
        { path: 'article3', element: <Article3 /> },
        { path: '*', element: <NotFound /> },
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
