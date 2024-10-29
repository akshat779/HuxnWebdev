import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
    const {changeUser} = useContext(UserContext)
    const [newName,setNewName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        changeUser(newName);
        setNewName("");
    }

    return(
        <>
        <form onSubmit={(handleSubmit)}>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default UpdateUser;