import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>

      <h4>
        Hi, My name is Ah-young and my major is Business Administration. My hobby is watching Netflix. Thank you.
      </h4>

      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}