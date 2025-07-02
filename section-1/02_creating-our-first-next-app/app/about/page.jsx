import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Hello World!",
};


export default function About() {
  return (
    <>
      <h1>About</h1>
      <Link href="/">Home</Link> <Link href="/services">Services</Link>
    </>
  );
}
