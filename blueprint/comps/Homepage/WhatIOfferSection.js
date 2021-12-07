import WhatIOfferCard from "./WhatIOfferCard";

function createWhatIOfferCard(offerInfo) {
    return(
        <WhatIOfferCard
            key={offerInfo.id}
            title={offerInfo.title}
            description={offerInfo.description}
        />
    )
}

const WhatIOfferSection = ({whatIOfferData}) => {
    return (
        <section id="what-i-offer">
            <div className="container">
                <div className="row row-cols-md-1 row-cols-lg-2 g-1" key={whatIOfferData.id}>
                    {whatIOfferData.map(createWhatIOfferCard)}
                </div>
            </div>
        </section>
    );
}

export default WhatIOfferSection;