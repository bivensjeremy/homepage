import Head from 'next/head'
import ContactFormHeader from '../comps/ContactMe.js/ContactFormHeader';
import ContactMeForm from "../comps/ContactMe.js/ContactMeForm"

const contactme = () => {
    return (
        <div>
            <Head>
                <title>Bivens Blueprint | Contact Me</title>
            </Head>

            <div style={{backgroundColor: '#1f3c88'}}>
                <div className="container py-5">
                    <ContactFormHeader />

                    <ContactMeForm />
                </div>
            </div>
        </div>
        
    );
}

export default contactme;