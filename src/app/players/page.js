'use client';
import data from '../../app/hockey_data.json'
import React from 'react'
import styles from './players.module.css'
import ReusableTable from '../components/table'

export default function Players() {
  const displayTeamName = (player, team) => {
    const teamsList = data.core.teams;

    return teamsList.find((t) => t.teamId === player[team])?.displayName;
  }

  const columns = [
    { id: 'playerId', label: 'Id', },
    { id: 'firstName', label: 'First Name'},
    {
      id: 'lastName',
      label: 'Last Name',
    },
    {
      id: 'dateOfBirth',
      label: 'Date of Birth',
    },
    {
      id: 'primaryPosition',
      label: 'Primary Position',
    },
    {
      id: 'handedness',
      label: 'Handedness',
    },
    {
      id: 'reserveListTeamId',
      label: 'Reserve List Team',
      format: (value) => displayTeamName(value, "reserveListTeamId"),
    },
    {
      id: 'currentTeamId',
      label: 'Current Team',
      format: (value) => displayTeamName(value, "currentTeamId"),
    },
    {
      id: 'nationality',
      label: 'Nationality',
    },
  ];  

  return (
    <main className={styles.main}>
      <h1>Players</h1>
      <ReusableTable 
        data={data.players.players}
        columns={columns}
        tableLabel={"Players Table"}
      />
    </main>
  )
}
