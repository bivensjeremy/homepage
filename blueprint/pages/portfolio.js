import Head from "next/head";
import PortfolioHeader from "../comps/Portfolio/PortfolioHeader";
import PortfolioCard from "../comps/Portfolio/PortfolioCard";
import { server } from '../config'
import Portfolio from "../comps/Portfolio/Portfolio";

export async function getServerSideProps() {
    const res = await fetch(`${server}/api/portfolioapi`)
    const portfolioData = await res.json()
    return { props: { portfolioData }}
}
const portfolio = ({portfolioData}) => {
    return (
        <div>
            <Head>
                <title>Bivens Blueprint | Portfolio</title>
            </Head>

            <PortfolioHeader />

            <Portfolio portfolioData={portfolioData} />

        </div>
    );
}

export default portfolio;