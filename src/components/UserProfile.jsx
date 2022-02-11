import { useContext } from "react";
import { UserContext } from "../contexts/User";

export const UserProfile = () => {
    const { loggedInUser } = useContext(UserContext);

    return (
        <div className='header__grid1'> 
            <p>Logged in as: <strong>{loggedInUser.username}</strong></p>
            
        </div>
    )
}