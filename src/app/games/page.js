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
// import styles from './players.module.css'
import moment from 'moment-timezone';

export default function Games() {
  const [games, setGames] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    setGames(data.games.games)
  }, [])
console.log(data)
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const columnTitles = [
    { id: 1, title: "Id" },
    { id: 2, title: "League" },
    { id: 3, title: "Season" },
    { id: 4, title: "Season Stage" },
    { id: 5, title: "Date" },
    { id: 6, title: "Home Team" },
    { id: 7, title: "Away Team" },
    { id: 8, title: "Score" },
  ]

  const displayLeagueName = (game) => {
    const leaguesList = data.core.leagues;

    return leaguesList.find((l) => l.leagueId === game.leagueId)?.name;
  }

  const displaySeasonName = (game) => {
    const seasonsList = data.core.seasons;

    return seasonsList.find((s) => s.seasonId === game.seasonId)?.name;
  }

  const displaySeasonStageName = (game) => {
    const seasonStageList = data.core.seasonStages;
    const seasonStageName = seasonStageList.find((ss) => ss.seasonStageId === game.seasonStageId)?.name;

    // Capitalize display name
    return seasonStageName.charAt(0).toUpperCase() + seasonStageName.slice(1);
  }

  const displayTeamName = (game, team) => {
    const teamsList = data.core.teams;

    return teamsList.find((t) => t.teamId === game[team])?.displayName;
  }

  const displayGameScore = (game) => {
    const scoresList = data.games.scores;
    const homeTeamScore = scoresList.find((s) => s.gameId === game.gameId)?.homeTeamScore;
    const awayTeamScore = scoresList.find((s) => s.gameId === game.gameId)?.awayTeamScore;

    return `${homeTeamScore} - ${awayTeamScore}`;
  }

  const displayDateTime = (game) => {
    return moment.utc(game.scheduledTimeUTC).tz(moment.tz.guess(true)).format("lll z")
  }

  return (
    <main>
      <h1>Games</h1>
      <TableContainer component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="Games Table">
          <TableHead>
            <TableRow>
              {columnTitles.map((column) => (
                <TableCell align="left" key={column.id}>{column.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {games.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((game, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* {Object.values(player).map((value) => (
                  TODO: THIS DOESN'T WORK BECAUSE I CAN'T GET A UNIQUE KEY VALUE FOR EACH PLAYER...
                  <TableCell align="right" key={`${player.playerId}-${value}-1`}>{value}</TableCell>
                ))} */}
                <TableCell align="left">{game.gameId}</TableCell>
                <TableCell align="left">{displayLeagueName(game)}</TableCell>
                <TableCell align="left">{displaySeasonName(game)}</TableCell>
                <TableCell align="left">{displaySeasonStageName(game)}</TableCell>
                <TableCell align="left">{displayDateTime(game)}</TableCell>
                <TableCell align="left">{displayTeamName(game, "homeTeamId")}</TableCell>
                <TableCell align="left">{displayTeamName(game, "awayTeamId")}</TableCell>
                <TableCell align="left">{displayGameScore(game)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={games.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </main>
  )
}
