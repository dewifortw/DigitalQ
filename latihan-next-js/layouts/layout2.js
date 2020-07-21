import Navbar from '../components/navbar';
import Menu from '../components/menu';
import Footer from '../components/footer';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>

        <link href="/css/uts.css" rel="stylesheet" />
        
        </Head>

        <Navbar landingpage="/index" beranda="/beranda" produk="#" review="/review" login="/login" />
        <Menu laptop="/produk" hp="/produk/hp" dll="/produk/dll" />
        {props.children}
        <Footer />
    </div>
)

export default Layout;