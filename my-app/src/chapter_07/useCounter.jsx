import React, { useState } from "react";

function useCounter(initial){
    const [count, setCount] = useState(initial);

    const increaseCount = () => setCount((num) => ++num);
    const decreaseCount = () => setCount((num) => Math.max(--num, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;