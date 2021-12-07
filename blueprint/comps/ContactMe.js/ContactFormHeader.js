import Image from 'next/image'

const ContactFormHeader = () => {
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
            
        </div>
    );
}

export default ContactFormHeader;