import { UseCounter } from "../Hooks/UseCounter"

export const CounterWithCustomHook = () => {


    const { Counter, increment, decrement, reset } = UseCounter();


  return (
    <>
        <h1>Counter with Hook: { Counter }</h1>
        <hr />

        <button className="btn btn-outline-success" onClick={ increment }>+1</button>
        <button className="btn btn-outline-danger" onClick={ reset }>Reset</button>
        <button className="btn btn-outline-dark" onClick={ decrement }>-1</button>

    </>




  )
}
