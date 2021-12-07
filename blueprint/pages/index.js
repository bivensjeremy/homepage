import Head from 'next/head'
import { server } from '../config'
import HeadBanner from '../comps/Homepage/HeadBanner'
import AboutMeSection from '../comps/Homepage/AboutMeSection'
import WhatIOfferSection from '../comps/Homepage/WhatIOfferSection'
import SetApart from '../comps/Homepage/SetApart'
import PricingSection from '../comps/Homepage/PricingSection'
import CallToAction from '../comps/Homepage/CallToAction'

export async function getServerSideProps() {
  const [whatIOfferRes, setMeApartRes, packagesRes] = await Promise.all([
    fetch(`${server}/api/whatiofferapi`),
    fetch(`${server}/api/setmeapartapi`),
    fetch(`${server}/api/packagesapi`),
  ]);
  const [whatIOfferData, setMeApartData, packagesData] = await Promise.all([
    whatIOfferRes.json(),
    setMeApartRes.json(),
    packagesRes.json(),
  ]);
  return { props: { whatIOfferData, setMeApartData, packagesData }}
}


export default function Home({ whatIOfferData, setMeApartData, packagesData }) {
  return (
    <div>
      <Head>
        <title>Bivens Blueprint</title>
      </Head>

      <main>
        <HeadBanner />

        <AboutMeSection />

        <WhatIOfferSection whatIOfferData={whatIOfferData} />

        <SetApart setMeApartData={setMeApartData} />

        <PricingSection packagesData={packagesData} />

        <CallToAction />     
      </main>

    </div>
  )
}
