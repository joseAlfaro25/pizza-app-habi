import { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRouter from "./MainRoutes";
import  useRouter from "./useRouter";
const LoginRouter = () => {
  const {router}=useRouter()
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          {router.map((e) => (
            <PublicRouter path={e.path} component={e.component} />
          ))}
        </Switch>
      </Router>
    </Suspense>
    </>
  );
};

export default LoginRouter;