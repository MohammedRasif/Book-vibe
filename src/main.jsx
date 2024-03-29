import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots/Roots.jsx';
import Errorpage from './components/ErrorPage/Errorpage.jsx';
import Home from './components/Home/Home.jsx';
import BooksDetails from './components/BooksDetails/BooksDetails.jsx';
import Lister from './components/Liater/Lister.jsx';
import ListerBooks from './components/ListerBooks/ListerBooks.jsx';
import ReadBooks from './components/ReadBooks/ReadBooks.jsx';
import WishlistBooks from './components/WishlistBooks/WishlistBooks.jsx';
import PageToRead from './components/PageToRead/PageToRead.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listedBooks",
        element:<ListerBooks></ListerBooks>,
        children:[
          {
            index:true,
            element:<ReadBooks></ReadBooks>,
            loader:() => fetch('/book.json')

          },
          {
            path:"wishlistBooks",
            element:<WishlistBooks></WishlistBooks>,
            loader:() => fetch('/book.json')
          }
        ]
      },
      {
        path:"/lester",
        element:<Lister></Lister>
      },
      {
        path:"/pageToRead",
        element:<PageToRead></PageToRead>,
        loader:() => fetch('/book.json')
        
      },
      {
        path:"/BooksDetails/:bookId",
        element:<BooksDetails></BooksDetails>,
        loader:() => fetch('/book.json')
        
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
