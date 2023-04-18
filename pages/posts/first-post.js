import Link from 'next/link';

//processing.html파일과 연관파일(next.config.js, processing-1.4.1.js)들은 public폴더에 위치함.

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>

      <h4>
        Hi, My name is Ah-young and my major is Business Administration. My hobby is watching Netflix. Thank you.
      </h4>
      
    
      <iframe src="/processing.html" title="Bouncing-ball" width="600" height="400"></iframe>
    

      <h2>
        <Link href="/">Back to home</Link>
      </h2>

     
    </>
  );
}
