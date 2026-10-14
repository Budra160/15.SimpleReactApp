import {Button} from "./button.jsx"
import { useState } from "react";


export function UserCard({user})
{
    let [isDetails, setIsDetails] = useState(false);

    
    return (
        <div className="card" >
            <h3>{user.firstName} {user.lastName}</h3>
            <p>City: {user.address.city}</p>
            <Button klasa={"button"} id={user.id} onClick = {() =>setIsDetails(!isDetails)}>Prikaži detalje</Button>
            {isDetails &&
             <UserDetails user={user}></UserDetails>
            }
        </div>
    )
}

export function UserDetails({user}){
    return (
        <div className="detailWrapper">
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Phone number: {user.phone}</p>
        </div>
    )
}

export default UserCard;


