import Image from 'next/image'
import HeroSlider from '../components/HeroSlider'
import OnBoarding from '../components/OnBoarding'
import HowItWorks from '../components/HowItWorks'
import KeyPartners from '../components/KeyPartners'
import Highlights from '../components/Highlights'
import InvestNow from '../components/InvestNow'
import JoinStartup from '../components/JoinStartup'
import UpcomingEvents from '../components/UpcomingEvents'
export default function Home() {
  return (
    <main className="page" style={{
      backgroundImage: "url('/background/bg.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: "no-repeat",
      backgroundAttachment: 'fixed'

    }} >
      <HeroSlider />
      <OnBoarding />
      <HowItWorks />
      <KeyPartners />
      <Highlights />
      <InvestNow />
      <JoinStartup />
      <UpcomingEvents />

    </main >
  )
}
