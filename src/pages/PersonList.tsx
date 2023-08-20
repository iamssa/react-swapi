import {
    Alert, Button,
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell, TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {GetAllPeople} from "../hooks/queries/people";
import {FC} from "react";

export const PersonList: FC = () => {
    const {loading, error, data, fetchMore} = GetAllPeople(5);

    if (loading) {
        return <CircularProgress />
    }
    if (error) {
        return <Alert severity="error">{ error }</Alert>
    }
    const headers = Object.keys(data.allPeople.people?.[0]).filter((head) => !head.includes("__"));
    const getMorePeople = async () => {
        await fetchMore({
            variables: {
                first: 10
            }
        })
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow variant={"head"}>
                            {headers.map((headName) => <TableCell key={headName}>{headName}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.allPeople.people.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    {row.id}
                                </TableCell>
                                <TableCell>
                                    {row.name}
                                </TableCell>
                                <TableCell>
                                    {row.mass}
                                </TableCell>
                                <TableCell>
                                    {row.birthYear}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button onClick={getMorePeople}>Fetch more</Button>
            </TableContainer>
        </>
    )
}

export default PersonList
