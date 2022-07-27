import React from 'react';

import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import PropTypes from 'prop-types';

import { Time } from '../Time';

const now = new Date().toISOString();
const style = { backgroundColor: 'background.paper' };

export const DataTable = (props) => {
    const { array, pageSize, useState } = props;
    const [page, setPage] = useState({ offset: 0, limit: pageSize[0] });
    const limit = page.limit;
    const offset = page.offset;

    const handleChangeRowsPerPage = (e) => {
        setPage({ offset: 0, limit: +e.target.value });
    };
    const handleChangePage = (e, newPage) => {
        setPage({ offset: +newPage, limit: limit });
    };

    return (
        <TableContainer >
            <Table>
                <TableHead>
                    <TableRow>
                        {array.head.map((item, i) =>
                            <TableCell sx={style} key={i} align={item.align}>{item.name}</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                {array.body &&
                    <TableBody >
                        {array.body.slice(offset * limit, offset * limit + limit).map((item, i) =>
                            <TableRow sx={{ px: 1 }} key={i}>
                                <TableCell >
                                    {item.ipAddress}
                                </TableCell>
                                <TableCell>{item.platform}</TableCell>
                                <TableCell>
                                    {Time({ elapsed: Date.parse(now) - Date.parse(item.date) })}
                                </TableCell>
                                <TableCell align="right">
                                    {item.page}
                                </TableCell>
                                <TableCell align="right">
                                    {item.country}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                }
            </Table>
            <TablePagination
                rowsPerPageOptions={pageSize}
                sx={style}
                component="div"
                count={array.body.length}
                rowsPerPage={limit}
                page={offset}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer >
    )

}
export default DataTable

DataTable.PropTypes = {
    useState: PropTypes.func,
    array: PropTypes.array,
    pageSize: PropTypes.number
}