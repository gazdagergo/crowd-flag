import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marc 15</title>
        <meta name="description" content="Március 15" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Éljen a magyar szabadság! 🇭🇺</h1>
      <p>Rajzoljunk magyar zászlót a telefonunkkal. Válaszd ki, hogy elől, a színpad előtti részen állsz, középen, vagy a tömeg hátsó részén.
          Ennek megfelelően a piros, a fehér vagy a zöld zónába fogsz kerülni.</p>        
        <h2 className={styles.subtitle}>
          Válaszd ki, hol állsz!
        </h2>
        <Link href="/elol"><button className={styles.button}>Elöl</button></Link>
        <Link href="/kozepen"><button className={styles.button}>Középen</button></Link>
        <Link href="/hatul"><button className={styles.button}>Hátul</button></Link>
        
          <p>
          Nyomd meg a megfelelő gombot, majd jelöld be a <strong>maradj ébren</strong> négyzetet a következő oldalon hogy a
          képernyő ne menjen alvó módba. Ez után tartsd az ég felé a telefonod.
        </p>

        <h2>Szolidaritás Ukrajnáért 🇺🇦</h2>
        <p>Hogy kifejezzük támogatásunkat a hazájukat védő ukrán néppel, a piros-fehér-zöld zászló időnként néhány percre kék-sárga ukrán zászlóvá változik.</p>
      </main>
    </div>
  )
}
