import * as React from "react";
//import { useContext } from "react";

// Layouts
//import AuthLayout from "../layouts/Auth";
import MainLayout from "../layouts/Main";
//import { AuthContext } from "../contexts/auth";
// Nonauth Views
import CreatorsPortal from "../views/CreatorsPortal";
// Authenticated Views
import { Navigate } from "react-router-dom";
import Storyline from "../views/Storyline";

const useRoutes = () => {
  const user = null;

  if (user)
    return [
      // {
      //   path: '/',
      //   element: (
      //     <AuthLayout>
      //       <SignIn />
      //     </AuthLayout>
      //   ),
      //   key: '/'
      // },
    ];
  return [
    // {
    //   path: '/',
    //   element: (
    //     <AuthLayout>
    //       <SignIn />
    //     </AuthLayout>
    //   ),
    //   key: '/'
    // },
    {
      path: "/",
      element: (
        <MainLayout>
          <Storyline />
        </MainLayout>
      ),

      key: "/",
    },
    {
      path: "/creatorsportal",
      element: (
        <MainLayout>
          <CreatorsPortal />
        </MainLayout>
      ),

      key: "/creatorsPortal",
    },
    {
      path: "*",
      element: <Navigate to="/" />,
      key: "*",
    },
  ];
};

export default useRoutes;
