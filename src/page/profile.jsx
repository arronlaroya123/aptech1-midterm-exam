import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const users = [
  { username: "arron", name: "Arron" },
  { username: "alex", name: "Alex" }
];

function Profile() {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const data = localStorage.getItem('userData');
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  const user = users.find(u => u.username === username);

  return (
    <div>
      <h2>Profile</h2>
      {userData ? (
        <div>
          <h1>Welcome, {userData.firstName} {userData.surname}!</h1>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Password:</strong> {userData.password.replace(/./g, '*')}</p>
        </div>
      ) : user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Username: {user.username}</p>
        </div>
      ) : (
        <div>
          <h1>Welcome!</h1>
          <p>Username: {username}</p>
        </div>
      )}
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Profile;