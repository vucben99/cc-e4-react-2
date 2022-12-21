import React, { useEffect, useState } from "react"
import Team from './components/Team'
import TextField from '@mui/material/TextField'

const App = () => {

  const [teams, setTeams] = useState(null)
  const [search, setSearch] = useState("")
  const [voting, setVoting] = useState(false)
  
  const getTeams = async () => {
    const res = await fetch("https://demoapi.com/api/teams")
    const teamData = await res.json()
    setTeams(teamData)
  }

  useEffect(() => {
    getTeams()
  }, [])


  const filteredTeams = teams ? teams.filter(team => {
    return team.franchisePlayers.some(player => player.name.toLowerCase().startsWith(search))
  }) : []

  return (
    <>
      <h1>NBA teams - all star voting</h1>

      <TextField label="Filter teams by player" variant="outlined" onChange={(e) => setSearch(e.target.value.toLowerCase())} />

      {teams && <>{filteredTeams.length ? filteredTeams.map(team => <Team team={team} key={team.name} voting={voting} setVoting={setVoting} />) : <p>Nothing found</p>}</>}
    </>
  )
}

export default App
