import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1
        setCount(newCount)
    }
    const handleRemove = () => {
        setCount(count - 1)
    }

    return (
        <div className="myclass">
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>-
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}