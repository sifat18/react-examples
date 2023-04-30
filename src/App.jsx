import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { About } from './components/routes/About'
import { User } from './components/routes/User'
import { Home } from './components/routes/Home'

function App() {
  const router =createBrowserRouter([{path:'/',element: <Home/>},{path:'/about',element: <About/>},{path:'/user',loader:async()=> {return fetch('https://jsonplaceholder.typicode.com/users')},element: <User/> },{path:'/home',element: <Home/>}])

  return (
    <>

<RouterProvider router={router}></RouterProvider>

     
    </>
  )
}

export default App
