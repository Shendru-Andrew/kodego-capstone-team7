import Login from './pages/auth/login'
import Home from './pages/home/home'
import useState from 'react'


const routes = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    }
]

export default routes;