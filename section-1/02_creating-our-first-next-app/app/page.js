import Link from "next/link";

export default async function Home({ params, searchParams }) {
  console.log(await params);
  console.log(await searchParams);
  return (
    <>
      <h1>Welcome to Home Page!!</h1>
      <Link href="/about">About</Link> <Link href="/services">Services</Link>
    </>
  );
}
