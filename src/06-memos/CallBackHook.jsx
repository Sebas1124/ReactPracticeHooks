import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {

    const [Counter, setCounter] = useState( 10 );

    const increment = useCallback(
      (value) => {
        setCounter( (c) => c + value );
      },
      [],
    )
    
    // const increment = () => {
    //     setCounter( Counter + 1 );
    // }

  return (
    <>
        <h1>UseCallBack Hook:  { Counter }</h1>
        <hr />

        <ShowIncrement increment={ increment }/>

    </>
  )
}
