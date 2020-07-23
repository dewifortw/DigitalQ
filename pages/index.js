import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../layouts/layout1';

function Header(){
  return(
    <header class="home">
      <div class="teks1">Selamat Datang di</div>
      <div class="teks2">DigitalQ</div>
      <Link href="beranda"><a>CARI TAHU SEKARANG</a></Link>
    </header>
  );
}

class Landingpage extends Component{
  render(){
    return (
      <Layout>
        <Header />
      </Layout>
    );
  }
}

export default Landingpage;