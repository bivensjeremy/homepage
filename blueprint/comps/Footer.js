import Script from 'next/script'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            
            <footer className="mt-auto pt-3">
                <nav className="d-flex justify-content-center">
                    <Link href="https://www.facebook.com/bivens.jeremy"><a className="nav-link"><i className="bi bi-facebook fs-4"></i></a></Link>
                    <Link href="https://www.instagram.com/bivensjeremy/"><a className="nav-link"><i className="bi bi-instagram fs-4"></i></a></Link>
                    <Link href="https://www.twitter.com/_Bivens"><a className="nav-link"><i className="bi bi-twitter fs-4"></i></a></Link>
                    <Link href="https://www.linkedin.com/in/bivensjeremy"><a className="nav-link"><i className="bi bi-linkedin fs-4"></i></a></Link>
                    <Link href="mailto:admin@bivensblueprint.com?subject=Contact"><a className="nav-link"><i className="bi bi-envelope fs-4"></i></a></Link>
                </nav>
                <p className="text-center">&copy; {new Date().getFullYear()} Bivens Blueprint, LLC</p>
            </footer>

            {/* Bootstrp Javascript */}
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
        </div>
    );
}

export default Footer;