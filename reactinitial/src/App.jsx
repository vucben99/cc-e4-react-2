import React, { useEffect, useState } from "react"
import Team from './components/Team'

const App = () => {

  const [teams, setTeams] = useState(null)
  const [voting, setVoting] = useState(false)

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
    const res = await req.json()
    setVoting(false)
  }

  useEffect(() => {
    getTeams()
  }, [])

  return (
    <>
      <h1>NBA teams - all star voting</h1>

      {/* {!teams ? <LoadingMask /> : teams.map((team) => <Team team={team} key={team.name} />)} */}
      {teams && teams.map((team) => <Team team={team} key={team.name} voteHandler={voteHandler} voting={voting} setVoting={setVoting} />)}
      {/* {subTimerDone && <Subscription />} */}
    </>
  )
}

export default App
