import {useMemo, useState} from "react";

const summator = (n) => {
    console.log('start');
    let sum = n
    for (let i = 0; i < 1000; i++) {
        sum += i
    }
    for (let i = 0; i < 4000000000; i++) {

    }
    console.log('finish');
    return sum
}
const UseMemoComponent = () => {
    const [n, setN] = useState(5)
    const [count, setCount] = useState(0);

    const res = useMemo(()=>summator(n), [n])

    return (
        <div>
            <div>Res: {res}</div>
            <div>Count: {count}</div>
            <button onClick={() => setN(prevState => ++prevState)}>incN</button>
            <button onClick={() => setCount(prevState => ++prevState)}>incCount</button>
        </div>
    );
};

export {UseMemoComponent};