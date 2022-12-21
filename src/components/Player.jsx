import Button from '@mui/material/Button'
import { useState } from 'react'

const Player = ({ player, voting, setVoting }) => {

    const voteHandler = async (id) => {
        setVoting(true)
        await fetch("https://demoapi.com/api/vote", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "id": id })
        })
        setVoting(false)
        setVoted(true)
    }

    const [voted, setVoted] = useState(false)

    return (

        <li key={player.id}>

            {player.name}
            {!voted ? <Button variant="outlined" size="small" disabled={voting} onClick={() => { voteHandler(player.id) }}>Vote</Button> : <span> - Voted</span>}
        </li>
    )
}

export default Player
