import React from 'react';  
import {Popup,PopupInner,ContentTitle,CloseButton,LogoContainer2,TabsContainer,RangeSliderContainer,Options,Options2,Options3,GenCleanIcon,AfterBuildIcon,EndTenancyIcon,SanitiseIcon,Fab2,Message,Message2,Wheelbarrow, Options4,Options5,Info,Flowers,Driveway,Maintanance,Installations,ServicePool,Options3p1,ServiceGridSplit,ServiceName,Form,ServiceTest} from './popupCleaner-styles'; 
import Outdoor from './outdoor/outdoor';
import Indoor from './indoor/indoor';
import Pool from './pool/pool';
import IndoorTCs from './indoor/TCs/indoorTCs';
import IndoorServicesInfo from './indoor/TCs/indoorServicesInfo';
import OutdoorServicesInfo from './outdoor/outdoorServicesInfo';
import PoolServicesInfo from './pool/poolServicesInfo';
import PromptSinIn from './promptSinIn';
import { isNaN, toString } from 'lodash';
import NumericTextboxComponent from '../TextBox';
import { Checkbox } from 'semantic-ui-react';
import FormInput from '../form-input2/form-input';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import LawnMower from './LawnMower2.svg';
import LawnMowerSelect from './LawnMower3.svg';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import CustomButton from "../CustomButtons/Button";

import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem.js";
import NavPills from "../NavPills/NavPills.js";

import {GiVacuumCleaner} from 'react-icons/gi';
import {GiWheelbarrow} from 'react-icons/gi';
import {FaSwimmingPool} from 'react-icons/fa';


class EventLog extends React.Component {
  renderLogs = () => this.props.logs.map((log, index) =>

      (<div key={index}>{log}</div>)
  );
  render() {
    //console.log(this.renderLogs());
      return (
          <Message>{this.renderLogs()}</Message>
      );
  }

}

//const useStyles = makeStyles(styles);
class Cleaner extends React.Component {  
  logs = [];
  logs2 = [];
  logs3 = [];
  logs4 = [];
  logs5 = [];
  logs6 = [];
  logsAreaHours = [];
  locationPool = [];
  poolTimes = [];
  logsPoolHours = [];


    constructor(){
        super();   
        this.state = {
          defaultValue: new Date(),
          dateTime: null,//new Date(),
          dateTime2: null,
          dateTimePool: null,
          min: new Date(2020,3,13,12,30),
          max: new Date(2090, 2, 10, 12, 30),
          showPopupIndoor: false,
          showPopupOutdoor: false,
          showPopupPool: false,

          IndoorGenClean: false,
          IndoorAfterBuildClean: false,
          IndoorEndTenancyClean: false,
          IndoorSanitise: false,
          IndoorCleanService: "",
          IndoorAfterBuildCleanService: "",
          IndoorEndTenancyCleanService: "",
          IndoorSanitiseService: "",
          IndoorCleanPrice: 0,
          IndoorAfterBuildCleanPrice: 0,
          IndoorEndTenancyCleanPrice: 0,
          IndoorSanitisePrice: 0,
          priceDetergent: 0,
          priceGenIndoorCleanOnce: 0,
          priceGenIndoorCleanWeek: 0,
          priceGenIndoorCleanMonth: 0,
          priceGenIndoorCleanWalls: 0,
          priceGenIndoorCleanWindows: 0,
          priceGenIndoorCleanLaundry: 0,
          priceAfterBuildIndoorCleanWalls: 0,
          priceAfterBuildIndoorCleanWindows: 0,
          priceSanitiseIndoorOnceOFF: 0,
          priceSanitiseIndoorMonth: 0,
          genIndoorCleanOnce: false,
          genIndoorCleanWeek: false,
          genIndoorCleanMonth: false,
          sanitiseIndoorOnceOFF: false,
          sanitiseIndoorMonth: false,
          totalIndoor: 0,
          serviceIntervalGenIndoorClean: "",
          serviceIntervalIndoorSanitise: "",
          serviceIntervalIndoor: "",

          picked5: false,
          picked6: false,
          picked7: false,
          picked8: false,
          picked9: false,
          PoolClean: false,
          PoolMaint: false,
          PoolRepair: false,
          events: this.logs,
          events2: this.logs2,
          events3: this.logs3,
          events4: this.logs4,
          events5: this.logs5,
          events6: this.logs6,
          eventsAreaHours: this.logsAreaHours,
          eventsPoolHours: this.logsPoolHours,
          locPool: this.locationPool,
          PoolTime: this.poolTimes,
          value6: "",
          value7: "",
          value8: "",
          value9: "",
          value10: "",
          PoolCleanService: "",
          PoolMaintService: "",
          value11: "",
          isChecked: false,
          cleanMonth: false,
          cleanOnceOFF: false,
          cleanWeek: false,
          statusCleanOnceOFF: false,
          maintMonth: false,
          maintQuat: false,
          maintYear: false,
          value: 0,
          maxLabels: "Larger",
          Mower: false,

          price5: 0,
          price6: 0,
          price7: 0,
          price8: 0,
          price9: 0,
          price10: 0,
          PoolCleanPrice: 0,
          PoolMaintPrice: 0,
          priceDetergent: 0,
          priceCleanOnce: 0,
          priceCleanMonth: 0,
          priceCleanWeek: 0,
          areaHours: 0,
          priceMaintMonth: 0,
          priceMaintQuat: 0,
          priceMaintYear: 0,
          bedPrice: 0,
          bathPrice: 0,
          total2: 0,
          totalPool: 0,
          serviceInterval: "",
          hrs: 0,
          poolHrs: 0,
          bedRooms : 0,
          bathRooms: 0,
          showTcIn: false,
          showTcOut: false



        }
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleDropdownChange2 = this.handleDropdownChange2.bind(this);
        this.handleDropdownChange3 = this.handleDropdownChange3.bind(this);
        this.handleDropdownChange5 = this.handleDropdownChange5.bind(this);
        this.handleDropdownPool = this.handleDropdownPool.bind(this);
        this.handleChecked = this.handleChecked.bind(this);

        /***********Indoor Services Handling*************/
        this.genIndoorCleanOnce = this.genIndoorCleanOnce.bind(this);
        this.genIndoorCleanWeek = this.genIndoorCleanWeek.bind(this);
        this.genIndoorCleanMonth= this.genIndoorCleanMonth.bind(this);

        this.genIndoorCleanWalls= this.genIndoorCleanWalls.bind(this);
        this.genIndoorCleanWindows= this.genIndoorCleanWindows.bind(this);
        this.genIndoorCleanLaundry= this.genIndoorCleanLaundry.bind(this);

        this.afterBuildIndoorCleanWalls= this.afterBuildIndoorCleanWalls.bind(this);
        this.afterBuildIndoorCleanWindows= this.afterBuildIndoorCleanWindows.bind(this);

        this.endTenancyIndoorCleanWalls= this.endTenancyIndoorCleanWalls.bind(this);
        this.endTenancyIndoorCleanWindows= this.endTenancyIndoorCleanWindows.bind(this);

        this.sanitiseIndoorOnceOFF= this.sanitiseIndoorOnceOFF.bind(this);
        this.sanitiseIndoorMonth= this.sanitiseIndoorMonth.bind(this);







        /***********Pool Services Handling*************/
        this.handleOnceOFF = this.handleOnceOFF.bind(this);
        this.handleCleanWeek = this.handleCleanWeek.bind(this);
        this.handleCleanMonth = this.handleCleanMonth.bind(this);

        this.handleMaintMonth = this.handleMaintMonth.bind(this);
        this.handleMaintQuat = this.handleMaintQuat.bind(this);
        this.handleMaintYear = this.handleMaintYear.bind(this);

        this.handleDropdownAreaSize = this.handleDropdownAreaSize.bind(this);
        this.handlePoolAreaSize = this.handlePoolAreaSize.bind(this);
    }

