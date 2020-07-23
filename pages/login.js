import React, {Component} from 'react';
import Link from 'next/link';
import Head from 'next/head';

class Login extends Component{
  render(){
    return (
      <div>
        <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>

        <link href="/css/uts.css" rel="stylesheet" />
        
        </Head>
        <br/>
        <div class="box">
          <h2>DigitalQ</h2>
          <form>
            <div class="inputBox">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div class="inputBox">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <button class="submit"><Link href="index"><a>Submit</a></Link></button>
            <input type="submit" name="" value="Cancel" class="Cancel" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;