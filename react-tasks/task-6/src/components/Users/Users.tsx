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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async (): Promise<User[]> => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      return response.json();
    };
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    loadUsers();
  }, []);
  return (
    <>
      <h1 className='user_card_title'>Users</h1>
      <div className='user_card_container'>
        {!isLoading ? (
          users.map((user) => {
            return (
              <div className='a_card' key={user.id}>
                <div>
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
        {error && <h1>Error message: {error}</h1>}
      </div>
    </>
  );
}
