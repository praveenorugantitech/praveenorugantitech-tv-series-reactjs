import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            align="center"
            style={{ flex: 1 }}
          >
            TV Series List
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
