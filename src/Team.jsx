import { useState } from "react"

export default function Team() {

    const [teamCount, setTeamCount] = useState(11)

    function handleAdd() {
        const updateTeamCount = teamCount + 1;
        setTeamCount(updateTeamCount)
    }
    function handleRemove() {
        if (teamCount) {
            const updateTeamCount = teamCount - 1;
            setTeamCount(updateTeamCount)
        }
    }

    return (
        <div>
            <div className="box">
                <h3>Players: {teamCount}</h3>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    )
}