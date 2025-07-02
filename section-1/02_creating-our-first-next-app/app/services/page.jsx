import Link from "next/link";

export default function Services() {
  return (
    <>
      <h1>Our Services</h1>
      <p>
        <Link href="/about">About</Link> <Link href="/">Home</Link>
      </p>
      <p>
        <Link href="/services/web-dev">Web Development Services</Link>
      </p>
      <p>
        <Link href="/services/seo">SEO Services</Link>
      </p>
    </>
  );
}
