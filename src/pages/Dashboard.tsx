import { useLocation } from "react-router-dom";

export function Dashboard() {
  const { state } = useLocation();
  return (
    <div>
      <h1>Dashboard content here</h1>
    </div>
  );
}
