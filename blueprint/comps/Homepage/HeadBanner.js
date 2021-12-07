import Image from 'next/image'

const HeadBanner = () => {
    return (
        <div className="container logobanner">
            <Image 
                src="/images/BlueprintBanner.png"
                layout="responsive"
                width={2684}
                height={563}
                alt="Blueprint Banner"
                className="logobanner animated fadeInUp"
                priority
            />
      </div>
    );
}

export default HeadBanner;