import { useEffect, useState } from "react";
import "./Users.css";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      // console.log(data)
      setUsers(data);
      // setLoading(false)
    };
    try {
      fetchUsers();
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);
  return (
    <>
      <h1 className='user_card_title'>Users</h1>
      <div className='user_card_container'>
        {users ? (
          users.map((user, i) => {
            return (
              <div className='a_card' key={i}>
                <div key={i}>
                  <h1>{user.name}</h1>
                  <p>Username: {user.username}</p>
                  <p>Street adress: {user.address.street}</p>
                  <p>City: {user.address.city}</p>
                  <p>ZIP: {user.address.zipcode}</p>
                  <p>E-mail: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}
