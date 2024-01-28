import * as React from "react";
//import { useContext } from "react";

// Layouts
//import AuthLayout from "../layouts/Auth";
import MainLayout from "../layouts/Main";
//import { AuthContext } from "../contexts/auth";
// Nonauth Views
import CreatorsPortal from "../views/CreatorsPortal";

import AITutorPopout from "../views/AITutorPopout";
// Authenticated Views
import { Navigate } from "react-router-dom";
import StoryProblems from "../views/StoryProblems";
import MockUp from "../views/MockUp";

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
      path: "/mockup",
      element: (
        <MainLayout>
          <MockUp />
        </MainLayout>
      ),
      key: "/mockUp",
    },

    {
      path: "/storyproblems",
      element: (
        <MainLayout>
          <StoryProblems />
        </MainLayout>
      ),
      key: "/storyProblems",
    },

    {
      path: "/aitutor",
      element: (
        <MainLayout>
          <AITutorPopout />
        </MainLayout>
      ),
      key: "/aiTutor",
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
