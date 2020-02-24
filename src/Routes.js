import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Registration from './containers/Registration/Registration';
function AppRoute(props){
    return(
        <>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/registration" component={Registration} />
                {/* <Route path="/infinitescroll" component={InfiniteList} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/checkout/:id" component={Checkout} />
                <Route component={ErrorPage} /> */}
            </Switch>
      </>
    )

}
export default AppRoute;