import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, resets, cleared } from "../slice/CounterSlice";

type RootState = {
  counter: {
    value: number;
  };
};

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Counter</h1>
        <h2>{count}</h2>

        <button onClick={() => dispatch(increment())}>
          Increment
        </button>

        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>

        <button onClick={() => dispatch(resets())}>
          Reset
        </button>

        <button onClick={() => dispatch(cleared())}>
          clear
        </button>
      </div>
    </>
  );
};

export default Counter;