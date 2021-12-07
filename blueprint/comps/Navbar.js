import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div>
            <section id="navigation-section">
                <nav className="navbar navbar-expand-md d-flex flex-column flex-lg-row align-items-center p-3 px-md-4">

                    <Link href="/"><a>
                        <Image src="/images/BP_logo.png" height={60} width={60} layout="intrinsic" alt="BP Logo" />
                    </a></Link>

                    <button className="navbar-toggler nav-link" style={{backgroundColor: '#1f3c88'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-view-list fs-3 text-light"></i>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                       <div className="navbar-nav my-2 my-md-0 me-md-3" >
                            <Link href='/aboutme'><a className="p-2 nav-link">About Me</a></Link>
                            <Link href='/portfolio'><a className="p-2 nav-link">Portfolio</a></Link>
                            <Link href='/requestservices'><a className="p-2 nav-link">Request Services</a></Link>
                            <Link href='/contactme'><a className="p-2 nav-link">Contact Me</a></Link>
                        </div> 
                    </div>
                    
                </nav>
            </section>
        </div>
    );
}

export default Navbar;