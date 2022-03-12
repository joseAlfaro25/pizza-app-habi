import { lazy } from "react";

const Routes=() =>{
    const router= [
      {
        path: "/Dashboard",
        component: lazy(() => import("../../module/dashboard/view/Dashboard")),
      },
      {
        path: "/",
        component: lazy(() => import("../../module/register/view")),
      }
    ];

    return {
        router
    }
} 

export default Routes;
    