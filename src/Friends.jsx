import { useEffect, useState } from "react"
import Friend from "./friend"

export default function Friends() {

    const [friends, setFrinds] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFrinds(data))
    }, [])

    return (
        <div className="myclass">
            <h3>Friends: {friends.length}</h3>

            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }

        </div>
    )
}


/**
 * 1 declare state to hold data
 * 2 useEffect with dependency array
 * 3 use fetch to load data
 */