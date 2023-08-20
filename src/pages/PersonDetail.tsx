import React, {FC, useEffect, useState} from "react";
import {Alert, Button, CardHeader, CircularProgress, Container, Paper, TextField} from "@mui/material";
import {GetPersonById} from "../hooks/queries/people";
import {Person} from "../hooks/__generated__/graphql";

export const PersonDetail: FC = () => {
    const {loading, error, data} = GetPersonById("cGVvcGxlOjE=");
    const [personState, setPersonState] = useState<Partial<Person>>({
        name: "",
        gender: "",
        birthYear: "",
        hairColor: "",
    });

    useEffect(() => {
        if(!loading && !error) {
            setPersonState(data.person);
        }
    }, [data]);

    if (loading) {
        return <CircularProgress />
    }
    if (error) {
        return <Alert severity="error">{ error }</Alert>
    }
    const onCancel = () => {
        setPersonState(data.person);
    }
    const onSave = () => {
        console.log(personState);
        // send to server
    }

    return (
        <Paper>
            <CardHeader title={personState.name}/>
            <Container>
                <TextField title={"gender"} value={personState.gender}/>
                <TextField title={"birthYear"} value={personState.birthYear}/>
                <TextField title={"hairColor"} value={personState.hairColor}/>
            </Container>
            <Button variant={"outlined"} onClick={onCancel}>Cancel</Button>
            <Button variant={"contained"} onClick={onSave}>Save</Button>
        </Paper>
    )
}
