import dummyData from '../../components/data.json';
import Login from '../../pages/login';

const Artikel = (props) => {
    return(
        <center>
        <div>
      
            <div>
                <h3>{props.nama}</h3>
                <p>{props.harga}</p>
                <h4>untuk memesan, silahkan melakukan login terlebih dahulu</h4>
            </div>
       
        <br/><Login/></div> </center>
    );
}

export async function getStaticProps(context){
    let kode = context.params.kode;
    let data = dummyData.find(x => x.nama == kode);
    let {nama, gambar, harga}= data;
    return{
        props:{
            nama, gambar, harga
        }
    }
}

export async function getStaticPaths(){
   
    return{
        paths : dummyData.map(data =>(
            {
                params : {kode: `${data.nama}`}}
            
        )),
        fallback : false
    }
}

export default Artikel;