import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import Main from "./components/reservation/main";
import Book from "./components/reservation/book";
import ThankYou from "./components/reservation/thankYou";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

import "./App.css";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const [page, setPage] = useState(0);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/dashboard" component={Dashboard} />
              <div>
                {page === 0 ? <Main setPage={setPage} /> : null}
                {page === 1 ? <Book setPage={setPage} /> : null}
                {page === 2 ? <ThankYou /> : null}
              </div>
              ); };
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
