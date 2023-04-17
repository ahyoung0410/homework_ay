import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>

      <h4>
        Hi, My name is Ah-young and my major is Business Administration. My hobby is watching Netflix. Thank you.
      </h4>
      
      <iframe src="/processing.html" title="Processing Example" width="600" height="400"></iframe>

      <h2>
        <Link href="/">Back to home</Link>
      </h2>

     
    </>
  );
}