    handleDropdownChange(e) {
      this.logs.shift();
      this.logs.unshift("Bedrooms : " + e.target.value);
      this.setState({ selectValue: e.target.value,
        bedPrice: e.target.value === "1"? 30 : e.target.value === "2"? 60 : e.target.value === "3"? 90 : e.target.value === "4"? 120 : e.target.value === "5"? 150 : 0,
        bedRooms: e.target.value === "1"? e.target.value + " Bedroom" : e.target.value  + " Bedrooms" });
      }
      
    handleDropdownChange2(e) {
      this.logs2.shift();
      this.logs2.unshift("Bathrooms : " + e.target.value);
        this.setState({ selectValue: e.target.value,
          bathPrice: e.target.value === "1"? 20 : e.target.value === "2"? 40 : e.target.value === "3"? 60 : e.target.value === "4"? 80 : e.target.value === "5"? 100 : 0,
          bathRooms: e.target.value === "1"? e.target.value + " Bathroom" : e.target.value  + " Bathrooms"});
        }

        handleDropdownAreaSize(e) {
      this.logsAreaHours.shift();
      this.logsAreaHours.unshift("Working Hours : " + e.target.value + " hrs");
        this.setState({ selectValue: e.target.value,
          areaHours: e.target.value
        });
      }

      handlePoolAreaSize(e) {
        this.logsPoolHours.shift();
        this.logsPoolHours.unshift("Working Hours : " + e.target.value + " hrs");
          this.setState({ selectValue: e.target.value,
            poolHrs: e.target.value
          });
        }
    handleDropdownChange3(e) {
      this.logs3.shift();
      this.logs3.unshift("Location : " + e.target.value);
        this.setState({ selectValue: e.target.value
        });
      }


      handleDropdownChange5(e) {
        this.logs5.shift();
        this.logs5.unshift("Location : " + e.target.value);
          this.setState({ selectValue: e.target.value
          });
        }

        handleDropdownPool(e) {
          this.locationPool.shift();
          this.locationPool.unshift("Location : " + e.target.value);
            this.setState({ selectValue: e.target.value
            });
          }
  


    handleChecked () {
      this.setState({isChecked: !this.state.isChecked,
      priceDetergent : this.state.isChecked? 0 : 52});
    }

    handleOnceOFF () {
      this.setState({cleanOnceOFF: !this.state.cleanOnceOFF,
      priceCleanOnce : this.state.cleanOnceOFF? 0 : 1});
    }

    handleCleanWeek () {
      this.setState({cleanWeek: !this.state.cleanWeek,
      priceCleanWeek : this.state.cleanWeek? 0 : 0.90});
    }

    handleCleanMonth () {
      this.setState({cleanMonth: !this.state.cleanMonth,
      priceCleanMonth : this.state.cleanMonth? 0 : 0.95});
    }

    handleMaintMonth () {
      this.setState({maintMonth: !this.state.maintMonth,
      priceMaintMonth : this.state.maintMonth? 0 : 0.90});
    }
    
    handleMaintQuat () {
      this.setState({maintQuat: !this.state.maintQuat,
      priceMaintQuat : this.state.maintQuat? 0 : 0.95});
    }
    
    handleMaintYear () {
      this.setState({maintYear: !this.state.maintYear,
      priceMaintYear : this.state.maintYear? 0 : 1});
    }


/***********Indoor Services Handling*************/
    genIndoorClean(event) {
      this.setState({
        IndoorGenClean: this.state.IndoorAfterBuildClean === true || this.state.IndoorEndTenancyClean === true || this.state.IndoorSanitise === true ? false : !this.state.IndoorGenClean,
        IndoorCleanService: this.state.IndoorAfterBuildClean === true || this.state.IndoorEndTenancyClean === true || this.state.IndoorSanitise === true || this.state.IndoorGenClean? null : "General",
        IndoorCleanPrice: this.state.IndoorGenClean? 0 : 30
      });
    }

    afterBuildIndoorClean(event) {
      this.setState({
        IndoorAfterBuildClean: this.state.IndoorGenClean === true || this.state.IndoorEndTenancyClean === true || this.state.IndoorSanitise === true ? false : !this.state.IndoorAfterBuildClean,
        IndoorAfterBuildCleanService: this.state.IndoorGenClean === true || this.state.IndoorEndTenancyClean === true || this.state.IndoorSanitise === true || this.state.IndoorAfterBuildClean? null : "After Builders",
        IndoorAfterBuildCleanPrice: this.state.IndoorAfterBuildClean? 0 : 30
      });
    }

    endTenancyIndoorClean(event) {
      this.setState({
        IndoorEndTenancyClean: this.state.IndoorAfterBuildClean === true || this.state.IndoorGenClean === true || this.state.IndoorSanitise === true ? false : !this.state.IndoorEndTenancyClean,
        IndoorEndTenancyCleanService: this.state.IndoorAfterBuildClean === true || this.state.IndoorGenClean === true || this.state.IndoorSanitise === true || this.state.IndoorEndTenancyClean? null : "End of Tenancy",
        IndoorEndTenancyCleanPrice: this.state.IndoorEndTenancyClean? 0 : 30
      });
    }

    sanitiseIndoorClean(event) {
      this.setState({
        IndoorSanitise: this.state.IndoorAfterBuildClean === true || this.state.IndoorEndTenancyClean === true || this.state.IndoorGenClean === true ? false : !this.state.IndoorSanitise,
        IndoorSanitiseService: this.state.IndoorAfterBuildClean === true || this.state.IndoorEndTenancyClean === true || this.state.IndoorGenClean === true || this.state.IndoorSanitise? null : "Antiviral Sanitisation",
        IndoorSanitisePrice: this.state.IndoorSanitise? 0 : 30
      });
    }


    genIndoorCleanOnce () {
      this.setState({genIndoorCleanOnce: !this.state.genIndoorCleanOnce,
      priceGenIndoorCleanOnce : this.state.genIndoorCleanOnce? 0 : 1});
    }

    genIndoorCleanWeek () {
      this.setState({genIndoorCleanWeek: !this.state.genIndoorCleanWeek,
      priceGenIndoorCleanWeek : this.state.genIndoorCleanWeek? 0 : 0.9});
    }

    genIndoorCleanMonth () {
      this.setState({genIndoorCleanMonth: !this.state.genIndoorCleanMonth,
      priceGenIndoorCleanMonth : this.state.genIndoorCleanMonth? 0 : 0.95});
    }

    genIndoorCleanWalls () {
      this.setState({genIndoorCleanWalls: !this.state.genIndoorCleanWalls,
      genIndoorCleanWallsService : this.state.genIndoorCleanWalls? null : "Cleaning Walls",
      priceGenIndoorCleanWalls : this.state.genIndoorCleanWalls? 0 : 60});
    }

    genIndoorCleanWindows () {
      this.setState({genIndoorCleanWindows: !this.state.genIndoorCleanWindows,
        genIndoorCleanWindowsService : this.state.genIndoorCleanWindows? null : "Cleaning Windows",
      priceGenIndoorCleanWindows : this.state.genIndoorCleanWindows? 0 : 40});
    }

    genIndoorCleanLaundry () {
      this.setState({genIndoorCleanLaundry: !this.state.genIndoorCleanLaundry,
        genIndoorCleanLaundryService : this.state.genIndoorCleanLaundry? null : "Laundry",
      priceGenIndoorCleanLaundry : this.state.genIndoorCleanLaundry? 0 : 50});
    }


    afterBuildIndoorCleanWalls () {
      this.setState({afterBuildIndoorCleanWalls: !this.state.afterBuildIndoorCleanWalls,
        afterBuildIndoorCleanWallsService : this.state.afterBuildIndoorCleanWalls? null : "Cleaning Walls",
      priceAfterBuildIndoorCleanWalls : this.state.afterBuildIndoorCleanWalls? 0 : 80});
    }

