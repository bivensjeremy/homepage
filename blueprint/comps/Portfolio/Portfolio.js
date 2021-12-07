import PortfolioCard from "./PortfolioCard";
import Link from 'next/link'

function createPortfolioCard(portData){
    return(
        <PortfolioCard
            key={portData.id}
            title={portData.title}
            icon={portData.icon}
            link={portData.link}
            height={portData.height}
            width={portData.width}
            description={portData.description}
        />
    )
}

const Portfolio = ({portfolioData}) => {
    return (
        <div>
            <div className="album py-5">
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                        
                        {portfolioData.reverse().map(createPortfolioCard)}
                        
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Portfolio;