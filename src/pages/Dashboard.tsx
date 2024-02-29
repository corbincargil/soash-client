import Button from "../components/Forms/helpers/Button";
import { useLocation, useNavigate } from "react-router-dom";

interface Button {
  text: string;
  onClick: () => any;
}

export function Dashboard() {
  const navigate = useNavigate();

  const dashboardButtons: Button[] = [
    {
      text: "Hashtag Finder",
      onClick: () => {
        navigate("/dashboard");
      },
    },
    {
      text: "Teddi AI",
      onClick: () => {
        navigate("/dashboard");
      },
    },
    {
      text: "Scheduler",
      onClick: () => {
        navigate("/dashboard");
      },
    },
    {
      text: "Evergreen",
      onClick: () => {
        navigate("/evergreen");
      },
    },
  ];
  const { state } = useLocation();
  return (
    <div className=" h-full flex flex-col">
      <div className="m-md flex">
        {dashboardButtons.map((b: Button) => {
          return <Button text={b.text} onClick={b.onClick} />;
        })}
      </div>
    </div>
  );
}
