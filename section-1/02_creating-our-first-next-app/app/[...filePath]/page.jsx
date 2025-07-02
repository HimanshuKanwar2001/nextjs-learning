import Link from "next/link";

//Catch All Routes

export default async function FilePath({ params }) {
  const { filePath } = await params;
  return (
    <>
      <h1>File Path : {filePath}</h1>
    </>
  );
}
