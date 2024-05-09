import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () : React.JSX.Element => {
     
    let {username} = useParams();

    return (
        <div>
            user: {username}
        </div>
    )
}

export default UserPage;