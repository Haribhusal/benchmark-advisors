import Image from 'next/image'
import HeroSlider from '../components/HeroSlider'
import OnBoarding from '../components/OnBoarding'
import HowItWorks from '../components/HowItWorks'
import KeyPartners from '../components/KeyPartners'
import Highlights from '../components/Highlights'
import InvestNow from '../components/InvestNow'
import JoinStartup from '../components/JoinStartup'
import UpcomingEvents from '../components/UpcomingEvents'
import OurStory from '../components/OurStory'
import Footer from '../components/Footer'
import Head from 'next/head'
export default function Home() {
  return (
    <main className="page" style={{
      backgroundImage: "url('/background/bg.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: "no-repeat",
      backgroundAttachment: 'fixed'

    }} >
      <Head>
        <title>Benchmark Advisors</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeroSlider />
      <OnBoarding />
      <HowItWorks />
      <KeyPartners />
      <Highlights />
      <InvestNow />
      <JoinStartup />
      <UpcomingEvents />
      <OurStory />
      <Footer />

    </main >
  )
}
