import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";

const MAX = 10;

function Accommodate(props){
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("=================");
        console.log("useEffect() 호출.");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX);
        console.log(`현재 count: ${count}`);
    }, [count]);

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용 중.`}</p>

            <button onClick={increaseCount} disabled={isFull}> 추가 </button>
            <button onClick={decreaseCount}> 감소 </button>
            {isFull && <p style={{color:"red"}}>정원이 가득 참.</p>}
        </div>
    );
}

export default Accommodate;