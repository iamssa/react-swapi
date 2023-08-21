import {createBrowserRouter} from "react-router-dom";
import {PersonListPage} from "../pages/PersonListPage";
import {Error} from "../pages/Error";
import {PersonDetailPage} from "../pages/PersonDetailPage";
import React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PersonListPage />,
        errorElement: <Error />,
    },
    {
        path: "person/:personId",
        element: <PersonDetailPage />,
    },
]);
