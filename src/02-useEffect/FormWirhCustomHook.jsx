import { useEffect } from "react"
import { useForm } from "../Hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputchange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });
   
    // const { username, email, password } = formState;

  return (
    <>
        <h1>Form With Custom Hook</h1>

        <hr />

        <input type="text"
        className="form-control"
        placeholder="Username"
        name="username" 
            value={ username }
            onChange={ onInputchange }
        />

        <input type="email"
        className="form-control mt-2"
        placeholder="Correo" 
        name="email" 
        value={ email }
        onChange={ onInputchange }
        />

        <input type="password"
        className="form-control mt-2"
        placeholder="Contraseña" 
        name="password" 
        value={ password }
        onChange={ onInputchange }
        />

        <button onClick={ onResetForm } className="btn btn-outline-danger mt-2">Borrar</button>

        
    </>
  )
}

