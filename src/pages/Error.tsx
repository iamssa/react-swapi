import React, {FC} from "react";
import {useRouteError} from "react-router-dom";
import {Alert} from "@mui/material";

export const Error: FC = () => {
    const error = useRouteError();
    console.error(error);

    return <>
        <Alert severity="error">{error.statusText || error.message}</Alert>
    </>
}
