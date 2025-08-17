'use client';
import data from '../../app/hockey_data.json'
import React from 'react'
import styles from './games.module.css'
import moment from 'moment-timezone';
import ReusableTable from '../components/table'

export default function Games() {
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

  const columns = [
    { id: 'gameId', label: 'Id', },
    { id: 'league', label: 'League', format: (value) => displayLeagueName(value), },
    {
      id: 'season',
      label: 'Season',
      format: (value) => displaySeasonName(value),
    },
    {
      id: 'seasonStage',
      label: 'Season Stage',
      format: (value) => displaySeasonStageName(value),
    },
    {
      id: 'scheduledTimeUTC',
      label: 'Date',
      format: (value) => displayDateTime(value),
    },
    {
      id: 'homeTeamId',
      label: 'Home Team',
      format: (value) => displayTeamName(value, "homeTeamId"),
    },
    {
      id: 'awayTeamId',
      label: 'Away Team',
      format: (value) => displayTeamName(value, "awayTeamId"),
    },
    {
      id: 'score',
      label: 'Score',
      format: (value) => displayGameScore(value),
    },
  ];  

  return (
    <main className={styles.main}>
      <h1>Games</h1>
      <ReusableTable 
        data={data.games.games}
        columns={columns}
        tableLabel={"Games Table"}
      />
    </main>
  )
}
