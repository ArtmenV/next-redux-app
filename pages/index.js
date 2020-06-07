import Head from 'next/head'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { startClock } from '../store/common/action'
import Examples from '../components/examples'



const Home = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Examples />
        <Link href="/show-redux-state">
          <a>Click to see current Redux State</a>
        </Link>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
