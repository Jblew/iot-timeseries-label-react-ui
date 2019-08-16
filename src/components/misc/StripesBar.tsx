import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => {
    return {
        stripesBar: () => {
            const colorA = theme.palette.secondary.main;
            const colorB = "white";
            const backgroundImage =
                `linear-gradient(315deg, ${colorA} 25%, ${colorB} 25%, ${colorB} 50%, ` +
                `${colorA} 50%, ${colorA} 75%, ${colorB} 75%, ${colorB} 100%)`;
            return {
                width: "100%",
                height: "1rem",
                backgroundImage,
                backgroundSize: "56.57px 56.57px",
            };
        },
    };
});

export default function StripesBar(props: { className: string }) {
    const classes = useStyles();

    return <Paper className={clsx(classes.stripesBar, props.className)} />;
}
