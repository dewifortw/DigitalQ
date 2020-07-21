import React, {Component} from 'react';
import Layout from '../../layouts/layout2';
import data from '../../components/data';
import Link from 'next/link'

function Section(){
  return(
    <section class="laptop" id="hp">
      <div class="teks7">HANDPHONE</div>

      <div class="row">
        <div class="col-12 col-s-12">
          <div class="col-2 col-s-12">
           <Link href="/artikel/[kode]" as="/artikel/ADVAN i6A"><a><img src="/images/hp/h1.jpg" /></a></Link>
          </div>
          <div class="col-10 col-s-12">
            <h4>ADVAN i6A</h4>
            <p>5.5" IPS Full View | 2 GB RAM - 16GB ROM | 13MP Rear Camera - 5MP Front Camera | 3200mAh
            <br/><em><strong>Rp. 999.000</strong></em></p>
          </div>
        </div>
        <div class="col-12 col-s-12">
          <div class="col-2 col-s-12">
          <Link href="/artikel/[kode]" as="/artikel/Xiaomi Redmi Note 5A"><a> <img src="/images/hp/h2.jpg" /></a></Link>
          </div>
          <div class="col-10 col-s-12">
            <h4>Xiaomi Redmi Note 5A</h4>
            <p>5.5" IPS LCD | 3 GB RAM - 32GB ROM | 13MP Rear Camera - 16MP Front Camera | 3080mAh
            <br/><em><strong>Rp. 1.150.000</strong></em></p>
          </div>
        </div>
        <div class="col-12 col-s-12">
          <div class="col-2 col-s-12">
          <Link href="/artikel/[kode]" as="/artikel/Samsung GALAXY S6"><a> <img src="/images/hp/h3.jpg"/></a></Link>
          </div>
          <div class="col-10 col-s-12">
            <h4>Samsung GALAXY S6</h4>
            <p>5.1" Super Inch AMOLED | 3 GB RAM - 32GB ROM | 16MP Rear Camera - 5MP Front Camera | 2550mAh
            <br/><em><strong>Rp. 2.100.000</strong></em></p>
          </div>
        </div>
      </div>
    </section>
  );
}

class Hp extends Component{
  render(){
    return (
        <Layout>
          <Section />
        </Layout>
    );
  }
}

export default Hp;