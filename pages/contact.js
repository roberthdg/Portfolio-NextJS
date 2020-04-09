import Layout from '../components/layout/Layout';
import Contact from '../components/content/Contact';
import Head from 'next/head';

const ContactPage = () => (
    <>
    <Head>
      <title>Roberth Gómez | Contact</title>
    </Head>
    <Layout>
        <Contact/>
    </Layout>
    </>
)

export default ContactPage