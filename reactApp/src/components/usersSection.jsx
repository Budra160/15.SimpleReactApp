
import { useEffect, useState } from "react";
import { getUsers } from "../data/api.jsx";
import { UserCard } from "./userCard.jsx";

function UserSection() {
  const [users, setUsers] = useState([]);
  
       
  useEffect(() =>{
    async function ucitaj() {
        const users = await getUsers();
        setUsers(users);
    }
    ucitaj();
    }, []);
 
  return (
    <section>
      <h2>Korisnici</h2>
      <div className="cardWrapper">
            {users.map((user) => {
               return <UserCard key={user.id} user={user}/>
              })}
      </div>
    </section>
  );
}

export default UserSection
