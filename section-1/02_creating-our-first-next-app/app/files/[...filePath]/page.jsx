import Link from "next/link";

//Catch All Routes

export default async function FilePath({ params }) {
  const { filePath } = await params;
  console.log(filePath);
  return (
    <>
      <h1>File Path : /{filePath.join("/")}</h1>
    </>
  );
}
