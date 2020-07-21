import React, {Component} from 'react';
import Link from 'next/Link';
import Layout from '../layouts/layout1';

function Header(){
  return(
    <section class="about" id="about">
      <div class="row">
        <div class="col-6 col-s-12 deskripsi">
          <u>Sekilas Tentang Kami</u>
          <p><b>DigitalQ </b>merupakan toko elektronik terpercaya yang menjual bervariasi laptop dan handphone berkualitas dengan harga terjangkau. DigitalQ siap menjamin kepuasan pelanggan.</p>
        </div>
        <div class="col-6 col-s-12"><img src="/images/2.jpg" /></div>
      </div>
    </section>
  );
}

function Section(){
  return(
    <section class="iklan">
      <ul>
        <li><Link href="produk"><a><img src="/images/A.jpg" /></a></Link></li>
        <li><Link href="produk/hp"><a><img src="/images/B.jpg" /></a></Link></li>
        <li><Link href="produk/dll"><a><img src="/images/C.jpg" /></a></Link></li>
        <li><Link href="produk/dll"><a><img src="/images/D.jpg" /></a></Link></li>
        <li><Link href="produk/dll"><a><img src="/images/E.jpg" /></a></Link></li>
        <li><Link href="produk/dll"><a><img src="/images/F.jpg" /></a></Link></li>
      </ul>
    </section>
  );
}

class Beranda extends Component{
  render(){
    return (
      <Layout>
        <Header />
        <Section />
      </Layout>
    );
  }
}

export default Beranda;