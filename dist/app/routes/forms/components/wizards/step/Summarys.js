import React from 'react'
import Alert from "react-bootstrap/lib/Alert";
import {WidgetGrid, JarvisWidget}  from '../../../../../components'
import FamilySum from '../SummaryData/FamilySum';
import BusinessSum from '../SummaryData/BusinessSum';
import FinancialSum from '../SummaryData/FinancialSum';
import LoanSum from "../SummaryData/LoanSum";
import PersonalSum from '../SummaryData/PersonalSum';
import BankSum from '../SummaryData/BankSum';
import {loanvalue} from "./Loan";
import {loanName,loanAmount,purposeofloan,tenor} from "./Loan";
import {personelvalue} from "./Personal";
import {Addressvalue} from "./Address";
import {fullname,mobilephone,landline,placeofbirth,dateofbirth,Gender,maritalstatus,idtype,idnumber,education,email } from "./Personal";
import AddressSum from "../SummaryData/AddressSum";
import {idcity, idcity2, idcity3, idcity4, namecity, namecity2, namecity3, namecity4} from "../Type/TypeCity";
import {mainaddress,provincename,postalcode,ownershipstatus,isCollateral,livedinaddress,location} from "./Address";
import {filedocument} from "./Document";
import {filedocumentVehicle} from "../CollateralVehicle";
import {filedocumentRealEstate} from "../CollateralRealEstate";
import {filedocumentbank} from "../CollateralBank";
import {
    idkec,
    idkec2,
    idkec3, idkec4,
    namekecamatan,
    namekecataman2,
    namekecataman3,
    namekecataman4,
    idkelurahan
} from "../Type/typeDistrict";
import {mainaddress2, provincename2, postalcode2, ownershipstatus2, isCollateral2, Addressvalue2} from "./Address2";
import {familyvalue} from "./Family";
import {emergencycontact,addressemergencycontact,mobilephoneemergencycontact} from "./Family";
import {businessvalue} from "./Business";
import {companyname,companyaddress,provincenamebusiness,divisionname,positionname,durationtime,totalnumberemp,businessline} from "./Business";
import {financialvalue} from "./Financial";
import {typeincome,mainincome,sideincome,expense,addtionalexpense,typevehiclefinancial,vehicleowner} from "./Financial";
import {bankvalue} from "./Bank";
import {bankname,acctypename,accnumber,iscc} from "./Bank";
import CollateralView from "../View/CollateralView";
import {collateralvalue,selectcollateral} from "./SelectCollateral";
import {bankcc, creditcardvalue, numbercc,typecreditcard} from "./CreditCard";
import {
    typeofrealestate,
    condition,
    yearbuild,
    rooms,
    addresss,
    provincee,
    sizee,
    proofownership,
    isuploadfileRE,
    valueCollateralRealEstate
} from "../CollateralRealEstate";
import {typevehicle, years, millage, isuploadfileVehicle, valueColleteralVehicle} from "../CollateralVehicle";
import {brandid, brandname, transmisiionname, transmisionid} from "../TypeVehicle";
import {modeilid, modelname} from "../ModelVehicle";
import {
    bankName,
    amount,
    currency,
    accnumberColateralbank,
    duedate,
    isuploadfileBank,
    valuecollateraldeposit
} from "../CollateralBank";
import {postLoan, uploadFile} from "../actions/loanActions";
import LanguageStore from "../../../../../components/i18n/LanguageStore";
import {keyset, suburlcreateapp,suburlsubmitapp} from "../../../../../config/baseUrl";
import {suburlmultiplefile} from "../../../../../config/baseUrl";
import {info} from "../../../../auth/containers/Login";
import {convertByteToMB} from "../../../../../config/FunctionGlobal";
import {msglimitfile} from "../../../../../config/KosaKata";
import {DecrypsCode} from "../../../../../config/Encrypt";

