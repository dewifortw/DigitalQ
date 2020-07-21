import React, {Component} from 'react';
import Layout from '../../layouts/layout1';
import Menu from '../../components/menu';
import data from '../../components/data';
import Link from 'next/link'

function Section(){
  return(
    <section class="laptop" id="laptop">
      <div class="teks7">LAPTOP</div>

      <div class="row">
        <div class="col-12 col-s-12">
          <div class="col-2 col-s-12">
          <Link href="/artikel/[kode]" as="/artikel/Asus Ebook E203MAH"><a><img src="/images/laptop/l1.jpg" /></a></Link>
          </div>
          <div class="col-10 col-s-12">
            <h4>Asus Ebook E203MAH</h4>
            <p>Intel Coleron N4000 Processor | Windows 10 Home | Layar 11.6" HD (1366x768) | Grafis Intel HD | 500GB HDD | 4GB / 2GB LPDDR4 Memory | USB 3.1 Type-C, USB 3.0, BT 4.0, Wi-Fi | 1 tahun garansi global
            <br/><em><strong>Rp. 3.499.000</strong></em></p>
          </div>
        </div>
        <div class="col-12 col-s-12">
          <div class="col-2 col-s-12">
          <Link href="/artikel/[kode]" as="/artikel/ASUS VivoBook A407UB"><a><img src="/images/laptop/l2.jpg" /></a></Link>
          </div>
          <div class="col-10 col-s-12">
            <h4>ASUS VivoBook A407UB</h4>
            <p>Intel Core i3-7100U Processor | Windows 10 Home | Layar 14" HD (1366x768) | Discret Graphics MX 110-2GB | 1TB HDD | 4GB DRR4 Memory | USB 3.0, BT 4.1, Wi-Fi, 802-11 ac | 2 tahun garansi global
            <br/><em><strong>Rp. 6.549.000</strong></em></p>
          </div>
        </div>
        <div class="col-12 col-s-12">
          <div class="col-2 col-s-12">
          <Link href="/artikel/[kode]" as="/artikel/ROG Zephyrus GX501GI G-SYNC"><a><img src="/images/laptop/l3.jpg"/></a></Link>
          </div>
          <div class="col-10 col-s-12">
            <h4>ROG Zephyrus GX501GI G-SYNC</h4>
            <p>Intel Core i7-7700HQ Processor | Windows 10 Home | Layar 15.6" IPS FHD Anti Glare (1920x1080) 144Hz 3ms | Discret Graphics GTX-1080 Max-Q-8GB GDDR5 + G Sync | 512GB NVMe PCIe G3x4 SSD | 24GB DRR4 Memory | USB 3.0, USB 3.1, BT 4.1, Wi-Fi | 2 tahun garansi global<br /><em><strong>Rp. 51.299.000</strong></em></p>
          </div>
        </div>
      </div>
    </section>
  );
}

class Laptop extends Component{
  render(){
    return (
      <Layout>
        <Menu laptop="produk" hp="produk/hp" dll="produk/dll" />
        <Section />
      </Layout>
    );
  }
}

export default Laptop;