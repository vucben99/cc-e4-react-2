import { useState } from 'react'

const Team = ({ team, voteHandler, voting }) => {
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
                        <button disabled={voting} onClick={() => voteHandler(player.id)}>Vote</button>
                    </li>)}
                </ul>
            }

            <button onClick={showMoreHandler}>{hidden ? "Show more" : "Show less"}</button>
        </article>
    )
}

export default Team