     afterBuildIndoorCleanWindows () {
      this.setState({afterBuildIndoorCleanWindows: !this.state.afterBuildIndoorCleanWindows,
      afterBuildIndoorCleanWindowsService : this.state.afterBuildIndoorCleanWindows? null : "Cleaning Windows",
      priceAfterBuildIndoorCleanWindows : this.state.afterBuildIndoorCleanWindows? 0 : 60});
    }

    endTenancyIndoorCleanWalls () {
      this.setState({endTenancyIndoorCleanWalls: !this.state.endTenancyIndoorCleanWalls,
      endTenancyIndoorCleanWallsService : this.state.endTenancyIndoorCleanWalls? null : "Cleaning Walls",
      priceEndTenancyIndoorCleanWalls : this.state.endTenancyIndoorCleanWalls? 0 : 70});
    }

    endTenancyIndoorCleanWindows () {
      this.setState({endTenancyIndoorCleanWindows: !this.state.endTenancyIndoorCleanWindows,
        endTenancyIndoorCleanWindowsService : this.state.endTenancyIndoorCleanWindows? null : "Cleaning Windows",
      priceEndTenancyIndoorCleanWindows : this.state.endTenancyIndoorCleanWindows? 0 : 50});
    }


    sanitiseIndoorOnceOFF () {
      this.setState({sanitiseIndoorOnceOFF: !this.state.sanitiseIndoorOnceOFF,
      priceSanitiseIndoorOnceOFF : this.state.sanitiseIndoorOnceOFF? 0 : 1});
    }

    sanitiseIndoorMonth () {
      this.setState({sanitiseIndoorMonth: !this.state.sanitiseIndoorMonth,
      priceSanitiseIndoorMonth : this.state.sanitiseIndoorMonth? 0 : 0.9});
    }

    selectIndoor(event) {
      this.setState({
        showPopupIndoor: !this.state.showPopupIndoor,
        value: event.target.innerText,
        totalIndoor: this.state.genIndoorCleanOnce || this.state.genIndoorCleanWeek || this.state.genIndoorCleanMonth? (150 + this.state.bedPrice + this.state.bathPrice + this.state.priceGenIndoorCleanWalls + this.state.priceGenIndoorCleanWindows + this.state.priceGenIndoorCleanLaundry) * (this.state.priceGenIndoorCleanOnce + this.state.priceGenIndoorCleanWeek + this.state.priceGenIndoorCleanMonth) : 0 +
        this.state.IndoorAfterBuildClean ?  180 + this.state.bedPrice + this.state.bathPrice + this.state.priceAfterBuildIndoorCleanWalls + this.state.priceAfterBuildIndoorCleanWindows : 0 +
        this.state.IndoorEndTenancyClean ? 180 + this.state.bedPrice + this.state.bathPrice + this.state.priceEndTenancyIndoorCleanWalls + this.state.priceEndTenancyIndoorCleanWindows : 0 +
        this.state.IndoorSanitise ? (230 + this.state.bedPrice + this.state.bathPrice) * (this.state.priceSanitiseIndoorOnceOFF + this.state.priceSanitiseIndoorMonth) : 0,
        serviceIntervalIndoor: this.state.priceSanitiseIndoorOnceOFF || this.state.priceGenIndoorCleanOnce> 0 ? "Once OFF" : this.state.priceGenIndoorCleanWeek > 0 ? "Weekly" : this.state.priceSanitiseIndoorMonth || this.state.priceGenIndoorCleanMonth > 0 ? "Monthly" : "Once OFF",
        //serviceIntervalGenIndoorClean : this.state.priceGenIndoorCleanOnce > 0 ? "Once OFF" : this.state.priceGenIndoorCleanWeek > 0 ? "Weekly" : this.state.priceGenIndoorCleanMonth > 0 ? "Monthly" : null
      
       });
    }


    showTcsIn(event) {
      this.setState({
        showTcIn: !this.state.showTcIn,
        value: event.target.innerText
      });
    }

    showServicesInfo(event) {
      this.setState({
        showServicesInfo: !this.state.showServicesInfo
      });
    }

    /**************Outdoor Services Handling********************/

    showOutdoorServicesInfo(event) {
      this.setState({
        showOutdoorServicesInfo: !this.state.showOutdoorServicesInfo
      });
    }


    /**************Pool Services Handling********************/
    showPoolServicesInfo(event) {
      this.setState({
        showPoolServicesInfo: !this.state.showPoolServicesInfo
      });
    }



    pick5(event) {
      this.setState({
        picked5: !this.state.picked5,
        value6: this.state.picked5? null : "Inside Cabinets",
        price5: this.state.picked5? 0 : 25
      });
    }
    pick6(event) {
      this.setState({
        picked6: !this.state.picked6,
        value7: this.state.picked6? null : "Inside Fridge",
        price6: this.state.picked6? 0 : 27
      });
    }

    pick7(event) {
      this.setState({
        picked7: !this.state.picked7,
        value8: this.state.picked7? null : "Yard Cleaning",
        price7: this.state.picked7? 0 : 127
      });
    }

    pick8(event) {
      this.setState({
        picked8: !this.state.picked8,
        value9: this.state.picked8? null : "Flower Bedding",
        price8: this.state.picked8? 0 : 130
      });
    }

    pick9(event) {
      this.setState({
        picked9: !this.state.picked9,
        value10: this.state.picked9? null : "Driveway Cleaning",
        price9: this.state.picked9? 0 : 177
      });
    }

    genPoolClean(event) {
      this.setState({
        PoolClean: this.state.PoolMaint === true ? false : !this.state.PoolClean,
        PoolCleanService: this.state.PoolMaint === true || this.state.PoolClean? null : "Pool Cleaning",
        PoolCleanPrice: this.state.PoolMaint === true || this.state.PoolClean? 0 : 177
      });
    }

    periodMaint(event) {
      this.setState({
        PoolMaint: this.state.PoolClean === true ? false : !this.state.PoolMaint,
        PoolMaintService: this.state.PoolClean === true || this.state.PoolMaint? null : "Pool maintanance",
        PoolMaintPrice: this.state.PoolClean === true || this.state.PoolMaint? 0 : 177
      });
    }

    perPoolRepair(event) {
      this.setState({
        PoolRepair: !this.state.PoolRepair
      });
    }

    Mow(event) {
      this.setState({
        Mower: !this.state.Mower,
        value11: this.state.Mower? null : "Lawn Mowing",
        price10: this.state.Mower? 0 : 137
      });
    }
    handleChange = event => { //destructure off of the event
        const {name, value} = event.target;
        this.setState({[name]: value});
    }


    selectOutdoor(event) {
      this.setState({
        showPopupOutdoor: !this.state.showPopupOutdoor,
        value: event.target.innerText,
        total2: this.state.areaHours < 2.1 ? (this.state.price7 + this.state.price8 + this.state.price9 + this.state.price10)  + 50 : 50 +(((this.state.areaHours - 2) * 40) + (this.state.price7 + this.state.price8 + this.state.price9 + this.state.price10))
      });
    }

    selectPool(event) {
      this.setState({
        showPopupPool: !this.state.showPopupPool,
        value: event.target.innerText,
        totalPool: this.state.PoolClean ? (250 + (this.state.poolHrs - 1)*18)*(this.state.priceCleanOnce + this.state.priceCleanWeek + this.state.priceCleanMonth) : this.state.PoolMaint ? (500 + (this.state.poolHrs - 1)*18)*(this.state.priceMaintMonth + this.state.priceMaintQuat + this.state.priceMaintYear) : 0,
        serviceInterval : this.state.priceCleanOnce > 0 ? "One OFF" : this.state.priceCleanWeek > 0 ? "Weekly" : this.state.priceCleanMonth || this.state.priceMaintMonth > 0 ? "Monthly" : this.state.priceMaintQuat > 0 ? "Quartely" : this.state.priceMaintYear > 0 ? "Yearly" : "One OFF"
      });
    }

