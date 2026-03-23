import { useParams } from "react-router-dom";

const users = [
  { username: "arron", name: "Arron" },
  { username: "alex", name: "Alex" }
];

function Profile() {
  const { username } = useParams();
  const user = users.find(u => u.username === username);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Username: {user.username}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

export default Profile;