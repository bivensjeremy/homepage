import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                {/* Bootstrap */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"></link>
               

                {/* Core UI Icons */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />


                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />

                {/* Favicons */}
                <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
                <link rel="manifest" href="images/site.webmanifest" />

                {/* Bootstrap Javascript */}
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
            
                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script 
                  async 
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />

                <script
                  dangerouslySetInnerHTML={{
                    __html:`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', { page_path: window.location.pathname });
                    `,
                  }}
                />

            </Head>
        <body>
          <Main />
          <NextScript />

          
        </body>
      </Html>

      
    )
  }
}


export default MyDocument