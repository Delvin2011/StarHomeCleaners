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
import Select from 'react-select';
//import FilteredList from '../LocationFilter/locationFilter';
import locations from './locations';
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
  logsOutdoorPropType = [];
  logsOutdoorPropKind = [];
  locationPool = [];
  poolTimes = [];
  logsPoolHours = [];
  logsYCarea = [];
  logsLMarea = [];
  logsFBarea = [];
  logsDCarea = [];
    constructor(){
        super();   
        this.state = {
          defaultValue: new Date(),
          dateTime: null,//new Date(),
          dateTimeOutdoor: null,
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
          priceGenIndoorDetergents: 0,
          priceAfterBuilderDetergents: 0,
          priceEndTenancyDetergents: 0,
          genIndoorCleanOnce: false,
          genIndoorDetergents: false,
          afterBuilderDetergents: false,
          endTenancyDetergents: false,
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
          FBoutdoorClean: false,
          DCoutdoorClean: false,
          PoolClean: false,
          PoolMaint: false,
          PoolRepair: false,
          events: this.logs,
          events2: this.logs2,
          events3: this.logs3,
          events4: this.logs4,
          events5: this.logs5,
          events6: this.logs6,
          OutdoorPropType: this.logsOutdoorPropType,
          OutdoorPropKind: this.logsOutdoorPropKind,
          eventsPoolHours: this.logsPoolHours,
          locPool: this.locationPool,
          PoolTime: this.poolTimes,
          value6: "",
          value7: "",


          DCoutdoorCleanDisplay: "",
          PoolCleanService: "",
          PoolMaintService: "",
          LMoutdoorCleanDisplay: "",
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

          FBoutdoorCleanPrice: 0,
          DCoutdoorCleanPrice: 0,
          LMoutdoorCleanPrice: 0,
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
          totalPool: 0,
          serviceInterval: "",
          hrs: 0,
          poolHrs: 0,
          bedRooms : 0,
          bathRooms: 0,
          showTcIn: false,
          showTcOut: false,
          genCleanloc: "",
          outdoorLoc: "",
          poolLoc: "",
          handleIndoorGenPromo: 1,
          handleIndoorEndTenencyPromo: 1,
          handleIndoorAfterBuildPromo: 1,
          handleIndoorSanitisePromo: 1,
          total2: 0,

          /***************** Outdoor ********************/
          outdoorYCwholeYard: false, outdoorYCfrontYard: false, outdoorYCbackYard: false, outdoorYCsideYard: false,
          outdoorLMwholeYard: false, outdoorLMfrontYard: false, outdoorLMbackYard: false, outdoorLMsideYard: false,
          outdoorFBwholeYard: false, outdoorFBfrontYard: false, outdoorFBbackYard: false, outdoorFBsideYard: false,
          outdoorDCwholeYard: false, outdoorDCfrontYard: false, outdoorDCbackYard: false, outdoorDCsideYard: false,
          YCoutdoorClean: false,
          YCoutdoorCleanDisplay: "",
          YCoutdoorCleanPrice: 0,
          FBoutdoorCleanDisplay: "",
          outdoorYC_WYard: "", outdoorYC_FYard: "", outdoorYC_BYard: "", outdoorYC_SYard: "",
          outdoorLM_WYard: "", outdoorLM_FYard: "", outdoorLM_BYard: "", outdoorLM_SYard: "",
          outdoorFB_WYard: "", outdoorFB_FYard: "", outdoorFB_BYard: "", outdoorFB_SYard: "",
          outdoorDC_WYard: "", outdoorDC_FYard: "", outdoorDC_BYard: "", outdoorDC_SYard: "",
          YCarea : this.logsYCarea, LMarea : this.logsLMarea, FBarea : this.logsFBarea, DCarea : this.logsDCarea,
          outdoorYConce : false, outdoorYConcePrice : 0, outdoorYCweek: false, outdoorYCweekPrice : 0, outdoorYCmonth: false, outdoorYCmonthPrice : 0,
          outdoorLMonce : false, outdoorLMoncePrice : 0, outdoorLMweek: false, outdoorLMweekPrice : 0, outdoorLMmonth: false, outdoorLMmonthPrice : 0,
          outdoorFBonce : false, outdoorFBoncePrice : 0, outdoorFBweek: false, outdoorFBweekPrice : 0, outdoorFBmonth: false, outdoorFBmonthPrice : 0,
          outdoorDConce : false, outdoorDConcePrice : 0, outdoorDCweek: false, outdoorDCweekPrice : 0, outdoorDCmonth: false, outdoorDCmonthPrice : 0,
          YCareaPrice: 0, LMareaPrice : 0,FBareaPrice : 0, DCareaPrice : 0,
          handleOutdoorPromo : 1
          
          
          
          
          

        }
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleDropdownChange2 = this.handleDropdownChange2.bind(this);

        this.handleOutdoorLoc = this.handleOutdoorLoc.bind(this);
        this.handlePoolLoc = this.handlePoolLoc.bind(this);
        this.handleChecked = this.handleChecked.bind(this);

        /***********Indoor Services Handling*************/
        this.genIndoorCleanOnce = this.genIndoorCleanOnce.bind(this);
        this.genIndoorCleanWeek = this.genIndoorCleanWeek.bind(this);
        this.genIndoorCleanMonth= this.genIndoorCleanMonth.bind(this);

        this.genIndoorCleanWalls= this.genIndoorCleanWalls.bind(this);
        this.genIndoorCleanWindows= this.genIndoorCleanWindows.bind(this);
        this.genIndoorCleanLaundry= this.genIndoorCleanLaundry.bind(this);
        this.genIndoorDetergents= this.genIndoorDetergents.bind(this);
        this.afterBuilderDetergents= this.afterBuilderDetergents.bind(this);
        this.endTenancyDetergents= this.endTenancyDetergents.bind(this);
        this.handleIndoorLoc = this.handleIndoorLoc.bind(this);

        this.afterBuildIndoorCleanWalls= this.afterBuildIndoorCleanWalls.bind(this);
        this.afterBuildIndoorCleanWindows= this.afterBuildIndoorCleanWindows.bind(this);

        this.endTenancyIndoorCleanWalls= this.endTenancyIndoorCleanWalls.bind(this);
        this.endTenancyIndoorCleanWindows= this.endTenancyIndoorCleanWindows.bind(this);

        this.sanitiseIndoorOnceOFF= this.sanitiseIndoorOnceOFF.bind(this);
        this.sanitiseIndoorMonth= this.sanitiseIndoorMonth.bind(this);
        this.handleIndoorGenPromo = this.handleIndoorGenPromo.bind(this);
        this.handleIndoorEndTenencyPromo = this.handleIndoorEndTenencyPromo.bind(this);
        this.handleIndoorAfterBuildPromo = this.handleIndoorAfterBuildPromo.bind(this);
        this.handleIndoorSanitisePromo = this.handleIndoorSanitisePromo.bind(this);


        /***********Outdoor Services Handling*************/
        this.handleOutdoorPropertType = this.handleOutdoorPropertType.bind(this);
        this.handleOutdoorPropertKind = this.handleOutdoorPropertKind.bind(this);

        this.outdoorYCwholeYard= this.outdoorYCwholeYard.bind(this);
        this.outdoorYCfrontYard= this.outdoorYCfrontYard.bind(this);
        this.outdoorYCbackYard= this.outdoorYCbackYard.bind(this);
        this.outdoorYCsideYard= this.outdoorYCsideYard.bind(this);

        this.outdoorLMwholeYard= this.outdoorLMwholeYard.bind(this);
        this.outdoorLMfrontYard= this.outdoorLMfrontYard.bind(this);
        this.outdoorLMbackYard= this.outdoorLMbackYard.bind(this);
        this.outdoorLMsideYard= this.outdoorLMsideYard.bind(this);

        this.outdoorFBwholeYard= this.outdoorFBwholeYard.bind(this);
        this.outdoorFBfrontYard= this.outdoorFBfrontYard.bind(this);
        this.outdoorFBbackYard= this.outdoorFBbackYard.bind(this);
        this.outdoorFBsideYard= this.outdoorFBsideYard.bind(this);

        this.outdoorDCwholeYard= this.outdoorDCwholeYard.bind(this);
        this.outdoorDCfrontYard= this.outdoorDCfrontYard.bind(this);
        this.outdoorDCbackYard= this.outdoorDCbackYard.bind(this);
        this.outdoorDCsideYard= this.outdoorDCsideYard.bind(this);

        this.handleYCarea= this.handleYCarea.bind(this);
        this.handleLMarea= this.handleLMarea.bind(this);
        this.handleFBarea= this.handleFBarea.bind(this);
        this.handleDCarea= this.handleDCarea.bind(this);

        this.outdoorYConce= this.outdoorYConce.bind(this); this.outdoorYCweek= this.outdoorYCweek.bind(this); this.outdoorYCmonth= this.outdoorYCmonth.bind(this);
        this.outdoorLMonce= this.outdoorLMonce.bind(this); this.outdoorLMweek= this.outdoorLMweek.bind(this); this.outdoorLMmonth= this.outdoorLMmonth.bind(this);
        this.outdoorFBonce= this.outdoorFBonce.bind(this); this.outdoorFBweek= this.outdoorFBweek.bind(this); this.outdoorFBmonth= this.outdoorFBmonth.bind(this);
        this.outdoorDConce= this.outdoorDConce.bind(this); this.outdoorDCweek= this.outdoorDCweek.bind(this); this.outdoorDCmonth= this.outdoorDCmonth.bind(this);
  
        this.handleOutdoorPromo= this.handleOutdoorPromo.bind(this);
        /***********Pool Services Handling*************/
        this.handleOnceOFF = this.handleOnceOFF.bind(this);
        this.handleCleanWeek = this.handleCleanWeek.bind(this);
        this.handleCleanMonth = this.handleCleanMonth.bind(this);

        this.handleMaintMonth = this.handleMaintMonth.bind(this);
        this.handleMaintQuat = this.handleMaintQuat.bind(this);
        this.handleMaintYear = this.handleMaintYear.bind(this);


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


      handlePoolAreaSize(e) {
        this.logsPoolHours.shift();
        this.logsPoolHours.unshift("Working Hours : " + e.target.value + " hrs");
          this.setState({ selectValue: e.target.value,
            poolHrs: e.target.value
          });
        }



        handleOutdoorLoc = option => {
        this.logs5.shift();
        this.logs5.unshift("Location : " + option.value);
          this.setState({ outdoorLoc: option
          });
        }

        handlePoolLoc= option => {
          this.locationPool.shift();
          this.locationPool.unshift("Location : " + option.value);
            this.setState({ poolLoc: option
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

    genIndoorDetergents () {
      this.setState({genIndoorDetergents: !this.state.genIndoorDetergents,
      priceGenIndoorDetergents: this.state.genIndoorDetergents? 0 : 35});
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

    afterBuilderDetergents () {
      this.setState({afterBuilderDetergents: !this.state.afterBuilderDetergents,
        priceAfterBuilderDetergents: this.state.afterBuilderDetergents? 0 : 70});
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


    endTenancyDetergents () {
      this.setState({endTenancyDetergents: !this.state.endTenancyDetergents,
        priceEndTenancyDetergents: this.state.endTenancyDetergents? 0 : 50});
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
        totalIndoor: this.state.genIndoorCleanOnce || this.state.genIndoorCleanWeek || this.state.genIndoorCleanMonth? (150 + this.state.bedPrice + this.state.bathPrice + this.state.priceGenIndoorCleanWalls + this.state.priceGenIndoorCleanWindows + this.state.priceGenIndoorCleanLaundry + this.state.priceGenIndoorDetergents) * (this.state.priceGenIndoorCleanOnce + this.state.priceGenIndoorCleanWeek + this.state.priceGenIndoorCleanMonth) * this.state.handleIndoorGenPromo : 0 +
        this.state.IndoorAfterBuildClean ?  (180 + this.state.bedPrice + this.state.bathPrice + this.state.priceAfterBuildIndoorCleanWalls + this.state.priceAfterBuildIndoorCleanWindows + this.state.priceAfterBuilderDetergents) *  this.state.handleIndoorAfterBuildPromo: 0 +
        this.state.IndoorEndTenancyClean ? (180 + this.state.bedPrice + this.state.bathPrice + this.state.priceEndTenancyIndoorCleanWalls + this.state.priceEndTenancyIndoorCleanWindows + this.state.priceEndTenancyDetergents) * this.state.handleIndoorEndTenencyPromo : 0 +
        this.state.IndoorSanitise ? (230 + this.state.bedPrice + this.state.bathPrice) * (this.state.priceSanitiseIndoorOnceOFF + this.state.priceSanitiseIndoorMonth) * this.state.handleIndoorSanitisePromo : 0,
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


    handleIndoorLoc = option => {
      this.logs3.shift();
      this.logs3.unshift("Location : " + option.value);
        this.setState({ genCleanloc: option
        });
      }

    handleIndoorGenPromo(event) {
      event.preventDefault();
      console.log(event.target.value);
      const code = event.target.value.toLowerCase();
      const genPromo = code.length == 7 && (code.substring(5,7) == "pt" || code.substring(5,7) == "fr")? 0.8 : 1;
      console.log(genPromo);
      this.setState({
        handleIndoorGenPromo: genPromo
      });
    }

    handleIndoorAfterBuildPromo(event) {
      event.preventDefault();
      console.log(event.target.value);
      const code = event.target.value.toLowerCase();
      const genPromo = code.length == 7 && (code.substring(5,7) == "pt" || code.substring(5,7) == "fr")? 0.8 : 1;
      console.log(genPromo);
      this.setState({
        handleIndoorAfterBuildPromo: genPromo
      });
    }

    handleIndoorEndTenencyPromo(event) {
      event.preventDefault();
      console.log(event.target.value);
      const code = event.target.value.toLowerCase();
      const genPromo = code.length == 7 && (code.substring(5,7) == "pt" || code.substring(5,7) == "fr")? 0.8 : 1;
      console.log(genPromo);
      this.setState({
        handleIndoorEndTenencyPromo: genPromo
      });
    }

    handleIndoorSanitisePromo(event) {
      event.preventDefault();
      console.log(event.target.value);
      const code = event.target.value.toLowerCase();
      const genPromo = code.length == 7 && (code.substring(5,7) == "pt" || code.substring(5,7) == "fr")? 0.8 : 1;
      console.log(genPromo);
      this.setState({
        handleIndoorSanitisePromo: genPromo
      });
    }
    /**************Outdoor Services Handling********************/

    showOutdoorServicesInfo(event) {
      this.setState({
        showOutdoorServicesInfo: !this.state.showOutdoorServicesInfo
      });
    }

    handleDateChangeOutdoor = date => {
      this.logs6.shift()
      this.logs6.unshift("" + date);
      this.setState({
          dateTimeOutdoor: date,
          events6: this.logs6.slice()
      });
    }

    handleOutdoorPropertType(e) {
      this.logsOutdoorPropType.shift();
      this.logsOutdoorPropType.unshift("Type : " + e.target.value );
        this.setState({ selectValue: e.target.value,
          areaHours: e.target.value //to ignore
        });
      }


      handleOutdoorPropertKind(e) {
        this.logsOutdoorPropKind.shift();
        this.logsOutdoorPropKind.unshift("Kind : " + e.target.value );
          this.setState({ selectValue: e.target.value,
            areaHours: e.target.value //to ignore
          });
        }
  
        outdoorYCwholeYard () {this.setState({outdoorYCwholeYard: !this.state.outdoorYCwholeYard,outdoorYC_WYard:"Whole "})};
        outdoorYCfrontYard () {this.setState({outdoorYCfrontYard: !this.state.outdoorYCfrontYard,outdoorYC_FYard:"Front "})};
        outdoorYCbackYard () {this.setState({outdoorYCbackYard: !this.state.outdoorYCbackYard,outdoorYC_BYard:"Back "})};
        outdoorYCsideYard () {this.setState({outdoorYCsideYard: !this.state.outdoorYCsideYard,outdoorYC_SYard:"Side "})};
        
        outdoorLMwholeYard () {this.setState({outdoorLMwholeYard: !this.state.outdoorLMwholeYard,outdoorLM_WYard:"Whole "})};
        outdoorLMfrontYard () {this.setState({outdoorLMfrontYard: !this.state.outdoorLMfrontYard,outdoorLM_FYard:"Front "})};
        outdoorLMbackYard () {this.setState({outdoorLMbackYard: !this.state.outdoorLMbackYard,outdoorLM_BYard:"Back "})};
        outdoorLMsideYard () {this.setState({outdoorLMsideYard: !this.state.outdoorLMsideYard,outdoorLM_SYard:"Side "})};

        outdoorFBwholeYard () {this.setState({outdoorFBwholeYard: !this.state.outdoorFBwholeYard,outdoorFB_WYard:"Whole "})};
        outdoorFBfrontYard () {this.setState({outdoorFBfrontYard: !this.state.outdoorFBfrontYard,outdoorFB_FYard:"Front "})};
        outdoorFBbackYard () {this.setState({outdoorFBbackYard: !this.state.outdoorFBbackYard,outdoorFB_BYard:"Back "})};
        outdoorFBsideYard () {this.setState({outdoorFBsideYard: !this.state.outdoorFBsideYard,outdoorFB_SYard:"Side "})};

        outdoorDCwholeYard () {this.setState({outdoorDCwholeYard: !this.state.outdoorDCwholeYard,outdoorDC_WYard:"Whole "})};
        outdoorDCfrontYard () {this.setState({outdoorDCfrontYard: !this.state.outdoorDCfrontYard,outdoorDC_FYard:"Front "})};
        outdoorDCbackYard () {this.setState({outdoorDCbackYard: !this.state.outdoorDCbackYard,outdoorDC_BYard:"Back "})};
        outdoorDCsideYard () {this.setState({outdoorDCsideYard: !this.state.outdoorDCsideYard,outdoorDC_SYard:"Side "})};

        YCoutdoorClean(event) {
          this.setState({
            outdoorYCwholeYard : false, outdoorYCfrontYard: false, outdoorYCbackYard : false, outdoorYCsideYard : false,
            outdoorYConce : false, outdoorYCweek: false, outdoorYCmonth : false,
            YCareaPrice : 0, YCarea : this.logsYCarea,
            YCoutdoorClean: !this.state.YCoutdoorClean,
            YCoutdoorCleanDisplay: this.state.YCoutdoorClean? null : "Yard Cleaning",
            YCoutdoorCleanPrice: this.state.YCoutdoorClean? 0 : 127
          });
        }


        FBoutdoorClean(event) {
          this.setState({
            outdoorFBwholeYard : false, outdoorFBfrontYard: false, outdoorFBbackYard : false, outdoorFBsideYard : false,
            outdoorFBonce : false, outdoorFBweek: false, outdoorFBmonth : false,
            FBareaPrice : 0, FBarea : this.logsFBarea,
            FBoutdoorClean: !this.state.FBoutdoorClean,
            FBoutdoorCleanDisplay: this.state.FBoutdoorClean? null : "Flower Bedding",
            FboutdoorCleanPrice: this.state.FBoutdoorClean? 0 : 130
          });
        }
    
        DCoutdoorClean(event) {
          this.setState({
            outdoorDCwholeYard : false, outdoorDCfrontYard: false, outdoorDCbackYard : false, outdoorDCsideYard : false,
            outdoorDConce : false, outdoorDCweek: false, outdoorDCmonth : false,
            DCareaPrice : 0, DCarea : this.logsDCarea,
            DCoutdoorClean: !this.state.DCoutdoorClean,
            DCoutdoorCleanDisplay: this.state.DCoutdoorClean? null : "Driveway Cleaning",
            DCoutdoorCleanPrice: this.state.DCoutdoorClean? 0 : 177
          });
        }

        LMoutdoorClean(event) {
          this.setState({
            outdoorLMwholeYard : false, outdoorLMfrontYard: false, outdoorLMbackYard : false, outdoorLMsideYard : false,
            outdoorLMonce : false, outdoorLMweek: false, outdoorLMmonth : false,
            LMareaPrice : 0, LMarea : this.logsLMarea,
            LMoutdoorClean: !this.state.LMoutdoorClean,
            LMoutdoorCleanDisplay: this.state.LMoutdoorClean? null : "Lawn Mowing",
            LMoutdoorCleanPrice: this.state.LMoutdoorClean? 0 : 137
          });
        }
      
        handleYCarea(e) { const area  = e.target.value; this.logsYCarea.shift(); this.logsYCarea.unshift("Area : " + e.target.value ); this.setState({ YCareaPrice: area == "0-20 sqm"? 100 : area == "20-75 sqm" ? 150 : area == "75-150 sqm"? 200 : area == "150-250 sqm" ? 250 : 0}); }
        handleLMarea(e) { const area  = e.target.value; this.logsLMarea.shift(); this.logsLMarea.unshift("Area : " + e.target.value ); this.setState({ LMareaPrice: area == "0-20 sqm"? 105 : area == "20-75 sqm" ? 155 : area == "75-150 sqm"? 205 : area == "150-250 sqm" ? 255 : 0 }); }
        handleFBarea(e) { const area  = e.target.value; this.logsFBarea.shift(); this.logsFBarea.unshift("Area : " + e.target.value ); this.setState({ FBareaPrice: area == "0-20 sqm"? 90 : area == "20-75 sqm" ? 140 : area == "75-150 sqm"? 190 : area == "150-250 sqm" ? 240 : 0}); }
        handleDCarea(e) { const area  = e.target.value; this.logsDCarea.shift(); this.logsDCarea.unshift("Area : " + e.target.value ); this.setState({ DCareaPrice: area == "0-20 sqm"? 80 : area == "20-75 sqm" ? 130 : area == "75-150 sqm"? 180 : area == "150-250 sqm" ? 230 : 0}); } 

        outdoorYConce () { this.setState({outdoorYConce: !this.state.outdoorYConce, outdoorYConcePrice : this.state.outdoorYConce? 0 : 1}); }
        outdoorYCweek () { this.setState({outdoorYCweek: !this.state.outdoorYCweek, outdoorYCweekPrice : this.state.outdoorYCweek? 0 : 0.9}); }
        outdoorYCmonth () { this.setState({outdoorYCmonth: !this.state.outdoorYCmonth, outdoorYCmonthPrice : this.state.outdoorYCmonth? 0 : 0.95}); }
        
        outdoorLMonce() { this.setState({outdoorLMonce: !this.state.outdoorLMonce, outdoorLMoncePrice : this.state.outdoorLMonce? 0 : 1}); }
        outdoorLMweek () { this.setState({outdoorLMweek: !this.state.outdoorLMweek, outdoorLMweekPrice : this.state.outdoorLMweek? 0 : 0.9}); }
        outdoorLMmonth () { this.setState({outdoorLMmonth: !this.state.outdoorLMmonth, outdoorLMmonthPrice : this.state.outdoorLMmonth? 0 : 0.95}); }

        outdoorFBonce () { this.setState({outdoorFBonce: !this.state.outdoorFBonce, outdoorFBoncePrice : this.state.outdoorFBonce? 0 : 1}); }
        outdoorFBweek () { this.setState({outdoorFBweek: !this.state.outdoorFBweek, outdoorFBweekPrice : this.state.outdoorFBweek? 0 : 0.9}); }
        outdoorFBmonth () { this.setState({outdoorFBmonth: !this.state.outdoorFBmonth, outdoorFBmonthPrice : this.state.outdoorFBmonth? 0 : 0.95}); }

        outdoorDConce () { this.setState({outdoorDConce: !this.state.outdoorDConce, outdoorDConcePrice : this.state.outdoorDConce? 0 : 1}); }
        outdoorDCweek () { this.setState({outdoorDCweek: !this.state.outdoorDCweek, outdoorDCweekPrice : this.state.outdoorDCweek? 0 : 0.9}); }
        outdoorDCmonth () { this.setState({outdoorDCmonth: !this.state.outdoorDCmonth, outdoorDCmonthPrice : this.state.outdoorDCmonth? 0 : 0.95}); }
        
        selectOutdoor(event) {
          this.setState({
            showPopupOutdoor: !this.state.showPopupOutdoor,
            value: event.target.innerText,
            total2: this.state.areaHours < 2.1 ? (this.state.YCoutdoorCleanPrice + this.state.FBoutdoorCleanPrice + this.state.DCoutdoorCleanPrice + this.state.LMoutdoorCleanPrice)  + 50 : 50 +(((this.state.areaHours - 2) * 40) + (this.state.YCoutdoorCleanPrice + this.state.FBoutdoorCleanPrice + this.state.DCoutdoorCleanPrice + this.state.LMoutdoorCleanPrice))
          });
        }
        
        handleOutdoorPromo(event) {
          event.preventDefault();
          const code = event.target.value.toLowerCase();
          const genPromo = code.length == 7 && (code.substring(5,7) == "pt" || code.substring(5,7) == "fr")? 0.8 : 1;
          this.setState({
            handleOutdoorPromo: genPromo
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


    handleChange = event => { //destructure off of the event
        const {name, value} = event.target;
        this.setState({[name]: value});
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



  handleChangePool = date => {
    this.poolTimes.shift()
    this.poolTimes.unshift("" + date);
    this.setState({
        dateTimePool: date,
        PoolTime: this.poolTimes.slice()
    });
  }
  

  onLocationChange = option => {

    this.setState({ value: option });
  
};



render() {  
const total = 150 + this.state.bedPrice + this.state.bathPrice + this.state.price + this.state.price2 + this.state.price3 + this.state.price4 + this.state.price5 + this.state.price6 + this.state.priceDetergent;

const totalClean = this.state.PoolClean ? (250 + (this.state.poolHrs - 1)*18)*(this.state.priceCleanOnce + this.state.priceCleanWeek + this.state.priceCleanMonth) : 0;//             this.state.poolHrs * (this.state.PoolCleanPrice + this.state.PoolMaintPrice);
const totalMaint = this.state.PoolMaint ? (500 + (this.state.poolHrs - 1)*18)*(this.state.priceMaintMonth + this.state.priceMaintQuat + this.state.priceMaintYear) : 0;//             this.state.poolHrs * (this.state.PoolCleanPrice + this.state.PoolMaintPrice);
const totalPool = totalClean + totalMaint;

const totalGenIndoorClean = this.state.genIndoorCleanOnce || this.state.genIndoorCleanWeek || this.state.genIndoorCleanMonth? (150 + this.state.bedPrice + this.state.bathPrice + this.state.priceGenIndoorCleanWalls + this.state.priceGenIndoorCleanWindows + this.state.priceGenIndoorCleanLaundry + this.state.priceGenIndoorDetergents) * (this.state.priceGenIndoorCleanOnce + this.state.priceGenIndoorCleanWeek + this.state.priceGenIndoorCleanMonth) * this.state.handleIndoorGenPromo : 0;
const totalAfterBuildIndoorClean = this.state.IndoorAfterBuildClean ?  (180 + this.state.bedPrice + this.state.bathPrice + this.state.priceAfterBuildIndoorCleanWalls + this.state.priceAfterBuildIndoorCleanWindows + this.state.priceAfterBuilderDetergents) * this.state.handleIndoorAfterBuildPromo : 0;
const totalEndTenancyIndoorClean =  this.state.IndoorEndTenancyClean ? (180 + this.state.bedPrice + this.state.bathPrice + this.state.priceEndTenancyIndoorCleanWalls + this.state.priceEndTenancyIndoorCleanWindows + this.state.priceEndTenancyDetergents) * this.state.handleIndoorEndTenencyPromo  : 0;
const totalSanitiseIndoor = this.state.IndoorSanitise ? (230 + this.state.bedPrice + this.state.bathPrice) * (this.state.priceSanitiseIndoorOnceOFF + this.state.priceSanitiseIndoorMonth) * this.state.handleIndoorSanitisePromo : 0;
const totalIndoor = totalGenIndoorClean + totalAfterBuildIndoorClean + totalEndTenancyIndoorClean + totalSanitiseIndoor;

const x = "" + this.state.dateTime;
const y = "" + this.state.dateTimeOutdoor;
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



/********************Outdoor*****************/
const outdoorYCwholeYardStatus = this.state.outdoorYCfrontYard || this.state.outdoorYCbackYard || this.state.outdoorYCsideYard? true : false;
const outdoorNotWholeStatus = this.state.outdoorYCwholeYard ? true : false;


const outdoorLMwholeYardStatus = this.state.outdoorLMfrontYard || this.state.outdoorLMbackYard || this.state.outdoorLMsideYard? true : false;
const outdoorLMnotWholeStatus = this.state.outdoorLMwholeYard ? true : false;

const outdoorFBwholeYardStatus = this.state.outdoorFBfrontYard || this.state.outdoorFBbackYard || this.state.outdoorFBsideYard? true : false;
const outdoorFBnotWholeStatus = this.state.outdoorFBwholeYard ? true : false;

const outdoorDCwholeYardStatus = this.state.outdoorDCfrontYard || this.state.outdoorDCbackYard || this.state.outdoorDCsideYard? true : false;
const outdoorDCnotWholeStatus = this.state.outdoorDCwholeYard ? true : false;

const outDoorServiceRequired = this.state.YCoutdoorCleanDisplay? this.state.YCoutdoorCleanDisplay : this.state.LMoutdoorCleanDisplay? this.state.LMoutdoorCleanDisplay : this.state.FBoutdoorCleanDisplay? this.state.FBoutdoorCleanDisplay : this.state.DCoutdoorCleanDisplay? this.state.DCoutdoorCleanDisplay : '';

const YCw_yard = this.state.outdoorYCwholeYard ? this.state.outdoorYC_WYard : ""; const YCf_yard = this.state.outdoorYCfrontYard? this.state.outdoorYC_FYard : ""; const YCb_yard = this.state.outdoorYCbackYard? this.state.outdoorYC_BYard : ""; const YCs_yard = this.state.outdoorYCsideYard? this.state.outdoorYC_SYard: "";
const YC_yard_Status = YCw_yard + YCf_yard + YCb_yard +  YCs_yard;

const LMw_yard = this.state.outdoorLMwholeYard ? this.state.outdoorLM_WYard : ""; const LMf_yard = this.state.outdoorLMfrontYard? this.state.outdoorLM_FYard : ""; const LMb_yard = this.state.outdoorLMbackYard? this.state.outdoorLM_BYard : ""; const LMs_yard = this.state.outdoorLMsideYard? this.state.outdoorLM_SYard: "";
const LM_yard_Status = LMw_yard + LMf_yard + LMb_yard +  LMs_yard;

const FBw_yard = this.state.outdoorFBwholeYard ? this.state.outdoorFB_WYard : ""; const FBf_yard = this.state.outdoorFBfrontYard? this.state.outdoorFB_FYard : ""; const FBb_yard = this.state.outdoorFBbackYard? this.state.outdoorFB_BYard : ""; const FBs_yard = this.state.outdoorFBsideYard? this.state.outdoorFB_SYard: "";
const FB_yard_Status =  FBw_yard + FBf_yard + FBb_yard +  FBs_yard;

const DCw_yard = this.state.outdoorDCwholeYard ? this.state.outdoorDC_WYard : ""; const DCf_yard = this.state.outdoorDCfrontYard? this.state.outdoorDC_FYard : ""; const DCb_yard = this.state.outdoorDCbackYard? this.state.outdoorDC_BYard : ""; const DCs_yard = this.state.outdoorDCsideYard? this.state.outdoorDC_SYard: "";
const DC_yard_Status = DCw_yard + DCf_yard + DCb_yard +  DCs_yard;

const outdoorYConceStatus = this.state.outdoorYCweek || this.state.outdoorYCmonth ? true : false; const outdoorYCweekStatus = this.state.outdoorYConce || this.state.outdoorYCmonth ? true : false; const outdoorYCmonthStatus = this.state.outdoorYCweek || this.state.outdoorYConce ? true : false;
const outdoorLMonceStatus = this.state.outdoorLMweek || this.state.outdoorLMmonth ? true : false; const outdoorLMweekStatus = this.state.outdoorLMonce || this.state.outdoorLMmonth ? true : false; const outdoorLMmonthStatus = this.state.outdoorLMweek || this.state.outdoorLMonce ? true : false;
const outdoorFBonceStatus = this.state.outdoorFBweek || this.state.outdoorFBmonth ? true : false; const outdoorFBweekStatus = this.state.outdoorFBonce || this.state.outdoorFBmonth ? true : false; const outdoorFBmonthStatus = this.state.outdoorFBweek || this.state.outdoorFBonce ? true : false;
const outdoorDConceStatus = this.state.outdoorDCweek || this.state.outdoorDCmonth ? true : false; const outdoorDCweekStatus = this.state.outdoorDConce || this.state.outdoorDCmonth ? true : false; const outdoorDCmonthStatus = this.state.outdoorDCweek || this.state.outdoorDConce ? true : false;

const total2 = this.state.areaHours < 2.1 ? (this.state.YCoutdoorCleanPrice + this.state.FBoutdoorCleanPrice + this.state.DCoutdoorCleanPrice + this.state.LMoutdoorCleanPrice)  + 50 : 50 +(((this.state.areaHours - 2) * 40) + (this.state.YCoutdoorCleanPrice + this.state.FBoutdoorCleanPrice + this.state.DCoutdoorCleanPrice + this.state.LMoutdoorCleanPrice));
const totalYC = (150 + this.state.YCareaPrice * (this.state.outdoorYConcePrice + this.state.outdoorYCweekPrice + this.state.outdoorYCmonthPrice)) * this.state.handleOutdoorPromo;
const totalLM = (150 + this.state.LMareaPrice * (this.state.outdoorLMoncePrice + this.state.outdoorLMweekPrice + this.state.outdoorLMmonthPrice)) * this.state.handleOutdoorPromo;
const totalFB = (150 + this.state.FBareaPrice * (this.state.outdoorFBoncePrice + this.state.outdoorFBweekPrice + this.state.outdoorFBmonthPrice)) * this.state.handleOutdoorPromo;
const totalDC = (150 + this.state.DCareaPrice * (this.state.outdoorDConcePrice + this.state.outdoorDCweekPrice + this.state.outdoorDCmonthPrice)) * this.state.handleOutdoorPromo;
const totalOutdoor = this.state.YCoutdoorClean? totalYC : 0 + this.state.LMoutdoorClean ? totalLM : 0 + this.state.FBoutdoorClean ? totalFB : 0 + this.state.DCoutdoorClean ? totalDC : 0;




/******************End Outdoor***************/
const options = locations;
const ExampleCustomInput = ({ value, onClick }) => (
    <CustomButton style = {{"background": "#e91e63"}} onClick={onClick} size="sm">{
      value?
      value
      :     
      "Select Date & Time"
    }   
    </CustomButton>
  );

  const customStyles = (width = 100, height = 20) => {
    return {
        container: (base) => ({
            ...base,
            display:'inline-block',
            minWidth: width,
        }),
        valueContainer: (base) => ({
            ...base,
            minHeight: height,
        })
    }
}
const selectedService = this.state.IndoorCleanService? this.state.IndoorCleanService : this.state.IndoorAfterBuildCleanService? this.state.IndoorAfterBuildCleanService : this.state.IndoorEndTenancyCleanService? this.state.IndoorEndTenancyCleanService : this.state.IndoorSanitiseService? this.state.IndoorSanitiseService : '';

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

                                      
                                      <div style = {{"width": "150px","height": "22px","color": 'grey'}}>
                                        <Select
                                          styles= {customStyles}
                                          onChange={this.handleIndoorLoc}
                                          options={options}
                                          value={this.state.genCleanloc}
                                          placeholder="Location..."
                                          
                                        />
                                      </div>
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
                                        {this.state.IndoorAfterBuildClean ?
                                          <div>
                                          <ServiceTest> Extra Services</ServiceTest>
                                            <div style = {{"margin-top" : "0px"}}>
                                              <Checkbox toggle label = "  Walls" onChange={ this.genIndoorCleanWalls }   priceGenIndoorCleanWalls =  {this.state.priceGenIndoorCleanWalls}/>
                                              <Checkbox toggle label = "  Windows" onChange={ this.genIndoorCleanWindows }   priceGenIndoorCleanWindows =  {this.state.priceGenIndoorCleanWindows}/>
                                            </div>
                                          </div>

                                        : this.state.IndoorEndTenancyClean ?
                                        <div>
                                          <ServiceTest> Extra Services</ServiceTest>
                                            <div style = {{"margin-top" : "0px"}}>
                                              <Checkbox toggle label = "  Walls" onChange={ this.endTenancyIndoorCleanWalls }   priceEndTenancyIndoorCleanWalls =  {this.state.priceEndTenancyIndoorCleanWalls}/>
                                              <Checkbox toggle label = "  Windows" onChange={ this.endTenancyIndoorCleanWindows }   priceEndTenancyIndoorCleanWindows =  {this.state.priceEndTenancyIndoorCleanWindows}/>
                                            </div>
                                          </div>
                                        
                                        : this.state.IndoorSanitise ?
                                          <div>
                                            <ServiceTest> Extra Services</ServiceTest>
                                            <Message style = {{"margin-top" : "0px"}}>
                                            </Message>
                                          </div>

                                        : <ServiceGridSplit><ServiceTest>General Cleaning</ServiceTest><Tooltip title="General Cleaning" aria-label="add"><Fab2><GenCleanIcon onClick={this.genIndoorClean.bind(this)} IndoorGenClean = {this.state.IndoorGenClean}/></Fab2></Tooltip></ServiceGridSplit>
                                        }
                                        
                                        { this.state.IndoorGenClean ?
                                          <div>
                                          <ServiceTest> Extra Services</ServiceTest>
                                            <div style = {{"margin-top" : "0px"}}>
                                              <Checkbox toggle label = "  Walls" onChange={ this.genIndoorCleanWalls }   priceGenIndoorCleanWalls =  {this.state.priceGenIndoorCleanWalls}/>
                                              <Checkbox toggle label = "  Windows" onChange={ this.genIndoorCleanWindows }   priceGenIndoorCleanWindows =  {this.state.priceGenIndoorCleanWindows}/>
                                              <Checkbox toggle label = "  Laundry" onChange={ this.genIndoorCleanLaundry }   priceGenIndoorCleanLaundry =  {this.state.priceGenIndoorCleanLaundry}/>
                                            </div>
                                          </div>

                                          : this.state.IndoorEndTenancyClean ?
                                        <div>
                                          <ServiceTest> Frequency</ServiceTest>
                                            <div style = {{"margin-top" : "0px"}}>
                                              <Checkbox toggle label = "  OnceOFF" onChange={ this.sanitiseIndoorOnceOFF }  disabled = {sanitiseOnceStatus} priceSanitiseIndoorOnceOFF =  {this.state.priceSanitiseIndoorOnceOFF}/>
                                              <Checkbox toggle label = "  Monthly" onChange={ this.sanitiseIndoorMonth }  disabled = {sanitiseMonthStatus} priceSanitiseIndoorMonth =  {this.state.priceSanitiseIndoorMonth}/>
                                            </div>
                                          </div>

                                          : this.state.IndoorSanitise ?
                                          <div>
                                            <ServiceTest> Frequency</ServiceTest>
                                              <div style = {{"margin-top" : "0px"}}>
                                              <Checkbox toggle label = "  OnceOFF" onChange={ this.sanitiseIndoorOnceOFF }  disabled = {sanitiseOnceStatus} priceSanitiseIndoorOnceOFF =  {this.state.priceSanitiseIndoorOnceOFF}/>
                                              <Checkbox toggle label = "  Monthly" onChange={ this.sanitiseIndoorMonth }  disabled = {sanitiseMonthStatus} priceSanitiseIndoorMonth =  {this.state.priceSanitiseIndoorMonth}/>
                                              </div>
                                            </div>
                                          : <ServiceGridSplit><ServiceTest>After Builders</ServiceTest> <Tooltip title="After Builders Cleaning" aria-label="add"><Fab2><AfterBuildIcon onClick={this.afterBuildIndoorClean.bind(this)} IndoorAfterBuildClean = {this.state.IndoorAfterBuildClean}/></Fab2></Tooltip></ServiceGridSplit>
                                        }

                                        { this.state.IndoorGenClean ?
                                          <div>
                                          <ServiceTest> Frequency</ServiceTest>
                                            <div style = {{"margin-top" : "0px"}}>
                                              <Checkbox toggle label = "  OnceOFF" onChange={ this.genIndoorCleanOnce }  disabled = {genIndoorCleanOnceStatus} priceGenIndoorCleanOnce =  {this.state.priceGenIndoorCleanOnce}/>
                                              <Checkbox toggle label = "  Weekly" onChange={ this.genIndoorCleanWeek }  disabled = {genIndoorCleanWeekStatus} priceGenIndoorCleanWeek =  {this.state.priceGenIndoorCleanWeek}/>
                                              <Checkbox toggle label = "  Monthly" onChange={ this.genIndoorCleanMonth }  disabled = {genIndoorCleanMonthStatus} priceGenIndoorCleanMonth =  {this.state.priceGenIndoorCleanMonth}/>
                                            </div>
                                          </div>

                                          : this.state.IndoorAfterBuildClean ?
                                          <div>
                                          <ServiceTest> Frequency</ServiceTest>
                                            <div style = {{"margin-top" : "0px"}}>
                                              <Checkbox toggle label = "  OnceOFF" onChange={ this.genIndoorCleanOnce }  disabled = {genIndoorCleanOnceStatus} priceGenIndoorCleanOnce =  {this.state.priceGenIndoorCleanOnce}/>
                                              <Checkbox toggle label = "  Weekly" onChange={ this.genIndoorCleanWeek }  disabled = {genIndoorCleanWeekStatus} priceGenIndoorCleanWeek =  {this.state.priceGenIndoorCleanWeek}/>
                                              <Checkbox toggle label = "  Monthly" onChange={ this.genIndoorCleanMonth }  disabled = {genIndoorCleanMonthStatus} priceGenIndoorCleanMonth =  {this.state.priceGenIndoorCleanMonth}/>
                                            </div>
                                          </div>

                                          :this.state.IndoorSanitise ?
                                          <div>
                                          <ServiceTest> Promo Code </ServiceTest>
                                          <FormInput
                                                            id="fname"
                                                            size="10"
                                                            type="number"
                                                            name="fname"
                                                            placeholder="Code"
                                                            onKeyDown = {this.handleIndoorSanitisePromo}
                                                            min="0" max="9999999"
                                                            required
                                                        />
                                          </div>
                                          : <ServiceGridSplit><ServiceTest>End of Tenancy</ServiceTest><Tooltip title="End of Tenancy Cleaning" aria-label="add"><Fab2><EndTenancyIcon onClick={this.endTenancyIndoorClean.bind(this)} IndoorEndTenancyClean = {this.state.IndoorEndTenancyClean}/></Fab2></Tooltip> </ServiceGridSplit>                                   
                                        }

                                        { this.state.IndoorGenClean ?
                                          <div>
                                          <ServiceTest> Promo Code </ServiceTest>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            maxlength="7"
                                            type="text"
                                            name="fname"
                                            placeholder="Code"
                                            onKeyUp={this.handleIndoorGenPromo}
                                            min="0" max="9999999"
                                            required
                                        />
                                          </div>


                                          : this.state.IndoorAfterBuildClean ?
                                            <div>
                                            <ServiceTest> Promo Code </ServiceTest>
                                          <FormInput
                                                            id="fname"
                                                            size="10"
                                                            maxlength="7"
                                                            type="text"
                                                            name="fname"
                                                            placeholder="Code"
                                                            onKeyDown = {this.handleIndoorAfterBuildPromo}
                                                            min="0" max="9999999"
                                                            required
                                                        />
                                            </div>

                                          :  this.state.IndoorEndTenancyClean ?
                                          <div>
                                          <ServiceTest> Promo Code </ServiceTest>
                                          <FormInput
                                                            id="fname"
                                                            size="10"
                                                            maxlength="7"
                                                            type="text"
                                                            name="fname"
                                                            placeholder="Code"
                                                            onKeyUp = {this.handleIndoorEndTenencyPromo}
                                                            min="0" max="9999999"
                                                            required
                                                        />
                                            </div>

                                          : <ServiceGridSplit><ServiceTest>Antiviral Sanitisation</ServiceTest><Tooltip title="Antiviral Sanitisation" aria-label="add"><Fab2><SanitiseIcon onClick={this.sanitiseIndoorClean.bind(this)} IndoorSanitise = {this.state.IndoorSanitise}/></Fab2></Tooltip> </ServiceGridSplit>                                   
                                        } 
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
                                        <Message2>Equipment</Message2>
                                        { this.state.IndoorCleanService?
                                          <Checkbox toggle label = "  Detergents" onChange={ this.genIndoorDetergents }  priceGenIndoorDetergents =  {this.state.priceGenIndoorDetergents}/>

                                          : this.state.IndoorAfterBuildCleanService?
                                              <Checkbox toggle label = "  Detergents" onChange={ this.afterBuilderDetergents }   priceAfterBuilderDetergents =  {this.state.priceAfterBuilderDetergents}/>
                                          
                                          : this.state.IndoorEndTenancyCleanService?
                                                <Checkbox toggle label = "  Detergents" onChange={ this.endTenancyDetergents }  priceEndTenancyDetergents =  {this.state.priceEndTenancyDetergents}/>

                                          : null
                                        }
                                        
                                        
                                      </div>
                                      <div>
                                      <Message2>Costs</Message2>
                                          {this.state.IndoorCleanService?
                                          <div>
                                            {this.state.handleIndoorGenPromo == 1? 
                                              <Message>Total : R {totalIndoor.toFixed(2)}</Message>
                                              : 
                                              <div>

                                              <Message>Total : R {totalIndoor.toFixed(2)}</Message>
                                              <Message>Applied Promo : -20%</Message>
                                              </div>


                                            }
                                            </div>
                                         

                                            : this.state.IndoorAfterBuildCleanService?
                                            <div>
                                            {this.state.handleIndoorAfterBuildPromo == 1? 
                                              <Message>Total : R {totalIndoor.toFixed(2)}</Message>
                                              : 
                                              <div>

                                              <Message>Total : R {totalIndoor.toFixed(2)}</Message>
                                              <Message>Applied Promo : -20%</Message>
                                              </div>


                                            }
                                            </div>

                                          : this.state.IndoorEndTenancyCleanService?
                                          <div>
                                            {this.state.handleIndoorEndTenencyPromo == 1? 
                                              <Message>Total : R {totalIndoor.toFixed(2)}</Message>
                                              : 
                                              <div>

                                              <Message>Total : R {totalIndoor.toFixed(2)}</Message>
                                              <Message>Applied Promo : -20%</Message>
                                              </div>


                                            }
                                            </div>

                                          : this.state.IndoorSanitiseService?
                                          <div>
                                            {this.state.handleIndoorSanitisePromo == 1? 
                                              <Message>Total : R {totalIndoor.toFixed(2)}</Message>
                                              : 
                                              <div>

                                              <Message>Total : R {totalIndoor.toFixed(2)}</Message>
                                              <Message>Applied Promo : -20%</Message>
                                              </div>


                                            }
                                            </div>

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
                                      selected={this.state.dateTimeOutdoor}
                                      value={this.state.dateTimeOutdoor}
                                      onChange={this.handleDateChangeOutdoor}
                                      minDate={new Date()}
                                      customInput={<ExampleCustomInput />}
                                      showTimeInput
                                      timeFormat="HH:mm"
                                      timeIntervals={1}
                                      timeCaption="time"
                                      dateFormat="MMMM d, yyyy h:mm aa"
                                      shouldCloseOnSelect={false} />

                                      <div style = {{"width": "150px","height": "22px","color": 'grey'}}>
                                        <Select
                                          styles= {customStyles}
                                          onChange={this.handleOutdoorLoc}
                                          options={options}
                                          value={this.state.outdoorLoc}
                                          placeholder="Location..."
                                          
                                        />
                                      </div> 

                                      <select id="areaSize" onChange={this.handleOutdoorPropertType} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"2px"}}>
                                        <option value="0">Property Type</option>
                                        <option value="Residential">Residential</option>
                                        <option value="Commercial">Commercial</option>
                                      </select>   

                                      <select id="areaSize" onChange={this.handleOutdoorPropertKind} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"2px"}}>
                                        <option value="0">Property Kind</option>
                                        <option value="House">House</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="Townhouse">Townhouse</option>
                                      </select>	  

                                </Options>
                                <ContentTitle> Required Services <Info onClick = {this.showOutdoorServicesInfo.bind(this)} showOutdoorServicesInfo = {this.state.showOutdoorServicesInfo}/>
                                  <span><hr width="300"/></span>
                                </ContentTitle>
                                <Options4>
                              { this.state.LMoutdoorClean ?
                                <div>
                                  <ServiceTest> Work Yard</ServiceTest>
                                  <div style = {{"margin-top" : "0px"}}>
                                    <Checkbox toggle label = "  Whole" onChange={ this.outdoorLMwholeYard }  disabled = {outdoorLMwholeYardStatus} />
                                    <Checkbox toggle label = "  Front" onChange={ this.outdoorLMfrontYard }  disabled = {outdoorLMnotWholeStatus} />
                                    <Checkbox toggle label = "  Back" onChange={ this.outdoorLMbackYard }  disabled = {outdoorLMnotWholeStatus} />
                                    <Checkbox toggle label = "  Side" onChange={ this.outdoorLMsideYard }  disabled = {outdoorLMnotWholeStatus} />
                                  </div>
                                </div>

                               : this.state.FBoutdoorClean?
                               <div>
                                  <ServiceTest> Work Yard</ServiceTest>
                                  <div style = {{"margin-top" : "0px"}}>
                                    <Checkbox toggle label = "  Whole" onChange={ this.outdoorFBwholeYard }  disabled = {outdoorFBwholeYardStatus} />
                                    <Checkbox toggle label = "  Front" onChange={ this.outdoorFBfrontYard }  disabled = {outdoorFBnotWholeStatus} />
                                    <Checkbox toggle label = "  Back" onChange={ this.outdoorFBbackYard }  disabled = {outdoorFBnotWholeStatus} />
                                    <Checkbox toggle label = "  Side" onChange={ this.outdoorFBsideYard }  disabled = {outdoorFBnotWholeStatus} />
                                  </div>
                                </div>

                                : this.state.DCoutdoorClean?
                                <div>
                                  <ServiceTest> Work Yard</ServiceTest>
                                  <div style = {{"margin-top" : "0px"}}>
                                    <Checkbox toggle label = "  Whole" onChange={ this.outdoorDCwholeYard }  disabled = {outdoorDCwholeYardStatus} />
                                    <Checkbox toggle label = "  Front" onChange={ this.outdoorDCfrontYard }  disabled = {outdoorDCnotWholeStatus} />
                                    <Checkbox toggle label = "  Back" onChange={ this.outdoorDCbackYard }  disabled = {outdoorDCnotWholeStatus} />
                                    <Checkbox toggle label = "  Side" onChange={ this.outdoorDCsideYard }  disabled = {outdoorDCnotWholeStatus} />
                                  </div>
                                </div>

                                : <ServiceGridSplit><ServiceTest>Yard Cleaning</ServiceTest><Tooltip title="Yard Cleaning" aria-label="add"><Fab2><Wheelbarrow onClick={this.YCoutdoorClean.bind(this)} YCoutdoorClean = {this.state.YCoutdoorClean}/></Fab2></Tooltip></ServiceGridSplit>
                              }


                              {this.state.YCoutdoorClean?
                                <div>
                                  <ServiceTest> Work Yard</ServiceTest>
                                  <div style = {{"margin-top" : "0px"}}>
                                    <Checkbox toggle label = "  Whole" onChange={ this.outdoorYCwholeYard }  disabled = {outdoorYCwholeYardStatus} />
                                    <Checkbox toggle label = "  Front" onChange={ this.outdoorYCfrontYard }  disabled = {outdoorNotWholeStatus} />
                                    <Checkbox toggle label = "  Back" onChange={ this.outdoorYCbackYard }  disabled = {outdoorNotWholeStatus} />
                                    <Checkbox toggle label = "  Side" onChange={ this.outdoorYCsideYard }  disabled = {outdoorNotWholeStatus} />
                                  </div>
                                </div>

                              :this.state.FBoutdoorClean?
                              <div>
                                <div>
                                <ServiceTest> Area Size</ServiceTest>
                                      <select id="areaSize" onChange={this.handleFBarea} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"2px"}}>
                                      <option value="0">Select Size</option>
                                          <option value="0-20 sqm">0-20 sq m</option>
                                          <option value="20-75 sqm">20-75 sq m</option>
                                          <option value="75-150 sqm">75-150 sq m</option>
                                          <option value="150-250 sqm">150-250 sq m</option>  
                                      </select>
                                </div>
                                <ServiceTest style = {{"margin-bottom": "-8px"}}> Or </ServiceTest>
                                <Form>
                                    <FormInput
                                          id="fname"
                                          size="10"
                                          type="number"
                                          name="fname"
                                          placeholder="Length (m)"
                                          //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                          min="0" max="9999999"
                                          required
                                      />                                               
                                      <FormInput
                                              id="fname"
                                              size="10"
                                              type="number"
                                              name="fname"
                                              placeholder="Width (m)"
                                              //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                              min="0" max="9999999"
                                              required
                                          />
                                </Form>
                              </div>
                              : this.state.DCoutdoorClean?
                              <div>
                                <div>
                                <ServiceTest> Area Size</ServiceTest>
                                      <select id="areaSize" onChange={this.handleDCarea} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"2px"}}>
                                      <option value="0">Select Size</option>
                                          <option value="0-20 sqm">0-20 sq m</option>
                                          <option value="20-75 sqm">20-75 sq m</option>
                                          <option value="75-150 sqm">75-150 sq m</option>
                                          <option value="150-250 sqm">150-250 sq m</option>  
                                      </select>
                                </div>
                                  <ServiceTest style = {{"margin-bottom": "-8px"}}> Or </ServiceTest>
                                  <Form>
                                      <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="Length (m)"
                                            //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                            min="0" max="9999999"
                                            required
                                        />
                                                    
                                        <FormInput
                                                id="fname"
                                                size="10"
                                                type="number"
                                                name="fname"
                                                placeholder="Width (m)"
                                                //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                min="0" max="9999999"
                                                required
                                            />
                                  </Form>
                              </div>

                              : this.state.LMoutdoorClean ?
                                      <ServiceGridSplit><ServiceTest>Lawn Mowing</ServiceTest><Tooltip title="Lawn Mowing" aria-label="add"><Fab2><LogoContainer2 src={LawnMowerSelect} onClick={this.LMoutdoorClean.bind(this)}/></Fab2></Tooltip></ServiceGridSplit> 
                                      :
                                      <ServiceGridSplit><ServiceTest>Lawn Mowing</ServiceTest><Tooltip title="Lawn Mowing" aria-label="add"><Fab2><LogoContainer2 src={LawnMower} onClick={this.LMoutdoorClean.bind(this)}/></Fab2></Tooltip></ServiceGridSplit> 
                              } 


                              {this.state.YCoutdoorClean?
                              <div>
                                <div>
                                <ServiceTest> Area Size</ServiceTest>
                                      <select id="areaSize" onChange={this.handleYCarea} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"2px"}}>
                                          <option value="0">Select Size</option>
                                          <option value="0-20 sqm">0-20 sq m</option>
                                          <option value="20-75 sqm">20-75 sq m</option>
                                          <option value="75-150 sqm">75-150 sq m</option>
                                          <option value="150-250 sqm">150-250 sq m</option>        
                                      </select>
                                </div>
                                  <ServiceTest style = {{"margin-bottom": "-8px"}}> Or </ServiceTest>
                                  <Form>
                                      <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="Length (m)"
                                            //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                            min="0" max="9999999"
                                            required
                                        />
                                                    
                                        <FormInput
                                                id="fname"
                                                size="10"
                                                type="number"
                                                name="fname"
                                                placeholder="Width (m)"
                                                //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                min="0" max="9999999"
                                                required
                                            />
                                  </Form>
                              </div>
                              : this.state.LMoutdoorClean ?
                              <div>
                                <div>
                                <ServiceTest> Area Size</ServiceTest>
                                      <select id="areaSize" onChange={this.handleLMarea} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"2px"}}>
                                      <option value="0">Select Size</option>
                                          <option value="0-20 sqm">0-20 sq m</option>
                                          <option value="20-75 sqm">20-75 sq m</option>
                                          <option value="75-150 sqm">75-150 sq m</option>
                                          <option value="150-250 sqm">150-250 sq m</option>  
                                      </select>
                                </div>
                                  <ServiceTest style = {{"margin-bottom": "-8px"}}> Or </ServiceTest>
                                  <Form>
                                      <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="Length (m)"
                                            //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                            min="0" max="9999999"
                                            required
                                        />
                                                    
                                        <FormInput
                                                id="fname"
                                                size="10"
                                                type="number"
                                                name="fname"
                                                placeholder="Width (m)"
                                                //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                min="0" max="9999999"
                                                required
                                            />
                                  </Form>
                              </div>
                              : this.state.DCoutdoorClean ?
                              <div>
                                  <ServiceTest> Frequency</ServiceTest>
                                    <div style = {{"margin-top" : "0px"}}>
                                      <Checkbox toggle label = "  OnceOFF" onChange={ this.outdoorDConce }  disabled = {outdoorDConceStatus} />
                                      <Checkbox toggle label = "  Weekly" onChange={ this.outdoorDCweek }  disabled = {outdoorDCweekStatus} />
                                      <Checkbox toggle label = "  Monthly" onChange={ this.outdoorDCmonth }  disabled = {outdoorDCmonthStatus} />
                                    </div>
                                  </div>
                              : <ServiceGridSplit><ServiceTest>Flower Bedding</ServiceTest><Tooltip  title="Flower Bedding" aria-label="add"><Fab2 ><Flowers onClick={this.FBoutdoorClean.bind(this)} FBoutdoorClean = {this.state.FBoutdoorClean}/></Fab2></Tooltip></ServiceGridSplit> 
                             
                              }  

                              {this.state.YCoutdoorClean?
                                <div>
                                  <ServiceTest> Frequency</ServiceTest>
                                    <div style = {{"margin-top" : "0px"}}>
                                      <Checkbox toggle label = "  OnceOFF" onChange={ this.outdoorYConce }  disabled = {outdoorYConceStatus} />
                                      <Checkbox toggle label = "  Weekly" onChange={ this.outdoorYCweek }  disabled = {outdoorYCweekStatus} />
                                      <Checkbox toggle label = "  Monthly" onChange={ this.outdoorYCmonth }  disabled = {outdoorYCmonthStatus}/>
                                    </div>
                                  </div>

                                :this.state.LMoutdoorClean ?
                                <div>
                                  <ServiceTest> Frequency</ServiceTest>
                                    <div style = {{"margin-top" : "0px"}}>
                                      <Checkbox toggle label = "  OnceOFF" onChange={ this.outdoorLMonce }  disabled = {outdoorLMonceStatus}/>
                                      <Checkbox toggle label = "  Weekly" onChange={ this.outdoorLMweek }  disabled = {outdoorLMweekStatus}/>
                                      <Checkbox toggle label = "  Monthly" onChange={ this.outdoorLMmonth }  disabled = {outdoorLMmonthStatus}/>
                                    </div>
                                  </div>
                                :this.state.FBoutdoorClean ?
                                <div>
                                  <ServiceTest> Frequency</ServiceTest>
                                    <div style = {{"margin-top" : "0px"}}>
                                      <Checkbox toggle label = "  OnceOFF" onChange={ this.outdoorFBonce }  disabled = {outdoorFBonceStatus} />
                                      <Checkbox toggle label = "  Weekly" onChange={ this.outdoorFBweek }  disabled = {outdoorFBweekStatus} />
                                      <Checkbox toggle label = "  Monthly" onChange={ this.outdoorFBmonth }  disabled = {outdoorFBmonthStatus} />
                                    </div>
                                  </div>
                                :<ServiceGridSplit><ServiceTest>Driveway Cleaning</ServiceTest><Tooltip  title="Driveway Cleaning" aria-label="add"><Fab2 ><Driveway onClick={this.DCoutdoorClean.bind(this)} DCoutdoorClean = {this.state.DCoutdoorClean}/></Fab2></Tooltip></ServiceGridSplit>                             
                              }                          

                                </Options4>
                                <ContentTitle> Service Details & Costs
                                  <span><hr width="300"/></span>
                                </ContentTitle>
                                <Options3>
                                  <div style = {{"margin-left" : "2px"}}>
                                    <Message2>Outside Details</Message2>

                                    <EventLog logs={this.state.events5}/>

                                    <EventLog logs={this.state.OutdoorPropType}/>

                                    <EventLog logs={this.state.OutdoorPropKind}/>

                                    {this.state.events6.length !== 0 ?
                                      <Message>Date : {y.replace("GMT+0200 (South Africa Standard Time)","")}</Message> 
                                    : null
                                    }                                           
                                  </div>
                                  <div>
                                    <Message2>Services</Message2>
                                    <Message>{outDoorServiceRequired}</Message>   
                                    {YC_yard_Status != "" && (this.state.outdoorYC_WYard || this.state.outdoorYC_FYard || this.state.outdoorYC_BYard || this.state.outdoorYC_SYard)? <Message>Yard : {YC_yard_Status} </Message> : ""}
                                    {LM_yard_Status != "" && (this.state.outdoorLM_WYard || this.state.outdoorLM_FYard || this.state.outdoorLM_BYard || this.state.outdoorLM_SYard)?  <Message>Yard : {LM_yard_Status} </Message> : ""}
                                    {FB_yard_Status != "" && (this.state.outdoorFB_WYard || this.state.outdoorFB_FYard || this.state.outdoorFB_BYard || this.state.outdoorFB_SYard)? <Message>Yard : {FB_yard_Status} </Message>  : ""}
                                    {DC_yard_Status != "" && (this.state.outdoorDC_WYard || this.state.outdoorDC_FYard || this.state.outdoorDC_BYard || this.state.outdoorDC_SYard)?  <Message>Yard : {DC_yard_Status} </Message>  : ""} 
                                    
                                    {this.state.YCoutdoorClean? <EventLog logs={this.state.YCarea}/> : ""}

                                    {this.state.LMoutdoorClean ? <EventLog logs={this.state.LMarea}/> : ""}

                                    {this.state.FBoutdoorClean ? <EventLog logs={this.state.FBarea}/> : ""}

                                    {this.state.DCoutdoorClean ? <EventLog logs={this.state.DCarea}/> : ""}
                                  
                                  </div>
                                  <div>
                                    <Message2>Costs</Message2>



                                    {this.state.YCoutdoorClean || this.state.FBoutdoorClean || this.state.DCoutdoorClean || this.state.LMoutdoorClean?
                                      <div>
                                      <ServiceTest> Promo Code </ServiceTest>
                                        <FormInput
                                            id="fname"
                                            size="10"
                                            maxlength="7"
                                            type="text"
                                            name="fname"
                                            placeholder="Code"
                                            onKeyUp = {this.handleOutdoorPromo}
                                            min="0" max="9999999"
                                            required
                                        />
                                          <Message>Total : R {totalOutdoor} </Message>
                                      </div>
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
                                      
                                      <div style = {{"width": "150px","height": "22px","color": 'grey'}}>
                                        <Select
                                          styles= {customStyles}
                                          onChange={this.handlePoolLoc}
                                          options={options}
                                          value={this.state.poolLoc}
                                          placeholder="Location..."
                                          
                                        />
                                      </div> 
                                </Options>
                                <ContentTitle> Required Services <Info onClick = {this.showPoolServicesInfo.bind(this)} showPoolServicesInfo = {this.state.showPoolServicesInfo}/>
                                  <span><hr width="300"/></span>
                                </ContentTitle>

                              {!this.state.PoolMaint && !this.state.PoolClean ?
                                  <Options3p1>
                                    <ServiceGridSplit><ServiceTest> Pool Cleaning</ServiceTest><Tooltip  title="Pool Cleaning" aria-label="add"><Fab2><Installations onClick={this.genPoolClean.bind(this)} PoolClean = {this.state.PoolClean}/></Fab2></Tooltip> </ServiceGridSplit>
                                    <ServiceGridSplit><ServiceTest>Pool Maintanance</ServiceTest><Tooltip  title="Pool Maintanance" aria-label="add"><Fab2><Maintanance onClick={this.periodMaint.bind(this)} PoolMaint = {this.state.PoolMaint}/></Fab2></Tooltip></ServiceGridSplit>
                                    <ServiceGridSplit><ServiceTest>Repairs - Coming Soon</ServiceTest><Tooltip  title="Pool Repairs - Coming Soon" aria-label="add"><Fab2><ServicePool onClick={this.perPoolRepair.bind(this)} PoolRepair = {this.state.PoolRepair}/></Fab2></Tooltip></ServiceGridSplit>
                                  </Options3p1>
                              :this.state.PoolClean ?
                              <Options4>
                                <ServiceGridSplit><ServiceTest> Pool Cleaning</ServiceTest><Tooltip  title="Pool Cleaning" aria-label="add"><Fab2><Installations onClick={this.genPoolClean.bind(this)} PoolClean = {this.state.PoolClean}/></Fab2></Tooltip> </ServiceGridSplit>
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
                                                //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                min="0" max="9999999"
                                                required
                                            />
                                                        
                                            <FormInput
                                                    id="fname"
                                                    size="10"
                                                    type="number"
                                                    name="fname"
                                                    placeholder="Width (m)"
                                                    //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                    min="0" max="9999999"
                                                    required
                                                />

                                            <FormInput
                                                  id="fname"
                                                  size="10"
                                                  type="number"
                                                  name="fname"
                                                  placeholder="Depth (m)"
                                                  //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
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
                                                    //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                    min="0" max="9999999"
                                                    required
                                                />
                                                
                                            <FormInput
                                                    id="fname"
                                                    size="10"
                                                    type="number"
                                                    name="fname"
                                                    placeholder="Depth (m)"
                                                    //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
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
                                                          //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                          min="0" max="9999999"
                                                          required
                                                      />
                                                      
                                                  <FormInput
                                                          id="fname"
                                                          size="10"
                                                          type="number"
                                                          name="fname"
                                                          placeholder="Height (m)"
                                                          //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                          min="0" max="9999999"
                                                          required
                                                      />
                                                  <FormInput
                                                          id="fname"
                                                          size="10"
                                                          type="number"
                                                          name="fname"
                                                          placeholder="Depth (m)"
                                                          //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
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
                                                //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                min="0" max="9999999"
                                                required
                                            />
                                        </Form>
                                      : null
                                      }
                                  </div>

                                  <div>
                                      <ServiceTest> Pool Issues</ServiceTest>
                                      <div>
                                        <Checkbox toggle label = "  Algae" onChange={ this.handleOnceOFF }  disabled = {cleanOnceStatus} priceCleanOnce =  {this.state.priceCleanOnce}/>
                                        <Checkbox toggle label = "  Cloudy" onChange={ this.handleCleanWeek }  disabled = {cleanWeekStatus} priceCleanWeek =  {this.state.priceCleanWeek}/>
                                        <Checkbox toggle label = "  Circulation" onChange={ this.handleCleanMonth }  disabled = {cleanMonthStatus} priceCleanMonth =  {this.state.priceCleanMonth}/>
                                      </div>
                                  </div>

                                  <div>
                                    <ServiceTest> Promo Code </ServiceTest>
                                    <FormInput
                                        id="fname"
                                        size="10"
                                        maxlength="7"
                                        type="text"
                                        name="fname"
                                        placeholder="Code"
                                        onKeyUp = {this.handleIndoorEndTenencyPromo}
                                        min="0" max="9999999"
                                        required
                                    />
                                  </div>
                                  </Options4>
                              : this.state. PoolMaint?
                              <Options4>
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
                                                            //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                            min="0" max="9999999"
                                                            required
                                                        />
                                                        
                                                    <FormInput
                                                            id="fname"
                                                            size="10"
                                                            type="number"
                                                            name="fname"
                                                            placeholder="Width (m)"
                                                            //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                            min="0" max="9999999"
                                                            required
                                                        />

                                                      <FormInput
                                                            id="fname"
                                                            size="10"
                                                            type="number"
                                                            name="fname"
                                                            placeholder="Depth (m)"
                                                            //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
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
                                                    //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                    min="0" max="9999999"
                                                    required
                                                />
                                                
                                            <FormInput
                                                    id="fname"
                                                    size="10"
                                                    type="number"
                                                    name="fname"
                                                    placeholder="Depth (m)"
                                                    //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
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
                                                          //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                          min="0" max="9999999"
                                                          required
                                                      />
                                                      
                                                  <FormInput
                                                          id="fname"
                                                          size="10"
                                                          type="number"
                                                          name="fname"
                                                          placeholder="Height (m)"
                                                          //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                          min="0" max="9999999"
                                                          required
                                                      />
                                                  <FormInput
                                                          id="fname"
                                                          size="10"
                                                          type="number"
                                                          name="fname"
                                                          placeholder="Depth (m)"
                                                          //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
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
                                                //onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                                min="0" max="9999999"
                                                required
                                            />
                                        </Form>
                                      : null
                                      }
                                  </div>
                              <ServiceGridSplit><ServiceTest>Pool Maintanance</ServiceTest><Tooltip  title="Pool Maintanance" aria-label="add"><Fab2><Maintanance onClick={this.periodMaint.bind(this)} PoolMaint = {this.state.PoolMaint}/></Fab2></Tooltip></ServiceGridSplit>
                              <div>
                                    <ServiceTest> Extra Issues</ServiceTest>
                                    <div>
                                      <Checkbox toggle label = "  Algae" onChange={ this.handleOnceOFF }  disabled = {cleanOnceStatus} priceCleanOnce =  {this.state.priceCleanOnce}/>
                                      <Checkbox toggle label = "  Cloudyness" onChange={ this.handleCleanWeek }  disabled = {cleanWeekStatus} priceCleanWeek =  {this.state.priceCleanWeek}/>
                                      <Checkbox toggle label = "  Circulation" onChange={ this.handleCleanMonth }  disabled = {cleanMonthStatus} priceCleanMonth =  {this.state.priceCleanMonth}/>
                                    </div>
                              </div>
                              <div>
                                <ServiceTest> Promo Code </ServiceTest>
                                <FormInput
                                                  id="fname"
                                                  size="10"
                                                  maxlength="7"
                                                  type="text"
                                                  name="fname"
                                                  placeholder="Code"
                                                  onKeyUp = {this.handleIndoorEndTenencyPromo}
                                                  min="0" max="9999999"
                                                  required
                                              />
                              </div>
                              </Options4>
                              : null
                              }
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
                                    <Message>{this.state.FBoutdoorCleanDisplay}</Message>
                                  </div>
                                  <div>
                                    <Message2>Costs</Message2>
                                    {this.state.PoolClean?
                                        <Message>
                                          <Checkbox toggle label = "  OnceOFF" onChange={ this.handleOnceOFF }  disabled = {cleanOnceStatus} priceCleanOnce =  {this.state.priceCleanOnce}/>
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
              <Outdoor showPopupOutdoor = {this.state.showPopupOutdoor} currentUser = {this.props.currentUser} closePopup={this.props.closePopup} dateTime = {this.state.dateTimeOutdoor} total = {this.state.total2} time = {this.state.areaHours} wheelbarrow = {this.state.YCoutdoorCleanDisplay} mower = {this.state.LMoutdoorCleanDisplay} windows = {this.state.FBoutdoorCleanDisplay} box = {this.state.DCoutdoorCleanDisplay} />
                : !this.props.currentUser?
                  <PromptSinIn currentUser = {this.props.currentUser} showPopupOutdoor = {this.state.showPopupOutdoor} closePopup={this.props.closePopup} dateTime = {this.state.dateTimeOutdoor} total = {this.state.total2} time = {this.state.areaHours} wheelbarrow = {this.state.YCoutdoorCleanDisplay} mower = {this.state.LMoutdoorCleanDisplay} windows = {this.state.FBoutdoorCleanDisplay} box = {this.state.DCoutdoorCleanDisplay}/>
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
