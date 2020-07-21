import React, {Component} from 'react';
import Layout from '../layouts/layout1';

function Header(){
  return(
    <header class="testimoni1">
      <div class="teks7">Review Customer</div>

      <div class="row">
        <div class="col-4 col-s-12">
          <img src="/images/review/ppl1.jpg" />
          <p><b>Affendi</b> | CEO PT. Firma Jaya<br /><i>"Saya sangat puas belanja di sini"</i></p>
        </div>
        <div class="col-4 col-s-12">
          <img src="/images/review/ppl2.jpg" />
          <p><b>Wulan</b> | Manajer CV. Maspindo<br /><i>"Pelayanannya ramah banget"</i></p>
        </div>
        <div class="col-4 col-s-12">
          <img src="/images/review/ppl3.jpg" />
          <p><b>Erick</b> | Youtuber<br /><i>"Letaknya strategis dan harganya jempol"</i></p>
        </div>
      </div>
    </header>
  );
}

class Section1 extends Component{
  constructor(props){
      super(props)

      this.state = {
          status: [],
          text: ""            
      }
  }

  handleChange = event => {
      this.setState({text: event.target.value})
  }

  handleSubmit = event => {
      event.preventDefault()

      if(this.state.text.length===0){
          return
      }

      let statusBaru = {
          text: this.state.text,
          id: Date.now()
      }

      this.setState(state => ({
          status: state.status.concat(statusBaru),
          text: ""
      }))
  }

  render(){
      return(
          <section class="testimoni2">
              <form class="post-status" onSubmit={this.handleSubmit}>
                  <h2>Beritahu Kami Review Anda</h2>
                  <textarea onChange={this.handleChange} value={this.state.text} placeholder="Bagaimana pendapat anda mengenai DigitalQ ?"></textarea><br />
                  <button>KIRIM</button>
              </form>
              <div class="testimoni3">
                  <Status status={this.state.status} />
              </div>
          </section>
      )
  }
}

class Status extends Component{
  tanggal(){
      var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
      var myDays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
      var date = new Date()
      var day = date.getDate()
      var month = date.getMonth()
      var thisDay = date.getDay(),
      thisDay = myDays[thisDay]
      var yy = date.getYear()
      var year = (yy < 1000) ? yy + 1900 : yy
      var tgl = thisDay + ', ' + day + ' ' + months[month] + ' ' + year

      return(tgl)
  }

  render(){
      return(
          <div>
              {this.props.status.map(item => (
                  <ul>
                      <li>
                          <img src="/images/review/unknown.jpg" />
                          <br /><b>Dewi & Afifa</b> | <time>{this.tanggal()}</time><br /><i>{item.text}</i>
                      </li>
                      <p />
                  </ul>
              ))}
          </div>
      )
  }
}

class Review extends Component{
  render(){
    return (
      <Layout>
        <Header />
        <Section1 />
      </Layout>
    );
  }
}

export default Review;