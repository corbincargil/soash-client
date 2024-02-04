import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/v1/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  return (
    <div className="App">
      {users.length ? users?.map((u, i) => <p key={i}>{u}</p>) : <p>Hello</p>}
    </div>
  );
}

export default App;
