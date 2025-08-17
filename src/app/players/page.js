'use client';
import data from '../../app/hockey_data.json'
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TableContainer,
  Paper
} from '@mui/material';

export default function Players() {
  const [players, setPlayers] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    setPlayers(data.players.players)
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const columnTitles = [
    { id: 1, title: "Id" },
    { id: 2, title: "First Name" },
    { id: 3, title: "Last Name" },
    { id: 4, title: "Date of Birth" },
    { id: 5, title: "Primary Position" },
    { id: 6, title: "Handedness" },
    { id: 7, title: "Reserve List Team" },
    { id: 8, title: "Current Team" },
    { id: 9, title: "Nationality" },
  ]

  return (
    <>
      <div>Players</div>
      <TableContainer component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="Players Table">
          <TableHead>
            <TableRow>
              {columnTitles.map((column) => (
                <TableCell align="right" key={column.id}>{column.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {players.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((player) => (
              <TableRow
                key={`${player.playerId}-${player.firstName}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* {Object.values(player).map((value) => (
                  TODO: THIS DOESN'T WORK BECAUSE I CAN'T GET A UNIQUE KEY VALUE FOR EACH PLAYER...
                  <TableCell align="right" key={`${player.playerId}-${value}-1`}>{value}</TableCell>
                ))} */}
                <TableCell align="right">{player.playerId}</TableCell>
                <TableCell align="right">{player.firstName}</TableCell>
                <TableCell align="right">{player.lastName}</TableCell>
                <TableCell align="right">{player.dateOfBirth}</TableCell>
                <TableCell align="right">{player.primaryPosition}</TableCell>
                <TableCell align="right">{player.handedness}</TableCell>
                <TableCell align="right">{player.reserveListTeamId}</TableCell>
                <TableCell align="right">{player.currentTeamId}</TableCell>
                <TableCell align="right">{player.nationality}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={players.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </TableContainer>
    </>
  )
}
