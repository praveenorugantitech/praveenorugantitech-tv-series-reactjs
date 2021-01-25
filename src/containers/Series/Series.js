import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import SeriesList from "../../components/SeriesList/SeriesList";

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      seriesName: "",
      isFetching: false
    
    };
    this.onSeriesInputChange = this.onSeriesInputChange.bind(this);
  }

  //fetching series from API
  onSeriesInputChange = (event) => {
    event.preventDefault();
    this.setState({ seriesName: event.target.value, isFetching: true });
    fetch(`https://api.tvmaze.com/search/shows?q=${event.target.value}`)
      .then((response) => response.json())
      .then((json) => this.setState({ series: json, isFetching: false }))
      .catch((error) => console.log(error));
  };

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        <Typography variant="h6" gutterBottom align="center">
          Here you can find all of your most loved series
        </Typography>

        {/* Input for searching series */}
        <TextField
          id="search"
          label="Search Series"
          defaultValue={seriesName}
          helperText={
            !isFetching && series.length === 0 && seriesName.trim() === ""
              ? "Please enter a name"
              : !isFetching && series.length === 0 && seriesName.trim() !== ""
              ? "No tv series found"
              : ""
          }
          margin="normal"
          onChange={this.onSeriesInputChange}
        />

        {
          /*Show progress while is fetching data */
          isFetching && (
            <div style={{ flex: 1 }}>
              <CircularProgress size={30} />
            </div>
          )
        }
        {/*Show series */ !isFetching && <SeriesList list={series} />}
      </div>
    );
  }
}

export default Series;
