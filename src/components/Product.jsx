
import {useParams} from "react-router-dom";
export const Product=()=>{
    const params=useParams();

    return(

        <div>
            <h1>#{params.id}</h1>
        </div>
    )
}