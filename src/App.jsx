import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRoutes
} from "react-router-dom";
import './App.css'
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAddCars from "./pages/AdminAddCars";
import AdminEditCars from "./pages/AdminEditCars";

function App() {
  let element = useRoutes ([
    {path: "/", element: <AdminLogin/>},
    {path: "/admin-dashboard", element: <AdminDashboard/>},
    {path: "/admin-addcars", element: <AdminAddCars/>},
    {path: "/admin-editcars", element: <AdminEditCars/>},
  ])

  return element
}

export default App
