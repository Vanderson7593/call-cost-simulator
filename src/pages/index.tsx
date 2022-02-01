import { NextPage } from 'next'
import Head from 'next/head'
import HomeView from 'views/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Telzir Call Cost</title>
      </Head>

      <main>
        <HomeView />
      </main>
    </>
  )
}

export default Home
