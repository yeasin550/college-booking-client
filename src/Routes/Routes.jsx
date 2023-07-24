import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home/Home";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import UserProfile from "../Shared/UserProfile/UserProfile";
import PopularCollegeDetails from "../components/PopularCollege/PopularCollegeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/myCollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/popularCollegeDetails/:id",
        element: <PopularCollegeDetails></PopularCollegeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://college-booking-server-peach.vercel.app/college/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
