import React, {FC} from "react";
import {
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {Person} from "../../hooks/__generated__/graphql";

interface PersonTableProps {
    data: Partial<Person>[];
}
export const PersonTable: FC<PersonTableProps> = ({data, children}) => {
    const navigate = useNavigate();
    const headers = Object.keys(data[0]).filter((head) => !head.includes("__"));
    const StyledTableCell = styled(TableCell)({
        fontWeight: "bold",
    });
    const StyledTableRow = styled(TableRow)({
        cursor: "pointer",
    });
    const renderHeaderCells = () => {
        return headers.map((headName) => <StyledTableCell key={headName}>{headName}</StyledTableCell>)
    }
    const renderRowCells = (row: Partial<Person>) => (
        headers.map((header) => <TableCell key={`row-${row.id}-cell-${header}`}>{row[header]}</TableCell>)
    )
    const renderTableRows = () => (
        data.map((row) => (
            <StyledTableRow key={row.id} onClick={() => navigate(`person/${row.id}`)}>
                {renderRowCells(row)}
            </StyledTableRow>
        ))
    )

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow variant={"head"}>
                        {renderHeaderCells()}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderTableRows()}
                </TableBody>
            </Table>
            {children}
        </TableContainer>
    )
}
