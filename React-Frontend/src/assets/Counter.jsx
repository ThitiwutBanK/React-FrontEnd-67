import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
        }
    function decrement() {
        setCount(count - 1);
        }
    
    return (
        <div>
        <h1>Counter value is: {count} </h1>
        
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
    }