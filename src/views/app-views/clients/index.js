import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const Pages = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
      <Route
        path={`${match.url}/list`}
        component={lazy(() => import(`./list`))}
      />
      <Route
        path={`${match.url}/edit-client/:id`}
        component={lazy(() => import(`./edit-client`))}
      />
    </Switch>
  </Suspense>
);

export default Pages;
