import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Register from "../Pages/Register/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://dragon-news-server-zeta-one.vercel.app/news`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-server-zeta-one.vercel.app/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News>,</PrivateRoute>,
                loader: ({params })=> fetch(`https://dragon-news-server-zeta-one.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])