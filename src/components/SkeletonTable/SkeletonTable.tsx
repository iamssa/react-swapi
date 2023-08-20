import React, {FC} from "react";
import {Skeleton, Stack} from "@mui/material";

interface SkeletonTableProps {
    row?: number
}
export const SkeletonTable: FC<SkeletonTableProps> = ({row = 5}) => {
    const rowArr = new Array(row);

    return (
        <Stack spacing={1}>
            {rowArr.map((value, index) => <Skeleton key={`skeleton-rounded-${index}`} variant="rounded" width={650} height={53} />)}
        </Stack>
    );
}
