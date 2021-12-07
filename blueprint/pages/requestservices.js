import Head from 'next/head'
import MyServices from '../comps/MyServices/MyServices'
import ServicesHeader from '../comps/MyServices/ServicesHeader'
import { server } from '../config'

export async function getServerSideProps() {
    const res = await fetch(`${server}/api/servicesapi`)
    const servicesData = await res.json()
    return { props: { servicesData }}
}
const requestservices = ({ servicesData }) => {
    
    return (
        <div>
            <Head>
                <title>Bivens Blueprint | Request Services</title>
            </Head>

        <ServicesHeader />

        <MyServices servicesData={servicesData} />    

        </div>
    );
}

export default requestservices;