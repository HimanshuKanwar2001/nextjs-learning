import Link from "next/link";

export const generateMetadata = async ({ params }) => {
  const { blogId } = await params;
  return {
    title: `Blog ${blogId}`,
  };
};

export default async function Page({ params }) {
  // console.log(await params);
  const { blogId } = await params;

  return (
    <>
      <h1>Blog 1 {blogId}</h1>
      {/* <Link href="/">Home</Link> <Link href="/services">Services</Link> */}
    </>
  );
}
