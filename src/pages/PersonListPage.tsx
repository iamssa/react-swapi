import {
    Alert,
    Button,
    styled,
} from "@mui/material";
import {GetAllPeople} from "../hooks/queries/people";
import {FC, useState} from "react";
import {SkeletonTable} from "../components/SkeletonTable/SkeletonTable";
import {PersonTable} from "../components/PersonTable/PersonTable";

export const PersonListPage: FC = () => {
    const [rowsCount, setRowsCount] = useState(5);
    const {loading, error, data, fetchMore} = GetAllPeople(rowsCount);

    if (loading) {
        return <SkeletonTable/>
    }

    if (error) {
        return <Alert severity="error">{error}</Alert>
    }

    const getMorePeople = async () => {
        setRowsCount(rowsCount + 10);
        await fetchMore({
            variables: {
                first: rowsCount
            }
        })
    }

    const StyledButton = styled(Button)({
        margin: "24px",
    });

    return (
        <PersonTable data={data.allPeople.people}>
            {data.allPeople.totalCount > rowsCount &&
                <StyledButton variant="contained" onClick={getMorePeople}>Fetch more</StyledButton>}
        </PersonTable>
    );
}
