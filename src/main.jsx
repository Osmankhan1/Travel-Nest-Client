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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: 'home',
        element: <Home></Home>
      },
      {
        path: 'rooms',
        element: <Rooms></Rooms>,
        loader: () => fetch('http://localhost:5000/RoomData'),
      },
      {
        path: 'roomDetails',
        element: <RoomDetails></RoomDetails>,
        // loader: () => fetch('http://localhost:5000/RoomData'),
        loader: ({params}) =>fetch(`http://localhost:5000/RoomData/${params.id}`),
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
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
