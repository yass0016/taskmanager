import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import LoginPage from "../pages/LoginPage/LoginPage";

import NoMatchPage from "../pages/NoMatchPage/NoMatchPage";

import ProtectedRoute from "../common/ProtectedRoute";

import Layout from "../layout/Layout";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const routes = (
  <Layout>
    <Switch>
      <ProtectedRoute exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <ProtectedRoute component={NoMatchPage} />
    </Switch>
  </Layout>
);

export default routes;
