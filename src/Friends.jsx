import { useEffect, useState } from "react"

export default function Friends() {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div className="box">
            <h3>Friends: {friends.length}</h3>
            <friend/>
            <abc></abc>
        </div>
    )
}


function friend() {
    return (
        <div>
            <h4>Name: </h4>
        </div>
    )
}

function abc(){
    return <h3>hello</h3>
}

/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loded data to the state
 */