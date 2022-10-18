import Head from 'next/head'

// components
import { Header, About, Projects } from '../components'

export default function Home() {
  return (
    <div className='bg-main'>
      <Head>
        <title>Brian Aditya: Frontend Developer</title>
        <meta name="description" content="Brian Aditya Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header section */}
      <Header />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      < Projects />
    </div>
  )
}
