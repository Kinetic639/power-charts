import React, { Component } from "react";
import { createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import "normalize.css/normalize.css";
import NotFoundPage from "../components/pages/NotFoundPage";
import DashboardPage from "../components/pages/DashboardPage";


export const history = createBrowserHistory();

export class App extends Component {
  state = {
    sideDrawerOpen: false,
    views: [
      {
        id: 1,
        page: "/",
        title: "Home",
      },
      {
        id: 2,
        page: "projects",
        title: "Projects",
      },
      {
        id: 3,
        page: "about",
        title: "about",
      },
      {
        id: 4,
        page: "contact",
        title: "Contact",
      },
    ],
  };

  // backdropClickHandler = () => {
  //   this.setState({ sideDrawerOpen: false });
  //   const navItems = [...document.querySelector(".nav-menu").children];
  //   navItems.map((e) => e.classList.toggle("show"));
  // };

  // drawerToggleclickHandler = () => {
  //   this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  //   const navItems = [...document.querySelector(".nav-menu").children];
  //   navItems.map((e) => e.classList.toggle("show"));
  // };

  render() {
    // const { sideDrawerOpen } = this.state;
    // let backdrop;
    // if (sideDrawerOpen) {
    //   backdrop = <Backdrop bdClickHandler={this.backdropClickHandler} />;
    // }

    return (
      <Router style={{ height: "100%" }} history={history}>
    

        {/* {backdrop} */}
        <Switch>
          <Route path="/" component={DashboardPage} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
