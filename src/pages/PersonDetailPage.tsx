import React, {FC} from "react";
import {
    Alert,
    CircularProgress,
} from "@mui/material";
import {GetPersonById} from "../hooks/queries/people";
import {useParams} from "react-router-dom";
import {PersonDetail} from "../components/PersonDetail/PersonDetail";

export const PersonDetailPage: FC = () => {
    const { personId } = useParams();
    const { loading, error, data } = GetPersonById(personId);

    if (loading || !data) {
        return <CircularProgress />
    }

    if (error) {
        return <Alert severity="error">{ error }</Alert>
    }

    return <PersonDetail personData={data.person}/>
}
