import React, {useState, useEffect} from "react";


const Hook = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = 'You click ' + count + ' times'
    },[count])



    return (
        <>
            <div>
                current count: {count}
                <button onClick={() => setCount(count + 1)}>plusOne</button>
            </div>
        </>
    )
}

export default Hook
