import Head from 'next/head'
import LandingPage from '../components/landingPage'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Tour App</title>
        <meta name="description" content=" - Come Find Tours with us.." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />

    </div>
  )
}
