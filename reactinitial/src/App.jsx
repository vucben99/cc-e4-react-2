import React, { useEffect, useState } from "react"
import Team from './components/Team'
import TextField from '@mui/material/TextField'

const App = () => {

  const [teams, setTeams] = useState(null)
  const [voting, setVoting] = useState(false)
  const [voted, setVoted] = useState(false)
  const [search, setSearch] = useState("")

  const getTeams = async () => {
    const res = await fetch("https://demoapi.com/api/teams")
    const teamData = await res.json()
    setTeams(teamData)
  }

  const voteHandler = async (id) => {
    setVoting(true)
    const req = await fetch("https://demoapi.com/api/vote", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "id": id })
    })
    // const res = await req.json()
    setVoting(false)
    setVoted(true)
  }

  useEffect(() => {
    getTeams()
  }, [])


  const filteredTeams = teams ? teams.filter(team => team.franchisePlayers.filter((player) => player.name.startsWith(search))) : [] // nem működik

  return (
    <>
      <h1>NBA teams - all star voting</h1>

      <TextField label="Filter teams by player" variant="outlined" onChange={(e) => setSearch(e.target.value)} />

      {teams && <>{filteredTeams.length ? filteredTeams.map(team => <Team team={team} key={team.name} voteHandler={voteHandler} voting={voting} voted={voted} setVoting={setVoting} />) : <p>Nothing found</p>}</>}
    </>
  )
}

export default App
