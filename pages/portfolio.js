import Layout from '../components/layout/Layout';
import Portfolio from '../components/content/Portfolio';
import Head from 'next/head';

const PortfolioPage = () => (
     <>
    <Head>
      <title> Roberth Gómez - Portfolio </title>
    </Head>
    <Layout>
        <Portfolio/>
    </Layout>
    </>
)

export default PortfolioPage