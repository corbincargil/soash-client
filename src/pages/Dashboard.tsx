import { useLocation } from "react-router-dom";
import { Header } from "../Components/Header";

export function Dashboard() {
  const { state } = useLocation();
  return (
    <div>
      <h1>Content here</h1>
    </div>
  );
}
