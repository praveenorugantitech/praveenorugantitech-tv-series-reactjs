import React from "react";
import { Switch, Route } from "react-router-dom";
import Series from "../../containers/Series/Series";
import SingleSeries from "../../containers/SingleSeries/SingleSeries";

const SeriesRouter = props => (
  <Switch>
    <Route exact path="/praveenorugantitech-tv-series-reactjs" component={Series} />
    <Route path="/praveenorugantitech-tv-series-reactjs/series/:id" component={SingleSeries} />
  </Switch>
);
export default SeriesRouter;
