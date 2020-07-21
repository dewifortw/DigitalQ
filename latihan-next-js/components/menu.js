import Link from 'next/Link';
import Head from 'next/head';

function Menu(props){
    return(
      <div>
        <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>

        <link href="/css/uts.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        
        </Head>

        <section class="product" id="product">
          <div class="teks3">PRODUK</div>
            <div class="teks4">Apa yang Anda Cari?</div>

            <div class="row">
              <div class="col-4 col-s-12">
                <Link href={props.laptop}><a><i class="fa fa-laptop"></i></a></Link>
                <p><b>LAPTOP</b></p>
              </div>
              <div class="col-4 col-s-12">
                <Link href={props.hp}><a><i class="fa fa-mobile"></i></a></Link>
                <p><b>HANDPHONE</b></p>
              </div>
              <div class="col-4 col-s-12">
                <Link href={props.dll}><a><i class="fa fa-print"></i></a></Link>
                <p><b>PRINTER & AKSESORIS</b></p>
              </div>
            </div>
        </section>

      </div>
    );
  }

export default Menu;