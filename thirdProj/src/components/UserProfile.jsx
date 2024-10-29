import { useContext } from "react";

import { UserContext } from "./UserContext";

const UserProfile = () => {
    const {user} = useContext(UserContext);

    return (
        <>
            <h1>User Name : {user}</h1>
        </>
    )
}


export default UserProfile;