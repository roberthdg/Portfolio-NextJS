import Layout from '../components/layout/Layout';
import About from '../components/content/About';
import Head from 'next/head';

const AboutPage = () => (
    <>
    <Head>
      <title> Roberth Gómez - About </title>
    </Head>
    <Layout>
        <About/>
    </Layout>
    </>
)

export default AboutPage