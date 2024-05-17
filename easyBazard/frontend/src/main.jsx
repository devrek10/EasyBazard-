/* 
------------------Explication du code --------------------

-1 L'importion de certains dependances de differentes librairies tel que 
     Route, createRouteFromElements de react-router-dom ect...

-2 Cette étape consiste a creer un objet router a partir de la methode createBrowserRouter
   afin de creer des routes dynamiquement

3- 




*/







import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import Login from './pages/auth/Login.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
     <Route path='/login' element={<Login />} />
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
