import { useRouteError } from "react-router-dom";
const Error = () =>  {
    const response = useRouteError();
    console.log(response)
    return (
        <div>
            <h1>Something went wrong</h1>
            <h2>{response.status + ":" + response.statusText}</h2>
        </div>
    )
};

export default Error;