import { useContext } from "react";
import { UserContext } from "../contexts/User";

export const UserProfile = () => {
    const { loggedInUser } = useContext(UserContext);

    return (
        <div> 
            <p>Logged in as:</p>
            <h3>{loggedInUser.username}</h3>
        </div>
    )
}