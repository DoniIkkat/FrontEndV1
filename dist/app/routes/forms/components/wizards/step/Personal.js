import React from 'react'
import NumberFormat from 'react-number-format';
import {loanvalue} from "./Loan";
import Spouse from "./family/Spouse";
import LanguageStore from "../../../../../components/i18n/LanguageStore";
import '../../../../../../assets/css/styleDiv.css'
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import '../../../../../../assets/css/styleCustomerTable.css'
import '../../../../../../assets/css/spinnercycle.css'
import '../../../../../../assets/css/formoverlay.css'
import {valuerulesfilter} from "../../../../rulesfilter/components/RulesFilter";
import {suburlFindCustomer, suburlsubmitapp,suburllistreligion} from "../../../../../config/baseUrl";
import {longToDate} from "../../../../../config/FunctionGlobal";

export var personelvalue = {fullname: "",
    mobilephone:"",
    landlinephone:"",
    placeofbirth:"",
    dateofbirth:0,
    gender:"",
    idtype:"KTP",
    idnumber:"",
    education:"",
    maritalstatus:"",
    email:"",
    numberofdependant:0,
    cfiid:"",
    customerid:"",
    religionid:"",
taxnumber:""};
export var fullname='',mobilephone='',landline='',placeofbirth='',dateofbirth='',Gender='',maritalstatus='';
export var idtype='',idnumber='',education='',email='';
var flag = false;
var mydatebirth = "";
var custid = "";
export function choosecustid(id){
    custid = id;
}
export default class Personal extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
      personal: this.props.personal_state,
        valuepersonal:{
            fullname: "",
            mobilephone:"",
            landlinephone:"",
            placeofbirth:"",
            dateofbirth:0,
            gender:"",
            idtype:"KTP",
            idnumber:"",
            education:"",
            maritalstatus:"",
            email:"",
            numberofdependant:0,
            cfiid:"",
            customerid:"",
            religionid:"",
            taxnumber:""
        },
        valuediv:{
          display:'none'
        },
        listsearch:[],
        listreligion:[],
        valueflag:{
            flagdisplay:"none",
        }

    }
  }

    componentDidMount() {
        var url = suburllistreligion
        const otherPram={
            method:"GET",
            headers:{
                'content-type': 'application/json'
            }
        }
        fetch(url,otherPram)
            .then(response => response.json())
            .then(json =>
                this.setState({listreligion: json.data})
            )
        personelvalue =  this.state.valuepersonal;
    }
  onchangeName(e){
      fullname='';
      var str = e.target.value;
      fullname=str;
      var value = this.state.valuepersonal;
      value.fullname = str;
      this.setState(value);
      personelvalue = this.state.valuepersonal;
      flag = true;
  }

    onChangeTaxNumber(e){
        var str = e.target.value;
        var value = this.state.valuepersonal;
        value.taxnumber = str;
        this.setState(value);
        personelvalue = this.state.valuepersonal;
        flag = true;
    }
    onChangeNumberOfdependant(e){
        var str = e.target.value;
        var value = this.state.valuepersonal;
        value.numberofdependant = str;
        this.setState(value);
        personelvalue = this.state.valuepersonal;
        flag = true;
    }
    onchangeMobilePhone(e){
        mobilephone= '';
        var str = e.target.value;
        mobilephone = str;
        var value = this.state.valuepersonal;
        value.mobilephone = str;
        this.setState(value);
        personelvalue = this.state.valuepersonal;
        flag = true;
    }
    onchangeLandLinePhone(e){
        landline = '';
        var str = e.target.value;
        landline = str;
        var value = this.state.valuepersonal;
        value.landlinephone = str;
        this.setState(value);
        personelvalue = this.state.valuepersonal;
        flag = true;
    }
    onchangePlaceOfBirth(e){
        var str = e.target.value;
        placeofbirth = str;
        var value = this.state.valuepersonal;
        value.placeofbirth = str;
        this.setState(value);
        personelvalue = this.state.valuepersonal;
        flag = true;
    }
  onDate(e){ 
    // const value = `${e.target.value};T00:00:00.000+07:00`
    var str = e.target.value;
    dateofbirth = str;
    var value = this.state.valuepersonal;
    var dt = new Date(str);
    str = dt.getTime();
    value.dateofbirth = str;
    this.setState(value);
    personelvalue = this.state.valuepersonal;
      flag = true;
  }
    onChangeGender(e){
        var str = e.target.value;
        Gender = 'Female';
        if(str == "M"){
            Gender = 'Male';
        }
        var value = this.state.valuepersonal;
        value.gender = str;
        this.setState(value);
        personelvalue = this.state.valuepersonal;
        flag = true;
    }

    onChangeIDType(e){
        var str = e.target.value;
        idtype = str;
        var value = this.state.valuepersonal;
        value.idtype = str;
        this.setState(value);
        personelvalue = this.state.valuepersonal;
        flag = true;
    }
    onChangeIDNumber(e){
        var str = e.target.value;
        idnumber = str;
        var value = this.state.valuepersonal;
        value.idnumber = str;
        this.setState(value);
        personelvalue = this.state.valuepersonal;
        flag = true;
    }
    onChangeEducation(e){
        var str = e.target.value;
        education = str;
        var value = this.state.valuepersonal;
        value.education = str;
        this.setState(value);
        personelvalue = this.state.valuepersonal;
        flag = true;
    }


  toggleInfo(type) {
      flag = true;
    let state = {};
    state[type] = !this.state[type];
    this.setState(state);
    $(this.refs.form)
      .data("bootstrapValidator")
      .disableSubmitButtons(false);

  }

  onMaritalStatus(e){
      var str = e.target.value;
      maritalstatus = str;
      var value = this.state.valuepersonal;
      value.maritalstatus = str;
      this.setState(value);
      personelvalue = this.state.valuepersonal;
      {/*<Spouse*/}
      {/*    maritalstatus={str}*/}
      {/*/>*/}
      flag = true;
  }
    onEmail(e){
        var str = e.target.value;
        email = str;
        var value = this.state.valuepersonal;
        value.email = str;
        this.setState(value);
        personelvalue = this.state.valuepersonal;
        flag = true;
    }
  onChangePersonal(e){ 
    const value = e.target.value;
    const personalInput = e.target.name;
    this.setState(prevState =>({
      personal: {
          ...prevState.personal,
          [personalInput]: value
        }
    }),
    this.onReturnPersonal.bind(this)
    )
    console.log(this.state.personal)
  } 

  onchangereligion(e){
      const str = e.target.value;
      var value = this.state.valuepersonal;
      value.religionid = str;
      this.setState(value);
      personelvalue = this.state.valuepersonal;
      flag = true;
  }

  onReturnPersonal(){
    this.props.maritalStatus_update(this.state.personal.maritalStatus)
    this.props.personal_update(this.state.personal)
    this.props.onGetData()
  }
    setEntity() {
        var entity = this.props.datapersonel;
         mydatebirth = this.state.valuepersonal.dateofbirth;

        if (typeof entity !== "undefined" && !flag){
            this.state.valuepersonal.fullname = entity.name
            this.state.valuepersonal.mobilephone = entity.mobilephone
            this.state.valuepersonal.landlinephone = entity.landlinephone
            this.state.valuepersonal.placeofbirth = entity.placeofbirth
            this.state.valuepersonal.dateofbirth = entity.dateofbirth
            this.state.valuepersonal.gender = entity.gender
            this.state.valuepersonal.idtype = entity.typeid
            this.state.valuepersonal.idnumber = entity.idnumber
            this.state.valuepersonal.education = entity.education
            this.state.valuepersonal.maritalstatus = entity.maritalstatus
            this.state.valuepersonal.numberofdependant = entity.numberofdependant
            this.state.valuepersonal.email = entity.email
            personelvalue = this.state.valuepersonal;
            fullname = entity.name;
            mobilephone = entity.mobilephone
            landline = entity.landlinephone
            placeofbirth = entity.placeofbirth
            var strgender = LanguageStore.translate('Male')
            if(entity.gender == "F"){
                strgender = LanguageStore.translate('Female')
            }
            Gender = strgender
            maritalstatus = entity.maritalstatus
            idtype = entity.typeid
            idnumber = entity.idnumber
            education = entity.education
            email = entity.email
        }
        var tempdate = new Date(this.state.valuepersonal.dateofbirth);
        var month = (tempdate.getMonth() + 1);
        if(month < 10){
            month = "0"+month
        }
        var date = tempdate.getDate()
        if(date < 10){
            date = "0"+date;
        }
        mydatebirth = tempdate.getFullYear() + "-" + month + "-" + date;
        dateofbirth = mydatebirth
        flag = false;
    }
    handleclickToogle(){
        this.funconverlay("show")
      var param = {
          fullname:this.state.valuepersonal.fullname,
          dateofbirth:this.state.valuepersonal.dateofbirth,
          idnumber:this.state.valuepersonal.idnumber
      };

        var url = suburlFindCustomer
        fetch(url,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(param)
            })
            .then(response => response.json())
            .then(respon => {
                this.setState({listsearch: respon.data.list})
                var value = this.state.valuediv
                value.display =  'inline-block';
                this.setState(value);
                this.funconverlay("hide")
            })
    }
    funconverlay(type){
        var value = this.state.valueflag
        if(type == "show"){
            value.flagdisplay = "inline-block"
        }else if(type == "hide"){
            value.flagdisplay = "none"
        }
        this.setState(value);
    }
    handleclickSelect(){
        if(custid == ""){
            alert(LanguageStore("Choose Customer!"))
        }else {
            var search = this.state.listsearch.filter( (item) => {
                return item.idnumber == custid
            })
            var value = this.state.valuepersonal;
            search.map(function (item) {
                value.fullname = item.name;
                value.mobilephone = item.mobilephone;
                value.landlinephone = item.landlinephone;
                value.placeofbirth = item.placeofbirth;
                value.dateofbirth = item.dateofbirthlong;
                value.gender = item.gender;
                value.idtype = item.typeid;
                value.idnumber = item.idnumber;
                value.education = item.education;
                value.maritalstatus = item.maritalstatus;
                value.email = item.email;
                value.cfiid = item.cif_id;
                value.customerid = item.customerid;
                mydatebirth = longToDate(item.dateofbirthlong)
            })
            this.setState(value);
            personelvalue = this.state.valuepersonal;

            var value = this.state.valuediv
            value.display = 'none';
            this.setState(value);
        }
        custid = ""
    }
    handleclickCancel(){
        var value = this.state.valuediv
        value.display =  'none';
        this.setState(value);
        custid = ""
    }
    onRowDoubleClick(row) {
        custid = row['id'];
    }
    onClickHandler = (e) => {
        const song = e.target.getAttribute('data-item');
        console.log('We need to get the details for ', song);
    }
    selectrowtable(e){

    }

    render(){
        var width = screen.width- (screen.width * 0.58);
        var height = screen.height - (screen.height * 0.1);
        var left = screen.width- (screen.width * 0.59);
        var right = screen.width - (screen.width * 0.58);
        right = -right+"px";
        const options = {
            onRowDoubleClick: this.onRowDoubleClick
            // insertBtn: this.createCustomInsertButton,
            // insertModalFooter: this.createCustomModalFooter,
            // afterInsertRow: this.onAfterInsertRow,
            // onDeleteRow: this.onDeleteRow,

        };
        const rowEvents = {
            onChange: (e, row, rowIndex) => {

            }
        };
        const selectRow = {
            mode: 'radio', //radio or checkbox
            showOnlySelected: false,

        };
        this.setEntity()
        var list = [{id:"cust123",name:"Cust Name"},{id:"cust124",name:"Cust Name 4"}]
        // var tesdate = "2019-12-10";
        return(
            <div>
                <div id="overlay" style={{display:this.state.valueflag.flagdisplay}}>
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="row" >

                <div className="wrapper" style={{width:width,height:height,left:left,display:this.state.valuediv.display}}>
                    <div id="slide" style={{width:width,height:height}}>
                        <table id="customers">
                            <tr>
                                <th>Choose</th>
                                <th>ID Number</th>
                                <th>Customer Name</th>
                            </tr>
                            {
                             this.state.listsearch.map(function (item) {
                                 return (
                                    <tr id={item.idnumber} value={item.idnumber} >
                                        <td ><input type="radio" name="customer" value={item.idnumber} onChange={choosecustid.bind(this,item.idnumber)} /> </td>
                                        <td>{item.idnumber}</td>
                                        <td>{item.name}</td>
                                    </tr>
                                 )
                            })
                            }
                        </table>
                        <br/>
                        <table>
                            <tr>
                                <td>
                                    <button
                                        onClick={this.handleclickSelect.bind(this)}
                                        type="button"
                                        className="btn btn-info btn-sm"
                                    >
                                        {LanguageStore.translate('Select')}
                                    </button>
                                </td>

                                <td style={{paddingLeft:"20px"}}>
                                    <button
                                        onClick={this.handleclickCancel.bind(this)}
                                        type="button"
                                        className="btn btn-info btn-sm"
                                    >
                                        {LanguageStore.translate('Cancel')}
                                    </button>
                                </td>
                            </tr>
                        </table>


                    </div>
                    {/*<img id="slide" src="http://lorempixel.com/output/cats-q-c-100-100-4.jpg"/>*/}
                </div>
                </div>
                <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                        <div className="inputGroup-sizing-default">
                             <h4  style={{float:"left"}}><b>{LanguageStore.translate('Full Name')}</b></h4>
                             <span className="text-danger">*</span>
                              <input className="form-control input-lg"
                                placeholder="Full Name" type="text" name="fullName"
                                  data-smart-validate-input="" data-required="" data-minlength="4"
                                   data-message="Please specify your Full name" value={this.state.valuepersonal.fullname}
                                onChange={this.onchangeName.bind(this)}
                              />

                        </div>
                      </div>
                    </div>
                 </div>
                <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                            {/*<div className="inputGroup-sizing-default">*/}
                            <h4 style={{float:"left"}}><b>{LanguageStore.translate('ID Number')}</b></h4>
                            <span className="text-danger">*</span>
                            <input className="form-control input-lg"
                                   placeholder="ID Number" /*type="number"*/
                                   name="idNum" data-smart-validate-input="" min="0"
                                   data-required="" data-minlength="16" data-maxlength="16"
                                   format=" ############" value={this.state.valuepersonal.idnumber}
                                   onChange={this.onChangeIDNumber.bind(this)}/>
                            {/*</div>*/}

                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4  style={{float:"left"}}><b>{LanguageStore.translate('Date of Birth')}</b></h4>
                                <i className="icon-append fa fa-calendar"/>
                                <input type="date" className="form-control"
                                       id="datepicker" placeholder= "dd/mm/yyyy"
                                       name="dateOfBirth"
                                       data-smart-validate-input="" data-required=""
                                       data-message="Please specify your date of birth" value={mydatebirth}
                                       onChange={this.onDate.bind(this)}
                                />
                                <br/>

                                <button
                                    onClick={this.handleclickToogle.bind(this)}
                                    id="roundButton"
                                    type="button"
                                    className="btn btn-info btn-sm"
                                >
                                    {LanguageStore.translate('Find')}
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4  style={{float:"left"}}><b>{LanguageStore.translate('Tax Number')}</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="Place Tax Number" type="text"
                                       name="placeOfBirth"
                                       data-smart-validate-input="" data-required="" data-minlength="20" data-maxLength="21"
                                       data-message="Please specify your Tax Number" value={this.state.valuepersonal.taxnumber}
                                       onChange={this.onChangeTaxNumber.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label><h4 style={{float:"left"}}><b>{LanguageStore.translate('Religion')}</b></h4></label>
                            <div className="inputGroup-sizing-default">
                                <select className="form-control input-lg "
                                        data-smart-validate-input="" data-required=""
                                        data-message-required="Please specify your Religion"
                                        name="Religion" defaultValue={"0"} value={this.state.valuepersonal.religionid}
                                        onChange={this.onchangereligion.bind(this)}>
                                    <option value="" selected={true}>Select Religion</option>
                                    {
                                        this.state.listreligion.map(function (item) {
                                            if(item.name !== '') {
                                                return (
                                                    <option key={item.id}
                                                            value={item.id}>{item.name}</option>
                                                )
                                            }
                                        })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>

                <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                        <div className="inputGroup-sizing-default">
                             <h4  style={{float:"left"}}><b>{LanguageStore.translate('Mobile Phone')}</b></h4>
                               <span className="text-danger">*</span>
                               <NumberFormat className="form-control input-lg" data-minLength="10"
                                data-required="" placeholder="Phone Number of Loan Applicant"
                                 format=" ############"  name="mobile"  data-maxLength="12" value={this.state.valuepersonal.mobilephone}
                                  onChange={this.onchangeMobilePhone.bind(this)} required />
                        </div>
                        <br />
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <button
                          type="button"
                          className="btn btn-info btn-sm"
                          onClick={this.toggleInfo.bind(this, "phoneInfo")}
                        >
                            {LanguageStore.translate('Add more phone numbers')}
                        </button>
                      </div>
                      </div>
                    </div>
                 </div>  
                 <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group"   id="phoneInfo"
                        style={{ display: this.state.phoneInfo ? "block" : "none" }}>
                        <br/>
                        <div className="inputGroup-sizing-default">
                             <h4  style={{float:"left"}}><b>{LanguageStore.translate('Landline')}</b></h4>
                              <NumberFormat className="form-control input-lg" data-minlength="4"
                                 placeholder="Landline of Loan Applicant"
                                 format="############"  name="landlinePhone"  data-minlength="10" data-maxLength="12"
                                  onChange={this.onchangeLandLinePhone.bind(this)} value={this.state.valuepersonal.landlinephone} />
                             
                        </div>
                      </div>
                    </div>
                 </div>
                 <br />
                 <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                        <div className="inputGroup-sizing-default">
                             <h4  style={{float:"left"}}><b>{LanguageStore.translate('Place of Birth')}</b></h4>
                             <input className="form-control input-lg"
                                        placeholder="Place of Birth" type="text" 
                                        name="placeOfBirth"
                                         data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="255"
                                         data-message="Please specify your place of birth" value={this.state.valuepersonal.placeofbirth}
                                         onChange={this.onchangePlaceOfBirth.bind(this)}
                              />
                        </div>
                      </div>
                    </div>
                 </div>   

                        <div className="row" >
                          <div className="col-sm-6">
                            <div className="form-group">
                              <h4  style={{float:"left"}}><b>{LanguageStore.translate('Gender')}</b></h4>
                              <br/>
                              <div className="col-xs-4 col-lg-8">
                            
                                      <div className="inputGroup-sizing-default">
                                          <label className="radio state-error" name="gender">
                                            <input type="radio" name="gender" value ="M" checked={this.state.valuepersonal.gender === 'M'} onChange={this.onChangeGender.bind(this)}/>
                                              {LanguageStore.translate('Male')}</label>
                                              &nbsp;&nbsp;&nbsp;
                                            <label className="radio">
                                            <input type="radio" name="gender" value="F" checked={this.state.valuepersonal.gender === 'F'} onChange={this.onChangeGender.bind(this)}/>
                                                {LanguageStore.translate('Female')}</label>
                                              {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                                      </div>
                            </div>
                        </div>
                      </div>
                  </div>  
                  <br/> 
                  {/*<div className="row" >*/}
                 {/*<div className="col-sm-6">*/}
                              {/*<div className="form-group">*/}
                                  {/*<h4  style={{float:"left"}}><b>{LanguageStore.translate('ID Type')}</b></h4>*/}
                                    {/*<span className="text-danger">*</span>*/}
                                  {/*<br/>*/}
                                  {/*<div className="col-sm-4 col-md-4 col-lg-8">*/}
                                    {/*<div className="inputGroup-sizing-default">*/}
                                        {/*<label className="radio state-error" >*/}
                                            {/*<input type="radio" name="idType"  */}
                                              {/*onChange={this.onChangeIDType.bind(this)} value="KTP" checked={this.state.valuepersonal.idtype === 'KTP'}/>*/}
                                              {/*KTP</label>*/}
                                              {/*&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                              {/*<label className="radio">*/}
                                              {/*<input type="radio" name="idType" */}
                                               {/*onChange={this.onChangeIDType.bind(this)} value="SIM" checked={this.state.valuepersonal.idtype === 'SIM'}/>*/}
                                              {/*SIM</label>*/}
                                              {/*&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                              {/*<label className="radio">*/}
                                              {/*<input type="radio" name="idType" */}
                                               {/*onChange={this.onChangeIDType.bind(this)} value="Passport" checked={this.state.valuepersonal.idtype === 'Passport'}/>*/}
                                              {/*Passport</label> */}
                                              {/*&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                    {/*</div>*/}
                           {/*</div>*/}
                      {/*</div>*/}
                    {/*</div>*/}
                 {/*</div>  */}
                 <br/>

                 <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                                <label><h4 style={{float:"left"}}><b>{LanguageStore.translate('Education')}</b></h4></label>
                              <div className="inputGroup-sizing-default">
                              <select className="form-control input-lg " 
                                        data-smart-validate-input="" data-required=""
                                        data-message-required="Please specify your education"
                                        name="education" defaultValue={"0"} value={this.state.valuepersonal.education}
                                        onChange={this.onChangeEducation.bind(this)}>
                                    <option value="" selected={true}>Select Education</option>
                                    <option value={'SD'}>SD</option>
                                    <option value={'SMP'}>SMP</option>
                                    <option value={'SMA'}>SMA</option>
                                    <option value={'D3'}>D3</option>
                                    <option value={'D4'}>D4</option>
                                    <option value={'S1'}>S1</option>
                                    <option value={'S2'}>S2</option>
                                    <option value={'S3'}>S3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                      </div>  
                  <br/> 
                 <div className="row" >
                         <div className="col-sm-6">
                          <div className="form-group">
                             <h4  style={{float:"left"}}><b>{LanguageStore.translate('Marital Status')}</b></h4>
                             <br/>
                             <div className="col-xs-4 col-lg-8">
                                    <div className="inputGroup-sizing-default">
                                        <label className="radio state-error">
                                          <input type="radio" name="maritalStatus"  onChange={this.onMaritalStatus.bind(this)} value="Single" checked={this.state.valuepersonal.maritalstatus === 'Single'}/>
                                            {LanguageStore.translate('Single')}</label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                          <label className="radio">
                                          <input type="radio" name="maritalStatus"  onChange={this.onMaritalStatus.bind(this)} value="Married" checked={this.state.valuepersonal.maritalstatus === 'Married'}/>
                                              {LanguageStore.translate('Married')}</label>
                                            &nbsp;&nbsp;&nbsp;
                                            <label className="radio">
                                          <input type="radio" name="maritalStatus" onChange={this.onMaritalStatus.bind(this)} value="Divorced" checked={this.state.valuepersonal.maritalstatus === 'Divorced'}/>
                                                {LanguageStore.translate('Divorced')}</label>
                                            &nbsp;&nbsp;&nbsp;
                                            <label className="radio">
                                          <input type="radio" name="maritalStatus"  onChange={this.onMaritalStatus.bind(this)} value="Widow" checked={this.state.valuepersonal.maritalstatus === 'Widow'}/>
                                                {LanguageStore.translate('Widow')}</label>
                                    </div>
                           </div>
                      </div>
                    </div>
                 </div>  
                 <br/>
                <div className="row" hidden={this.state.valuepersonal.maritalstatus === 'Single' || this.state.valuepersonal.maritalstatus === ''}>
                <div className="col-sm-6">
                    <div className="form-group">
                        <div className="inputGroup-sizing-default">
                            <h4  style={{float:"left"}}><b>{LanguageStore.translate('Number Of Dependant')}</b></h4>
                            <span className="text-danger">*</span>
                            <NumberFormat className="form-control input-lg" data-minLength="1"
                                          data-required="" placeholder="Number Of Dependant"
                                          format=" ##"  name="numberofdependant"  data-maxLength="2" value={this.state.valuepersonal.numberofdependant}
                                          onChange={this.onChangeNumberOfdependant.bind(this)} required />
                        </div>
                    </div>
                </div>
                </div>
            <br/>
                 <div className="row">
                      <div className="col-sm-6">
                          <div className="form-group">
                          <div className="inputGroup-sizing-default">
                                    <h4  style={{float:"left"}}><b>Email</b></h4>
                              
                                    <input className="form-control input-lg"
                                         placeholder="email@address.com" type="text"
                                         name="email" data-smart-validate-input=""
                                         data-required="" data-email=""
                                         data-message-required="We need your email address to contact you"
                                         data-message-email="Your email address must be in the format of name@domain.com"
                                           value={this.state.valuepersonal.email}
                                         onChange={this.onEmail.bind(this)}
                                    />
                              </div>
                          </div>
                      </div>
                  </div>

            </div>  
        )
        
    }
}