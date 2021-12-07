import Image from "next/image";
import Link from "next/link";

const PortfolioHeader = () => {
    return (
        <div className="text-center">
            <div className="text-center">
                <div className="animated fadeInUp">
                    <Image 
                        src="/images/Blueprint Logos border.png"
                        layout="intrinsic"
                        width="225"
                        height="226"
                        alt="BP Logo"
                    />
                </div>
            </div>
            
            <h1 className="display-4 fw-normal">Portfolio</h1>
            <p className="lead fw-normal">Projects I have created along the way</p>
            <Link href="https://github.com/bivensjeremy">
                <button className="btn btn-primary">View My GitHub</button>
            </Link>
  
        </div>
    );
}

export default PortfolioHeader;