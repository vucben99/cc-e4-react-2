import { useState } from 'react'
import Button from '@mui/material/Button'

const Team = ({ team, voteHandler, voting, voted }) => {
    const [hidden, setHidden] = useState(true)

    const showMoreHandler = () => {
        setHidden((prev) => !prev)
    }

    return (
        <article>
            <p>{team.name}</p>
            {!hidden &&
                <ul>
                    {team.franchisePlayers.map(player => <li key={player.id}>
                        {player.name}
                        {!voted ? <Button variant="outlined" disabled={voting} onClick={() => { voteHandler(player.id) }}>Vote</Button> : <span> - Voted</span>}
                    </li>)}
                </ul>
            }

            <Button onClick={showMoreHandler} variant="contained">{hidden ? "Show more" : "Show less"}</Button>
        </article>
    )
}

export default Team