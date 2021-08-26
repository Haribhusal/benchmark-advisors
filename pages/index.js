import Image from "next/image";
import HeroSlider from "../components/HeroSlider";
import OnBoarding from "../components/OnBoarding";
import HowItWorks from "../components/HowItWorks";
import KeyPartners from "../components/KeyPartners";
import Highlights from "../components/Highlights";
import InvestNow from "../components/InvestNow";
import JoinStartup from "../components/JoinStartup";
import UpcomingEvents from "../components/UpcomingEvents";
import OurStory from "../components/OurStory";
import Footer from "../components/Footer";
import Head from "next/head";
import Meta from "../components/Meta";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch(
    "https://benchmark.promotingnepal.com/api/setting"
  );
  const data = await response.json();
  return data;
};

export default function Home() {
  const { data, error } = useSWR("settings", fetcher);
  if (error) return "An error occured";
  if (!data) return "";
  const settings = data[0];

  return (
    <>
      <Meta
        title={settings.site_title}
        keywords={settings.meta_keywords}
        description={settings.meta_descriptions}
        logo={settings.logo}
      />
      <main
        className="page"
        style={{
          backgroundImage: "url('/background/bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <HeroSlider />
        <OnBoarding />
        <HowItWorks />
        <KeyPartners />
        <Highlights />
        <InvestNow />
        <JoinStartup />
        <UpcomingEvents />
        {/* <OurStory /> */}
      </main>
    </>
  );
}
