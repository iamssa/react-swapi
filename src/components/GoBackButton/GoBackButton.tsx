import React, {FC} from "react";
import {IconButton} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

export const GoBackButton: FC = () => {
    const navigate = useNavigate();
    const onBack = () => {
        navigate(-1);
    };

    return (
        <IconButton onClick={onBack}>
            <ArrowBack/>
        </IconButton>
    )
}
