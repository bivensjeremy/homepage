import PricingCard from "./PricingCard";
import Link from 'next/link'

function createPricingCard(packagesInfo){
    return(
        <PricingCard
            id={packagesInfo.id}
            title={packagesInfo.title}
            startingPrice={packagesInfo.startingPrice}
            discountPrice={packagesInfo.discountPrice}
            description={packagesInfo.description}
            url={packagesInfo.url}
            additionalInfo={packagesInfo.additionalInfo}
        />
    )
}

const PricingSection = ({packagesData}) => {
    return (
        <section id="pricing-section">
            <main className="container py-5">
                <div className="text-white pb-4 text-center">
                    <h1 className="display-4 fw-bold">Project Packages</h1>
                    <p className="lead">Many web developers do not list their pricing. Instead, they wait until you've engaged and gotten started in the process before they tell you the website will set you back <i>thousands</i> of dollars! My approach is different. Instead, I have listed prices right here for you to work in the cost of your website into your budget.  All depending on the scope of your project, these prices are subject to change, but don't worry, we'll cover <i>all</i> of that before you engage too far.  Take a look at my pricing page for more details.</p>
                </div>

                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center" key={packagesData.id}>
                    {packagesData.map(createPricingCard)}
                </div>

                <div className="d-flex justify-content-center pb-5">
                    <div className="text-center me-2">
                        <Link href="/requestservices">
                            <button className="btn btn-primary text-white fw-bold text-uppercase btn-lg">Package Information</button>
                        </Link>
                    </div>

                    <div className="text-center ms-2">
                        <Link href="https://www.honeybook.com/widget/bivens_blueprint_llc_191523/cf_id/612fa0a4ceb19b0e829a228d">
                            <button className="btn text-white fw-bold text-uppercase btn-lg customOrangeButton">Let's Get Started!</button>
                        </Link>
                    </div>
                </div>

                

                
            </main>
        </section>
    );
}

export default PricingSection;