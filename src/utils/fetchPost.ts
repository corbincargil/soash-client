export default async (id: string) => {
  const res = await fetch(`/api/v1/post/${id}`, { method: "GET" });
  console.log("🚀 ~ res:", res);
  return res.json();
};
