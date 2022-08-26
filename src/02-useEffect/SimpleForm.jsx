import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Sebasito',
        email: 'sebas@gmail.com'
    });

    const { username, email } = formState;

    const onInputchange = ({target}) => {
     const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }


    useEffect( () => {
        // console.log("UseEffect se llamó")
    }, []);

    useEffect( () => {
        // console.log("El formulario cambió")
    }, [ formState ]);

    useEffect( () => {
        // console.log("El Email cambió")
    }, [ email ]);
    

  return (
    <>
        <h1>Simple Form</h1>

        <hr />

        <input type="text"
        className="form-control"
        placeholder="Username"
        name="username" 
            value={ username }
            onChange={ onInputchange }
        />

        {
            ( username === 'Sebasito1' ) && <Message />
        }

        <input type="email"
        className="form-control mt-2"
        placeholder="Correo" 
        name="email" 
        value={ email }
        onChange={ onInputchange }
        />

        
    </>
  )
}

