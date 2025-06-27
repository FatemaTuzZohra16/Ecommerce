import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ProductPage from './components/Product/ProductPage.jsx';
import Home from './components/Pages/Home.jsx';
import MainRoute from './components/MainRoute/MainRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoute,
    children: [
      { index: true, Component: Home },
      { path: "product", Component: ProductPage }
    ]
  },
  // {
  //   path: "/productPage",
  //   element: <ProductPage/>,
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
