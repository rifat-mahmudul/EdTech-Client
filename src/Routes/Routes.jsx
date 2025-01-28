import { Routes, Route } from "react-router";
import Root from "../Layout/Root";
import Home from "../page/Main/Home";
import Login from "../page/Authentication/Login";
import Register from "../page/Authentication/Register";

const AppRoutes = () => {
  return (
    <Routes>

        {/* Root Layout */}
        <Route path="/" element={<Root></Root>}>
            <Route path="/" element={<Home></Home>}></Route>
        </Route>

        {/* authenticated Route */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

    </Routes>
  )
}

export default AppRoutes
