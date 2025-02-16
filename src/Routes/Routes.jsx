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
import AdminRoutes from "./AdminRoutes";
import Courses from "@/page/Main/Courses";
import CourseDetails from "@/page/Main/CourseDetails";
import AllUser from "@/page/Dashboard/AllUser";
import UpdateCourse from "@/page/Dashboard/UpdateCourse";
import EnrollRequest from "@/page/Dashboard/EnrollRequest";
import MyClasses from "@/page/Student/MyClasses";
import StudentRoute from "./StudentRoute";

const AppRoutes = () => {
  return (
    <Routes>

        {/* Root Layout */}
        <Route path="/" element={<Root></Root>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
            <Route path="/courses" element={<Courses></Courses>}></Route>
            <Route path="/course-details/:id" element={<CourseDetails></CourseDetails>}></Route>

            {/* student route */}
            <Route path="/my-classes" element={<PrivateRoute><StudentRoute><MyClasses></MyClasses></StudentRoute></PrivateRoute>}></Route>

        </Route>

        {/* authenticated Route */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/forgot-password" element={<ForgotPass></ForgotPass>}></Route>

        {/* dashboard related Routes */}
        <Route path="/dashboard" element={<PrivateRoute><AdminRoutes><Dashboard></Dashboard></AdminRoutes></PrivateRoute>}>
        
          <Route path="/dashboard/add-course" element={<PrivateRoute><AdminRoutes><AddCourse></AddCourse></AdminRoutes></PrivateRoute>}></Route>
          <Route path="/dashboard/update-course/:id" element={<PrivateRoute><AdminRoutes><UpdateCourse></UpdateCourse></AdminRoutes></PrivateRoute>}></Route>
          <Route path="/dashboard/manage-course" element={<PrivateRoute><AdminRoutes><ManageCourse></ManageCourse></AdminRoutes></PrivateRoute>}></Route>
          <Route path="/dashboard/all-user" element={<PrivateRoute><AdminRoutes><AllUser></AllUser></AdminRoutes></PrivateRoute>}></Route>
          <Route path="/dashboard/enroll-request" element={<PrivateRoute><AdminRoutes><EnrollRequest></EnrollRequest></AdminRoutes></PrivateRoute>}></Route>
        
        </Route>

    </Routes>
  )
}

export default AppRoutes
