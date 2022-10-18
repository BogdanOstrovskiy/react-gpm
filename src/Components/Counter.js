import React, {useState} from "react";

export default function Counter() {
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber(count => count + 1);
    };

    const decrease = () => {
        setNumber(count => count - 1);
    };

    return (
        <div className="counter">
            <button onClick={ increase }>+</button>
            <div>{ number }</div>
            <button onClick={ decrease }>-</button>
        </div>
    );
}