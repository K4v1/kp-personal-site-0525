require('../styles/globals.css');
const Footer = require('../components/Footer');
const Head = require('next/head');

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

module.exports = App;
