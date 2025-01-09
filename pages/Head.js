import Head from "next/head";

const PageHead = ({ title }) => {
  return (
    <>
      <Head>
        <title>{`${title} || minicog.ai`}</title>
        <meta name="description" content="Leverage our AI Consulting Services to take full advantage of the collected data and gain valuable insights that help automate business processes and boost revenue." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* open graph */}
        <meta property="og:title" content="minicog.ai" />
        <meta property="og:description" content="Leverage our AI Consulting Services to take full advantage of the collected data and gain valuable insights that help automate business processes and boost revenue." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/main-logo.png" />

      </Head>
    </>
  );
};

export default PageHead;
