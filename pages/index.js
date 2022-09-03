import Head from 'next/head'

// components
import { Header } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brian Aditya: Frontend Developer</title>
        <meta name="description" content="Brian Aditya Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header section */}
      <Header />

      {/* body section */}
    </div>
  )
}