  handleChange2 = date => {
    this.logs4.shift()
    this.logs4.unshift("" + date);
    this.setState({
        dateTime: date,
        events4: this.logs4.slice()
    });
  }

  handleChange6 = date => {
    this.logs6.shift()
    this.logs6.unshift("" + date);
    this.setState({
        dateTime2: date,
        events6: this.logs6.slice()
    });
  }

  handleChangePool = date => {
    this.poolTimes.shift()
    this.poolTimes.unshift("" + date);
    this.setState({
        dateTimePool: date,
        PoolTime: this.poolTimes.slice()
    });
  }
  

render() {  
const total = 150 + this.state.bedPrice + this.state.bathPrice + this.state.price + this.state.price2 + this.state.price3 + this.state.price4 + this.state.price5 + this.state.price6 + this.state.priceDetergent;
const total2 = this.state.areaHours < 2.1 ? (this.state.price7 + this.state.price8 + this.state.price9 + this.state.price10)  + 50 : 50 +(((this.state.areaHours - 2) * 40) + (this.state.price7 + this.state.price8 + this.state.price9 + this.state.price10));

const totalClean = this.state.PoolClean ? (250 + (this.state.poolHrs - 1)*18)*(this.state.priceCleanOnce + this.state.priceCleanWeek + this.state.priceCleanMonth) : 0;//             this.state.poolHrs * (this.state.PoolCleanPrice + this.state.PoolMaintPrice);
const totalMaint = this.state.PoolMaint ? (500 + (this.state.poolHrs - 1)*18)*(this.state.priceMaintMonth + this.state.priceMaintQuat + this.state.priceMaintYear) : 0;//             this.state.poolHrs * (this.state.PoolCleanPrice + this.state.PoolMaintPrice);
const totalPool = totalClean + totalMaint;

const totalGenIndoorClean = this.state.genIndoorCleanOnce || this.state.genIndoorCleanWeek || this.state.genIndoorCleanMonth? (150 + this.state.bedPrice + this.state.bathPrice + this.state.priceGenIndoorCleanWalls + this.state.priceGenIndoorCleanWindows + this.state.priceGenIndoorCleanLaundry) * (this.state.priceGenIndoorCleanOnce + this.state.priceGenIndoorCleanWeek + this.state.priceGenIndoorCleanMonth) : 0;
const totalAfterBuildIndoorClean = this.state.IndoorAfterBuildClean ?  180 + this.state.bedPrice + this.state.bathPrice + this.state.priceAfterBuildIndoorCleanWalls + this.state.priceAfterBuildIndoorCleanWindows : 0;
const totalEndTenancyIndoorClean =  this.state.IndoorEndTenancyClean ? 180 + this.state.bedPrice + this.state.bathPrice + this.state.priceEndTenancyIndoorCleanWalls + this.state.priceEndTenancyIndoorCleanWindows : 0;
const totalSanitiseIndoor = this.state.IndoorSanitise ? (230 + this.state.bedPrice + this.state.bathPrice) * (this.state.priceSanitiseIndoorOnceOFF + this.state.priceSanitiseIndoorMonth) : 0;
const totalIndoor = totalGenIndoorClean + totalAfterBuildIndoorClean + totalEndTenancyIndoorClean + totalSanitiseIndoor;

const x = "" + this.state.dateTime;
const y = "" + this.state.dateTime2;
const poolTime = "" + this.state.dateTimePool;

const cleanOnceStatus = this.state.cleanMonth || this.state.cleanWeek ? true : false;
const cleanWeekStatus = this.state.cleanOnceOFF || this.state.cleanMonth ? true : false;
const cleanMonthStatus = this.state.cleanOnceOFF || this.state.cleanWeek ? true : false;

const sanitiseOnceStatus = this.state.sanitiseIndoorMonth ? true : false;
const sanitiseMonthStatus = this.state.sanitiseIndoorOnceOFF ? true : false;

const genIndoorCleanOnceStatus = this.state.genIndoorCleanMonth || this.state.genIndoorCleanWeek ? true : false;
const genIndoorCleanWeekStatus = this.state.genIndoorCleanOnce || this.state.genIndoorCleanMonth ? true : false;
const genIndoorCleanMonthStatus = this.state.genIndoorCleanOnce || this.state.genIndoorCleanWeek ? true : false;

const maintMonthStatus = this.state.maintYear || this.state.maintQuat ? true : false;
const maintQuatStatus = this.state.maintMonth || this.state.maintYear ? true : false;
const maintYearStatus = this.state.maintMonth || this.state.maintQuat ? true : false;
  const ExampleCustomInput = ({ value, onClick }) => (
    <CustomButton style = {{"background": "#e91e63"}} onClick={onClick} size="sm">{
      value?
      value
      :     
      "Select Date & Time"
    }   
    </CustomButton>
  );

console.log(this.state.priceSanitiseIndoorMonth);
return (
          <div>            
            <Popup>  
                <PopupInner> 
                <CloseButton className = 'remove-button' style = {{"color":"black"}} onClick = {this.props.closePopup} >&#10005;</CloseButton>
                <TabsContainer >                  
                <GridContainer >
                  <GridItem  >
                    <NavPills
                    alignCenter
                      color="rose"
                      tabs={[
                        {
                          tabButton: "INDOOR",
                          tabIcon: GiVacuumCleaner,
                          tabContent: (
                                  <div style = {{"margin-top": "-5px"}}>
                                    <ContentTitle> Details <Info onClick = {this.showTcsIn.bind(this)} showTcIn = {this.state.showTcIn}/>
                                    <span><hr width="300"/></span>
                                    </ContentTitle>                                  
                                    <Options>
                                    <DatePicker
                                          selected={this.state.dateTime}
                                          value={this.state.dateTime}
                                          onChange={this.handleChange2}
                                          minDate={new Date()}
                                          showTimeInput
                                          timeFormat="HH:mm"
                                          timeIntervals={30}
                                          timeCaption="time"
                                          customInput={<ExampleCustomInput />}
                                          dateFormat="MMMM d, yyyy h:mm aa"
                                          shouldCloseOnSelect={false}  
                                     />
                                    <select id="dropdown" onChange={this.handleDropdownChange3} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"2px"}}>
                                          <option value="N/A">Location</option>
                                          <option value="Boksburg">Boksburg</option>
                                          <option value="Edenvale">Edenvale</option>
                                          <option value="Kempton Park">K/Park</option>
                                          <option value="Springs">Springs</option>
                                          <option value="Germiston">Germiston</option>
                                      </select>
                                      <select id="dropdown" onChange={this.handleDropdownChange} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"2px"}}>
                                          <option value="N/A">Bedrooms</option>
                                          <option value="1">1 Bedroom</option>
                                          <option value="2">2 Bedrooms</option>
                                          <option value="3">3 Bedrooms</option>
                                          <option value="4">4 Bedrooms</option>
                                          <option value="5">5 Bedrooms</option>
                                      </select>
                                      <select id="dropdown" onChange={this.handleDropdownChange2} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"2px"}}>
                                          <option value="N/A">Bathrooms</option>
                                          <option value="1">1 Bathroom</option>
                                          <option value="2">2 Bathrooms</option>
                                          <option value="3">3 Bathrooms</option>
                                          <option value="4">4 Bathrooms</option>
                                          <option value="5">5 Bathrooms</option>
                                      </select> 

