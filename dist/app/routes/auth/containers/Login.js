import React from 'react'

import UiValidate from '../../../components/forms/validation/UiValidate'
import {suburlLogin,keyset,url} from "../../../config/baseUrl";
import {corsEnabled} from "../../../config/FunctionGlobal";
import {EncrypsCode,DecrypsCode} from "../../../config/Encrypt";

export var info = {
    name:"",
    id:"",
    isapproval:'',
    sizefile:0,
    listmenu:[]
}

export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          formlogin:{
            user:'',
            password:''
          }
        }
    }
    onchangeuser(e){
        var str = e.target.value;
        var value = this.state.formlogin
        value.user = str;
        this.setState(value);
    }
    onchangepassword(e){
        var str = e.target.value;
        var value = this.state.formlogin
        value.password = str;
        this.setState(value);
    }
    componentDidMount() {

    }
    login(){

        info.name = ''
        info.id = ''
        info.isapproval = ''
        info.listmenu = []
      var user = this.state.formlogin.user;
      var password = this.state.formlogin.password;
      var url = suburlLogin+`?userid=`+user+`&password=`+password+` `;

        fetch(url,
          {
              method: 'GET',
              headers: {
                  // Authorization: 'Bearer '+localStorage.getItem('token')
                  'content-type': 'application/json'
              },

          })
          .then(response => response.json())
          .then(appList => {
              if(user == appList.message){//isapproval

                  info.listmenu = appList.data.items
                  info.name = appList.data.name
                  info.sizefile = appList.data.limitsizefile
                  info.id = appList.message
                  info.isapproval = appList.data.isapproval
                  localStorage.setItem(keyset,EncrypsCode(JSON.stringify(info)))
                  window.location.href = "/#"+appList.data.firstroute;//"/#/dashboard";

              }else{

                  alert(appList.message)
              }
          })
    }
  render() {
    return (
      
      <div id="extr-page">
        {/* NAVBAR 
        <header id="header" className="animated fadeInDown">

          {/* <div id="logo-group">
            <span id="logo"> <img src="assets/img/logo.png" alt="SmartAdmin"/> </span> 
          </div> 

          <span id="extr-page-header-space"> 
            <span className="hidden-mobile hiddex-xs">Need an account?</span>&nbsp;
            <a href="#/register" className="btn btn-danger">Create account</a> 
          </span>

        </header>
        */}
        <div id="main" role="main" className="animated fadeInDown">

          <div id="content" className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm">
                {/*<h1 className="txt-color-red login-header-big">SmartAdmin</h1>*/}

                <div className="hero">
                  <div className="pull-left login-desc-box-l">
                    {/*<h4 className="paragraph-header">It's Okay to be Smart. Experience the simplicity of SmartAdmin,*/}
                      {/*everywhere you go!</h4>*/}

                    <div className="login-app-icons">
                      {/*<a href="#/dashboard" className="btn btn-danger btn-sm">Frontend Template</a>*/}
                      <span> </span>
                      {/*<a href="#/smartadmin/different-versions.html" className="btn btn-danger btn-sm">Find out more</a>*/}
                    </div>
                  </div>
                  {/*<img src="assets/img/demo/iphoneview.png" className="pull-right display-image" alt=""*/}
                       {/*style={{width: '210px'}}/>*/}
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    {/*<h5 className="about-heading">About SmartAdmin - Are you up to date?</h5>*/}

                    {/*<p>*/}
                      {/*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque*/}
                      {/*laudantium, totam rem aperiam, eaque ipsa.*/}
                    {/*</p>*/}
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    {/*<h5 className="about-heading">Not just your average template!</h5>*/}

                    {/*<p>*/}
                      {/*Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta*/}
                      {/*nobis est eligendi voluptatem accusantium!*/}
                    {/*</p>*/}
                  </div>
                </div>
              </div> 
               
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                <div className="well no-padding">
                  <UiValidate>
                    <form action="#/dashboard" id="login-form" className="smart-form client-form">
                      <header>
                        Sign In
                      </header>
                      <fieldset>
                        <section>
                          <label className="label">E-mail</label>
                          <label className="input"> <i className="icon-append fa fa-user"/>
                            <input type="email" name="email" data-smart-validate-input="" data-required="" data-email=""
                                   data-message-required="Please enter your email address"
                                   data-message-email="Please enter a VALID email address"
                                   onChange={this.onchangeuser.bind(this)}
                            />
                            <b className="tooltip tooltip-top-right"><i className="fa fa-user txt-color-teal"/>
                              Please enter email address/username</b></label>
                        </section>
                        <section>
                          <label className="label">Password</label>
                          <label className="input"> <i className="icon-append fa fa-lock"/>
                            <input type="password" name="password" data-smart-validate-input="" data-required=""
                                   data-minlength="3" data-maxnlength="20"
                                   data-message="Please enter your email password" onChange={this.onchangepassword.bind(this)} />
                            <b className="tooltip tooltip-top-right"><i className="fa fa-lock txt-color-teal"/> Enter
                              your password</b> </label>

                          <div className="note">
                            {/*<a href="#/forgot">Forgot password?</a>*/}
                          </div>
                        </section>
                        <section>
                          <label className="checkbox">
                            <input type="checkbox" name="remember" defaultChecked={true}/>
                            <i/>Stay signed in</label>
                        </section>
                      </fieldset>
                      <footer>
                        <button type="submit" onClick={this.login.bind(this)} className="btn btn-primary">
                          Sign in
                        </button>
                      </footer>
                    </form>
                  </UiValidate>
                </div>
                {/*<h5 className="text-center"> Don't have an account? </h5>*/}
                {/*<a href="#/register" className="btn btn-danger">Create account</a> */}
                
                {/* <ul className="list-inline text-center">
                  <li>
                    <a href="#" className="btn btn-primary btn-circle"><i className="fa fa-facebook"/></a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-info btn-circle"><i className="fa fa-twitter"/></a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-warning btn-circle"><i className="fa fa-linkedin"/></a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}