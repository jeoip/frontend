import Footer from "@/components/Footer";
import IPCard from "@/components/IPCard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>JeoIP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="d-flex flex-row justify-content-end">
          <IPCard></IPCard>
        </div>
      </main>
      {/* <Footer></Footer> */}
    </>
  );
}
