import * as React from "react";
import { withStyles, Grid } from "@material-ui/core";

const style = {
    grid: {
        padding: "0 15px !important"
    }
};

function ItemGrid({ ...props }) {
    const { classes, children, ...rest } = props;
    return (
        <Grid item={true} {...rest} className={classes.grid}>
            {children}
        </Grid>
    );
}

export default withStyles(style)(ItemGrid);
