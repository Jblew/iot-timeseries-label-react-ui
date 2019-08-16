import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";

import { config } from "../../config";

export default function Footer() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © 2019"}
            {new Date().getFullYear() > 2019 ? "-" + new Date().getFullYear() : ""}
            {" by "}
            <Link color="inherit" href={config.author.link}>
                {config.author.display}
            </Link>
            {" | "}
            <Link color="inherit" href={config.license.url}>
                {config.license.code}
            </Link>

            {" | "}
            {"This program is a free software: "}
            <Link color="inherit" href={config.source.url}>
                get source
            </Link>
            {"."}
        </Typography>
    );
}
