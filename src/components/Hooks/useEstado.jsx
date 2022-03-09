import React, { useState } from "react";

function Estado() {
    //declaro la nueva variable de estado que llamare count, para crear un contador a partir de clicks en un button 
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Has clickado {count} veces </p>
            <button onClick={() => setCount(count + 1)}>
                Contador    
            </button>
        </div>
    )
}

export default Estado;