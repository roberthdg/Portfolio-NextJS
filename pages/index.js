import Layout from '../components/layout/Layout';
import Home from '../components/content/Home';
import Head from 'next/head';

const Index = () => (
    <>
    <Head>
      <title> Roberth Gómez - Home </title>
    </Head>
    <Layout>
        <Home/>
    </Layout>
    </>
)


export default Index