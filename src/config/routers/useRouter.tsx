import { lazy } from "react";

const Routes=() =>{
    const router= [
      {
        path: "/Dashboard",
        component: lazy(() => import("../../module/dashboard/view/Dashboard")),
      },
      {
        path: "/Register",
        component: lazy(() => import("../../module/register/view")),
      },
      {
        path: "/",
        component: lazy(() => import("../../module/home/view")),
      }

    ];

    return {
        router
    }
} 

export default Routes;
    