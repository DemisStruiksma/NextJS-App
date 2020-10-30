import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Demis. I'm a web developer from Amsterdam. You can contact me @ <a href="mailto:contact@demis.io">contact@demis.io</a></p>
        <p>Go to my <Link href="/blog"><a>blog</a></Link></p>
      </section>
    </Layout>
  )
}

