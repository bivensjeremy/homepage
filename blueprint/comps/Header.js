import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../comps/Navbar'

const Header = () => {
    return (
        <div>
            <Head>
                {/* Metadata */}
                <meta name="description" content="Custom, affordable, websites for your business. I offer a full suite of design, hosting and ongoing support so you can focus on your business!" />
                <meta name="keywords" content="Bivens Blueprint LLC, web design and development" /> 
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="canonical" href="https://bivensblueprint.com" />
                <meta name="robots" content="index, follow" />
            </Head>

            <Navbar />
            

        </div>
    );
}

export default Header;