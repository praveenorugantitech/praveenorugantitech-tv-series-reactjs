import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./SeriesList.css";

const SeriesListItem = ({ series }) => (
  <Link to={`/series/${series.show.id}`}>
    <ListItem button>
      <ListItemText primary={series.show.name} />
    </ListItem>
  </Link>
);

const SeriesList = props => {
  return (
    <div className="list">
      <List component="nav">
        {props.list.map(series => (
          <SeriesListItem series={series} key={series.show.id} />
        ))}
      </List>
    </div>
  );
};

export default SeriesList;
