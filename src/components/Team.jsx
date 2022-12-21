import { useState } from 'react'
import Button from '@mui/material/Button'
import Player from './Player'

const Team = ({ team, voting, setVoting }) => {
    const [hidden, setHidden] = useState(true)

    return (
        <article>
            <h2>{team.name}</h2>
            {
                !hidden &&
                <ul>
                    {team.franchisePlayers.map(player => <Player player={player} voting={voting} setVoting={setVoting} key={player.id} />)}
                </ul>
            }

            <Button
                onClick={() => setHidden(prev => !prev)}
                variant="contained"
            >

                {hidden ? "Show more" : "Show less"}
            </Button>
        </article>
    )
}

export default Team