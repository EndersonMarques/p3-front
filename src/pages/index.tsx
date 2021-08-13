import Head from 'next/head'
import { Layout } from 'components/index'

const Home: React.FC = ()=>{
  return (
    <div>
      <Head>
        <title>Vendas App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Layout />
      
    </div>
  )
}

export default Home;
