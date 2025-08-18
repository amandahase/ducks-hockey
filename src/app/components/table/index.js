"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TableContainer,
  Paper
} from "@mui/material";

export default function ReusableTable(props) {
  const [tableList, setTableList] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    setTableList(props.data);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1080 }} aria-label={props.tableLabel}>
        <TableHead>
          <TableRow>
            {props.columns.map((column) => (
              <TableCell
                align="left"
                key={column.id}
                sx={{ fontWeight: 600 }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {props.columns.map((column) => {
                const value = item[column.id];
                return (
                  <TableCell align="left" key={column.id}>
                    {column.format ? column.format(item) : value}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={props.data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
