export default async () => {
  const res = await fetch("/api/v1/posts");
  return res.json();
};
