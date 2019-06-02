import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import NoMatchPage from "../pages/NoMatchPage/NoMatchPage";

import Layout from "../layout/Layout";

const routes = (
  <Layout>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NoMatchPage} />
    </Switch>
  </Layout>
);

export default routes;
