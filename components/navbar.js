import Link from 'next/Link';

function Navbar(props){
    return(
        <nav>
            <ul>
                <li><Link href={props.landingpage}><a><h3>DigitalQ</h3></a></Link></li>
                <li><Link href={props.beranda}><a>About</a></Link></li>
                <li><Link href={props.produk}><a>Product</a></Link></li>
                <li><Link href={props.review}><a>Review</a></Link></li>
                <li><Link href={props.login}><a>LOGIN</a></Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;