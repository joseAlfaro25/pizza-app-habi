import { lazy } from "react";

const Routes=() =>{
    const router= [
      {
        path: "/register",
        component: lazy(() => import("../../module/dashboard/view")),
      },
      {
        path: "/",
        component: lazy(() => import("../../module/home/view/Home")),
      }
    ];

    return {
        router
    }
} 

export default Routes;
    