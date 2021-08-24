import Head from "next/head";

const Meta = ({ title, keywords, description, logo }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={logo} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/images/logo.png" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Benchmark Advisors",
  keywords: "Startup, Investors, Investment, Donation, Funding",
  description:
    "Benchmark Advisors is an online platform for investors and startups",
};

export default Meta;
