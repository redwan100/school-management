import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

import Teachers from "../Pages/Teachers/Teachers";
import Introduction from "../Pages/InstituteIntroduction/Introduction";
import Employee from "../Pages/Employee/Employee";
import Notice from "../Pages/Notice/Notice";
import RoutineList from "../Pages/Routine/RoutineList";
import ErrorPage from "../Pages/ErrorPage";
import Signup from "../Pages/Shared/Form/Signup";
import Signin from "../Pages/Shared/Form/Signin";
import AddNotice from "../Dashboard/Add-notice/AddNotice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/শিক্ষকমণ্ডলী",
        element: <Teachers />,
      },
      {
        path: "/কর্মচারী",
        element: <Employee />,
      },
      {
        path: "/পরিচিতি",
        element: <Introduction />,
      },
      {
        path: "/নোটিশ",
        element: <Notice />,
      },
      {
        path: "/রুটিন",
        element: <RoutineList />,
      },
      {
        path: "/অ্যাড নোটিশ",
        element: <AddNotice />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },
]);

export default router;