                                    </Options>
                                    <ContentTitle> Cleaning Services <Info onClick = {this.showServicesInfo.bind(this)} showServicesInfo = {this.state.showServicesInfo}/>
                                      <span><hr width="300"/></span>
                                    </ContentTitle>
                                    <Options4>
                                      <ServiceGridSplit><Tooltip title="General Cleaning" aria-label="add"><Fab2><GenCleanIcon onClick={this.genIndoorClean.bind(this)} IndoorGenClean = {this.state.IndoorGenClean}/></Fab2></Tooltip><ServiceName>General Cleaning</ServiceName> </ServiceGridSplit>
                                      <ServiceGridSplit><Tooltip title="After Builders Cleaning" aria-label="add"><Fab2><AfterBuildIcon onClick={this.afterBuildIndoorClean.bind(this)} IndoorAfterBuildClean = {this.state.IndoorAfterBuildClean}/></Fab2></Tooltip><ServiceName>After Builders</ServiceName> </ServiceGridSplit>
                                      <ServiceGridSplit><Tooltip title="End of Tenancy Cleaning" aria-label="add"><Fab2><EndTenancyIcon onClick={this.endTenancyIndoorClean.bind(this)} IndoorEndTenancyClean = {this.state.IndoorEndTenancyClean}/></Fab2></Tooltip><ServiceName>End of Tenancy</ServiceName> </ServiceGridSplit>                                   
                                      <ServiceGridSplit><Tooltip title="Antiviral Sanitisation" aria-label="add"><Fab2><SanitiseIcon onClick={this.sanitiseIndoorClean.bind(this)} IndoorSanitise = {this.state.IndoorSanitise}/></Fab2></Tooltip><ServiceName>Antiviral Sanitisation</ServiceName> </ServiceGridSplit>
                                    </Options4>                        
                                    <ContentTitle> Service Details & Costs
                                      <span><hr width="300"/></span>
                                    </ContentTitle>
                                    <Options3>
                                      <div>
                                        <Message2 style = {{"margin-left" : "1px"}}>Home Details</Message2>
                                        <EventLog logs={this.state.events3}/>
                                        <EventLog logs={this.state.events}/>
                                        <EventLog logs={this.state.events2}/> 
                                        {this.state.events4.length !== 0 ?
                                          <Message>Date : {x.replace("GMT+0200 (South Africa Standard Time)","")}</Message> 
                                        : null
                                        }   
                                                            
                                      </div>
                                      <div>
                                        <Message2>Service</Message2>
                                        <Message>{this.state.IndoorCleanService}</Message>
                                        <Message>{this.state.IndoorAfterBuildCleanService}</Message>
                                        <Message>{this.state.IndoorEndTenancyCleanService}</Message>
                                        <Message>{this.state.IndoorSanitiseService}</Message>
                                        {this.state.IndoorCleanService?
                                        <div>
                                          <Message2>Extra Services</Message2>
                                          <Message style = {{"margin-top" : "0px"}}>
                                            <Checkbox toggle label = "  Walls" onChange={ this.genIndoorCleanWalls }   priceGenIndoorCleanWalls =  {this.state.priceGenIndoorCleanWalls}/>
                                            <Checkbox toggle label = "  Windows" onChange={ this.genIndoorCleanWindows }   priceGenIndoorCleanWindows =  {this.state.priceGenIndoorCleanWindows}/>
                                            <Checkbox toggle label = "  Laundry" onChange={ this.genIndoorCleanLaundry }   priceGenIndoorCleanLaundry =  {this.state.priceGenIndoorCleanLaundry}/>
                                          </Message>
                                        </div>

                                        : this.state.IndoorAfterBuildCleanService?
                                        <div>
                                          <Message2>Extra Services</Message2>
                                          <Message style = {{"margin-top" : "0px"}}>
                                            <Checkbox toggle label = "  Walls" onChange={ this.afterBuildIndoorCleanWalls }   priceAfterBuildIndoorCleanWalls =  {this.state.priceAfterBuildIndoorCleanWalls}/>
                                            <Checkbox toggle label = "  Windows" onChange={ this.afterBuildIndoorCleanWindows }   priceAfterBuildIndoorCleanWindows =  {this.state.priceAfterBuildIndoorCleanWindows}/>
                                           </Message>
                                        </div>

                                        : this.state.IndoorEndTenancyCleanService?
                                        <div>
                                          <Message2>Extra Services</Message2>
                                          <Message style = {{"margin-top" : "0px"}}>
                                            <Checkbox toggle label = "  Walls" onChange={ this.endTenancyIndoorCleanWalls }   priceEndTenancyIndoorCleanWalls =  {this.state.priceEndTenancyIndoorCleanWalls}/>
                                            <Checkbox toggle label = "  Windows" onChange={ this.endTenancyIndoorCleanWindows }   priceEndTenancyIndoorCleanWindows =  {this.state.priceEndTenancyIndoorCleanWindows}/>
                                          </Message>
                                        </div>
                                          : null
                                        }
                                        
                                      </div>
                                      <div>
                                      <Message2>Costs</Message2>
                                          {this.state.IndoorCleanService?
                                          <Message>
                                            <Checkbox toggle label = "  Once OFF" onChange={ this.genIndoorCleanOnce }  disabled = {genIndoorCleanOnceStatus} priceGenIndoorCleanOnce =  {this.state.priceGenIndoorCleanOnce}/>
                                            <Checkbox toggle label = "  Weekly" onChange={ this.genIndoorCleanWeek }  disabled = {genIndoorCleanWeekStatus} priceGenIndoorCleanWeek =  {this.state.priceGenIndoorCleanWeek}/>
                                            <Checkbox toggle label = "  Monthly" onChange={ this.genIndoorCleanMonth }  disabled = {genIndoorCleanMonthStatus} priceGenIndoorCleanMonth =  {this.state.priceGenIndoorCleanMonth}/>
                                            Total : R {totalIndoor.toFixed(2)} 
                                          </Message>

                                            : this.state.IndoorAfterBuildCleanService?
                                            <Message>
                                            Total : R {totalIndoor.toFixed(2)} 
                                          </Message>

                                          : this.state.IndoorEndTenancyCleanService?
                                            <Message>
                                            Total : R {totalIndoor.toFixed(2)} 
                                          </Message>

                                          : this.state.IndoorSanitiseService?
                                            <Message>
                                            <Checkbox toggle label = "  Once OFF" onChange={ this.sanitiseIndoorOnceOFF }  disabled = {sanitiseOnceStatus} priceSanitiseIndoorOnceOFF =  {this.state.priceSanitiseIndoorOnceOFF}/>
                                            <Checkbox toggle label = "  Monthly" onChange={ this.sanitiseIndoorMonth }  disabled = {sanitiseMonthStatus} priceSanitiseIndoorMonth =  {this.state.priceSanitiseIndoorMonth}/>
                                            Total : R {totalIndoor.toFixed(2)} 
                                          </Message>

                                          : null
                                          }                          

                                      </div>
                                    </Options3> 
 
                                    <p style = {{"textAlign" : "center"}}><CustomButton onClick={this.selectIndoor.bind(this)} style = {{marginBottom : "5%", "background": "#e91e63"}} size="sm">Book Service</CustomButton></p> 

