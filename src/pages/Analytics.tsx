import { useLoaderData } from "react-router-dom";

export function Analytics() {
  const analytics = useLoaderData();
  console.log("🚀 ~ Analytics ~ analytics:", analytics);
  return <h1>Analytics</h1>;
}
