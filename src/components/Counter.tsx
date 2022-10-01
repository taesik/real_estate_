import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset, incrementByAmount} from "../features/counter/counterSlice";


const Counter: React.FC = (props): React.ReactElement => {

    const count = useSelector((state:any)=> state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount,setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }


    return <div>
        <p>{count}</p>
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>

        <input type="text" name="" id=""
                value={incrementAmount}
               onChange={(e)=> setIncrementAmount(Number(e.target.value))}
        />

        <div>
            <button onClick={()=>dispatch(incrementByAmount)}>Add amount </button>
            <button onClick={resetAll}>resetAll </button>
        </div>

    </div>;
}

export default Counter;
