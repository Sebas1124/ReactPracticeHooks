
export const ShowIncrement = ({ increment }) => {

  return (
    <button className="btn btn-outline-dark" onClick={ () => {
        increment( 5 );
    }}>
        Incrementar
    </button>
  )
}
