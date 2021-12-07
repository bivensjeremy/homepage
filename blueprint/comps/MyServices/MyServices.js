import ServicesCard from "./ServicesCard";
import Link from 'next/link'

function createServicesCard(services){
    return(
        <ServicesCard
            key={services.key}
            title={services.title}
            startingPrice={services.startingPrice}
            discountPrice={services.discountPrice}
            monthlyPrice={services.monthlyPrice}
            description={services.description}
            additionalInfo={services.additionalInfo}
        />
    )
}
const MyServices = ({servicesData}) => {
    return (
        <div className="container-fluid">
            <div className="row">
                {servicesData.map(createServicesCard)}
            </div>

            <div className="plan-select text-center pb-5">
                <Link href="https://www.honeybook.com/widget/bivens_blueprint_llc_191523/cf_id/612fa0a4ceb19b0e829a228d">
                <button className="btn text-white fw-bold text-uppercase btn-lg customOrangeButton">Let's Get Started</button>
                </Link>
            </div>
        
        </div>
        

        
    );
}

export default MyServices;