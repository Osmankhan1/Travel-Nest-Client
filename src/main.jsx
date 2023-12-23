import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Rooms from './Pages/Rooms/Rooms';
import MyBookings from './Pages/MyBookings/MyBookings';
import AuthProvider from './Provider/AuthProvider';
import PrivateRout from './Rout/PrivateRout';
import RoomDetails from './Pages/Rooms/RoomDetails';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import RoomDetailsFromMyCart from './Pages/Rooms/RoomDetailsFromMyCart';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'rooms',
        element: <Rooms></Rooms>,
        loader: () => fetch('https://travel-nest-server.vercel.app/RoomData'),
      },
      {
        path: 'roomDetails/:id',
        element: <RoomDetails></RoomDetails>,
        loader: ({ params }) => fetch(`https://travel-nest-server.vercel.app/RoomData/${params?.id}`)

      },
      {
        path:'roomDetailFromMyCart/:id',
        element: <RoomDetailsFromMyCart></RoomDetailsFromMyCart>,
        loader: ({ params }) => fetch(`https://travel-nest-server.vercel.app/RoomData/${params?.id}`)
      },
      {
        path: 'bookings',
        element: <PrivateRout><MyBookings></MyBookings></PrivateRout>,
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
