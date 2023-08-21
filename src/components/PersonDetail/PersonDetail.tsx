import React, {ChangeEvent, FC, useState} from "react";
import {Alert, Button, CardHeader, Snackbar, TextField} from "@mui/material";
import {Save} from "@mui/icons-material";
import {ActionContainer, FieldContainer, HeaderContainer, StyledPaper} from "./styled";
import {Person} from "../../hooks/__generated__/graphql";
import {GoBackButton} from "../GoBackButton/GoBackButton";
import {getPersonDataWithoutTypename} from "../../helpers/cleaning";

interface PersonDetailProps {
    personData: Partial<Person>
}
export const PersonDetail: FC<PersonDetailProps> = ({personData}) => {
    const [personState, setPersonState] = useState<Partial<Person>>(personData);
    const [isOpenSuccessAlert, setOpenSuccessAlert] = useState<boolean>(false);
    const fieldNames = getPersonDataWithoutTypename(personData);
    const onCancel = () => {
        setPersonState(personData);
    };
    const onSave = () => {
        console.log(personState);
        // await send to server
        setOpenSuccessAlert(true)
    };
    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPersonState({...personState, ...{[event.target.name]: event.target.value}})
    }
    const onCloseSuccessAlert = () => {
        setOpenSuccessAlert(false);
    }

    return (
        <StyledPaper>
            <HeaderContainer>
                <GoBackButton />
                <CardHeader title={personState.name}/>
            </HeaderContainer>
            <FieldContainer>
                {fieldNames.map((field) => <TextField title={field} value={personState[field]} name={field} onChange={onInputChange}/>)}
            </FieldContainer>
            <ActionContainer>
                <Button variant={"outlined"} onClick={onCancel}>Cancel</Button>
                <Button disabled={personState === personData} variant={"contained"} onClick={onSave} endIcon={<Save />}>Save</Button>
            </ActionContainer>
            <Snackbar open={isOpenSuccessAlert} autoHideDuration={3000} onClose={onCloseSuccessAlert}>
                <Alert onClose={onCloseSuccessAlert} severity="success" sx={{ width: '100%' }}>
                    Saved!
                </Alert>
            </Snackbar>
        </StyledPaper>
    )
}
