import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SideBar from '../containers/SideBar/SideBar'
import Navbar from '../containers/Navbar/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DemoDay</title>
        <meta name="description" content="MVP of DemoDay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>

      <main className="main">

          <div className="sidebar">
            <SideBar />
          </div>
          <div className="content">

          </div>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
