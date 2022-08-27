import { useState } from "react";
import { UseCounter } from "../Hooks"
import { Small } from "./Small";

export const Memorize = () => {

    const { increment, Counter } = UseCounter();

    const [ Show, setShow ] = useState(true)

  return (
    <>
        <h1> Counter: <Small value={ Counter }/> </h1>
        <hr />

        <button className="btn btn-outline-success" 
                onClick={ increment }>
            +1
        </button>

        <button className="btn btn-outline-primary" onClick={ () => setShow( !Show ) }>
            Show / Hide { JSON.stringify(Show) }
        </button>
    </>
  )
}
