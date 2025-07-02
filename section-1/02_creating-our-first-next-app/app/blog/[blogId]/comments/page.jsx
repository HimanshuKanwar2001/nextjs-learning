import Link from "next/link";

export default async function Page({ params }) {
  console.log(await params);
  const paramsObj = await params;

  const { blogId } = paramsObj;
  return (
    <>
      <h1>All Comments on  {blogId} page</h1>
      {/* <Link href="/">Home</Link> <Link href="/services">Services</Link> */}
    </>
  );
}
