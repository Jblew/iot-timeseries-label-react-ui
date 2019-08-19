import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>Some content</Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                    <p>Nothing here</p>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <p>Nothing here</p>
                </Paper>
            </Grid>
        </Grid>
    );
}