                                  </div>
                          )
                        },
                        {
                          tabButton: "OUTDOOR",
                          tabIcon: GiWheelbarrow,
                          tabContent: (
                            <div>
                                <ContentTitle> Details 
                                  <span><hr width="300"/></span>
                                </ContentTitle>
                                <Options>
                                    <DatePicker
                                          selected={this.state.dateTime2}
                                          value={this.state.dateTime2}
                                          onChange={this.handleChange6}
                                          minDate={new Date()}
                                          customInput={<ExampleCustomInput />}
                                          showTimeInput
                                          timeFormat="HH:mm"
                                          timeIntervals={1}
                                          timeCaption="time"
                                          dateFormat="MMMM d, yyyy h:mm aa"
                                          shouldCloseOnSelect={false} />
                                      <select id="dropdown2" onChange={this.handleDropdownChange5} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"2px"}}>
                                          <option value="N/A">Location</option>
                                          <option value="Boksburg">Boksburg</option>
                                          <option value="Edenvale">Edenvale</option>
                                          <option value="Kempton Park">K/Park</option>
                                          <option value="Springs">Springs</option>
                                          <option value="Germiston">Germiston</option>
                                      </select>    
                                      <h4 style = {{color: 'grey', fontSize : "14px", marginTop : "0px"}}>Work hours : </h4>    
                                      <select id="areaSize" onChange={this.handleDropdownAreaSize} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"2px"}}>
                                          <option value="0">No. of Hours</option>
                                          <option value="1">1 Hour</option>
                                          <option value="2">2 Hours</option>
                                          <option value="3">3 Hours</option>
                                          <option value="4">4 Hours</option>
                                          <option value="5">5 Hours</option>
                                          <option value="6">6 Hours</option>
                                      </select>
                                </Options>
                                <ContentTitle> Required Services <Info onClick = {this.showOutdoorServicesInfo.bind(this)} showOutdoorServicesInfo = {this.state.showOutdoorServicesInfo}/>
                                  <span><hr width="300"/></span>
                                </ContentTitle>
                                <Options4>
                                <ServiceGridSplit><Tooltip title="Yard Cleaning" aria-label="add"><Fab2><Wheelbarrow onClick={this.pick7.bind(this)} picked7 = {this.state.picked7}/></Fab2></Tooltip> <ServiceName>Yard cleaning</ServiceName> </ServiceGridSplit>

                                    {this.state.Mower ?
                                      <ServiceGridSplit><Tooltip title="Lawn Mowing" aria-label="add"><Fab2><LogoContainer2 src={LawnMowerSelect} onClick={this.Mow.bind(this)}/></Fab2></Tooltip><ServiceName>Lawn Mowing</ServiceName> </ServiceGridSplit> 
                                      :
                                      <ServiceGridSplit><Tooltip title="Lawn Mowing" aria-label="add"><Fab2><LogoContainer2 src={LawnMower} onClick={this.Mow.bind(this)}/></Fab2></Tooltip><ServiceName>Lawn Mowing</ServiceName> </ServiceGridSplit> 
                                    }
                                    <ServiceGridSplit><Tooltip  title="Flower Bedding" aria-label="add"><Fab2 ><Flowers onClick={this.pick8.bind(this)} picked8 = {this.state.picked8}/></Fab2></Tooltip><ServiceName>Flower Bedding</ServiceName> </ServiceGridSplit> 
                                    <ServiceGridSplit><Tooltip  title="Driveway Cleaning" aria-label="add"><Fab2 ><Driveway onClick={this.pick9.bind(this)} picked9 = {this.state.picked9}/></Fab2></Tooltip><ServiceName>Driveway</ServiceName> </ServiceGridSplit> 
                                </Options4>
                                <ContentTitle> Service Details & Costs
                                  <span><hr width="300"/></span>
                                </ContentTitle>
                                <Options3>
                                  <div style = {{"margin-left" : "2px"}}>
                                    <Message2>Outside Details</Message2>

                                    <EventLog logs={this.state.events5}/>

                                    <EventLog logs={this.state.eventsAreaHours}/>

                                    {this.state.events6.length !== 0 ?
                                      <Message>Date : {y.replace("GMT+0200 (South Africa Standard Time)","")}</Message> 
                                    : null
                                    }                                           
                                  </div>
                                  <div>
                                    <Message2>Services</Message2>
                                    <Message>{this.state.value8}</Message>
                                    <Message>{this.state.value11}</Message>
                                    <Message>{this.state.value9}</Message>
                                    <Message>{this.state.value10}</Message>
                                  </div>
                                  <div>
                                    <Message2>Costs</Message2>
                                    {this.state.picked7 || this.state.picked8 || this.state.picked9 || this.state.Mower?
                                        <Message>Total : R {total2} </Message>
                                      
                                      : null
                                      }
                                  </div>
                                </Options3>
                                <p style = {{"textAlign" : "center"}}><CustomButton onClick={this.selectOutdoor.bind(this)} style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">Book Service</CustomButton></p> 

                            </div>

                          )
                        },
                        {
                          tabButton: "POOL",
                          tabIcon: FaSwimmingPool,
                          tabContent: ( 
                            <div>
                                <ContentTitle> Details 
                                  <span><hr width="300"/></span>
                                </ContentTitle>
                                <Options>
                                    <DatePicker
                                          selected={this.state.dateTimePool}
                                          value={this.state.dateTimePool}
                                          onChange={this.handleChangePool}
                                          minDate={new Date()}
                                          showTimeInput
                                          timeFormat="HH:mm"
                                          timeIntervals={1}
                                          timeCaption="time"
                                          dateFormat="MMMM d, yyyy h:mm aa"
                                          customInput={<ExampleCustomInput />}
                                          shouldCloseOnSelect={false} />
                                      <select id="dropdown2" onChange={this.handleDropdownPool} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"5px"}}>
                                          <option value="N/A">Location</option>
                                          <option value="Boksburg">Boksburg</option>
                                          <option value="Edenvale">Edenvale</option>
                                          <option value="Kempton Park">K/Park</option>
                                          <option value="Springs">Springs</option>
                                          <option value="Germiston">Germiston</option>
                                      </select>
                                </Options>
                                <ContentTitle> Required Services <Info onClick = {this.showPoolServicesInfo.bind(this)} showPoolServicesInfo = {this.state.showPoolServicesInfo}/>
                                  <span><hr width="300"/></span>
                                </ContentTitle>
                                <Options3p1>  
                                  { this.state.PoolMaint?
                                    <div>
                                      <ServiceTest> Pool Dimensions</ServiceTest>
                                      <select id="areaSize" onChange={this.handlePoolAreaSize} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"2px"}}>
                                          <option value="0">Shape</option>
                                          <option value="1">Rectangular</option>
                                          <option value="2">Circular</option>
                                          <option value="3">Triangle</option>
                                          <option value="4">Irregular</option>
                                      </select>

                                      { this.state.poolHrs == 0 ||  this.state.poolHrs == 1 ?
                                        <Form>
                                                      <FormInput
                                                            id="fname"
                                                            size="10"
                                                            type="number"
                                                            name="fname"
                                                            placeholder="Length (m)"
                                                            onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                            min="0" max="9999999"
                                                            required
                                                        />
                                                        
                                                    <FormInput
                                                            id="fname"
                                                            size="10"
                                                            type="number"
                                                            name="fname"
                                                            placeholder="Width (m)"
                                                            onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                            min="0" max="9999999"
                                                            required
                                                        />

                                                      <FormInput
                                                            id="fname"
                                                            size="10"
                                                            type="number"
                                                            name="fname"
                                                            placeholder="Depth (m)"
                                                            onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                            min="0" max="9999999"
                                                            required
                                                        />                                 
                                            </Form>                                      
                                      : this.state.poolHrs == 2 ?
                                        <Form>                                 
                                              <FormInput
                                                    id="fname"
                                                    size="10"
                                                    type="number"
                                                    name="fname"
                                                    placeholder="Diameter (m)"
                                                    onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                    min="0" max="9999999"
                                                    required
                                                />
                                                
                                            <FormInput
                                                    id="fname"
                                                    size="10"
                                                    type="number"
                                                    name="fname"
                                                    placeholder="Depth (m)"
                                                    onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                    min="0" max="9999999"
                                                    required
                                                />                               
                                     </Form>                                     
                                      : this.state.poolHrs == 3?
                                        <Form>                                 
                                                    <FormInput
                                                          id="fname"
                                                          size="10"
                                                          type="number"
                                                          name="fname"
                                                          placeholder="Base (m)"
                                                          onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                          min="0" max="9999999"
                                                          required
                                                      />
                                                      
                                                  <FormInput
                                                          id="fname"
                                                          size="10"
                                                          type="number"
                                                          name="fname"
                                                          placeholder="Height (m)"
                                                          onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                          min="0" max="9999999"
                                                          required
                                                      />
                                                  <FormInput
                                                          id="fname"
                                                          size="10"
                                                          type="number"
                                                          name="fname"
                                                          placeholder="Depth (m)"
                                                          onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                          min="0" max="9999999"
                                                          required
                                                      />
                                
                                          </Form>
                                      : this.state.poolHrs == 4 ?
                                        <Form>
                                            <FormInput
                                                id="fname"
                                                size="10"
                                                type="number"
                                                name="fname"
                                                placeholder="Volume (L)"
                                                onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                min="0" max="9999999"
                                                required
                                            />
                                        </Form>
                                      : null
                                      }
                                  </div>
                                  :
                                  <ServiceGridSplit><ServiceTest> Pool Cleaning</ServiceTest><Tooltip  title="Pool Cleaning" aria-label="add"><Fab2><Installations onClick={this.genPoolClean.bind(this)} PoolClean = {this.state.PoolClean}/></Fab2></Tooltip> </ServiceGridSplit>
                                  
                                  }

                                  {this.state.PoolClean?
                                  <div>
                                      <ServiceTest> Pool Dimensions</ServiceTest>
                                      <select id="areaSize" onChange={this.handlePoolAreaSize} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"2px"}}>
                                          <option value="0">Shape</option>
                                          <option value="1">Rectangular</option>
                                          <option value="2">Circular</option>
                                          <option value="3">Triangle</option>
                                          <option value="4">Irregular</option>
                                      </select>

                                      { this.state.poolHrs == 0 ||  this.state.poolHrs == 1 ?
                                        <Form>
                                                      <FormInput
                                                            id="fname"
                                                            size="10"
                                                            type="number"
                                                            name="fname"
                                                            placeholder="Length (m)"
                                                            onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                            min="0" max="9999999"
                                                            required
                                                        />
                                                        
                                                    <FormInput
                                                            id="fname"
                                                            size="10"
                                                            type="number"
                                                            name="fname"
                                                            placeholder="Width (m)"
                                                            onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                            min="0" max="9999999"
                                                            required
                                                        />

                                                      <FormInput
                                                            id="fname"
                                                            size="10"
                                                            type="number"
                                                            name="fname"
                                                            placeholder="Depth (m)"
                                                            onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                            min="0" max="9999999"
                                                            required
                                                        />                                 
                                            </Form>                                      
                                      : this.state.poolHrs == 2 ?
                                        <Form>                                 
                                              <FormInput
                                                    id="fname"
                                                    size="10"
                                                    type="number"
                                                    name="fname"
                                                    placeholder="Diameter (m)"
                                                    onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                    min="0" max="9999999"
                                                    required
                                                />
                                                
                                            <FormInput
                                                    id="fname"
                                                    size="10"
                                                    type="number"
                                                    name="fname"
                                                    placeholder="Depth (m)"
                                                    onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                    min="0" max="9999999"
                                                    required
                                                />                               
                                     </Form>                                     
                                      : this.state.poolHrs == 3?
                                        <Form>                                 
                                                    <FormInput
                                                          id="fname"
                                                          size="10"
                                                          type="number"
                                                          name="fname"
                                                          placeholder="Base (m)"
                                                          onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                          min="0" max="9999999"
                                                          required
                                                      />
                                                      
                                                  <FormInput
                                                          id="fname"
                                                          size="10"
                                                          type="number"
                                                          name="fname"
                                                          placeholder="Height (m)"
                                                          onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                          min="0" max="9999999"
                                                          required
                                                      />
                                                  <FormInput
                                                          id="fname"
                                                          size="10"
                                                          type="number"
                                                          name="fname"
                                                          placeholder="Depth (m)"
                                                          onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                          min="0" max="9999999"
                                                          required
                                                      />
                                
                                          </Form>
                                      : this.state.poolHrs == 4 ?
                                        <Form>
                                            <FormInput
                                                id="fname"
                                                size="10"
                                                type="number"
                                                name="fname"
                                                placeholder="Volume (L)"
                                                onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                min="0" max="9999999"
                                                required
                                            />
                                        </Form>
                                      : null
                                      }
                                  </div>
                                      :
                                  <ServiceGridSplit><ServiceTest>Pool Maintanance</ServiceTest><Tooltip  title="Pool Maintanance" aria-label="add"><Fab2><Maintanance onClick={this.periodMaint.bind(this)} PoolMaint = {this.state.PoolMaint}/></Fab2></Tooltip></ServiceGridSplit>
                                  }
                                  {this.state.PoolClean?
                                  <div>
                                      <ServiceTest> Extra Issues</ServiceTest>
                                      <Message>
                                        <Checkbox toggle label = "  Algae" onChange={ this.handleOnceOFF }  disabled = {cleanOnceStatus} priceCleanOnce =  {this.state.priceCleanOnce}/>
                                        <Checkbox toggle label = "  Cloudyness" onChange={ this.handleCleanWeek }  disabled = {cleanWeekStatus} priceCleanWeek =  {this.state.priceCleanWeek}/>
                                        <Checkbox toggle label = "  Circulation" onChange={ this.handleCleanMonth }  disabled = {cleanMonthStatus} priceCleanMonth =  {this.state.priceCleanMonth}/>
                                      </Message>
                                  </div>
                                  :
                                  this.state.PoolMaint?
                                  <div>
                                      <ServiceTest> Extra Issues</ServiceTest>
                                      <Message>
                                        <Checkbox toggle label = "  Algae" onChange={ this.handleOnceOFF }  disabled = {cleanOnceStatus} priceCleanOnce =  {this.state.priceCleanOnce}/>
                                        <Checkbox toggle label = "  Cloudyness" onChange={ this.handleCleanWeek }  disabled = {cleanWeekStatus} priceCleanWeek =  {this.state.priceCleanWeek}/>
                                        <Checkbox toggle label = "  Circulation" onChange={ this.handleCleanMonth }  disabled = {cleanMonthStatus} priceCleanMonth =  {this.state.priceCleanMonth}/>
                                        <Checkbox toggle label = "  Pump Clog" onChange={ this.handleCleanMonth }  disabled = {cleanMonthStatus} priceCleanMonth =  {this.state.priceCleanMonth}/>

                                      </Message>
                                  </div>
                                      :
                                  <ServiceGridSplit><ServiceTest>Repairs - Coming Soon</ServiceTest><Tooltip  title="Pool Repairs - Coming Soon" aria-label="add"><Fab2><ServicePool onClick={this.perPoolRepair.bind(this)} PoolRepair = {this.state.PoolRepair}/></Fab2></Tooltip></ServiceGridSplit>
                                      
                                  }
                                </Options3p1>
                                <ContentTitle> Service Details & Costs
                                  <span><hr width="300"/></span>
                                </ContentTitle>
                                <Options3>
                                  <div style = {{"margin-left" : "2px"}}>
                                    <Message2>Pool Details</Message2>

                                    <EventLog logs={this.state.locPool}/>

                                    <EventLog logs={this.state.eventsPoolHours}/>
                                    {this.state.PoolTime.length !== 0 ?
                                      <Message>Date : {poolTime.replace("GMT+0200 (South Africa Standard Time)","")}</Message> 
                                    : null
                                    }                                           
                                  </div>
                                  <div>      
                                    <Message2>Services</Message2>
                                    <Message>{this.state.PoolCleanService}</Message>
                                    <Message>{this.state.PoolMaintService}</Message>
                                    <Message>{this.state.value9}</Message>
                                  </div>
                                  <div>
                                    <Message2>Costs</Message2>
                                    {this.state.PoolClean?
                                        <Message>
                                          <Checkbox toggle label = "  Once OFF" onChange={ this.handleOnceOFF }  disabled = {cleanOnceStatus} priceCleanOnce =  {this.state.priceCleanOnce}/>
                                          <Checkbox toggle label = "  Weekly" onChange={ this.handleCleanWeek }  disabled = {cleanWeekStatus} priceCleanWeek =  {this.state.priceCleanWeek}/>
                                          <Checkbox toggle label = "  Monthly" onChange={ this.handleCleanMonth }  disabled = {cleanMonthStatus} priceCleanMonth =  {this.state.priceCleanMonth}/>
                                        Total : R {totalPool.toFixed(2)} 
                                        </Message>
                                      
                                      :  this.state.PoolMaint ?
                                      <Message>       
                                          <Checkbox toggle label = "  Monthly" onChange={ this.handleMaintMonth } disabled = {maintMonthStatus} priceMaintMonth =  {this.state.priceMaintMonth}/>
                                          <Checkbox toggle label = "  Quaterly" onChange={ this.handleMaintQuat } disabled = {maintQuatStatus} priceMaintQuat =  {this.state.priceMaintQuat}/>
                                          <Checkbox toggle label = "  Yearly" onChange={ this.handleMaintYear } disabled = {maintYearStatus} priceMaintYear =  {this.state.priceMaintYear}/>
                                        Total : R {totalPool.toFixed(2)} 
                                        </Message>


                                      : null
                                      }
                                  </div>
                                </Options3>
                                <p style = {{"textAlign" : "center"}}><CustomButton onClick={this.selectPool.bind(this)} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}size="sm">Book Service</CustomButton></p> 

                            </div> 
                          )
                        }
                      ]}
                    />
                  </GridItem>
                </GridContainer>
                </TabsContainer>
 
                </PopupInner>  
            </Popup> 

            {this.state.showPopupOutdoor?
              this.props.currentUser?
              <Outdoor showPopupOutdoor = {this.state.showPopupOutdoor} currentUser = {this.props.currentUser} closePopup={this.props.closePopup} dateTime = {this.state.dateTime2} total = {this.state.total2} time = {this.state.areaHours} wheelbarrow = {this.state.value8} mower = {this.state.value11} windows = {this.state.value9} box = {this.state.value10} />
                : !this.props.currentUser?
                  <PromptSinIn currentUser = {this.props.currentUser} showPopupOutdoor = {this.state.showPopupOutdoor} closePopup={this.props.closePopup} dateTime = {this.state.dateTime2} total = {this.state.total2} time = {this.state.areaHours} wheelbarrow = {this.state.value8} mower = {this.state.value11} windows = {this.state.value9} box = {this.state.value10}/>
                : null
              :null
            } 

            {this.state.showPopupIndoor ?
               this.props.currentUser?
                <Indoor showPopupIndoor = {this.state.showPopupIndoor} currentUser = {this.props.currentUser} closePopup={this.props.closePopup} dateTime = {this.state.dateTime} totalIndoor = {this.state.totalIndoor} genIndoorCleanWallsService = {this.state.genIndoorCleanWallsService} genIndoorCleanWindowsService = {this.state.genIndoorCleanWindowsService} genIndoorCleanLaundryService = {this.state.genIndoorCleanLaundryService} afterBuildIndoorCleanWallsService = {this.state.afterBuildIndoorCleanWallsService} serviceIntervalIndoor = {this.state.serviceIntervalIndoor} 
                afterBuildIndoorCleanWindowsService = {this.state.afterBuildIndoorCleanWindowsService} endTenancyIndoorCleanWallsService = {this.state.endTenancyIndoorCleanWallsService} endTenancyIndoorCleanWindowsService = {this.state.endTenancyIndoorCleanWindowsService} bedRooms = {this.state.bedRooms} bathRooms = {this.state.bathRooms} IndoorCleanService = {this.state.IndoorCleanService} IndoorAfterBuildCleanService = {this.state.IndoorAfterBuildCleanService} IndoorEndTenancyCleanService = {this.state.IndoorEndTenancyCleanService} IndoorSanitiseService = {this.state.IndoorSanitiseService}/>
                : !this.props.currentUser?
                  <PromptSinIn currentUser = {this.props.currentUser} showPopupIndoor = {this.state.showPopupIndoor} closePopup={this.props.closePopup} dateTime = {this.state.dateTime} totalIndoor = {this.state.totalIndoor} genIndoorCleanWallsService = {this.state.genIndoorCleanWallsService} genIndoorCleanWindowsService = {this.state.genIndoorCleanWindowsService} genIndoorCleanLaundryService = {this.state.genIndoorCleanLaundryService} afterBuildIndoorCleanWallsService = {this.state.afterBuildIndoorCleanWallsService} serviceIntervalIndoor = {this.state.serviceIntervalIndoor} 
                afterBuildIndoorCleanWindowsService = {this.state.afterBuildIndoorCleanWindowsService} endTenancyIndoorCleanWallsService = {this.state.endTenancyIndoorCleanWallsService} endTenancyIndoorCleanWindowsService = {this.state.endTenancyIndoorCleanWindowsService} bedRooms = {this.state.bedRooms} bathRooms = {this.state.bathRooms} IndoorCleanService = {this.state.IndoorCleanService} IndoorAfterBuildCleanService = {this.state.IndoorAfterBuildCleanService} IndoorEndTenancyCleanService = {this.state.IndoorEndTenancyCleanService} IndoorSanitiseService = {this.state.IndoorSanitiseService}/>
                : null

              :null
            }

            {this.state.showPopupPool ?
               this.props.currentUser?
                <Pool showPopupPool = {this.state.showPopupPool} currentUser = {this.props.currentUser} closePopup={this.props.closePopup} dateTime = {this.state.dateTimePool} total = {this.state.totalPool} time = {this.state.poolHrs} poolCleaning = {this.state.PoolCleanService} poolMaintanence = {this.state.PoolMaintService} serviceInterval = {this.state.serviceInterval}/>
                : !this.props.currentUser?
                  <PromptSinIn currentUser = {this.props.currentUser} showPopupPool = {this.state.showPopupPool} closePopup={this.props.closePopup} dateTime = {this.state.dateTimePool} total = {this.state.totalPool} time = {this.state.poolHrs} poolCleaning = {this.state.PoolCleanService} poolMaintanence = {this.state.PoolMaintService} serviceInterval = {this.state.serviceInterval}/>
                : null

              :null
            }

            {this.state.showTcIn ?
              <IndoorTCs showTcIn = {this.state.showTcIn} closeTcIn={this.showTcsIn.bind(this)}/>
              : null
            }
            {this.state.showServicesInfo ?
              <IndoorServicesInfo showServicesInfo = {this.state.showServicesInfo} closeServiceInfo={this.showServicesInfo.bind(this)}/>
              : null
            }
            {this.state.showOutdoorServicesInfo ?
              <OutdoorServicesInfo showOutdoorServicesInfo = {this.state.showOutdoorServicesInfo} closeOutdoorServiceInfo={this.showOutdoorServicesInfo.bind(this)}/>
              : null
            }
            
            {this.state.showPoolServicesInfo ?
              <PoolServicesInfo showPoolServicesInfo = {this.state.showPoolServicesInfo} closePoolServiceInfo={this.showPoolServicesInfo.bind(this)}/>
              : null
            }

            </div>            
        );  
    }  
}  
export default Cleaner;


//https://www.npmjs.com/package/react-input-range

//https://codesandbox.io/s/870zq?file=/demo.js         
