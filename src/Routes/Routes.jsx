import { Routes, Route } from "react-router";
import Root from "../Layout/Root";
import Home from "../page/Main/Home";
import Login from "../page/Authentication/Login";
import Register from "../page/Authentication/Register";
import ForgotPass from "../page/Authentication/ForgotPass";
import PrivacyPolicy from "../page/Main/PrivacyPolicy";
import Dashboard from "@/page/Dashboard/Dashboard";
import AddCourse from "@/page/Dashboard/AddCourse";
import ManageCourse from "@/page/Dashboard/ManageCourse";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>

        {/* Root Layout */}
        <Route path="/" element={<Root></Root>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
        </Route>

        {/* authenticated Route */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/forgot-password" element={<ForgotPass></ForgotPass>}></Route>

        {/* dashboard related Routes */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
        
          <Route path="/dashboard/add-course" element={<PrivateRoute><AddCourse></AddCourse></PrivateRoute>}></Route>
          <Route path="/dashboard/manage-course" element={<PrivateRoute><ManageCourse></ManageCourse></PrivateRoute>}></Route>
        
        </Route>

    </Routes>
  )
}

export default AppRoutes
