import {Route} from "react-router-dom";

const PublicRouter = ({component:Component, ...rest}:any) => {
    return <Route {...rest} component={()=><Component/>}/>;
}

export default PublicRouter;