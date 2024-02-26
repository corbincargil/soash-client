import Button from "./Forms/helpers/Button";

export function Header({ pageName, username }: any) {
  const title = pageName ?? "Header title";
  return (
    <div className="w-full h-24 border-b border-slate-300 flex justify-between items-center px-6">
      <div>
        <h1 className=" font text-3xl font-extrabold">{title}</h1>
        <h3 className="italic">Welcome, {username || "User"}</h3>
      </div>
      <Button
        text="Create new post"
        onClick={() => null}
        disabled={false}
      ></Button>
    </div>
  );
}
