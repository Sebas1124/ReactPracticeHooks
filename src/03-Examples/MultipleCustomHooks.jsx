import { UseCounter, useFetch } from "../Hooks";
import { LoadingQuote, Quote } from './'

export const MultipleCustomHooks = () => {

    const { increment, Counter } = UseCounter();

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${Counter}`);
    const { author, quote } = !!data && data[0];

    if (isLoading) {
        return(
            <LoadingQuote/>
        )
    }

  return (
    <>
        <h1>Breaking bad quotes</h1>

        <hr />

        {
            isLoading
             ? <LoadingQuote/>
             : <Quote quote = { quote } author = { author }/>
        }

        <button 
           className = "btn btn-outline-success"
           onClick ={ increment }
           disabled = { isLoading }> 
            Next quote 
        </button>


    </>
  )
}
