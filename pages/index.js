import React, { useEffect, useState } from "react";

import Image from "next/image";
import HeroSlider from "../components/HeroSlider";
import OnBoarding from "../components/OnBoarding";
import HowItWorks from "../components/HowItWorks";
import KeyPartners from "../components/KeyPartners";
import Highlights from "../components/Highlights";
import InvestNow from "../components/InvestNow";
import JoinStartup from "../components/JoinStartup";
import UpcomingEvents from "../components/UpcomingEvents";
import Blog from "../components/Blog";
import OurStory from "../components/OurStory";
import Footer from "../components/Footer";
import Head from "next/head";
import Meta from "../components/Meta";
import axios from "axios";

export default function Home() {
  const [settings, setSettings] = useState();
  useEffect(() => {
    axios
      .get("https://benchmark.promotingnepal.com/api/setting")
      .then((res) => {
        setSettings(res.data[0]);
      });
  }, []);

  return (
    <>
      <Meta
        title={settings?.site_title}
        keywords={settings?.meta_keywords}
        description={settings?.meta_descriptions}
        logo={settings?.logo}
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
        {/* <HowItWorks /> */}
        <KeyPartners />
        <Highlights />
        {/* <InvestNow /> */}
        <JoinStartup />
        <UpcomingEvents />
        {/* <OurStory /> */}
        <Blog />
      </main>
    </>
  );
}
