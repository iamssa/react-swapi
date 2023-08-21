import {Paper, styled} from "@mui/material";

export const HeaderContainer = styled('div')({
    display: 'flex',
});
export const ActionContainer = styled('div')({
    display: 'flex',
    justifyContent: "flex-end",
    gap: "12px",
    marginBlock: "16px"
});
export const FieldContainer = styled("div")({
    display: "flex",
    gap: "12px",
    flexDirection: "column",
    padding: 0
});
export const StyledPaper = styled(Paper)({
    display: "flex",
    flexDirection: "column",
    paddingBlock: "24px",
    paddingInline: "48px",
    minWidth: '450px',
    gap: '12px',
});
