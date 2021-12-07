import Image from 'next/image'
import Link from 'next/link'

const CallToAction = () => {
    
    return (
        <section id="call-to-action">
            <div className="container row m-auto text-center pt-4">
                <div className="m-auto col-lg-4 p-2">
                    <h1>Are you ready to discuss your next site?</h1>
                </div>

                <div className="m-auto col-lg-4 p-2">
                    <Link href="https://www.honeybook.com/widget/bivens_blueprint_llc_191523/cf_id/612fa0a4ceb19b0e829a228d">
                        <button className="btn btn-primary btn-lg text-uppercase fw-bold">Contact Me</button>
                    </Link>
                    
                </div>

                <div className="col-lg-4 p-2">
                    <Image 
                        src="/images/Blueprint Logos border.png"
                        layout="intrinsic"
                        width="225"
                        height="226"
                        alt="BP Logo"
                    />
                </div>
            </div>
        </section>
    );
}

export default CallToAction;