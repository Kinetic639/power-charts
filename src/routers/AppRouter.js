import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css/normalize.css";
import NotFoundPage from "../components/pages/NotFoundPage";
import DashboardPage from "../components/pages/DashboardPage";


const AppRouter = () => (
    <Router>  
        <Switch>
          <Route path="/" component={DashboardPage} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
  )


export default AppRouter

