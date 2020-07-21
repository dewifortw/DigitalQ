import React, {Component} from 'react';
import Layout from '../../layouts/layout2';
import data from '../../components/data';
import Link from 'next/link';

function Section(){
  return(
    <section class="laptop" id="dll">
      <div class="teks7">PRINTER & AKSESORIS</div>

      <div class="row">
        <div class="col-12 col-s-12">
          <div class="col-2 col-s-12">
          <Link href="/artikel/[kode]" as="/artikel/Printer EPSON L3110"><a><img src="/images/dll/d1.jpg" /></a></Link>
          </div>
          <div class="col-10 col-s-12">
            <h4>Printer EPSON L3110</h4>
            <p>Features : print, scan, copy, borderless printing up to 4R | 33/15ppm Speed | Resolution 5760x1440dpi Max Print, 600x1200dpi Scanner Optical | Ink Model 003 | 2 tahun garansi
            <br/><em><strong>Rp. 1.990.000</strong></em></p>
          </div>
        </div>
        <div class="col-12 col-s-12">
          <div class="col-2 col-s-12">
          <Link href="/artikel/[kode]" as="/artikel/Flashdisk TOSHIBA U202"><a> <img src="/images/dll/d2.jpg" /></a></Link>
          </div>
          <div class="col-10 col-s-12">
            <h4>Flashdisk TOSHIBA U202</h4>
            <p>32GB | USB Type-A | Operating Temperature : 0-50 C | Interface USB 2.0 High-Speed | Compatible Machine Windows PC atau Mac | Required OS Windows 7, Windows 8.1, Windows 10, OS X v10.9-v10.11
            <br/><em><strong>Rp. 38.000</strong></em></p>
          </div>
        </div>
        <div class="col-12 col-s-12">
          <div class="col-2 col-s-12">
          <Link href="/artikel/[kode]" as="/artikel/Headphone Sony EXTRA BASS MDR-XB450AP"><a> <img src="/images/dll/d3.jpg" /></a></Link>
          </div>
          <div class="col-10 col-s-12">
            <h4>Headphone Sony EXTRA BASS MDR-XB450AP</h4>
            <p>Unit Driver 30mm | Respons Frekuensi 5Hz-22kHz | panjang kabel 1.2m | Input 3.5mm jack
            <br/><em><strong>Rp. 36.000</strong></em></p>
          </div>
        </div>
      </div>
    </section>
  );
}

class Dll extends Component{
  render(){
    return (
      <Layout>
        <Section />
      </Layout>
    );
  }
}

export default Dll;