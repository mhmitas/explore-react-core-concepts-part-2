import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)

    function handleIncrease() {
        const updateCount = count + 1;
        setCount(updateCount)
    }

    function handleDecrease() {
        if (count) {
            const updateCount = count - 1;
            setCount(updateCount)
        }
    }

    return (
        <div className="myclass">
            <h3>counter: {count}</h3>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}