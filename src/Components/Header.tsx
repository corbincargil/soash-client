export function Header({ pageName, username }: any) {
  const title = pageName ?? "Header title";
  return (
    <div className="w-full h-24 border-b border-slate-300 flex justify-between items-center px-6">
      <div>
        <h1 className=" text-3xl semi-bold">{title}</h1>
        <h3>Welcome, {username || "User"}</h3>
      </div>
      <button className=" bg-blue-600 rounded w-32 h-10">
        Create new post
      </button>
    </div>
  );
}
