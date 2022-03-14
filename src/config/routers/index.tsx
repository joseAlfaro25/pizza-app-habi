import { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "../../common/components/Nav";
import PublicRouter from "./MainRoutes";
import useRouter from "./useRouter";
const RouterList = () => {
  const { router } = useRouter();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Nav />
          <Switch>
            {router.map((e, i) => (
              <PublicRouter path={e.path} component={e.component} key={i} />
            ))}
          </Switch>
        </Router>
      </Suspense>
    </>
  );
};

export default RouterList;
