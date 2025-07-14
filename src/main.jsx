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
import ProductDetailsPage from './components/ProductDetailsPage/ProductDetailsPage.jsx';
import Cart from './components/Pages/Cart.jsx';
import CheckOut from './components/Pages/CheckOut.jsx';
import store from './store.js';
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoute,
    children: [
      { index: true, Component: Home },
      { path: "/product", Component: ProductPage },
      { path: "/product/:id", Component: ProductDetailsPage },
      { path: "/cart", Component: Cart },
      { path: "/checkOut", Component: CheckOut }
    ]
  },
  // {
  //   path: "/productPage",
  //   element: <ProductPage/>,
  // },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router} />
    {/* <App /> */}
  </Provider>,
)