export default class Summarys extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            valueid:'',
            personel:'',
            address:'',
            family:'',
            business:'',
            financial:'',
            bank:'',
            collateral:'',
            loanapp:[],
            allvalue:{
                loanvalue:{},
                personelvalue:{},
                Addressvalue:{},
                Addressvalue2:{},
                familyvalue:{},
                businessvalue:{},
                financialvalue:{},
                bankvalue:{},
                collateralvalue:{},
            }
        }
    }
    onClickSubmit(){
        this.props.appPost()
        this.props.onSubmitData()
    }
    componentDidMount(){
        // this.state.loanapp = loanvalue;
        console.log("Summaryyys")
    }
    componentDidUpdate() {
        console.log("updatee")
    }
    handleClickLoanApp = (e) => {
        this.setState({valueid: e.target.value});
    }
    handleClickLoanPersonel = (e) => {
        this.setState({personel: e.target.value});
    }
    handleClickLoanAddress = (e) => {
        this.setState({address: e.target.value});
    }
    handleClickLoanFamilyInfo = (e) => {
        this.setState({family: e.target.value});
    }
    handleClickLoanBusinessInfo = (e) => {
        this.setState({business: e.target.value});
    }
    handleClickLoanFinancialInfo = (e) => {
        this.setState({financial: e.target.value});
    }
    handleClickLoanBankInfo = (e) => {
        this.setState({bank: e.target.value});
    }
    handleClickLoanCollateralInfo = (e) => {
        this.setState({collateral: e.target.value});
    }
    handletest = () => {
        alert('Jalan ')
    }
    onSubmit= () => {
        if(window.confirm('Are you sure you want to save it ?')){
        var value = this.state.allvalue
        Addressvalue.idregencies = idcity;
        Addressvalue.iddistrict = idkec;
        Addressvalue.idvillage = idkelurahan

        Addressvalue2.idregencies = idcity2;
        Addressvalue2.iddistrict = idkec2;

        businessvalue.idregencies = idcity3;
        businessvalue.iddistrict = idkec3;

        valueCollateralRealEstate.regenciesid = idcity4;
        valueCollateralRealEstate.districtid = idkec4;

        valueColleteralVehicle.brand = brandid
        valueColleteralVehicle.typetransmision = transmisionid;
        valueColleteralVehicle.model = modeilid;

        value.loanvalue = loanvalue;
        value.personelvalue = personelvalue;
        value.Addressvalue = Addressvalue;
        value.Addressvalue2 = Addressvalue2;
        value.familyvalue = familyvalue;
        value.businessvalue = businessvalue;
        value.financialvalue = financialvalue;
        value.bankvalue = bankvalue;
        value.collateralvalue = collateralvalue;
        this.setState(value);
        var status = 0;
        var paramloan = {
            applicationID: "",
            status: "OPEN",
            score: 0,
            isdraft: "N",
            createdby:JSON.parse(DecrypsCode(localStorage.getItem(keyset))).id,
            appLoan: this.state.allvalue.loanvalue,
            appPersonel: this.state.allvalue.personelvalue,
            appAddress1: this.state.allvalue.Addressvalue,
            appAddress2: this.state.allvalue.Addressvalue2,
            appFamily: this.state.allvalue.familyvalue,
            appBusiness: this.state.allvalue.businessvalue,
            appFinancial: this.state.allvalue.financialvalue,
            appBank: this.state.allvalue.bankvalue,
            appCollateral: this.state.allvalue.collateralvalue,
            appCollateralRealEstate: valueCollateralRealEstate,
            appCollateralVehicle: valueColleteralVehicle,
            appCollateralDeposit: valuecollateraldeposit,
            creditcard: creditcardvalue
        }
        var msg = "";
        var arraymsg = [];
        //Loan Check
        if (paramloan.appLoan.loanProductId == "0" || paramloan.appLoan.loanProductId == "") {
            msg = "Loan = Product harus diisi \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appLoan.loanAmount == "0" || paramloan.appLoan.loanAmount == "") {
            msg = "Loan = Amount harus lebih besar dari 0 \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appLoan.loanPurpose == "0" || paramloan.appLoan.loanPurpose == "") {
            msg = "Loan = Purpose harus diisi \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appLoan.loanTenor == "0" || paramloan.appLoan.loanTenor == "") {
            msg = "Loan = Tenor harus lebih besar dari 0 \r\n ";
            arraymsg.push(msg);
        }

        //Check Personel
        if (paramloan.appPersonel.fullname == "") {
            msg = "Personal = Full Name Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appPersonel.mobilephone == "") {
            msg = "Personal = MobilePhone Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appPersonel.placeofbirth == "") {
            msg = "Personal = Place Of Birth Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        var flagdateofbirth = true

        if (paramloan.appPersonel.dateofbirth == "0" || paramloan.appPersonel.dateofbirth == 0 || paramloan.appPersonel.dateofbirth == "") {
            msg = "Personal = Date Of Birth Harus Diisi  \r\n ";
            arraymsg.push(msg);
            flagdateofbirth = false
        }
        var flaggender = true
        if (paramloan.appPersonel.gender == "") {
            msg = "Personal = Gender Harus Diisi  \r\n ";
            arraymsg.push(msg);
            flaggender = false
        }
        if (paramloan.appPersonel.idtype == "") {
            msg = "Personal = Type ID Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appPersonel.idnumber == "") {
            msg = "Personal = Number ID Harus Diisi  \r\n ";
            arraymsg.push(msg);
        } else {
            if (paramloan.appPersonel.idtype == "KTP") {
                var idnumber = paramloan.appPersonel.idnumber;
                if (idnumber.length > 16 || idnumber.length < 16) {
                    msg = "Personal = Number ID Harus 16 Character  \r\n ";
                    arraymsg.push(msg);
                } else {
                    idnumber = idnumber.substring(6, 12);
                    var datektp = idnumber.substring(0, 2);
                    var monthktp = idnumber.substring(2, 4);
                    var yearktp = idnumber.substring(4, 6);
                    if (flagdateofbirth && flaggender) {
                        var tempdate = new Date(paramloan.appPersonel.dateofbirth);
                        var month = (tempdate.getMonth() + 1);
                        var date = tempdate.getDate()
                        var year = tempdate.getFullYear()
                        if (month < 10) {
                            month = "0" + month;
                        }
                        if (date < 10) {
                            date = "0" + date;
                        }
                        year = year.toString().substring(2, 4);
                        if (paramloan.appPersonel.gender == "F") {
                            date += 40;
                        }
                        if (datektp !== date.toString() || monthktp !== month.toString() || yearktp !== year.toString()) {
                            msg = "Personal = Number ID Tidak Sesuai  \r\n ";
                            arraymsg.push(msg);
                        }
                    } else {
                        msg = "Personal = Number ID Tidak Sesuai  \r\n ";
                        arraymsg.push(msg);
                    }

                }
            }
        }
        if (paramloan.appPersonel.education == "") {
            msg = "Personal = Education Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appPersonel.maritalstatus == "") {
            msg = "Personal = maritalstatus Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appPersonel.numberofdependant == "") {
            if (paramloan.appPersonel.maritalstatus !== "" && paramloan.appPersonel.maritalstatus !== "Single") {
                msg = "Personal = numberofdependant Harus Diisi  \r\n ";
                arraymsg.push(msg);
            }
        }
        if (paramloan.appPersonel.email == "") {
            msg = "Personal = email Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }

        //Check Address
        if (paramloan.appAddress1.mainaddress == "") {
            msg = "Main Addres = Addres Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appAddress1.province == "") {
            msg = "Main Addres = province Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appAddress1.postalcode == "") {
            msg = "Main Addres = postalcode Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appAddress1.ownershipstatus == "") {
            msg = "Main Addres = ownershipstatus Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appAddress1.collateral == "") {
            msg = "Main Addres = collateral Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appAddress1.livedinyears == "") {
            msg = "Main Addres = livedinyears Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appAddress1.idregencies == "0") {
            msg = "Main Addres = City Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appAddress1.iddistrict == "0") {
            msg = "Main Addres = District Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appAddress1.location == "") {
            msg = "Main Addres = location Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appAddress1.rt == "") {
            msg = "Main Addres = RT Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }else{
            if(isNaN(paramloan.appAddress1.rt)){
                msg = "Main Addres = RT Harus Diisi  \r\n ";
                arraymsg.push(msg);
            }
        }
        if (paramloan.appAddress1.rw == "") {
            msg = "Main Addres = RW Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }else{
            if(isNaN(paramloan.appAddress1.rw)){
                msg = "Main Addres = RW Harus Diisi  \r\n ";
                arraymsg.push(msg);
            }
        }

        if (paramloan.appAddress1.idvillage == 0 || paramloan.appAddress1.idvillage == "0") {
            msg = "Main Addres = Kelurahan Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }

        //check second address
        if (paramloan.appAddress2.mainaddress !== "") {
            if (paramloan.appAddress2.province == "") {
                msg = "Second Addres = province Harus Diisi  \r\n ";
                arraymsg.push(msg);
            }
            if (paramloan.appAddress2.postalcode == "") {
                msg = "Second Addres = postalcode Harus Diisi  \r\n ";
                arraymsg.push(msg);
            }
            if (paramloan.appAddress2.ownershipstatus == "") {
                msg = "Second Addres = ownershipstatus Harus Diisi  \r\n ";
                arraymsg.push(msg);
            }
            if (paramloan.appAddress2.collateral == "") {
                msg = "Second Addres = collateral Harus Diisi  \r\n ";
                arraymsg.push(msg);
            }
            if (paramloan.appAddress2.idregencies == "0") {
                msg = "Second Addres = city Harus Diisi  \r\n ";
                arraymsg.push(msg);
            }
            if (paramloan.appAddress2.iddistrict == "0") {
                msg = "Second Addres = District Harus Diisi  \r\n ";
                arraymsg.push(msg);
            }
        }
        //checkfamily
        if (paramloan.appFamily.emergencycontact == "") {
            msg = "Family = emergencycontact Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appFamily.addressemergencycontact == "") {
            msg = "Family = address emergency contact Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appFamily.mobilephoneemergencycontact == "") {
            msg = "Family = Mobile Phone Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }

        //check business
        if (paramloan.appBusiness.companyaddress == "") {
            msg = "Business = company address Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appBusiness.province == "0") {
            msg = "Business = province Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appBusiness.division == "0") {
            msg = "Business = division Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appBusiness.position == "0") {
            msg = "Business = position Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appBusiness.duration == "0" || paramloan.appBusiness.duration == "") {
            msg = "Business = duration Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appBusiness.totalnumberemp == "0" || paramloan.appBusiness.totalnumberemp == "") {
            msg = "Business = total number employee Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appBusiness.businessline == "0" || paramloan.appBusiness.businessline == "") {
            msg = "Business = businessline Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appBusiness.idregencies == "0" || paramloan.appBusiness.idregencies == "") {
            msg = "Business = City Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appBusiness.iddistrict == "0" || paramloan.appBusiness.iddistrict == "") {
            msg = "Business = District Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }

        //check financial
        if (paramloan.appFinancial.typeincome == "0" || paramloan.appFinancial.typeincome == "") {
            msg = "Financial = Type Income Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appFinancial.mainincome == "0" || paramloan.appFinancial.mainincome == "") {
            msg = "Financial = Main Income Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appFinancial.sideincome == "") {
            msg = "Financial = Side Income Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appFinancial.expense == "0" || paramloan.appFinancial.expense == "") {
            msg = "Financial = Expense Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appFinancial.addtionalexpense == "") {
            msg = "Financial = addtional expense Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appFinancial.vehicleowner == "") {
            msg = "Financial = vehicleowner Harus Diisi  \r\n ";
            arraymsg.push(msg);
        } else {
            if (paramloan.appFinancial.vehicleowner == "Y") {
                if (paramloan.appFinancial.typevehicle == "") {
                    msg = "Financial = Type Vehicle Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
            }
        }

        //check bank
        if (paramloan.appBank.bank == "") {
            msg = "Bank = Bank Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appBank.acctype == "") {
            msg = "Bank = Acc Type Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appBank.accnumber == "") {
            msg = "Bank = Acc Number Harus Diisi  \r\n ";
            arraymsg.push(msg);
        }
        if (paramloan.appBank.iscc == "") {
            msg = "Bank = Credit Card Harus Diisi  \r\n ";
            arraymsg.push(msg);
        } else {
            if (paramloan.appBank.iscc == "Y") {
                if (paramloan.creditcard.issuerid == "0") {
                    msg = "Bank = Issuer Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.creditcard.numbercreditcard == "") {
                    msg = "Bank = Number Credit Card Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
            }
        }

        //check Collateral
        if (paramloan.appCollateral.valueC == "") {
            msg = "Collateral = Collateral Harus Diisi  \r\n ";
            arraymsg.push(msg);
        } else {
            if (paramloan.appCollateral.valueC == "RealEstate") {
                if (paramloan.appCollateralRealEstate.typerealestate == "") {
                    msg = "Collateral Real Estate = Type Collateral Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralRealEstate.condition == "") {
                    msg = "Collateral Real Estate = condition Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralRealEstate.year == "0") {
                    msg = "Collateral Real Estate = year Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralRealEstate.rooms == "0" || paramloan.appCollateralRealEstate.rooms == "") {
                    msg = "Collateral Real Estate = rooms Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralRealEstate.address == "") {
                    msg = "Collateral Real Estate = address Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralRealEstate.provinceid == "0") {
                    msg = "Collateral Real Estate = province Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralRealEstate.regenciesid == "0") {
                    msg = "Collateral Real Estate = city Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralRealEstate.districtid == "0") {
                    msg = "Collateral Real Estate = district Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralRealEstate.size == "") {
                    msg = "Collateral Real Estate = size Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralRealEstate.proofofownership == "") {
                    msg = "Collateral Real Estate = proofofownership Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
            } else if (paramloan.appCollateral.valueC == "Vehicle") {
                if (paramloan.appCollateralVehicle.typevehicle == "") {
                    msg = "Collateral Vehicle = Type Vehicle Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralVehicle.brand == "") {
                    msg = "Collateral Vehicle = brand Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralVehicle.typetransmision == "") {
                    msg = "Collateral Vehicle = typetransmision Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralVehicle.typetransmision == "") {
                    msg = "Collateral Vehicle = typetransmision Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralVehicle.year == "0") {
                    msg = "Collateral Vehicle = year Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralVehicle.mileage == "") {
                    msg = "Collateral Vehicle = mileage Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralVehicle.model == "") {
                    msg = "Collateral Vehicle = model Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
            } else if (paramloan.appCollateral.valueC == "Deposit") {
                if (paramloan.appCollateralDeposit.bankid == "0") {
                    msg = "Collateral Deposit = bank Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralDeposit.amount == "0" || paramloan.appCollateralDeposit.amount == "") {
                    msg = "Collateral Deposit = Amount Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralDeposit.currency == "") {
                    msg = "Collateral Deposit = currency Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralDeposit.accountnumber == "") {
                    msg = "Collateral Deposit = accountnumber Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
                if (paramloan.appCollateralDeposit.duedate == "0" || paramloan.appCollateralDeposit.duedate == "") {
                    msg = "Collateral Deposit = due date Harus Diisi  \r\n ";
                    arraymsg.push(msg);
                }
            }
        }
            var size = 0;
            var sizefile = JSON.parse(DecrypsCode(localStorage.getItem(keyset))).sizefile
            if (filedocument.filedoc.length > 0) {
                size += paramsfile.totalsize
            }
            if (filedocumentRealEstate.filedoc.length > 0) {
                size += filedocumentRealEstate.totalsize
            }
            if (filedocumentVehicle.filedocvehicle.length > 0) {
                size += filedocumentVehicle.totalsize
            }
            if (filedocumentbank.filedoc.length > 0) {
                size += filedocumentbank.totalsize
            }
            var totalSizeMB = convertByteToMB(size);
            if (sizefile > totalSizeMB) {

            }else{
                msg = msglimitfile(sizefile)+" \r\n ";
                arraymsg.push(msg);
            }
        if (msg == "") {
            var url = suburlsubmitapp;
            fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(paramloan)
                })
                .then(response => response.json())
                .then(respon => {
                    if (filedocument.filedoc.length > 0) {
                        var parms = {
                            'filedoc': filedocument.filedoc,
                            'description': filedocument.description
                        }
                        uploadFile(parms, respon.data.applicationid, 'appdocument')
                    }
                    if (filedocumentVehicle.filedocvehicle.length > 0) {
                        var parms = {
                            'filedoc': filedocumentVehicle.filedocvehicle,
                            'description': ''
                        }
                        uploadFile(parms, respon.data.applicationid, 'colvehicle')
                    }
                    if (filedocumentRealEstate.filedoc.length > 0) {
                        var parms = {
                            'filedoc': filedocumentRealEstate.filedoc,
                            'description': ''
                        }
                        uploadFile(parms, respon.data.applicationid, 'colrealestate')
                    }
                    if (filedocumentbank.filedoc.length > 0) {
                        var parms = {
                            'filedoc': filedocumentbank.filedoc,
                            'description': ''
                        }
                        uploadFile(parms, respon.data.applicationid, 'colbank')
                    }
                    alert('Sukses Menyimpan')
                })
        } else {
            msg = "";
            for (var i = 0; i <= 9; i++) {
                if (arraymsg.length > i) {
                    msg += arraymsg[i];
                }
            }
            alert(msg);
        }
    }
        // postLoan(paramloan)
    }
    uploadFile(params,applicationid,docfor){
        // return dispatch => {
        var filedocument = params;
        var url = suburlmultiplefile;
        // console.log('LOAN urlnew ', ur)
        // const fileInput = document.querySelector('file');
        const formData = new FormData();
        for(var i=0; i < filedocument.filedoc.length; i++) {
            formData.append('file', filedocument.filedoc[i], filedocument.filedoc[i].name);
        }
        formData.append('description', filedocument.description);
        formData.append('applicationid', applicationid);
        formData.append('docfor', docfor);
        fetch(url,
            {
                method: 'POST',
                body: formData,
            })
        // .then(dispatch(updateLoan(params)))
            .then(response => response.json())
            .then(respon => {

            })
        // console.log('LOAN POSTED', params)
        // }
    }
    render(){
        return(
            <div>
                 <WidgetGrid sortable={false}>
            <div className="row">
              <article className="col-md-8">
              <JarvisWidget colorbutton={false} editbutton={false}
                            custombutton={false}
                            color="blueDark"  >

                <header onClick={this.handleClickLoanApp} value={loanvalue.loanProductId}>
                    <span className="widget-icon"> </span>
                          <h2>{LanguageStore.translate('Loan Application')}</h2>
                </header>
                  <div>
                      <LoanSum
                          loanName={loanName}
                          loanAmount={loanAmount}
                          purposeofloan={purposeofloan}
                          tenor={tenor}
                      />
                  </div>
              </JarvisWidget>
              </article>
                <article className="col-md-8">
                <JarvisWidget colorbutton={false} editbutton={false}
                                custombutton={false}
                                color="blueDark" >
                    <header onClick={this.handleClickLoanPersonel} value={personelvalue.fullname}>
                        <span className="widget-icon"> </span>
                            <h2>{LanguageStore.translate('Personal Information')}</h2>

                    </header>
                    <div>
                        <PersonalSum
                            fullname={fullname}
                            mobilephone={mobilephone}
                            landline={landline}
                            placeofbirth={placeofbirth}
                            dateofbirth={dateofbirth}
                            Gender={Gender}
                            maritalstatus={maritalstatus}
                            idtype={idtype}
                            idnumber={idnumber}
                            education={education}
                            email={email}
                        />
                    </div>
                    </JarvisWidget>
                    </article>
                    <article className="col-md-8">
                    <JarvisWidget colorbutton={false} editbutton={false}
                                    custombutton={false}
                                    color="blueDark">
                        <header onClick={this.handleClickLoanAddress} value={Addressvalue.mainaddress}>
                            <span className="widget-icon"> </span>
                                <h2>{LanguageStore.translate('Address')}</h2>

                        </header>
                        <div>
                            <AddressSum
                                location={location}
                                namecity={namecity}
                                mainaddress={mainaddress}
                                provincename={provincename}
                                namekecamatan={namekecamatan}
                                postalcode={postalcode}
                                ownershipstatus={ownershipstatus}
                                isCollateral={isCollateral}
                                livedinaddress={livedinaddress}
                                namecity2={namecity2}
                                mainaddress2={mainaddress2}
                                provincename2={provincename2}
                                namekecataman2={namekecataman2}
                                postalcode2={postalcode2}
                                ownershipstatus2={ownershipstatus2}
                                isCollateral2={isCollateral2}
                            />
                        </div>
                 </JarvisWidget>
                 </article>
                 <article className="col-md-8">
                    <JarvisWidget colorbutton={false} editbutton={false}
                                    custombutton={false}
                                    color="blueDark">
                        <header onClick={this.handleClickLoanFamilyInfo} value={familyvalue.emergencycontact}>
                            <span className="widget-icon"> </span>
                                <h2>{LanguageStore.translate('Family Information')}</h2>

                        </header>
                        <div>
                            <FamilySum
                                emergencycontact={emergencycontact}
                                addressemergencycontact={addressemergencycontact}
                                mobilephoneemergencycontact={mobilephoneemergencycontact}
                            />
                        </div>
                 </JarvisWidget>
                 </article>
                 <article className="col-md-8">
                    <JarvisWidget colorbutton={false} editbutton={false}
                                    custombutton={false}
                                    color="blueDark">
                        <header onClick={this.handleClickLoanBusinessInfo} value={businessvalue.companyname}>
                            <span className="widget-icon"> </span>
                                <h2>{LanguageStore.translate('Business Information')}</h2>

                        </header>
                        <div>
                            <BusinessSum
                                companyname = {companyname}
                                companyaddress = {companyaddress}
                                provincename = {provincenamebusiness}
                                namecity3 = {namecity3}
                                namekecataman3 = {namekecataman3}
                                divisionname = {divisionname}
                                positionname={positionname}
                                durationtime={durationtime}
                                totalnumberemp={totalnumberemp}
                                businessline={businessline}
                            />
                        </div>
                 </JarvisWidget>
                 </article>
                 <article className="col-md-8">
                    <JarvisWidget colorbutton={false} editbutton={false}
                                    custombutton={false}
                                    color="blueDark">
                        <header onClick={this.handleClickLoanFinancialInfo} value={financialvalue.mainincome}>
                            <span className="widget-icon"> </span>
                                <h2>{LanguageStore.translate('Financial Information')}</h2>

                        </header>
                        <div>
                            <FinancialSum
                                typeincome = {typeincome}
                                mainincome = {mainincome}
                                sideincome = {sideincome}
                                expense = {expense}
                                addtionalexpense = {addtionalexpense}
                                vehicleowner={vehicleowner}
                                typevehicle={typevehiclefinancial}
                            />
                        </div>
                 </JarvisWidget>
                 </article>
                 <article className="col-md-8">
                    <JarvisWidget colorbutton={false} editbutton={false}
                                    custombutton={false}
                                    color="blueDark">
                        <header onClick={this.handleClickLoanBankInfo} value={bankvalue.bank}>
                            <span className="widget-icon"> </span>
                                <h2>{LanguageStore.translate('Bank Information')}</h2>

                        </header>
                        <div>
                            {/*//bankname,acctypename,accnumber,iscc*/}
                            <BankSum
                                bankname={bankname}
                                acctypename={acctypename}
                                accnumber={accnumber}
                                iscc={iscc}
                                bankcc={bankcc}
                                numbercc={numbercc}
                                typecreditcard={typecreditcard}
                            />
                        </div>
                 </JarvisWidget>
                 </article>
                 <article className="col-md-8">
                    <JarvisWidget colorbutton={false} editbutton={false}
                                    custombutton={false}
                                    color="blueDark">
                        <header onClick={this.handleClickLoanCollateralInfo} value={collateralvalue.valueC}>
                            <span className="widget-icon"> </span>
                                <h2>{LanguageStore.translate('Collateral')}</h2>
                        </header>
                        <div>
                           <CollateralView
                               typecollateral={selectcollateral}
                               typeofrealestate={typeofrealestate}
                               condition={condition}
                               yearbuild={yearbuild}proofownership={proofownership}
                               rooms={rooms}addresss={addresss}provincee={provincee}sizee={sizee}
                               namecity4={namecity4}namekecataman4={namekecataman4}isuploadfileRE={isuploadfileRE}

                               typevehicle={typevehicle}years={years}millage={millage}
                               brandname={brandname}transmisiionname={transmisiionname}
                               modelname={modelname}isuploadfileVehicle={isuploadfileVehicle}

                               bankName={bankName}amount={amount}currency={currency}
                               accnumber={accnumberColateralbank}duedate={duedate}isuploadfileBank={isuploadfileBank}
                           />
                        </div>
                 </JarvisWidget>
                 </article>
                
                 <footer className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <a  className="btn btn-primary"
                            onClick={this.onSubmit}
                        >
                          Submit
                        </a>
                    </footer>
                </div> 
              </WidgetGrid> 
             </div>
            
        )
        
    }
}