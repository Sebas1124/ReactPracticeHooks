import { useMemo, useState } from "react";
import { UseCounter } from "../Hooks"

const heavyStuff = ( iterationNumber = 100 ) => {

  for ( let i = 0; i< iterationNumber; i ++){
    console.log(' Ahí vamos...')
  }

  return `${ iterationNumber } Iteraciones realizadas`

}

export const MemoHook = () => {

    const { increment, Counter } = UseCounter( 4000 );

    const [ Show, setShow ] = useState(true);

    const MemorizedValue = useMemo( () => heavyStuff(Counter), [Counter]);


  return (
    <>
        <h1> Counter: <small>{ Counter }</small> </h1>
        <hr />

        <h4>{ MemorizedValue }</h4>

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
