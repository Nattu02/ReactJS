import {useRouteError} from "react-router";

const Error = () => {
    const err = useRouteError();;

    console.log(err);
    return (
        <div className = "errorpage"> 
            <h1>Oops!!!</h1>
            <h2>Something went wrong...</h2>
            <h3>{err.status}</h3>

        </div>
    )
}

export default Error;