import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400;1,900&display=swap');
    </style>
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
