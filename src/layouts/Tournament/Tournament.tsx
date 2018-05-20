import { withStyles, WithStyles } from '@material-ui/core/styles';
import * as React from "react";
import styles from "../../assets/jss/material-tournament-react/appStyle";

type ClassNames = keyof typeof styles;
class App extends React.Component<{} & WithStyles<ClassNames>, {}> {
  public render() {
    const classes = this.props.classes;
    return (
      <div className={classes.wrapper}>
        <div className={classes.mainPanel}>
          <div className={classes.content}>
            test
              </div>
        </div>
      </div>
    );
  }
}

export default withStyles<{} & ClassNames>(styles)(App);