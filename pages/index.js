import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yannick Brossard</title>
        <meta
          name="description"
          content="Yannick Brossard, Skipper professionnel"
        />
        
      </Head>
      <h1>Hello world</h1>

      <style jsx>{`
        h1 {
          transform-origin: left;
          transition : transform .3s;
        }
        h1:hover {
          transform: scale(1.3, 1.1);          
        }
      `}</style>
    </>
  );
}
