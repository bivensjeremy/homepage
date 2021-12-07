import Image from 'next/image'

const ServicesHeader = () => {
    return (
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
            <h1 className="display-4 fw-bold p-4">Services</h1>
        </div>
    );
}

export default ServicesHeader;