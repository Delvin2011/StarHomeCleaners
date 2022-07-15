import React from "react";
import {
  Popup,
  PopupInner,
  ContentTitle,
  CloseButton,
  LogoContainer2,
  TabsContainer,
  EnterDetails,
  Options,
  Options2,
  Options3,
  GenCleanIcon,
  AfterBuildIcon,
  EndTenancyIcon,
  Sofas,
  Fab2,
  Message,
  Message2,
  Wheelbarrow,
  Options4,
  Options5,
  Info,
  Flowers,
  Driveway,
  Maintanance,
  Installations,
  ServicePool,
  Options3p1,
  ServiceGridSplit,
  ServiceName,
  Form,
  ServiceTest,
  Info2,
} from "./popupCleaner-styles";
import Outdoor from "./outdoor/outdoor";
import Indoor from "./indoor/indoor";
import Pool from "./pool/pool";
import IndoorTCs from "./indoor/TCs/indoorTCs";
import IndoorServicesInfo from "./indoor/TCs/indoorServicesInfo";
import OutdoorServicesInfo from "./outdoor/outdoorServicesInfo";
import PoolServicesInfo from "./pool/poolServicesInfo";
import PoolShapes from "./pool/poolShapes";
import PromptSinIn from "./promptSinIn";
import { isNaN, toString } from "lodash";
import NumericTextboxComponent from "../TextBox";
import { Checkbox } from "semantic-ui-react";
import FormInput from "../form-input2/form-input";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import LawnMower from "./LawnMower2.svg";
import LawnMowerSelect from "./LawnMower3.svg";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import CustomButton from "../CustomButtons/Button";

import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem.js";
import NavPills from "../NavPills/NavPills.js";

import { GiVacuumCleaner } from "react-icons/gi";
import { GiWheelbarrow } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";

import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import Select from "react-select";
//import FilteredList from '../LocationFilter/locationFilter';
import locations from "./locations";
class EventLog extends React.Component {
  renderLogs = () =>
    this.props.logs.map((log, index) => <div key={index}>{log}</div>);
  render() {
    //console.log(this.renderLogs());
    return <Message>{this.renderLogs()}</Message>;
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
  constructor() {
    super();
    this.state = {
      defaultValue: new Date(),
      dateTime: null, //new Date(),
      dateTimeOutdoor: null,
      dateTimePool: null,
      min: new Date(2020, 3, 13, 12, 30),
      max: new Date(2090, 2, 10, 12, 30),
      showPopupIndoor: false,
      showPopupOutdoor: false,
      showPopupPool: false,

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
      //OutdoorPropType: this.logsOutdoorPropType,
      //OutdoorPropKind: this.logsOutdoorPropKind,
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
      poolHrs: 0, //to be removed
      bedRooms: 0,
      bathRooms: 0,
      showTcIn: false,
      showTcOut: false,
      genCleanloc: "",
      outdoorLoc: "",
      poolLoc: "",
      //genCleanlocDistance: 0,
      outdoorLocDistance: 0,
      poolLocDistance: 0,

      total2: 0,

      /******************Indoor***********************/
      cleanMonth: false,
      cleanOnceOFF: false,
      cleanWeek: false,
      IndoorGenClean: false,
      IndoorAfterBuildClean: false,
      IndoorEndTenancyClean: false,
      IndoorSanitise: false,
      IndoorItems: false,
      IndoorCleanService: "",
      IndoorAfterBuildCleanService: "",
      IndoorEndTenancyCleanService: "",
      IndoorSanitiseService: "",
      IndoorCleanPrice: 0,
      IndoorAfterBuildCleanPrice: 0,
      IndoorEndTenancyCleanPrice: 0,
      IndoorSanitisePrice: 0,
      priceDetergent: 0,
      Beds: "",
      Baths: "",
      IndoorLocation: "",
      priceGenIndoorCleanOnce: 0,
      priceGenIndoorCleanWeek: 0,
      priceGenIndoorCleanMonth: 0,
      priceABcleanOnce: 0,
      priceABcleanWeek: 0,
      priceABcleanMonth: 0,
      priceETcleanOnce: 0,
      priceETcleanMonth: 0,
      priceSanitiseIndoorOnceOFF: 0,
      priceSanitiseIndoorMonth: 0,

      genIndoorCleanOnce: false,
      genIndoorCleanWeek: false,
      genIndoorCleanMonth: false,
      afterBuildCleanOnce: false,
      afterBuildCleanWeek: false,
      afterBuildCleanMonth: false,
      endTenancyCleanOnce: false,
      endTenancyCleanMonth: false,
      sanitiseIndoorOnceOFF: false,
      sanitiseIndoorMonth: false,
      IndoorCarpets: false,
      IndoorCouches: false,
      IndoorMattress: false,
      IndoorRugs: false,
      IndoorChairs: false,
      IndoorCarpetsBedrooms: false,
      IndoorCarpetsBigBedrooms: false,
      IndoorCarpetsLounge: false,
      IndoorCarpetsLounge: 0,
      priceCarpetsBedrooms: 0,
      NumOfBeds: 1,
      IndoorSingleMattress: false,
      IndoorDoubleMattress: false,
      IndoorQueenMattress: false,
      IndoorKingMattress: false,
      IndoorSmallRugs: false,
      IndoorMediumRugs: false,
      IndoorLargerRugs: false,
      IndoorDiningChair: false,
      IndoorOfficeChair: false,
      handleCouches_Carpets: "",
      genIndoorDetergents: false,
      afterBuilderDetergents: false,
      endTenancyDetergents: false,
      IndoorDetergents: false,
      priceGenIndoorDetergents: 0,
      priceAfterBuilderDetergents: 0,
      priceEndTenancyDetergents: 0,

      smCarpets: "",
      bgCarpets: "",
      lngCarpets: "",
      isCheckedSmCarpets: false,
      isCheckedBgCarpets: false,
      isCheckedLgrCarpets: false,
      snglMattress: "",
      dbleMattress: "",
      lgrMattress: "",
      isCheckedSnglMattress: false,
      isCheckedDblelMattress: false,
      isCheckedLgrMattress: false,
      smRugs: "",
      mdRugs: "",
      lgRugs: "",
      isCheckedSmRugs: false,
      isCheckedMdRugs: false,
      isCheckedLgrRugs: false,
      diningChairs: "",
      officeChairs: "",
      isCheckedDiningChairs: false,
      isCheckedOfficeChairs: false,
      smCarpetsPrice: 1,
      bgCarpetsPrice: 1,
      lngCarpetsPrice: 1,
      snglMattressPrice: 1,
      dbleMattressPrice: 1,
      lgrMattressPrice: 1,
      smRugsPrice: 1,
      mdRugsPrice: 1,
      lgRugsPrice: 1,
      diningChairsPrice: 1,
      officeChairsPrice: 1,

      IndoorSmCarpetsQuantity: 1,
      priceGenIndoorCleanWalls: 0,
      priceGenIndoorCleanWindows: 0,
      priceGenIndoorCleanLaundry: 0,
      priceAfterBuildIndoorCleanWalls: 0,
      priceAfterBuildIndoorCleanWindows: 0,

      handleIndoorGenPromo: 1,
      handleIndoorEndTenencyPromo: 1,
      handleIndoorAfterBuildPromo: 1,
      handleIndoorSanitisePromo: 1,
      IndoorBookedService: "",
      priceCouches: 0,
      priceIndoorMattress: 0,
      handleNumberOfRugs: 1,
      handleNumberOfChairs: 1,
      /***************** Outdoor ********************/
      outdoorYCwholeYard: false,
      outdoorYCfrontYard: false,
      outdoorYCbackYard: false,
      outdoorYCsideYard: false,
      outdoorLMwholeYard: false,
      outdoorLMfrontYard: false,
      outdoorLMbackYard: false,
      outdoorLMsideYard: false,
      outdoorFBwholeYard: false,
      outdoorFBfrontYard: false,
      outdoorFBbackYard: false,
      outdoorFBsideYard: false,
      outdoorDCwholeYard: false,
      outdoorDCfrontYard: false,
      outdoorDCbackYard: false,
      outdoorDCsideYard: false,
      YCoutdoorClean: false,
      YCoutdoorCleanDisplay: "",
      YCoutdoorCleanPrice: 0,
      FBoutdoorCleanDisplay: "",
      outdoorYC_WYard: "",
      outdoorYC_FYard: "",
      outdoorYC_BYard: "",
      outdoorYC_SYard: "",
      outdoorLM_WYard: "",
      outdoorLM_FYard: "",
      outdoorLM_BYard: "",
      outdoorLM_SYard: "",
      outdoorFB_WYard: "",
      outdoorFB_FYard: "",
      outdoorFB_BYard: "",
      outdoorFB_SYard: "",
      outdoorDC_WYard: "",
      outdoorDC_FYard: "",
      outdoorDC_BYard: "",
      outdoorDC_SYard: "",
      YCarea: this.logsYCarea,
      LMarea: this.logsLMarea,
      FBarea: this.logsFBarea,
      DCarea: this.logsDCarea,
      outdoorYConce: false,
      outdoorYConcePrice: 0,
      outdoorYCweek: false,
      outdoorYCweekPrice: 0,
      outdoorYCmonth: false,
      outdoorYCmonthPrice: 0,
      outdoorLMonce: false,
      outdoorLMoncePrice: 0,
      outdoorLMweek: false,
      outdoorLMweekPrice: 0,
      outdoorLMmonth: false,
      outdoorLMmonthPrice: 0,
      outdoorFBonce: false,
      outdoorFBoncePrice: 0,
      outdoorFBweek: false,
      outdoorFBweekPrice: 0,
      outdoorFBmonth: false,
      outdoorFBmonthPrice: 0,
      outdoorDConce: false,
      outdoorDConcePrice: 0,
      outdoorDCweek: false,
      outdoorDCweekPrice: 0,
      outdoorDCmonth: false,
      outdoorDCmonthPrice: 0,
      YCareaPrice: 0,
      LMareaPrice: 0,
      FBareaPrice: 0,
      DCareaPrice: 0,
      handleYCoutdoorPromo: 1,
      handleLMoutdoorPromo: 1,
      handleFBoutdoorPromo: 1,
      handleDCoutdoorPromo: 1,
      OutdoorBookedService: "",
      serviceIntervalOutdoor: "",
      OutdoorYardSize: "",
      OutdoorPropertType: "",
      OutdoorPropertKind: "",
      OutdoorWorkYard: "",

      /*********************Pool****************************/
      poolShapePCSelect: 0,
      poolShapePMSelect: 0,
      handlePoolGenCleaningPromo: 1,
      handlePoolMaintanancePromo: 1,
      handlePoolRectanglePCvolumeL: 0,
      handlePoolRectanglePCvolumeW: 0,
      handlePoolRectanglePCvolumeD: 0,
      handlePoolRectanglePCvolumeS: 0,
      handlePoolCircularPCvolumeR: 0,
      handlePoolCircularPCvolumeD: 0,
      handlePoolCircularPCvolumeS: 0,
      handlePoolTrianglePCvolumeB: 0,
      handlePoolTrianglePCvolumeH: 0,
      handlePoolTrianglePCvolumeD: 0,
      handlePoolTrianglePCvolumeS: 0,
      handlePoolIrregularPCvolumeL: 0,
      handlePoolIrregularPCvolumeA: 0,
      handlePoolIrregularPCvolumeB: 0,
      handlePoolIrregularPCvolumeD: 0,
      handlePoolIrregularPCvolumeS: 0,

      handlePoolRectanglePMvolumeL: 0,
      handlePoolRectanglePMvolumeW: 0,
      handlePoolRectanglePMvolumeD: 0,
      handlePoolRectanglePMvolumeS: 0,
      handlePoolCircularPMvolumeR: 0,
      handlePoolCircularPMvolumeD: 0,
      handlePoolCircularPMvolumeS: 0,
      handlePoolTrianglePMvolumeB: 0,
      handlePoolTrianglePMvolumeH: 0,
      handlePoolTrianglePMvolumeD: 0,
      handlePoolTrianglePMvolumeS: 0,
      handlePoolIrregularPMvolumeL: 0,
      handlePoolIrregularPMvolumeA: 0,
      handlePoolIrregularPMvolumeB: 0,
      handlePoolIrregularPMvolumeD: 0,
      handlePoolIrregularPMvolumeS: 0,

      poolPMmonth: false,
      poolPMmonthPrice: 0,
      poolPMquarter: false,
      poolPMquarterPrice: 0,
      poolPMyear: false,
      poolPMyearPrice: 0,
      poolPConce: false,
      poolPConcePrice: 0,
      poolPCweek: false,
      poolPCweekPrice: 0,
      poolPCmonth: false,
      poolPCmonthPrice: 0,

      poolAlgaePrice: 0,
      poolCloudyPrice: 0,
      poolPMgreenAlgae: false,
      poolPMgreenAlgaePrice: 0,
      poolPMmustardAlgae: false,
      poolPMmustardAlgaePrice: 0,
      poolPMblackAlgae: false,
      poolPMblackAlgaePrice: 0,
      poolPCgreenAlgae: false,
      poolPCgreenAlgaePrice: 0,
      poolPCmustardAlgae: false,
      poolPCmustardAlgaePrice: 0,
      poolPCblackAlgae: false,
      poolPCblackAlgaePrice: 0,
      poolPCcloudy: false,
      poolPCcloudyPrice: 0,
      poolPMcloudy: false,
      poolPMcloudyPrice: 0,
    };
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleDropdownChange2 = this.handleDropdownChange2.bind(this);

    this.handleOutdoorLoc = this.handleOutdoorLoc.bind(this);
    this.handlePoolLoc = this.handlePoolLoc.bind(this);
    this.handleChecked = this.handleChecked.bind(this);

    /***********Indoor Services Handling*************/
    this.genIndoorCleanOnce = this.genIndoorCleanOnce.bind(this);
    this.genIndoorCleanWeek = this.genIndoorCleanWeek.bind(this);
    this.genIndoorCleanMonth = this.genIndoorCleanMonth.bind(this);
    this.afterBuildCleanOnce = this.afterBuildCleanOnce.bind(this);
    this.afterBuildCleanWeek = this.afterBuildCleanWeek.bind(this);
    this.afterBuildCleanMonth = this.afterBuildCleanMonth.bind(this);
    this.endTenancyCleanOnce = this.endTenancyCleanOnce.bind(this);
    this.endTenancyCleanMonth = this.endTenancyCleanMonth.bind(this);
    this.sanitiseIndoorOnceOFF = this.sanitiseIndoorOnceOFF.bind(this);
    this.sanitiseIndoorMonth = this.sanitiseIndoorMonth.bind(this);

    this.IndoorCarpets = this.IndoorCarpets.bind(this);
    this.IndoorCouches = this.IndoorCouches.bind(this);
    this.IndoorCarpetsBedrooms = this.IndoorCarpetsBedrooms.bind(this);
    this.IndoorCarpetsBigBedrooms = this.IndoorCarpetsBigBedrooms.bind(this);
    this.IndoorCarpetsLounge = this.IndoorCarpetsLounge.bind(this);
    this.IndoorSmCarpetsQuantity = this.IndoorSmCarpetsQuantity.bind(this);
    this.IndoorBgCarpetsQuantity = this.IndoorBgCarpetsQuantity.bind(this);
    this.IndoorMattress = this.IndoorMattress.bind(this);
    this.IndoorRugs = this.IndoorRugs.bind(this);

    this.IndoorSingleMattress = this.IndoorSingleMattress.bind(this);
    this.IndoorDoubleMattress = this.IndoorDoubleMattress.bind(this);
    this.IndoorLargerMattress = this.IndoorLargerMattress.bind(this);
    this.SingleMattressQuantity = this.SingleMattressQuantity.bind(this);
    this.DoubleMattressQuantity = this.DoubleMattressQuantity.bind(this);
    this.LargerMattressQuantity = this.LargerMattressQuantity.bind(this);

    this.IndoorSmallRugs = this.IndoorSmallRugs.bind(this);
    this.IndoorMediumRugs = this.IndoorMediumRugs.bind(this);
    this.IndoorLargerRugs = this.IndoorLargerRugs.bind(this);
    this.SmallRugsQuantity = this.SmallRugsQuantity.bind(this);
    this.MediumRugsQuantity = this.MediumRugsQuantity.bind(this);
    this.LargerRugsQuantity = this.LargerRugsQuantity.bind(this);

    this.IndoorDiningChair = this.IndoorDiningChair.bind(this);
    this.IndoorOfficeChair = this.IndoorOfficeChair.bind(this);
    this.DiningChairQuantity = this.DiningChairQuantity.bind(this);
    this.OfficeChairQuantity = this.OfficeChairQuantity.bind(this);

    //this.IndoorChairs= this.IndoorChairs.bind(this);
    //this.handleNumberOfRugs  = this.handleNumberOfRugs.bind(this);
    //this.handleNumberOfChairs  = this.handleNumberOfChairs.bind(this);
    //this.IndoorSingleMattress= this.IndoorSingleMattress.bind(this); this.IndoorDoubleMattress= this.IndoorDoubleMattress.bind(this); this.IndoorQueenMattress= this.IndoorQueenMattress.bind(this); this.IndoorKingMattress= this.IndoorKingMattress.bind(this);

    this.genIndoorCleanWalls = this.genIndoorCleanWalls.bind(this);
    this.genIndoorCleanWindows = this.genIndoorCleanWindows.bind(this);
    this.genIndoorCleanLaundry = this.genIndoorCleanLaundry.bind(this);
    this.genIndoorDetergents = this.genIndoorDetergents.bind(this);
    this.afterBuilderDetergents = this.afterBuilderDetergents.bind(this);
    this.endTenancyDetergents = this.endTenancyDetergents.bind(this);
    this.handleIndoorLoc = this.handleIndoorLoc.bind(this);

    this.afterBuildIndoorCleanWalls = this.afterBuildIndoorCleanWalls.bind(
      this
    );
    this.afterBuildIndoorCleanWindows = this.afterBuildIndoorCleanWindows.bind(
      this
    );
    this.afterBuildIndoorCleanOven = this.afterBuildIndoorCleanOven.bind(this);

    this.endTenancyIndoorCleanWalls = this.endTenancyIndoorCleanWalls.bind(
      this
    );
    this.endTenancyIndoorCleanWindows = this.endTenancyIndoorCleanWindows.bind(
      this
    );

    this.handleIndoorGenPromo = this.handleIndoorGenPromo.bind(this);
    this.handleIndoorEndTenencyPromo = this.handleIndoorEndTenencyPromo.bind(
      this
    );
    this.handleIndoorAfterBuildPromo = this.handleIndoorAfterBuildPromo.bind(
      this
    );
    this.handleIndoorSanitisePromo = this.handleIndoorSanitisePromo.bind(this);

    this.handleSanitiseFreq = this.handleSanitiseFreq.bind(this);
    this.handleEndTenancyFreq = this.handleEndTenancyFreq.bind(this);
    /**/
    this.handleGenCleaningWeekFreq = this.handleGenCleaningWeekFreq.bind(this);
    this.handleGenCleaningMonthFreq = this.handleGenCleaningMonthFreq.bind(
      this
    );
    this.handleAfterBuildersWeekFreq = this.handleAfterBuildersWeekFreq.bind(
      this
    );
    this.handleAfterBuildersMonthFreq = this.handleAfterBuildersMonthFreq.bind(
      this
    );

    // Couches and carpets
    this.handleCouches = this.handleCouches.bind(this);
    this.handleMattress = this.handleMattress.bind(this);
    this.handleRugs = this.handleRugs.bind(this);
    this.handleChairs = this.handleChairs.bind(this);

    //Select either Couches, Carpets, Mattress, Rugs, Chairs
    this.handleCouches_Carpets = this.handleCouches_Carpets.bind(this);

    /***********Outdoor Services Handling*************/
    this.handleOutdoorPropertType = this.handleOutdoorPropertType.bind(this);
    this.handleOutdoorPropertKind = this.handleOutdoorPropertKind.bind(this);
    this.handleOutdoorWorkYard = this.handleOutdoorWorkYard.bind(this);

    this.outdoorYCwholeYard = this.outdoorYCwholeYard.bind(this);
    this.outdoorYCfrontYard = this.outdoorYCfrontYard.bind(this);
    this.outdoorYCbackYard = this.outdoorYCbackYard.bind(this);
    this.outdoorYCsideYard = this.outdoorYCsideYard.bind(this);

    this.outdoorLMwholeYard = this.outdoorLMwholeYard.bind(this);
    this.outdoorLMfrontYard = this.outdoorLMfrontYard.bind(this);
    this.outdoorLMbackYard = this.outdoorLMbackYard.bind(this);
    this.outdoorLMsideYard = this.outdoorLMsideYard.bind(this);

    this.outdoorFBwholeYard = this.outdoorFBwholeYard.bind(this);
    this.outdoorFBfrontYard = this.outdoorFBfrontYard.bind(this);
    this.outdoorFBbackYard = this.outdoorFBbackYard.bind(this);
    this.outdoorFBsideYard = this.outdoorFBsideYard.bind(this);

    this.outdoorDCwholeYard = this.outdoorDCwholeYard.bind(this);
    this.outdoorDCfrontYard = this.outdoorDCfrontYard.bind(this);
    this.outdoorDCbackYard = this.outdoorDCbackYard.bind(this);
    this.outdoorDCsideYard = this.outdoorDCsideYard.bind(this);

    this.handleYCarea = this.handleYCarea.bind(this);
    this.handleLMarea = this.handleLMarea.bind(this);
    this.handleFBarea = this.handleFBarea.bind(this);
    this.handleDCarea = this.handleDCarea.bind(this);

    this.outdoorYConce = this.outdoorYConce.bind(this);
    this.outdoorYCweek = this.outdoorYCweek.bind(this);
    this.outdoorYCmonth = this.outdoorYCmonth.bind(this);
    this.outdoorLMonce = this.outdoorLMonce.bind(this);
    this.outdoorLMweek = this.outdoorLMweek.bind(this);
    this.outdoorLMmonth = this.outdoorLMmonth.bind(this);
    this.outdoorFBonce = this.outdoorFBonce.bind(this);
    this.outdoorFBweek = this.outdoorFBweek.bind(this);
    this.outdoorFBmonth = this.outdoorFBmonth.bind(this);
    this.outdoorDConce = this.outdoorDConce.bind(this);
    this.outdoorDCweek = this.outdoorDCweek.bind(this);
    this.outdoorDCmonth = this.outdoorDCmonth.bind(this);

    this.handleoutdoorYCweek = this.handleoutdoorYCweek.bind(this);
    this.handleoutdoorYCmonth = this.handleoutdoorYCmonth.bind(this);
    this.handleoutdoorLMweek = this.handleoutdoorLMweek.bind(this);
    this.handleoutdoorLMmonth = this.handleoutdoorLMmonth.bind(this);
    this.handleoutdoorFBweek = this.handleoutdoorFBweek.bind(this);
    this.handleoutdoorFBmonth = this.handleoutdoorFBmonth.bind(this);
    this.handleoutdoorDCweek = this.handleoutdoorDCweek.bind(this);
    this.handleoutdoorDCmonth = this.handleoutdoorDCmonth.bind(this);

    this.handleYCoutdoorPromo = this.handleYCoutdoorPromo.bind(this);
    this.handleLMoutdoorPromo = this.handleLMoutdoorPromo.bind(this);
    this.handleFBoutdoorPromo = this.handleFBoutdoorPromo.bind(this);
    this.handleDCoutdoorPromo = this.handleDCoutdoorPromo.bind(this);
    this.handleYCareaL = this.handleYCareaL.bind(this);
    this.handleYCareaW = this.handleYCareaW.bind(this);
    this.handleLMareaL = this.handleLMareaL.bind(this);
    this.handleLMareaW = this.handleLMareaW.bind(this);
    this.handleFBareaL = this.handleFBareaL.bind(this);
    this.handleFBareaW = this.handleFBareaW.bind(this);
    this.handleDCareaL = this.handleDCareaL.bind(this);
    this.handleDCareaW = this.handleDCareaW.bind(this);
    /***********Pool Services Handling*************/
    this.handleOnceOFF = this.handleOnceOFF.bind(this);
    this.handleCleanWeek = this.handleCleanWeek.bind(this);
    this.handleCleanMonth = this.handleCleanMonth.bind(this);

    this.handleMaintMonth = this.handleMaintMonth.bind(this);
    this.handleMaintQuat = this.handleMaintQuat.bind(this);
    this.handleMaintYear = this.handleMaintYear.bind(this);

    this.handlePoolShapePCSelect = this.handlePoolShapePCSelect.bind(this);
    this.handlePoolShapePMSelect = this.handlePoolShapePMSelect.bind(this);

    this.handlePoolGenCleaningPromo = this.handlePoolGenCleaningPromo.bind(
      this
    );
    this.handlePoolMaintanancePromo = this.handlePoolMaintanancePromo.bind(
      this
    );

    this.handlePoolRectanglePCvolumeL = this.handlePoolRectanglePCvolumeL.bind(
      this
    );
    this.handlePoolRectanglePCvolumeW = this.handlePoolRectanglePCvolumeW.bind(
      this
    );
    this.handlePoolRectanglePCvolumeD = this.handlePoolRectanglePCvolumeD.bind(
      this
    );
    this.handlePoolRectanglePCvolumeS = this.handlePoolRectanglePCvolumeS.bind(
      this
    );
    this.handlePoolCircularPCvolumeR = this.handlePoolCircularPCvolumeR.bind(
      this
    );
    this.handlePoolCircularPCvolumeD = this.handlePoolCircularPCvolumeD.bind(
      this
    );
    this.handlePoolCircularPCvolumeS = this.handlePoolCircularPCvolumeS.bind(
      this
    );
    this.handlePoolTrianglePCvolumeB = this.handlePoolTrianglePCvolumeB.bind(
      this
    );
    this.handlePoolTrianglePCvolumeH = this.handlePoolTrianglePCvolumeH.bind(
      this
    );
    this.handlePoolTrianglePCvolumeD = this.handlePoolTrianglePCvolumeD.bind(
      this
    );
    this.handlePoolTrianglePCvolumeS = this.handlePoolTrianglePCvolumeS.bind(
      this
    );
    this.handlePoolIrregularPCvolumeL = this.handlePoolIrregularPCvolumeL.bind(
      this
    );
    this.handlePoolIrregularPCvolumeA = this.handlePoolIrregularPCvolumeA.bind(
      this
    );
    this.handlePoolIrregularPCvolumeB = this.handlePoolIrregularPCvolumeB.bind(
      this
    );
    this.handlePoolIrregularPCvolumeD = this.handlePoolIrregularPCvolumeD.bind(
      this
    );
    this.handlePoolIrregularPCvolumeS = this.handlePoolIrregularPCvolumeS.bind(
      this
    );

    this.handlePoolRectanglePMvolumeL = this.handlePoolRectanglePMvolumeL.bind(
      this
    );
    this.handlePoolRectanglePMvolumeW = this.handlePoolRectanglePMvolumeW.bind(
      this
    );
    this.handlePoolRectanglePMvolumeD = this.handlePoolRectanglePMvolumeD.bind(
      this
    );
    this.handlePoolRectanglePMvolumeS = this.handlePoolRectanglePMvolumeS.bind(
      this
    );
    this.handlePoolCircularPMvolumeR = this.handlePoolCircularPMvolumeR.bind(
      this
    );
    this.handlePoolCircularPMvolumeD = this.handlePoolCircularPMvolumeD.bind(
      this
    );
    this.handlePoolCircularPMvolumeS = this.handlePoolCircularPMvolumeS.bind(
      this
    );
    this.handlePoolTrianglePMvolumeB = this.handlePoolTrianglePMvolumeB.bind(
      this
    );
    this.handlePoolTrianglePMvolumeH = this.handlePoolTrianglePMvolumeH.bind(
      this
    );
    this.handlePoolTrianglePMvolumeD = this.handlePoolTrianglePMvolumeD.bind(
      this
    );
    this.handlePoolTrianglePMvolumeS = this.handlePoolTrianglePMvolumeS.bind(
      this
    );
    this.handlePoolIrregularPMvolumeL = this.handlePoolIrregularPMvolumeL.bind(
      this
    );
    this.handlePoolIrregularPMvolumeA = this.handlePoolIrregularPMvolumeA.bind(
      this
    );
    this.handlePoolIrregularPMvolumeB = this.handlePoolIrregularPMvolumeB.bind(
      this
    );
    this.handlePoolIrregularPMvolumeD = this.handlePoolIrregularPMvolumeD.bind(
      this
    );
    this.handlePoolIrregularPMvolumeS = this.handlePoolIrregularPMvolumeS.bind(
      this
    );

    //this.handlePoolAlgae = this.handlePoolAlgae.bind(this);

    this.poolPMmonth = this.poolPMmonth.bind(this);
    this.poolPMquarter = this.poolPMquarter.bind(this);
    this.poolPMyear = this.poolPMyear.bind(this);
    this.poolPConce = this.poolPConce.bind(this);
    this.poolPCweek = this.poolPCweek.bind(this);
    this.poolPCmonth = this.poolPCmonth.bind(this);

    this.poolPCgreenAlgae = this.poolPCgreenAlgae.bind(this);
    this.poolPCmustardAlgae = this.poolPCmustardAlgae.bind(this);
    this.poolPCblackAlgae = this.poolPCblackAlgae.bind(this);
    this.poolPMgreenAlgae = this.poolPMgreenAlgae.bind(this);
    this.poolPMmustardAlgae = this.poolPMmustardAlgae.bind(this);
    this.poolPMblackAlgae = this.poolPMblackAlgae.bind(this);
    this.poolPCcloudy = this.poolPCcloudy.bind(this);
    this.poolPMcloudy = this.poolPMcloudy.bind(this);

    this.handlepoolPCweek = this.handlepoolPCweek.bind(this);
    this.handlepoolPCmonth = this.handlepoolPCmonth.bind(this);
    this.handlepoolPMmonth = this.handlepoolPMmonth.bind(this);
    this.handlepoolPMquarter = this.handlepoolPMquarter.bind(this);

    this.handlePoolAlgae = this.handlePoolAlgae.bind(this);
    this.handlePoolissues = this.handlePoolissues.bind(this);
  }

  handleDropdownChange(e) {
    //this.logs.shift();
    //this.logs.unshift("Bedrooms : " + e.target.value);
    this.setState({
      Beds: "Beds : " + e.target.value,
      bedPrice:
        e.target.value === "1"
          ? 30
          : e.target.value === "2"
          ? 60
          : e.target.value === "3"
          ? 90
          : e.target.value === "4"
          ? 120
          : e.target.value === "5"
          ? 150
          : 0,
      bedRooms:
        e.target.value === "1"
          ? e.target.value + " Bedroom"
          : e.target.value + " Bedrooms",
      NumOfBeds: parseInt(e.target.value),
    });
  }

  handleDropdownChange2(e) {
    //this.logs2.shift();
    //this.logs2.unshift("Bathrooms : " + e.target.value);
    this.setState({
      Baths: "Baths : " + e.target.value,
      bathPrice:
        e.target.value === "1"
          ? 20
          : e.target.value === "2"
          ? 40
          : e.target.value === "3"
          ? 60
          : e.target.value === "4"
          ? 80
          : e.target.value === "5"
          ? 100
          : 0,
      bathRooms:
        e.target.value === "1"
          ? e.target.value + " Bathroom"
          : e.target.value + " Bathrooms",
    });
  }

  handleOutdoorLoc = (option) => {
    this.logs5.shift();
    this.logs5.unshift("Location : " + option.label);
    this.setState({
      outdoorLoc: option,
      outdoorLocDistance: parseInt(option.value * 1),
    });
  };

  handlePoolLoc = (option) => {
    this.locationPool.shift();
    this.locationPool.unshift("Location : " + option.label);
    this.setState({
      poolLoc: option,
      poolLocDistance: parseInt(option.value * 1),
    });
  };

  handleChecked() {
    this.setState({
      isChecked: !this.state.isChecked,
      priceDetergent: this.state.isChecked ? 0 : 52,
    });
  }

  handleOnceOFF() {
    this.setState({
      cleanOnceOFF: !this.state.cleanOnceOFF,
      priceCleanOnce: this.state.cleanOnceOFF ? 0 : 1,
    });
  }

  handleCleanWeek() {
    this.setState({
      cleanWeek: !this.state.cleanWeek,
      priceCleanWeek: this.state.cleanWeek ? 0 : 0.9,
    });
  }

  handleCleanMonth() {
    this.setState({
      cleanMonth: !this.state.cleanMonth,
      priceCleanMonth: this.state.cleanMonth ? 0 : 0.95,
    });
  }

  handleMaintMonth() {
    this.setState({
      maintMonth: !this.state.maintMonth,
      priceMaintMonth: this.state.maintMonth ? 0 : 0.9,
    });
  }

  handleMaintQuat() {
    this.setState({
      maintQuat: !this.state.maintQuat,
      priceMaintQuat: this.state.maintQuat ? 0 : 0.95,
    });
  }

  handleMaintYear() {
    this.setState({
      maintYear: !this.state.maintYear,
      priceMaintYear: this.state.maintYear ? 0 : 1,
    });
  }

  /***********Indoor Services Handling*************/
  genIndoorClean(event) {
    this.setState({
      genIndoorCleanWalls: false,
      genIndoorCleanWindows: false,
      genIndoorCleanLaundry: false,
      genIndoorDetergents: false,
      genIndoorCleanOnce: false,
      genIndoorCleanWeek: false,
      genIndoorCleanMonth: false,
      handleIndoorGenPromo: 1,
      handleGenCleaningWeekFreq: 2,
      handleGenCleaningMonthFreq: 2,
      Beds: null,
      Baths: null,
      priceGenIndoorCleanWalls: 0,
      priceGenIndoorCleanWindows: 0,
      priceGenIndoorCleanLaundry: 0,
      priceGenIndoorDetergents: 0,
      IndoorGenClean:
        this.state.IndoorAfterBuildClean === true ||
        this.state.IndoorEndTenancyClean === true ||
        this.state.IndoorSanitise === true
          ? false
          : !this.state.IndoorGenClean,
      IndoorCleanService:
        this.state.IndoorAfterBuildClean === true ||
        this.state.IndoorEndTenancyClean === true ||
        this.state.IndoorSanitise === true ||
        this.state.IndoorGenClean
          ? null
          : "General",
      IndoorCleanPrice: this.state.IndoorGenClean ? 0 : 30,
    });
  }

  afterBuildIndoorClean(event) {
    this.setState({
      afterBuildIndoorCleanWalls: false,
      afterBuildIndoorCleanWindows: false,
      afterBuilderDetergents: false,
      afterBuildCleanOnce: false,
      afterBuildCleanWeek: false,
      afterBuildCleanMonth: false,
      handleIndoorAfterBuildPromo: 1,
      handleAfterBuildersWeekFreq: 2,
      handleAfterBuildersMonthFreq: 2,
      Beds: null,
      Baths: null,
      priceAfterBuildIndoorCleanWalls: 0,
      priceAfterBuildIndoorCleanWindows: 0,
      priceAfterBuildIndoorCleanOven: 0,
      priceAfterBuilderDetergents: 0,
      IndoorAfterBuildClean:
        this.state.IndoorGenClean === true ||
        this.state.IndoorEndTenancyClean === true ||
        this.state.IndoorSanitise === true
          ? false
          : !this.state.IndoorAfterBuildClean,
      IndoorAfterBuildCleanService:
        this.state.IndoorGenClean === true ||
        this.state.IndoorEndTenancyClean === true ||
        this.state.IndoorSanitise === true ||
        this.state.IndoorAfterBuildClean
          ? null
          : "After Builders",
      IndoorAfterBuildCleanPrice: this.state.IndoorAfterBuildClean ? 0 : 30,
    });
  }

  endTenancyIndoorClean(event) {
    this.setState({
      endTenancyIndoorCleanWalls: false,
      endTenancyIndoorCleanWindows: false,
      endTenancyDetergents: false,
      endTenancyCleanOnce: false,
      endTenancyCleanMonth: false,
      handleIndoorEndTenencyPromo: 1,
      handleEndTenancyFreq: 2,
      Beds: null,
      Baths: null,
      priceEndTenancyIndoorCleanWalls: 0,
      priceEndTenancyIndoorCleanWindows: 0,
      priceEndTenancyDetergents: 0,
      IndoorEndTenancyClean:
        this.state.IndoorAfterBuildClean === true ||
        this.state.IndoorGenClean === true ||
        this.state.IndoorSanitise === true
          ? false
          : !this.state.IndoorEndTenancyClean,
      IndoorEndTenancyCleanService:
        this.state.IndoorAfterBuildClean === true ||
        this.state.IndoorGenClean === true ||
        this.state.IndoorSanitise === true ||
        this.state.IndoorEndTenancyClean
          ? null
          : "Deep Cleaning",
      IndoorEndTenancyCleanPrice: this.state.IndoorEndTenancyClean ? 0 : 30,
    });
  }

  sanitiseIndoorClean(event) {
    this.setState({
      sanitiseIndoorOnceOFF: false,
      sanitiseIndoorMonth: false,
      priceSanitiseIndoorOnceOFF: 0,
      priceSanitiseIndoorMonth: 0,
      handleIndoorSanitisePromo: 1,
      handleSanitiseFreq: 2,
      Beds: null,
      Baths: null,
      IndoorSanitise:
        this.state.IndoorAfterBuildClean === true ||
        this.state.IndoorEndTenancyClean === true ||
        this.state.IndoorGenClean === true
          ? false
          : !this.state.IndoorSanitise,
      IndoorSanitiseService:
        this.state.IndoorAfterBuildClean === true ||
        this.state.IndoorEndTenancyClean === true ||
        this.state.IndoorGenClean === true ||
        this.state.IndoorSanitise
          ? null
          : "Antiviral Sanitisation",
      IndoorSanitisePrice: this.state.IndoorSanitise ? 0 : 30,
    });
  }

  IndoorSofas(event) {
    this.setState({
      IndoorCarpets: false,
      IndoorCouches: false,
      IndoorMattress: false,
      IndoorRugs: false,
      IndoorChairs: false,
      IndoorCarpetsBedrooms: false,
      IndoorCarpetsLounge: false,
    });
  }

  genIndoorCleanOnce() {
    this.setState({
      handleGenCleaningWeekFreq: 2,
      handleGenCleaningMonthFreq: 2,
      genIndoorCleanOnce: !this.state.genIndoorCleanOnce,
      priceGenIndoorCleanOnce: this.state.genIndoorCleanOnce ? 0 : 1,
    });
  }
  genIndoorCleanWeek() {
    this.setState({
      handleGenCleaningMonthFreq: 2,
      genIndoorCleanWeek: !this.state.genIndoorCleanWeek,
      priceGenIndoorCleanWeek: this.state.genIndoorCleanWeek ? 0 : 0.9,
    });
  }
  genIndoorCleanMonth() {
    this.setState({
      handleGenCleaningWeekFreq: 2,
      genIndoorCleanMonth: !this.state.genIndoorCleanMonth,
      priceGenIndoorCleanMonth: this.state.genIndoorCleanMonth ? 0 : 0.95,
    });
  }

  afterBuildCleanOnce() {
    this.setState({
      handleAfterBuildersWeekFreq: 2,
      handleAfterBuildersMonthFreq: 2,
      afterBuildCleanOnce: !this.state.afterBuildCleanOnce,
      priceABcleanOnce: this.state.afterBuildCleanOnce ? 0 : 1,
    });
  }
  afterBuildCleanWeek() {
    this.setState({
      handleAfterBuildersMonthFreq: 2,
      afterBuildCleanWeek: !this.state.afterBuildCleanWeek,
      priceABcleanWeek: this.state.afterBuildCleanWeek ? 0 : 0.9,
    });
  }
  afterBuildCleanMonth() {
    this.setState({
      handleAfterBuildersWeekFreq: 2,
      afterBuildCleanMonth: !this.state.afterBuildCleanMonth,
      priceABcleanMonth: this.state.afterBuildCleanMonth ? 0 : 0.95,
    });
  }

  endTenancyCleanOnce() {
    this.setState({
      handleEndTenancyFreq: 2,
      endTenancyCleanOnce: !this.state.endTenancyCleanOnce,
      priceETcleanOnce: this.state.endTenancyCleanOnce ? 0 : 1,
    });
  }
  endTenancyCleanMonth() {
    this.setState({
      endTenancyCleanMonth: !this.state.endTenancyCleanMonth,
      priceETcleanMonth: this.state.endTenancyCleanMonth ? 0 : 0.95,
    });
  }

  sanitiseIndoorOnceOFF() {
    this.setState({
      handleSanitiseFreq: 2,
      sanitiseIndoorOnceOFF: !this.state.sanitiseIndoorOnceOFF,
      priceSanitiseIndoorOnceOFF: this.state.sanitiseIndoorOnceOFF ? 0 : 1,
    });
  }
  sanitiseIndoorMonth() {
    this.setState({
      sanitiseIndoorMonth: !this.state.sanitiseIndoorMonth,
      priceSanitiseIndoorMonth: this.state.sanitiseIndoorMonth ? 0 : 0.9,
    });
  }

  /*************************************Carpets******************************************** */
  IndoorCarpets() {
    this.setState({
      IndoorCarpets: !this.state.IndoorCarpets,
      IndoorCarpetsBedrooms: false,
      IndoorCarpetsLounge: false,
    });
  }

  IndoorSmCarpetsQuantity(event) {
    event.preventDefault();
    this.setState({
      smCarpets: event.target.value + " X Small",
      smCarpetsPrice: this.state.IndoorCarpetsBedrooms
        ? parseInt(event.target.value) * 400
        : 0,
    });
  }
  IndoorCarpetsBedrooms() {
    this.setState({
      isCheckedSmCarpets: !this.state.IndoorCarpetsBedrooms ? true : false,
      IndoorCarpetsBedrooms: !this.state.IndoorCarpetsBedrooms,
      smCarpetsPrice: !this.state.IndoorCarpetsBedrooms
        ? 0
        : this.state.smCarpetsPrice,
      bgCarpetsPrice: !this.state.IndoorCarpetsBigBedrooms
        ? 0
        : this.state.bgCarpetsPrice,
      smCarpets: "",
    });
  }
  IndoorCarpetsBigBedrooms() {
    this.setState({
      isCheckedBgCarpets: !this.state.IndoorCarpetsBigBedrooms ? true : false,
      IndoorCarpetsBigBedrooms: !this.state.IndoorCarpetsBigBedrooms,
      bgCarpetsPrice: !this.state.IndoorCarpetsBigBedrooms
        ? 0
        : this.state.bgCarpetsPrice,
      smCarpetsPrice: !this.state.IndoorCarpetsBedrooms
        ? 0
        : this.state.smCarpetsPrice,
      bgCarpets: "",
    });
  }
  IndoorBgCarpetsQuantity(event) {
    event.preventDefault();
    this.setState({
      bgCarpets: event.target.value + " X Big",
      bgCarpetsPrice: this.state.IndoorCarpetsBigBedrooms
        ? parseInt(event.target.value) * 500
        : 0,
    });
  }
  IndoorCarpetsLounge(event) {
    this.setState({
      isCheckedLgrCarpets: !this.state.IndoorCarpetsLounge ? true : false,
      IndoorCarpetsLounge: !this.state.IndoorCarpetsLounge,
      lngCarpets: this.state.IndoorCarpetsLounge ? "Lounge" : "",
      lngCarpetsPrice: 550, //this.state.IndoorCarpetsLounge ? 550 : 0,
    });
  }

  /*****to be removed */
  IndoorCouches() {
    this.setState({
      IndoorCouches: !this.state.IndoorCouches,
      priceCouches: 0,
      handleCouches: "",
      Beds: null,
      Baths: null,
      Beds: null,
    });
  }
  IndoorMattress() {
    this.setState({
      IndoorMattress: !this.state.IndoorMattress,
      Beds: null,
      handleMattress: "",
      priceIndoorMattress: 0,
    });
  }
  IndoorRugs() {
    this.setState({
      handleRugs: "",
      priceIndoorRugs: 0,
      IndoorRugs: !this.state.IndoorRugs,
      handleNumberOfRugs: 1,
      Beds: null,
      Baths: null,
    });
  }
  IndoorChairs() {
    this.setState({
      handleChairs: "",
      priceIndoorChairs: 0,
      IndoorChairs: !this.state.IndoorChairs,
      handleNumberOfChairs: 1,
      Beds: null,
      Baths: null,
    });
  }

  /*************************************Mattress******************************************** */
  SingleMattressQuantity(event) {
    event.preventDefault();
    this.setState({
      snglMattress: event.target.value + " X Single",
      snglMattressPrice: parseInt(event.target.value) * 250,
    });
  }
  IndoorSingleMattress() {
    this.setState({
      isCheckedSnglMattress: !this.state.IndoorSingleMattress ? true : false,
      IndoorSingleMattress: !this.state.IndoorSingleMattress,
      snglMattress: "",
    });
  }
  DoubleMattressQuantity(event) {
    event.preventDefault();
    this.setState({
      dbleMattress: event.target.value + " X Double",
      dbleMattressPrice: parseInt(event.target.value) * 325,
    });
  }
  IndoorDoubleMattress() {
    this.setState({
      isCheckedDblelMattress: !this.state.IndoorDoubleMattress ? true : false,
      IndoorDoubleMattress: !this.state.IndoorDoubleMattress,
      dbleMattress: "",
    });
  }
  LargerMattressQuantity(event) {
    event.preventDefault();
    this.setState({
      lgrMattress: event.target.value + " X Larger",
      lgrMattressPrice: parseInt(event.target.value) * 425,
    });
  }
  IndoorLargerMattress() {
    this.setState({
      isCheckedLgrMattress: !this.state.IndoorLargerMattress ? true : false,
      IndoorLargerMattress: !this.state.IndoorLargerMattress,
      lgrMattress: "",
    });
  }
  //IndoorKingMattress () { this.setState({IndoorKingMattress: !this.state.IndoorKingMattress, priceCarpetsBedrooms : 500}); }

  /*************************************Rugs******************************************** */
  SmallRugsQuantity(event) {
    event.preventDefault();
    this.setState({
      smRugs: event.target.value + " X Small",
      smRugsPrice: parseInt(event.target.value) * 150,
    });
  }
  IndoorSmallRugs() {
    this.setState({
      isCheckedSmRugs: !this.state.IndoorSmallRugs ? true : false,
      IndoorSmallRugs: !this.state.IndoorSmallRugs,
      smRugs: "",
    });
  }
  MediumRugsQuantity(event) {
    event.preventDefault();
    this.setState({
      mdRugs: event.target.value + " X Medium",
      mdRugsPrice: parseInt(event.target.value) * 250,
    });
  }
  IndoorMediumRugs() {
    this.setState({
      isCheckedMdRugs: !this.state.IndoorMediumRugs ? true : false,
      IndoorMediumRugs: !this.state.IndoorMediumRugs,
      mdRugs: "",
    });
  }
  LargerRugsQuantity(event) {
    event.preventDefault();
    this.setState({
      lgRugs: event.target.value + " X Larger",
      lgRugsPrice: parseInt(event.target.value) * 350,
    });
  }
  IndoorLargerRugs() {
    this.setState({
      isCheckedLgrRugs: !this.state.IndoorLargerRugs ? true : false,
      IndoorLargerRugs: !this.state.IndoorLargerRugs,
      lgRugs: "",
    });
  }

  /*************************************Chairs******************************************** */
  DiningChairQuantity(event) {
    event.preventDefault();
    this.setState({
      diningChairs: event.target.value + " X Dining",
      diningChairsPrice: parseInt(event.target.value) * 100,
    });
  }
  IndoorDiningChair() {
    this.setState({
      isCheckedDiningChairs: !this.state.IndoorDiningChair ? true : false,
      IndoorDiningChair: !this.state.IndoorDiningChair,
      diningChairs: "",
    });
  }
  OfficeChairQuantity(event) {
    event.preventDefault();
    this.setState({
      officeChairs: event.target.value + " X Office",
      officeChairsPrice: parseInt(event.target.value) * 125,
    });
  }
  IndoorOfficeChair() {
    this.setState({
      isCheckedOfficeChairs: !this.state.IndoorOfficeChair ? true : false,
      IndoorOfficeChair: !this.state.IndoorOfficeChair,
      officeChairs: "",
    });
  }

  handleCouches(event) {
    event.preventDefault();
    this.setState({
      handleCouches: event.target.value,
      priceCouches: 150 * parseInt(event.target.value.split(" ")[0]),
    });
  }
  // Sofas and Carpets - to be removed
  handleMattress(event) {
    event.preventDefault();
    this.setState({
      handleMattress: event.target.value,
      priceIndoorMattress:
        event.target.value === "Single"
          ? 250
          : event.target.value === "Double"
          ? 300
          : event.target.value === "Queen"
          ? 350
          : event.target.value === "King"
          ? 400
          : 0,
    });
  }
  handleRugs(event) {
    event.preventDefault();
    this.setState({
      handleRugs: event.target.value,
      priceIndoorRugs:
        event.target.value === "Small"
          ? 150
          : event.target.value === "Medium"
          ? 250
          : event.target.value === "Large"
          ? 350
          : event.target.value === "X Large"
          ? 400
          : 0,
    });
  }
  handleNumberOfRugs(event) {
    event.preventDefault();
    this.setState({ handleNumberOfRugs: parseInt(event.target.value) });
  }
  handleNumberOfChairs(event) {
    event.preventDefault();
    this.setState({ handleNumberOfChairs: parseInt(event.target.value) });
  }
  handleChairs(event) {
    event.preventDefault();
    this.setState({
      handleChairs: event.target.value,
      priceIndoorChairs:
        event.target.value === "Dining"
          ? 100
          : event.target.value === "Office"
          ? 130
          : 0,
    });
  }

  //Handling Couches, Carpets, Mattress, Rugs, Chairs
  handleCouches_Carpets(event) {
    event.preventDefault();
    this.setState({
      handleCouches_Carpets: event.target.value,
      snglMattressPrice: 0,
      dbleMattressPrice: 0,
      lgrMattressPrice: 0,
      smRugsPrice: 0,
      mdRugsPrice: 0,
      lgRugsPrice: 0,
      diningChairsPrice: 0,
      officeChairsPrice: 0,
      priceCouches: 0,
      smCarpetsPrice: 0,
      bgCarpetsPrice: 0,
      lngCarpetsPrice: 0,
      isCheckedSmCarpets: false,
      isCheckedSnglMattress: false,
      isCheckedSmRugs: false,
      isCheckedDiningChairs: false,
      isCheckedBgCarpets: false,
      isCheckedDblelMattress: false,
      isCheckedMdRugs: false,
      isCheckedOfficeChairs: false,
      isCheckedLgrCarpets: false,
      isCheckedLgrMattress: false,
      isCheckedLgrRugs: false,
    });
  }

  genIndoorCleanWalls() {
    this.setState({
      genIndoorCleanWalls: !this.state.genIndoorCleanWalls,
      genIndoorCleanWallsService: this.state.genIndoorCleanWalls
        ? null
        : "Walls ",
      priceGenIndoorCleanWalls: this.state.genIndoorCleanWalls ? 0 : 60,
    });
  }

  genIndoorCleanWindows() {
    this.setState({
      genIndoorCleanWindows: !this.state.genIndoorCleanWindows,
      genIndoorCleanWindowsService: this.state.genIndoorCleanWindows
        ? null
        : "Windows",
      priceGenIndoorCleanWindows: this.state.genIndoorCleanWindows ? 0 : 100,
    });
  }

  genIndoorDetergents() {
    this.setState({
      genIndoorDetergents: !this.state.genIndoorDetergents,
      priceGenIndoorDetergents: this.state.genIndoorDetergents ? 0 : 35,
    });
  }

  genIndoorCleanLaundry() {
    this.setState({
      genIndoorCleanLaundry: !this.state.genIndoorCleanLaundry,
      genIndoorCleanLaundryService: this.state.genIndoorCleanLaundry
        ? null
        : " Oven ",
      priceGenIndoorCleanLaundry: this.state.genIndoorCleanLaundry ? 0 : 60,
    });
  }

  afterBuildIndoorCleanWalls() {
    this.setState({
      afterBuildIndoorCleanWalls: !this.state.afterBuildIndoorCleanWalls,
      afterBuildIndoorCleanWallsService: this.state.afterBuildIndoorCleanWalls
        ? null
        : " Walls ",
      priceAfterBuildIndoorCleanWalls: this.state.afterBuildIndoorCleanWalls
        ? 0
        : 80,
    });
  }

  afterBuildIndoorCleanWindows() {
    this.setState({
      afterBuildIndoorCleanWindows: !this.state.afterBuildIndoorCleanWindows,
      afterBuildIndoorCleanWindowsService: this.state
        .afterBuildIndoorCleanWindows
        ? null
        : " Windows  ",
      priceAfterBuildIndoorCleanWindows: this.state.afterBuildIndoorCleanWindows
        ? 0
        : 100,
    });
  }

  afterBuildIndoorCleanOven() {
    this.setState({
      afterBuildIndoorCleanOven: !this.state.afterBuildIndoorCleanOven,
      afterBuildIndoorCleanOvenService: this.state.afterBuildIndoorCleanOven
        ? null
        : " Oven  ",
      priceAfterBuildIndoorCleanOven: this.state.afterBuildIndoorCleanOven
        ? 0
        : 100,
    });
  }

  afterBuilderDetergents() {
    this.setState({
      afterBuilderDetergents: !this.state.afterBuilderDetergents,
      priceAfterBuilderDetergents: this.state.afterBuilderDetergents ? 0 : 70,
    });
  }

  endTenancyIndoorCleanWalls() {
    this.setState({
      endTenancyIndoorCleanWalls: !this.state.endTenancyIndoorCleanWalls,
      endTenancyIndoorCleanWallsService: this.state.endTenancyIndoorCleanWalls
        ? null
        : " Walls  ",
      priceEndTenancyIndoorCleanWalls: this.state.endTenancyIndoorCleanWalls
        ? 0
        : 70,
    });
  }

  endTenancyIndoorCleanWindows() {
    this.setState({
      endTenancyIndoorCleanWindows: !this.state.endTenancyIndoorCleanWindows,
      endTenancyIndoorCleanWindowsService: this.state
        .endTenancyIndoorCleanWindows
        ? null
        : " Windows  ",
      priceEndTenancyIndoorCleanWindows: this.state.endTenancyIndoorCleanWindows
        ? 0
        : 100,
    });
  }

  endTenancyDetergents() {
    this.setState({
      endTenancyDetergents: !this.state.endTenancyDetergents,
      priceEndTenancyDetergents: this.state.endTenancyDetergents ? 0 : 50,
    });
  }

  selectIndoor(event) {
    this.setState({
      showPopupIndoor: !this.state.showPopupIndoor,
      serviceIntervalIndoor:
        this.state.genIndoorCleanOnce ||
        this.state.afterBuildCleanOnce ||
        this.state.endTenancyCleanOnce ||
        this.state.sanitiseIndoorOnceOFF
          ? "Once OFF"
          : this.state.genIndoorCleanWeek || this.state.afterBuildCleanWeek
          ? "Weekly"
          : this.state.endTenancyCleanMonth ||
            this.state.sanitiseIndoorMonth ||
            this.state.genIndoorCleanMonth ||
            this.state.afterBuildCleanMonth
          ? "Monthly"
          : "Once OFF",
      IndoorDetergents:
        this.state.genIndoorDetergents ||
        this.state.afterBuilderDetergents ||
        this.state.endTenancyDetergents
          ? true
          : false,
      IndoorBookedService: this.state.IndoorGenClean
        ? "General Cleaning"
        : this.state.IndoorAfterBuildClean
        ? "After Builders"
        : this.state.IndoorEndTenancyClean
        ? "Deep Cleaning"
        : this.state.IndoorSanitise
        ? "Upholstery Cleaning"
        : "",
    });
  }

  showTcsIn(event) {
    this.setState({
      showTcIn: !this.state.showTcIn,
      value: event.target.innerText,
    });
  }

  showServicesInfo(event) {
    this.setState({
      showServicesInfo: !this.state.showServicesInfo,
    });
  }

  handleIndoorLoc = (option) => {
    //this.logs3.shift();
    //this.logs3.unshift("Location : " + option.value);
    this.setState({
      genCleanloc: option,
      IndoorLocation: "Location : " + option.label,
    });
  };

  handleIndoorGenPromo(event) {
    event.preventDefault();
    console.log(event.target.value);
    const code = event.target.value.toLowerCase();
    const genPromo =
      code.length === 7 &&
      (code.substring(5, 7) === "pt" || code.substring(5, 7) === "fr")
        ? 0.5
        : 1;
    this.setState({
      handleIndoorGenPromo: genPromo,
    });
  }

  handleIndoorAfterBuildPromo(event) {
    event.preventDefault();
    console.log(event.target.value);
    const code = event.target.value.toLowerCase();
    const genPromo =
      code.length === 7 &&
      (code.substring(5, 7) === "pt" || code.substring(5, 7) === "fr")
        ? 0.5
        : 1;
    this.setState({
      handleIndoorAfterBuildPromo: genPromo,
    });
  }

  handleIndoorEndTenencyPromo(event) {
    event.preventDefault();
    console.log(event.target.value);
    const code = event.target.value.toLowerCase();
    const genPromo =
      code.length === 7 &&
      (code.substring(5, 7) === "pt" || code.substring(5, 7) === "fr")
        ? 0.5
        : 1;
    this.setState({
      handleIndoorEndTenencyPromo: genPromo,
    });
  }

  handleIndoorSanitisePromo(event) {
    event.preventDefault();
    console.log(event.target.value);
    const code = event.target.value.toLowerCase();
    const genPromo =
      code.length === 7 &&
      (code.substring(5, 7) === "pt" || code.substring(5, 7) === "fr")
        ? 0.5
        : 1;
    this.setState({
      handleIndoorSanitisePromo: genPromo,
    });
  }

  handleSanitiseFreq(event) {
    event.preventDefault();
    this.setState({ handleSanitiseFreq: event.target.value });
  }
  handleEndTenancyFreq(event) {
    event.preventDefault();
    this.setState({ handleEndTenancyFreq: event.target.value });
  }
  handleGenCleaningWeekFreq(event) {
    event.preventDefault();
    this.setState({ handleGenCleaningWeekFreq: event.target.value });
  }
  handleGenCleaningMonthFreq(event) {
    event.preventDefault();
    this.setState({ handleGenCleaningMonthFreq: event.target.value });
  }

  handleAfterBuildersWeekFreq(event) {
    event.preventDefault();
    this.setState({ handleAfterBuildersWeekFreq: event.target.value });
  }
  handleAfterBuildersMonthFreq(event) {
    event.preventDefault();
    this.setState({ handleAfterBuildersMonthFreq: event.target.value });
  }

  /**************Outdoor Services Handling********************/

  showOutdoorServicesInfo(event) {
    this.setState({
      showOutdoorServicesInfo: !this.state.showOutdoorServicesInfo,
    });
  }

  handleDateChangeOutdoor = (date) => {
    this.logs6.shift();
    this.logs6.unshift("" + date);
    this.setState({
      dateTimeOutdoor: date,
      events6: this.logs6.slice(),
    });
  };

  handleOutdoorPropertType(e) {
    //this.logsOutdoorPropType.shift();
    //this.logsOutdoorPropType.unshift("Type : " + e.target.value );
    this.setState({ OutdoorPropertType: "Type : " + e.target.value });
  }

  handleOutdoorPropertKind(e) {
    //this.logsOutdoorPropKind.shift();
    //this.logsOutdoorPropKind.unshift("Kind : " + e.target.value );
    this.setState({ OutdoorPropertKind: "Kind : " + e.target.value });
  }

  handleOutdoorWorkYard(e) {
    //this.logsOutdoorPropKind.shift();
    //this.logsOutdoorPropKind.unshift("Kind : " + e.target.value );
    this.setState({ OutdoorWorkYard: "Area : " + e.target.value + " Yard" });
  }

  handleOutdoorWrokArea;
  /**************************** */
  outdoorYCwholeYard() {
    this.setState({
      outdoorYCwholeYard: !this.state.outdoorYCwholeYard,
      outdoorYC_WYard: "Whole ",
    });
  }
  outdoorYCfrontYard() {
    this.setState({
      outdoorYCfrontYard: !this.state.outdoorYCfrontYard,
      outdoorYC_FYard: "Front ",
    });
  }
  outdoorYCbackYard() {
    this.setState({
      outdoorYCbackYard: !this.state.outdoorYCbackYard,
      outdoorYC_BYard: "Back ",
    });
  }
  outdoorYCsideYard() {
    this.setState({
      outdoorYCsideYard: !this.state.outdoorYCsideYard,
      outdoorYC_SYard: "Side ",
    });
  }

  outdoorLMwholeYard() {
    this.setState({
      outdoorLMwholeYard: !this.state.outdoorLMwholeYard,
      outdoorLM_WYard: "Whole ",
    });
  }
  outdoorLMfrontYard() {
    this.setState({
      outdoorLMfrontYard: !this.state.outdoorLMfrontYard,
      outdoorLM_FYard: "Front ",
    });
  }
  outdoorLMbackYard() {
    this.setState({
      outdoorLMbackYard: !this.state.outdoorLMbackYard,
      outdoorLM_BYard: "Back ",
    });
  }
  outdoorLMsideYard() {
    this.setState({
      outdoorLMsideYard: !this.state.outdoorLMsideYard,
      outdoorLM_SYard: "Side ",
    });
  }

  outdoorFBwholeYard() {
    this.setState({
      outdoorFBwholeYard: !this.state.outdoorFBwholeYard,
      outdoorFB_WYard: "Whole ",
    });
  }
  outdoorFBfrontYard() {
    this.setState({
      outdoorFBfrontYard: !this.state.outdoorFBfrontYard,
      outdoorFB_FYard: "Front ",
    });
  }
  outdoorFBbackYard() {
    this.setState({
      outdoorFBbackYard: !this.state.outdoorFBbackYard,
      outdoorFB_BYard: "Back ",
    });
  }
  outdoorFBsideYard() {
    this.setState({
      outdoorFBsideYard: !this.state.outdoorFBsideYard,
      outdoorFB_SYard: "Side ",
    });
  }

  outdoorDCwholeYard() {
    this.setState({
      outdoorDCwholeYard: !this.state.outdoorDCwholeYard,
      outdoorDC_WYard: "Whole ",
    });
  }
  outdoorDCfrontYard() {
    this.setState({
      outdoorDCfrontYard: !this.state.outdoorDCfrontYard,
      outdoorDC_FYard: "Front ",
    });
  }
  outdoorDCbackYard() {
    this.setState({
      outdoorDCbackYard: !this.state.outdoorDCbackYard,
      outdoorDC_BYard: "Back ",
    });
  }
  outdoorDCsideYard() {
    this.setState({
      outdoorDCsideYard: !this.state.outdoorDCsideYard,
      outdoorDC_SYard: "Side ",
    });
  }
  /**************************** */
  YCoutdoorClean(event) {
    this.setState({
      outdoorYCwholeYard: false,
      outdoorYCfrontYard: false,
      outdoorYCbackYard: false,
      outdoorYCsideYard: false,
      outdoorYConce: false,
      outdoorYCweek: false,
      outdoorYCmonth: false,
      outdoorYConcePrice: 0,
      outdoorYCweekPrice: 0,
      outdoorYCmonthPrice: 0,
      handleYCoutdoorPromo: 1,
      handleoutdoorYCweek: 2,
      handleoutdoorYCmonth: 2,
      handleYCareaL: 0,
      handleYCareaW: 0,
      YCareaPrice: 0,
      YCarea: this.logsYCarea,
      YCoutdoorClean: !this.state.YCoutdoorClean,
      YCoutdoorCleanDisplay: this.state.YCoutdoorClean ? null : "Yard Cleaning",
      YCoutdoorCleanPrice: this.state.YCoutdoorClean ? 0 : 127,
    });
  }

  FBoutdoorClean(event) {
    this.setState({
      outdoorFBwholeYard: false,
      outdoorFBfrontYard: false,
      outdoorFBbackYard: false,
      outdoorFBsideYard: false,
      outdoorFBonce: false,
      outdoorFBweek: false,
      outdoorFBmonth: false,
      outdoorFBoncePrice: 0,
      outdoorFBweekPrice: 0,
      outdoorFBmonthPrice: 0,
      handleFBoutdoorPromo: 1,
      handleoutdoorFBweek: 2,
      handleoutdoorFBmonth: 2,
      handleFBareaL: 0,
      handleFBareaW: 0,
      FBareaPrice: 0,
      FBarea: this.logsFBarea,
      FBoutdoorClean: !this.state.FBoutdoorClean,
      FBoutdoorCleanDisplay: this.state.FBoutdoorClean
        ? null
        : "Flower Bedding",
      FboutdoorCleanPrice: this.state.FBoutdoorClean ? 0 : 130,
    });
  }

  DCoutdoorClean(event) {
    this.setState({
      outdoorDCwholeYard: false,
      outdoorDCfrontYard: false,
      outdoorDCbackYard: false,
      outdoorDCsideYard: false,
      outdoorDConce: false,
      outdoorDCweek: false,
      outdoorDCmonth: false,
      handleDCoutdoorPromo: 1,
      handleoutdoorDCweek: 2,
      handleoutdoorDCmonth: 2,
      handleDCareaL: 0,
      handleDCareaW: 0,
      DCareaPrice: 0,
      DCarea: this.logsDCarea,
      DCoutdoorClean: !this.state.DCoutdoorClean,
      DCoutdoorCleanDisplay: this.state.DCoutdoorClean
        ? null
        : "Driveway Cleaning",
      DCoutdoorCleanPrice: this.state.DCoutdoorClean ? 0 : 177,
    });
  }

  LMoutdoorClean(event) {
    this.setState({
      outdoorLMwholeYard: false,
      outdoorLMfrontYard: false,
      outdoorLMbackYard: false,
      outdoorLMsideYard: false,
      outdoorLMonce: false,
      outdoorLMweek: false,
      outdoorLMmonth: false,
      outdoorLMoncePrice: 0,
      outdoorLMweekPrice: 0,
      outdoorLMmonthPrice: 0,
      handleLMoutdoorPromo: 1,
      handleLMareaL: 0,
      handleLMareaW: 0,
      handleoutdoorLMweek: 2,
      handleoutdoorLMmonth: 2,
      LMareaPrice: 0,
      LMarea: this.logsLMarea,
      LMoutdoorClean: !this.state.LMoutdoorClean,
      LMoutdoorCleanDisplay: this.state.LMoutdoorClean ? null : "Lawn Mowing",
      LMoutdoorCleanPrice: this.state.LMoutdoorClean ? 0 : 137,
    });
  }

  handleYCarea(e) {
    const area = e.target.value;
    this.logsYCarea.shift();
    this.logsYCarea.unshift("Size : " + e.target.value);
    this.setState({
      YCareaPrice:
        area === "0-20 m2"
          ? 100
          : area === "20-75 m2"
          ? 150
          : area === "75-150 m2"
          ? 200
          : area === "150-250 m2"
          ? 250
          : 0,
    });
  }
  handleLMarea(e) {
    const area = e.target.value;
    this.logsLMarea.shift();
    this.logsLMarea.unshift("Size : " + e.target.value);
    this.setState({
      LMareaPrice:
        area === "0-20 m2"
          ? 105
          : area === "20-75 m2"
          ? 155
          : area === "75-150 m2"
          ? 205
          : area === "150-250 m2"
          ? 255
          : 0,
    });
  }
  handleFBarea(e) {
    const area = e.target.value;
    this.logsFBarea.shift();
    this.logsFBarea.unshift("Size : " + e.target.value);
    this.setState({
      FBareaPrice:
        area === "0-20 m2"
          ? 90
          : area === "20-75 m2"
          ? 140
          : area === "75-150 m2"
          ? 190
          : area === "150-250 m2"
          ? 240
          : 0,
    });
  }
  handleDCarea(e) {
    const area = e.target.value;
    this.logsDCarea.shift();
    this.logsDCarea.unshift("Size : " + e.target.value);
    this.setState({
      DCareaPrice:
        area === "0-20 m2"
          ? 80
          : area === "20-75 m2"
          ? 130
          : area === "75-150 m2"
          ? 180
          : area === "150-250 m2"
          ? 230
          : 0,
    });
  }

  outdoorYConce() {
    this.setState({
      handleoutdoorYCweek: 2,
      handleoutdoorYCmonth: 2,
      outdoorYConce: !this.state.outdoorYConce,
      outdoorYConcePrice: this.state.outdoorYConce ? 0 : 1,
    });
  }
  outdoorYCweek() {
    this.setState({
      handleoutdoorYCmonth: 2,
      outdoorYCweek: !this.state.outdoorYCweek,
      outdoorYCweekPrice: this.state.outdoorYCweek ? 0 : 0.9,
    });
  }
  outdoorYCmonth() {
    this.setState({
      handleoutdoorYCweek: 2,
      outdoorYCmonth: !this.state.outdoorYCmonth,
      outdoorYCmonthPrice: this.state.outdoorYCmonth ? 0 : 0.95,
    });
  }

  outdoorLMonce() {
    this.setState({
      handleoutdoorLMweek: 2,
      handleoutdoorLMmonth: 2,
      outdoorLMonce: !this.state.outdoorLMonce,
      outdoorLMoncePrice: this.state.outdoorLMonce ? 0 : 1,
    });
  }
  outdoorLMweek() {
    this.setState({
      handleoutdoorLMmonth: 2,
      outdoorLMweek: !this.state.outdoorLMweek,
      outdoorLMweekPrice: this.state.outdoorLMweek ? 0 : 0.9,
    });
  }
  outdoorLMmonth() {
    this.setState({
      handleoutdoorLMweek: 2,
      outdoorLMmonth: !this.state.outdoorLMmonth,
      outdoorLMmonthPrice: this.state.outdoorLMmonth ? 0 : 0.95,
    });
  }

  outdoorFBonce() {
    this.setState({
      handleoutdoorFBweek: 2,
      handleoutdoorFBmonth: 2,
      outdoorFBonce: !this.state.outdoorFBonce,
      outdoorFBoncePrice: this.state.outdoorFBonce ? 0 : 1,
    });
  }
  outdoorFBweek() {
    this.setState({
      handleoutdoorFBmonth: 2,
      outdoorFBweek: !this.state.outdoorFBweek,
      outdoorFBweekPrice: this.state.outdoorFBweek ? 0 : 0.9,
    });
  }
  outdoorFBmonth() {
    this.setState({
      handleoutdoorFBweek: 2,
      outdoorFBmonth: !this.state.outdoorFBmonth,
      outdoorFBmonthPrice: this.state.outdoorFBmonth ? 0 : 0.95,
    });
  }

  outdoorDConce() {
    this.setState({
      handleoutdoorDCweek: 2,
      handleoutdoorDCmonth: 2,
      outdoorDConce: !this.state.outdoorDConce,
      outdoorDConcePrice: this.state.outdoorDConce ? 0 : 1,
    });
  }
  outdoorDCweek() {
    this.setState({
      handleoutdoorDCmonth: 2,
      outdoorDCweek: !this.state.outdoorDCweek,
      outdoorDCweekPrice: this.state.outdoorDCweek ? 0 : 0.9,
    });
  }
  outdoorDCmonth() {
    this.setState({
      handleoutdoorDCweek: 2,
      outdoorDCmonth: !this.state.outdoorDCmonth,
      outdoorDCmonthPrice: this.state.outdoorDCmonth ? 0 : 0.95,
    });
  }

  selectOutdoor(event) {
    this.setState({
      showPopupOutdoor: !this.state.showPopupOutdoor,
      serviceIntervalOutdoor:
        this.state.outdoorYConce ||
        this.state.outdoorLMonce ||
        this.state.outdoorFBonce ||
        this.state.outdoorDConce
          ? "Once"
          : this.state.outdoorYCweek ||
            this.state.outdoorLMweek ||
            this.state.outdoorFBweek ||
            this.state.outdoorDCweek
          ? "Weekly"
          : this.state.outdoorYCmonth ||
            this.state.outdoorLMmonth ||
            this.state.outdoorFBmonth ||
            this.state.outdoorDCmonth
          ? "Monthly"
          : "Once",
      OutdoorBookedService: this.state.YCoutdoorClean
        ? "Yard Cleaning"
        : this.state.FBoutdoorClean
        ? "Flower Bedding"
        : this.state.DCoutdoorClean
        ? "Driveway Cleaning"
        : this.state.LMoutdoorClean
        ? "Lawn Mowing"
        : "",
      OutdoorYardSize: this.state.YCoutdoorClean
        ? this.state.YCarea
        : this.state.FBoutdoorClean
        ? this.state.FBarea
        : this.state.DCoutdoorClean
        ? this.state.DCarea
        : this.state.LMoutdoorClean
        ? this.state.LMarea
        : "",
    });
  }

  handleYCoutdoorPromo(event) {
    event.preventDefault();
    const code = event.target.value.toLowerCase();
    console.log(code);
    const genPromo =
      code.length === 7 &&
      (code.substring(5, 7) === "pt" || code.substring(5, 7) === "fr")
        ? 0.5
        : 1;
    this.setState({
      handleYCoutdoorPromo: genPromo,
    });
  }

  handleLMoutdoorPromo(event) {
    event.preventDefault();
    const code = event.target.value.toLowerCase();
    const genPromo =
      code.length === 7 &&
      (code.substring(5, 7) === "pt" || code.substring(5, 7) === "fr")
        ? 0.5
        : 1;
    this.setState({
      handleLMoutdoorPromo: genPromo,
    });
  }

  handleFBoutdoorPromo(event) {
    event.preventDefault();
    const code = event.target.value.toLowerCase();
    const genPromo =
      code.length === 7 &&
      (code.substring(5, 7) === "pt" || code.substring(5, 7) === "fr")
        ? 0.5
        : 1;
    this.setState({
      handleFBoutdoorPromo: genPromo,
    });
  }

  handleDCoutdoorPromo(event) {
    event.preventDefault();
    const code = event.target.value.toLowerCase();
    const genPromo =
      code.length === 7 &&
      (code.substring(5, 7) === "pt" || code.substring(5, 7) === "fr")
        ? 0.5
        : 1;
    this.setState({
      handleDCoutdoorPromo: genPromo,
    });
  }

  handleYCareaL(event) {
    event.preventDefault();
    this.setState({ handleYCareaL: event.target.value });
  }
  handleYCareaW(event) {
    event.preventDefault();
    this.setState({ handleYCareaW: event.target.value });
  }
  handleLMareaL(event) {
    event.preventDefault();
    this.setState({ handleLMareaL: event.target.value });
  }
  handleLMareaW(event) {
    event.preventDefault();
    this.setState({ handleLMareaW: event.target.value });
  }
  handleFBareaL(event) {
    event.preventDefault();
    this.setState({ handleFBareaL: event.target.value });
  }
  handleFBareaW(event) {
    event.preventDefault();
    this.setState({ handleFBareaW: event.target.value });
  }
  handleDCareaL(event) {
    event.preventDefault();
    this.setState({ handleDCareaL: event.target.value });
  }
  handleDCareaW(event) {
    event.preventDefault();
    this.setState({ handleDCareaW: event.target.value });
  }

  handleoutdoorYCweek(event) {
    event.preventDefault();
    this.setState({ handleoutdoorYCweek: event.target.value });
  }
  handleoutdoorYCmonth(event) {
    event.preventDefault();
    this.setState({ handleoutdoorYCmonth: event.target.value });
  }
  handleoutdoorLMweek(event) {
    event.preventDefault();
    this.setState({ handleoutdoorLMweek: event.target.value });
  }
  handleoutdoorLMmonth(event) {
    event.preventDefault();
    this.setState({ handleoutdoorLMmonth: event.target.value });
  }
  handleoutdoorFBweek(event) {
    event.preventDefault();
    this.setState({ handleoutdoorFBweek: event.target.value });
  }
  handleoutdoorFBmonth(event) {
    event.preventDefault();
    this.setState({ handleoutdoorFBmonth: event.target.value });
  }
  handleoutdoorDCweek(event) {
    event.preventDefault();
    this.setState({ handleoutdoorDCweek: event.target.value });
  }
  handleoutdoorDCmonth(event) {
    event.preventDefault();
    this.setState({ handleoutdoorDCmonth: event.target.value });
  }
  /**************Pool Services Handling********************/
  selectPool(event) {
    this.setState({
      showPopupPool: !this.state.showPopupPool,
      value: event.target.innerText,
      totalPool: this.state.PoolClean
        ? (250 + (this.state.poolHrs - 1) * 18) *
          (this.state.priceCleanOnce +
            this.state.priceCleanWeek +
            this.state.priceCleanMonth)
        : this.state.PoolMaint
        ? (500 + (this.state.poolHrs - 1) * 18) *
          (this.state.priceMaintMonth +
            this.state.priceMaintQuat +
            this.state.priceMaintYear)
        : 0,
      serviceInterval:
        this.state.priceCleanOnce > 0
          ? "One OFF"
          : this.state.priceCleanWeek > 0
          ? "Weekly"
          : this.state.priceCleanMonth || this.state.priceMaintMonth > 0
          ? "Monthly"
          : this.state.priceMaintQuat > 0
          ? "Quartely"
          : this.state.priceMaintYear > 0
          ? "Yearly"
          : "One OFF",
    });
  }
  genPoolClean(event) {
    this.setState({
      PoolClean: this.state.PoolMaint === true ? false : !this.state.PoolClean,
      handlePoolGenCleaningPromo: 1,
      handlepoolPCweek: 2,
      handlepoolPCmonth: 2,
      poolPConce: false,
      poolPCweek: false,
      poolPCmonth: false,
      PoolCleanService:
        this.state.PoolMaint === true || this.state.PoolClean
          ? null
          : "Pool Cleaning",
      PoolCleanPrice:
        this.state.PoolMaint === true || this.state.PoolClean ? 0 : 177,
    });
  }

  periodMaint(event) {
    this.setState({
      PoolMaint: this.state.PoolClean === true ? false : !this.state.PoolMaint,
      handlePoolMaintanancePromo: 1,
      handlepoolPMmonth: 1,
      handlepoolPMquarter: 1,
      poolPMquarter: false,
      poolPMyear: false,
      poolPMmonth: false,
      PoolMaintService:
        this.state.PoolClean === true || this.state.PoolMaint
          ? null
          : "Pool maintanance",
      PoolMaintPrice:
        this.state.PoolClean === true || this.state.PoolMaint ? 0 : 177,
    });
  }

  handlePoolGenCleaningPromo(event) {
    event.preventDefault();
    console.log(event.target.value);
    const code = event.target.value.toLowerCase();
    const genPromo =
      code.length === 7 &&
      (code.substring(5, 7) === "pt" || code.substring(5, 7) === "fr")
        ? 0.5
        : 1;
    this.setState({
      handlePoolGenCleaningPromo: genPromo,
    });
  }

  handlePoolMaintanancePromo(event) {
    event.preventDefault();
    console.log(event.target.value);
    const code = event.target.value.toLowerCase();
    const genPromo =
      code.length === 7 &&
      (code.substring(5, 7) === "pt" || code.substring(5, 7) === "fr")
        ? 0.5
        : 1;
    this.setState({
      handlePoolMaintanancePromo: genPromo,
    });
  }

  handlePoolShapePCSelect(e) {
    this.logsPoolHours.shift();
    this.logsPoolHours.unshift("Working Hours : " + e.target.value + " hrs");
    this.setState({
      selectValue: e.target.value,
      poolHrs: e.target.value,
      poolShapePCSelect: e.target.value,
    });
  }

  handlePoolShapePMSelect(e) {
    this.logsPoolHours.shift();
    this.logsPoolHours.unshift("Working Hours : " + e.target.value + " hrs");
    this.setState({
      selectValue: e.target.value,
      poolHrs: e.target.value,
      poolShapePMSelect: e.target.value,
    });
  }

  handlePoolRectanglePCvolumeL(event) {
    event.preventDefault();
    this.setState({ handlePoolRectanglePCvolumeL: event.target.value });
  }
  handlePoolRectanglePCvolumeW(event) {
    event.preventDefault();
    this.setState({ handlePoolRectanglePCvolumeW: event.target.value });
  }
  handlePoolRectanglePCvolumeD(event) {
    event.preventDefault();
    this.setState({ handlePoolRectanglePCvolumeD: event.target.value });
  }
  handlePoolRectanglePCvolumeS(event) {
    event.preventDefault();
    this.setState({ handlePoolRectanglePCvolumeS: event.target.value });
  }

  handlePoolCircularPCvolumeR(event) {
    event.preventDefault();
    this.setState({ handlePoolCircularPCvolumeR: event.target.value });
  }
  handlePoolCircularPCvolumeD(event) {
    event.preventDefault();
    this.setState({ handlePoolCircularPCvolumeD: event.target.value });
  }
  handlePoolCircularPCvolumeS(event) {
    event.preventDefault();
    this.setState({ handlePoolCircularPCvolumeS: event.target.value });
  }

  handlePoolTrianglePCvolumeB(event) {
    event.preventDefault();
    this.setState({ handlePoolTrianglePCvolumeB: event.target.value });
  }
  handlePoolTrianglePCvolumeH(event) {
    event.preventDefault();
    this.setState({ handlePoolTrianglePCvolumeH: event.target.value });
  }
  handlePoolTrianglePCvolumeD(event) {
    event.preventDefault();
    this.setState({ handlePoolTrianglePCvolumeD: event.target.value });
  }
  handlePoolTrianglePCvolumeS(event) {
    event.preventDefault();
    this.setState({ handlePoolTrianglePCvolumeS: event.target.value });
  }

  handlePoolIrregularPCvolumeL(event) {
    event.preventDefault();
    this.setState({ handlePoolIrregularPCvolumeL: event.target.value });
  }
  handlePoolIrregularPCvolumeA(event) {
    event.preventDefault();
    this.setState({ handlePoolIrregularPCvolumeA: event.target.value });
  }
  handlePoolIrregularPCvolumeB(event) {
    event.preventDefault();
    this.setState({ handlePoolIrregularPCvolumeB: event.target.value });
  }
  handlePoolIrregularPCvolumeD(event) {
    event.preventDefault();
    this.setState({ handlePoolIrregularPCvolumeD: event.target.value });
  }
  handlePoolIrregularPCvolumeS(event) {
    event.preventDefault();
    this.setState({ handlePoolIrregularPCvolumeS: event.target.value });
  }

  handlePoolRectanglePMvolumeL(event) {
    event.preventDefault();
    this.setState({ handlePoolRectanglePMvolumeL: event.target.value });
  }
  handlePoolRectanglePMvolumeW(event) {
    event.preventDefault();
    this.setState({ handlePoolRectanglePMvolumeW: event.target.value });
  }
  handlePoolRectanglePMvolumeD(event) {
    event.preventDefault();
    this.setState({ handlePoolRectanglePMvolumeD: event.target.value });
  }
  handlePoolRectanglePMvolumeS(event) {
    event.preventDefault();
    this.setState({ handlePoolRectanglePMvolumeS: event.target.value });
  }

  handlePoolCircularPMvolumeR(event) {
    event.preventDefault();
    this.setState({ handlePoolCircularPMvolumeR: event.target.value });
  }
  handlePoolCircularPMvolumeD(event) {
    event.preventDefault();
    this.setState({ handlePoolCircularPMvolumeD: event.target.value });
  }
  handlePoolCircularPMvolumeS(event) {
    event.preventDefault();
    this.setState({ handlePoolCircularPMvolumeS: event.target.value });
  }

  handlePoolTrianglePMvolumeB(event) {
    event.preventDefault();
    this.setState({ handlePoolTrianglePMvolumeB: event.target.value });
  }
  handlePoolTrianglePMvolumeH(event) {
    event.preventDefault();
    this.setState({ handlePoolTrianglePMvolumeH: event.target.value });
  }
  handlePoolTrianglePMvolumeD(event) {
    event.preventDefault();
    this.setState({ handlePoolTrianglePMvolumeD: event.target.value });
  }
  handlePoolTrianglePMvolumeS(event) {
    event.preventDefault();
    this.setState({ handlePoolTrianglePMvolumeS: event.target.value });
  }

  handlePoolIrregularPMvolumeL(event) {
    event.preventDefault();
    this.setState({ handlePoolIrregularPMvolumeL: event.target.value });
  }
  handlePoolIrregularPMvolumeA(event) {
    event.preventDefault();
    this.setState({ handlePoolIrregularPMvolumeA: event.target.value });
  }
  handlePoolIrregularPMvolumeB(event) {
    event.preventDefault();
    this.setState({ handlePoolIrregularPMvolumeB: event.target.value });
  }
  handlePoolIrregularPMvolumeD(event) {
    event.preventDefault();
    this.setState({ handlePoolIrregularPMvolumeD: event.target.value });
  }
  handlePoolIrregularPMvolumeS(event) {
    event.preventDefault();
    this.setState({ handlePoolIrregularPMvolumeS: event.target.value });
  }

  poolPMmonth() {
    this.setState({
      poolPMmonth: !this.state.poolPMmonth,
      poolPMmonthPrice: this.state.poolPMmonth ? 0 : 0.9,
    });
  }
  poolPMquarter() {
    this.setState({
      poolPMquarter: !this.state.poolPMquarter,
      poolPMquarterPrice: this.state.poolPMquarter ? 0 : 0.95,
    });
  }
  poolPMyear() {
    this.setState({
      poolPMyear: !this.state.poolPMyear,
      poolPMyearPrice: this.state.poolPMyear ? 0 : 1,
    });
  }

  poolPConce() {
    this.setState({
      handlepoolPCweek: 1,
      handlepoolPCmonth: 1,
      poolPConce: !this.state.poolPConce,
      poolPConcePrice: this.state.poolPConce ? 0 : 1,
    });
  }
  poolPCweek() {
    this.setState({
      handlepoolPCmonth: 1,
      poolPCweek: !this.state.poolPCweek,
      poolPCweekPrice: this.state.poolPCweek ? 0 : 0.9,
    });
  }
  poolPCmonth() {
    this.setState({
      handlepoolPCweek: 1,
      poolPCmonth: !this.state.poolPCmonth,
      poolPCmonthPrice: this.state.poolPCmonth ? 0 : 0.95,
    });
  }

  poolPCgreenAlgae() {
    this.setState({
      poolPCgreenAlgae: !this.state.poolPCgreenAlgae,
      poolPCgreenAlgaePrice: this.state.poolPCgreenAlgae ? 0 : 1,
    });
  }
  poolPCmustardAlgae() {
    this.setState({
      poolPCmustardAlgae: !this.state.poolPCmustardAlgae,
      poolPCmustardAlgaePrice: this.state.poolPCmustardAlgae ? 0 : 0.9,
    });
  }
  poolPCblackAlgae() {
    this.setState({
      poolPCblackAlgae: !this.state.poolPCblackAlgae,
      poolPCblackAlgaePrice: this.state.poolPCblackAlgae ? 0 : 0.95,
    });
  }

  poolPMgreenAlgae() {
    this.setState({
      poolPMgreenAlgae: !this.state.poolPMgreenAlgae,
      poolPMgreenAlgaePrice: this.state.poolPMgreenAlgae ? 0 : 1,
    });
  }
  poolPMmustardAlgae() {
    this.setState({
      poolPMmustardAlgae: !this.state.poolPMmustardAlgae,
      poolPMmustardAlgaePrice: this.state.poolPMmustardAlgae ? 0 : 0.9,
    });
  }
  poolPMblackAlgae() {
    this.setState({
      poolPMblackAlgae: !this.state.poolPMblackAlgae,
      poolPMblackAlgaePrice: this.state.poolPMblackAlgae ? 0 : 0.95,
    });
  }

  poolPCcloudy() {
    this.setState({
      poolPCcloudy: !this.state.poolPCcloudy,
      poolPcloudyPrice: this.state.poolPCcloudy ? 0 : 0.9,
    });
  }
  poolPMcloudy() {
    this.setState({
      poolPMcloudy: !this.state.poolPMcloudy,
      poolPMcloudyPrice: this.state.poolPMcloudy ? 0 : 0.95,
    });
  }

  handlepoolPCweek(event) {
    event.preventDefault();
    this.setState({ handlepoolPCweek: event.target.value });
  }
  handlepoolPCmonth(event) {
    event.preventDefault();
    this.setState({ handlepoolPCmonth: event.target.value });
  }

  handlepoolPMmonth(event) {
    event.preventDefault();
    this.setState({ handlepoolPMmonth: event.target.value });
  }
  handlepoolPMquarter(event) {
    event.preventDefault();
    this.setState({ handlepoolPMquarter: event.target.value });
  }

  showPoolServicesInfo(event) {
    this.setState({ showPoolServicesInfo: !this.state.showPoolServicesInfo });
  }
  showPoolShapes(event) {
    this.setState({ showPoolShapes: !this.state.showPoolShapes });
  }
  perPoolRepair(event) {
    this.setState({ PoolRepair: !this.state.PoolRepair });
  }

  handleChange = (event) => {
    //destructure off of the event
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChange2 = (date) => {
    this.logs4.shift();
    this.logs4.unshift("" + date);
    this.setState({
      dateTime: date,
      events4: this.logs4.slice(),
    });
  };

  handleChangePool = (date) => {
    this.poolTimes.shift();
    this.poolTimes.unshift("" + date);
    this.setState({
      dateTimePool: date,
      PoolTime: this.poolTimes.slice(),
    });
  };

  onLocationChange = (option) => {
    this.setState({ value: option });
  };

  handlePoolAlgae(e) {
    this.setState({
      poolAlgaePrice:
        e.target.value === "Green"
          ? 1.5
          : e.target.value === "Mustard"
          ? 1.75
          : e.target.value === "Black"
          ? 2
          : 1,
    });
  }

  handlePoolissues(e) {
    this.setState({
      poolCloudyPrice: e.target.value === "Cloudy" ? 1.25 : 1,
    });
  }

  render() {
    const total =
      150 +
      this.state.bedPrice +
      this.state.bathPrice +
      this.state.price +
      this.state.price2 +
      this.state.price3 +
      this.state.price4 +
      this.state.price5 +
      this.state.price6 +
      this.state.priceDetergent;

    //const totalClean = this.state.PoolClean ? (250 + (this.state.poolHrs - 1)*18)*(this.state.priceCleanOnce + this.state.priceCleanWeek + this.state.priceCleanMonth) : 0;//             this.state.poolHrs * (this.state.PoolCleanPrice + this.state.PoolMaintPrice);
    //const totalMaint = this.state.PoolMaint ? (500 + (this.state.poolHrs - 1)*18)*(this.state.priceMaintMonth + this.state.priceMaintQuat + this.state.priceMaintYear) : 0;//             this.state.poolHrs * (this.state.PoolCleanPrice + this.state.PoolMaintPrice);
    //const totalPool = totalClean + totalMaint;

    const x = "" + this.state.dateTime;
    const y = "" + this.state.dateTimeOutdoor;
    const poolTime = "" + this.state.dateTimePool;

    /*const maintMonthStatus = this.state.maintYear || this.state.maintQuat ? true : false;
const maintQuatStatus = this.state.maintMonth || this.state.maintYear ? true : false;
const maintYearStatus = this.state.maintMonth || this.state.maintQuat ? true : false;*/

    /***************************Indoor******************************** */
    /*const cleanOnceStatus = this.state.cleanMonth || this.state.cleanWeek ? true : false;
const cleanWeekStatus = this.state.cleanOnceOFF || this.state.cleanMonth ? true : false;
const cleanMonthStatus = this.state.cleanOnceOFF || this.state.cleanWeek ? true : false;*/

    const genIndoorCleanOnceStatus =
      this.state.genIndoorCleanMonth || this.state.genIndoorCleanWeek
        ? true
        : false;
    const genIndoorCleanWeekStatus =
      this.state.genIndoorCleanOnce || this.state.genIndoorCleanMonth
        ? true
        : false;
    const genIndoorCleanMonthStatus =
      this.state.genIndoorCleanOnce || this.state.genIndoorCleanWeek
        ? true
        : false;
    const afterBuildOnceStatus =
      this.state.afterBuildCleanWeek || this.state.afterBuildCleanMonth
        ? true
        : false;
    const afterBuildWeekStatus =
      this.state.afterBuildCleanOnce || this.state.afterBuildCleanMonth
        ? true
        : false;
    const afterBuildMonthStatus =
      this.state.afterBuildCleanOnce || this.state.afterBuildCleanWeek
        ? true
        : false;
    const sanitiseOnceStatus = this.state.sanitiseIndoorMonth ? true : false;
    const sanitiseMonthStatus = this.state.sanitiseIndoorOnceOFF ? true : false;
    const endTenancyOnceStatus = this.state.endTenancyCleanMonth ? true : false;
    const endTenancyMonthStatus = this.state.endTenancyCleanOnce ? true : false;

    const CouchesStatus =
      this.state.IndoorCarpets ||
      this.state.IndoorMattress ||
      this.state.IndoorRugs ||
      this.state.IndoorChairs
        ? true
        : false;
    const CarpetsStatus =
      this.state.IndoorCouches ||
      this.state.IndoorMattress ||
      this.state.IndoorRugs ||
      this.state.IndoorChairs
        ? true
        : false;
    const MattressStatus =
      this.state.IndoorCouches ||
      this.state.IndoorCarpets ||
      this.state.IndoorRugs ||
      this.state.IndoorChairs
        ? true
        : false;
    const RugsStatus =
      this.state.IndoorCouches ||
      this.state.IndoorCarpets ||
      this.state.IndoorMattress ||
      this.state.IndoorChairs
        ? true
        : false;
    const ChairsStatus =
      this.state.IndoorCouches ||
      this.state.IndoorCarpets ||
      this.state.IndoorMattress ||
      this.state.IndoorRugs
        ? true
        : false;

    var option = this.state.handleCouches_Carpets;
    var sizeCarpets =
      this.state.IndoorCarpetsBedrooms && !this.state.IndoorCarpetsBigBedrooms
        ? this.state.smCarpets
        : !this.state.IndoorCarpetsBedrooms &&
          this.state.IndoorCarpetsBigBedrooms
        ? this.state.bgCarpets
        : this.state.IndoorCarpetsBedrooms &&
          this.state.IndoorCarpetsBigBedrooms
        ? this.state.smCarpets + " & " + this.state.bgCarpets
        : "";
    var tes =
      this.state.IndoorCarpetsLounge &&
      (this.state.IndoorCarpetsBedrooms || this.state.IndoorCarpetsBigBedrooms)
        ? this.state.lngCarpets + " & " + sizeCarpets
        : !this.state.IndoorCarpetsLounge
        ? sizeCarpets
        : this.state.IndoorCarpetsLounge &&
          (!this.state.IndoorCarpetsBedrooms ||
            !this.state.IndoorCarpetsBigBedrooms)
        ? this.state.lngCarpets
        : "";
    //var size = this.state.handleCouches_Carpets == "Couches" ? this.state.handleCouches : this.state.handleCouches_Carpets == "Carpets" ? tes : "";//this.state.IndoorMattress ? this.state.handleMattress : this.state.IndoorRugs ? this.state.handleRugs : this.state.IndoorChairs ? this.state.handleChairs : this.state.IndoorCarpetsBedrooms && !this.state.IndoorCarpetsLounge? "Bedrooms" : this.state.IndoorCarpetsLounge && !this.state.IndoorCarpetsBedrooms? "Lounge" : (this.state.IndoorCarpetsBedrooms && this.state.IndoorCarpetsLounge) ? "Bedrooms & Lounge" : "";
    //option = option + " - " + size;
    var size =
      this.state.handleCouches_Carpets == "Couches"
        ? this.state.handleCouches
        : this.state.handleCouches_Carpets == "Carpets"
        ? this.state.smCarpets
        : this.state.handleCouches_Carpets == "Mattress"
        ? this.state.snglMattress
        : this.state.handleCouches_Carpets == "Rugs"
        ? this.state.smRugs
        : this.state.handleCouches_Carpets == "Chairs"
        ? this.state.diningChairs
        : "";
    var size2 =
      this.state.handleCouches_Carpets == "Carpets"
        ? this.state.bgCarpets
        : this.state.handleCouches_Carpets == "Mattress"
        ? this.state.dbleMattress
        : this.state.handleCouches_Carpets == "Rugs"
        ? this.state.mdRugs
        : this.state.handleCouches_Carpets == "Chairs"
        ? this.state.officeChairs
        : "";
    var size3 =
      this.state.handleCouches_Carpets == "Carpets"
        ? this.state.lngCarpets
        : this.state.handleCouches_Carpets == "Mattress"
        ? this.state.lgrMattress
        : this.state.handleCouches_Carpets == "Rugs"
        ? this.state.lgRugs
        : "";

    //const priceCarpets =
    //this.state.smCarpetsPrice +
    //this.state.bgCarpetsPrice +
    //this.state.lngCarpetsPrice;

    var priceSMbed = this.state.IndoorCarpetsBedrooms
      ? this.state.smCarpetsPrice
      : 0;
    var priceBGbed = this.state.IndoorCarpetsBigBedrooms
      ? this.state.bgCarpetsPrice
      : 0;
    var priceLNG = this.state.IndoorCarpetsLounge
      ? this.state.lngCarpetsPrice
      : 0;

    var priceCarpets = priceSMbed + priceBGbed + priceLNG;
    const priceMattress =
      this.state.snglMattressPrice +
      this.state.dbleMattressPrice +
      this.state.lgrMattressPrice;
    const priceRugs =
      this.state.smRugsPrice + this.state.mdRugsPrice + this.state.lgRugsPrice;
    const priceChairs =
      this.state.diningChairsPrice + this.state.officeChairsPrice;

    const gIN_Walls = this.state.genIndoorCleanWalls
      ? this.state.genIndoorCleanWallsService
      : "";
    const gIN_Windows = this.state.genIndoorCleanWindows
      ? this.state.genIndoorCleanWindowsService
      : "";
    const gIN_Oven = this.state.genIndoorCleanLaundry
      ? this.state.genIndoorCleanLaundryService
      : "";
    const gIN_Extra = gIN_Walls + gIN_Windows + gIN_Oven;

    const afIN_Walls = this.state.afterBuildIndoorCleanWalls
      ? this.state.afterBuildIndoorCleanWallsService
      : "";
    const afIN_Windows = this.state.afterBuildIndoorCleanWindows
      ? this.state.afterBuildIndoorCleanWindowsService
      : "";

    const afIN_Oven = this.state.afterBuildIndoorCleanOven
      ? this.state.afterBuildIndoorCleanOvenService
      : "";
    const afIN_Extra = afIN_Walls + afIN_Windows + afIN_Oven;

    const etIN_Walls = this.state.endTenancyIndoorCleanWalls
      ? this.state.endTenancyIndoorCleanWallsService
      : "";
    const etIN_Windows = this.state.endTenancyIndoorCleanWindows
      ? this.state.endTenancyIndoorCleanWindowsService
      : "";
    const etIN_Extra = etIN_Walls + etIN_Windows;

    const extrasIN =
      gIN_Extra !== "" &&
      (this.state.genIndoorCleanWallsService ||
        this.state.genIndoorCleanWindowsService ||
        this.state.genIndoorCleanLaundryService)
        ? gIN_Extra
        : afIN_Extra !== "" &&
          (this.state.afterBuildIndoorCleanWallsService ||
            this.state.afterBuildIndoorCleanWindowsService ||
            this.state.afterBuildIndoorCleanOvenService)
        ? afIN_Extra
        : etIN_Extra !== "" &&
          (this.state.endTenancyIndoorCleanWallsService ||
            this.state.endTenancyIndoorCleanWindowsService)
        ? etIN_Extra
        : "";

    const SanitiseFreqMultiplier = this.state.sanitiseIndoorMonth
      ? this.state.handleSanitiseFreq
      : 1;
    const EndTenancyFreqMultiplier = this.state.endTenancyCleanMonth
      ? this.state.handleEndTenancyFreq
      : 1;
    const GenCleanFreqMultiplier = this.state.genIndoorCleanWeek
      ? this.state.handleGenCleaningWeekFreq
      : this.state.genIndoorCleanMonth
      ? this.state.handleGenCleaningMonthFreq
      : 1;
    const AfterBuildersFreqMultiplier = this.state.afterBuildCleanWeek
      ? this.state.handleAfterBuildersWeekFreq
      : this.state.afterBuildCleanMonth
      ? this.state.handleAfterBuildersMonthFreq
      : 1;

    const totalGenIndoorClean =
      this.state.genIndoorCleanOnce ||
      this.state.genIndoorCleanWeek ||
      this.state.genIndoorCleanMonth
        ? (150 +
            this.state.bedPrice +
            this.state.bathPrice +
            this.state.priceGenIndoorCleanWalls +
            this.state.priceGenIndoorCleanWindows +
            this.state.priceGenIndoorCleanLaundry +
            this.state.priceGenIndoorDetergents) *
          (this.state.priceGenIndoorCleanOnce +
            this.state.priceGenIndoorCleanWeek +
            this.state.priceGenIndoorCleanMonth) *
          this.state.handleIndoorGenPromo *
          GenCleanFreqMultiplier
        : 0;
    const totalAfterBuildIndoorClean =
      this.state.afterBuildCleanOnce ||
      this.state.afterBuildCleanWeek ||
      this.state.afterBuildCleanMonth
        ? (180 +
            this.state.bedPrice +
            this.state.bathPrice +
            this.state.priceAfterBuildIndoorCleanWalls +
            this.state.priceAfterBuildIndoorCleanWindows +
            this.state.priceAfterBuildIndoorCleanOven +
            this.state.priceAfterBuilderDetergents) *
          (this.state.priceABcleanOnce +
            this.state.priceABcleanWeek +
            this.state.priceABcleanMonth) *
          this.state.handleIndoorAfterBuildPromo *
          AfterBuildersFreqMultiplier
        : 0;
    const totalEndTenancyIndoorClean =
      this.state.endTenancyCleanOnce || this.state.endTenancyCleanMonth
        ? (180 +
            this.state.bedPrice +
            this.state.bathPrice +
            this.state.priceEndTenancyIndoorCleanWalls +
            this.state.priceEndTenancyIndoorCleanWindows +
            this.state.priceEndTenancyDetergents) *
          (this.state.priceETcleanOnce + this.state.priceETcleanMonth) *
          this.state.handleIndoorEndTenencyPromo *
          EndTenancyFreqMultiplier
        : 0;
    const totalSanitiseIndoor =
      this.state.handleCouches_Carpets == "Couches"
        ? this.state.priceCouches
        : this.state.handleCouches_Carpets == "Carpets"
        ? priceCarpets
        : this.state.handleCouches_Carpets == "Mattress"
        ? priceMattress
        : this.state.handleCouches_Carpets == "Rugs"
        ? priceRugs
        : this.state.handleCouches_Carpets == "Chairs"
        ? priceChairs
        : 0; //this.state.sanitiseIndoorOnceOFF || this.state.sanitiseIndoorMonth? (230 + this.state.bedPrice + this.state.bathPrice) * (this.state.priceSanitiseIndoorOnceOFF + this.state.priceSanitiseIndoorMonth) * (this.state.priceSanitiseIndoorOnceOFF + this.state.priceSanitiseIndoorMonth) * this.state.handleIndoorSanitisePromo * SanitiseFreqMultiplier : 0;

    //Calculating total amounts for indoor options
    const totalIndoor = this.state.IndoorGenClean
      ? 1.2 * totalGenIndoorClean
      : this.state.IndoorAfterBuildClean
      ? 1.4 * totalAfterBuildIndoorClean
      : this.state.IndoorEndTenancyClean
      ? 2.1 * totalEndTenancyIndoorClean
      : this.state.IndoorSanitise
      ? totalSanitiseIndoor
      : 0;
    /********************Outdoor*****************/

    const outDoorServiceRequired = this.state.YCoutdoorCleanDisplay
      ? this.state.YCoutdoorCleanDisplay
      : this.state.LMoutdoorCleanDisplay
      ? this.state.LMoutdoorCleanDisplay
      : this.state.FBoutdoorCleanDisplay
      ? this.state.FBoutdoorCleanDisplay
      : this.state.DCoutdoorCleanDisplay
      ? this.state.DCoutdoorCleanDisplay
      : "";

    const YCw_yard = this.state.outdoorYCwholeYard
      ? this.state.outdoorYC_WYard
      : "";
    const YCf_yard = this.state.outdoorYCfrontYard
      ? this.state.outdoorYC_FYard
      : "";
    const YCb_yard = this.state.outdoorYCbackYard
      ? this.state.outdoorYC_BYard
      : "";
    const YCs_yard = this.state.outdoorYCsideYard
      ? this.state.outdoorYC_SYard
      : "";
    const YC_yard_Status = YCw_yard + YCf_yard + YCb_yard + YCs_yard;

    const LMw_yard = this.state.outdoorLMwholeYard
      ? this.state.outdoorLM_WYard
      : "";
    const LMf_yard = this.state.outdoorLMfrontYard
      ? this.state.outdoorLM_FYard
      : "";
    const LMb_yard = this.state.outdoorLMbackYard
      ? this.state.outdoorLM_BYard
      : "";
    const LMs_yard = this.state.outdoorLMsideYard
      ? this.state.outdoorLM_SYard
      : "";
    const LM_yard_Status = LMw_yard + LMf_yard + LMb_yard + LMs_yard;

    const FBw_yard = this.state.outdoorFBwholeYard
      ? this.state.outdoorFB_WYard
      : "";
    const FBf_yard = this.state.outdoorFBfrontYard
      ? this.state.outdoorFB_FYard
      : "";
    const FBb_yard = this.state.outdoorFBbackYard
      ? this.state.outdoorFB_BYard
      : "";
    const FBs_yard = this.state.outdoorFBsideYard
      ? this.state.outdoorFB_SYard
      : "";
    const FB_yard_Status = FBw_yard + FBf_yard + FBb_yard + FBs_yard;

    const DCw_yard = this.state.outdoorDCwholeYard
      ? this.state.outdoorDC_WYard
      : "";
    const DCf_yard = this.state.outdoorDCfrontYard
      ? this.state.outdoorDC_FYard
      : "";
    const DCb_yard = this.state.outdoorDCbackYard
      ? this.state.outdoorDC_BYard
      : "";
    const DCs_yard = this.state.outdoorDCsideYard
      ? this.state.outdoorDC_SYard
      : "";
    const DC_yard_Status = DCw_yard + DCf_yard + DCb_yard + DCs_yard;

    const workYard =
      YC_yard_Status !== "" &&
      (this.state.outdoorYC_WYard ||
        this.state.outdoorYC_FYard ||
        this.state.outdoorYC_BYard ||
        this.state.outdoorYC_SYard)
        ? YC_yard_Status
        : LM_yard_Status !== "" &&
          (this.state.outdoorLM_WYard ||
            this.state.outdoorLM_FYard ||
            this.state.outdoorLM_BYard ||
            this.state.outdoorLM_SYard)
        ? LM_yard_Status
        : FB_yard_Status !== "" &&
          (this.state.outdoorFB_WYard ||
            this.state.outdoorFB_FYard ||
            this.state.outdoorFB_BYard ||
            this.state.outdoorFB_SYard)
        ? FB_yard_Status
        : DC_yard_Status !== "" &&
          (this.state.outdoorDC_WYard ||
            this.state.outdoorDC_FYard ||
            this.state.outdoorDC_BYard ||
            this.state.outdoorDC_SYard)
        ? DC_yard_Status
        : "";
    /*********** */
    const outdoorYConceStatus =
      this.state.outdoorYCweek || this.state.outdoorYCmonth ? true : false;
    const outdoorYCweekStatus =
      this.state.outdoorYConce || this.state.outdoorYCmonth ? true : false;
    const outdoorYCmonthStatus =
      this.state.outdoorYCweek || this.state.outdoorYConce ? true : false;
    const outdoorLMonceStatus =
      this.state.outdoorLMweek || this.state.outdoorLMmonth ? true : false;
    const outdoorLMweekStatus =
      this.state.outdoorLMonce || this.state.outdoorLMmonth ? true : false;
    const outdoorLMmonthStatus =
      this.state.outdoorLMweek || this.state.outdoorLMonce ? true : false;
    const outdoorFBonceStatus =
      this.state.outdoorFBweek || this.state.outdoorFBmonth ? true : false;
    const outdoorFBweekStatus =
      this.state.outdoorFBonce || this.state.outdoorFBmonth ? true : false;
    const outdoorFBmonthStatus =
      this.state.outdoorFBweek || this.state.outdoorFBonce ? true : false;
    const outdoorDConceStatus =
      this.state.outdoorDCweek || this.state.outdoorDCmonth ? true : false;
    const outdoorDCweekStatus =
      this.state.outdoorDConce || this.state.outdoorDCmonth ? true : false;
    const outdoorDCmonthStatus =
      this.state.outdoorDCweek || this.state.outdoorDConce ? true : false;

    const YCfreqMultiplier = this.state.outdoorYCweek
      ? this.state.handleoutdoorYCweek
      : this.state.outdoorYCmonth
      ? this.state.handleoutdoorYCmonth
      : 1;
    const LMfreqMultiplier = this.state.outdoorLMweek
      ? this.state.handleoutdoorLMweek
      : this.state.outdoorLMmonth
      ? this.state.handleoutdoorLMmonth
      : 1;
    const FBfreqMultiplier = this.state.outdoorFBweek
      ? this.state.handleoutdoorFBweek
      : this.state.outdoorFBmonth
      ? this.state.handleoutdoorFBmonth
      : 1;
    const DCfreqMultiplier = this.state.outdoorDCweek
      ? this.state.handleoutdoorDCweek
      : this.state.outdoorDCmonth
      ? this.state.handleoutdoorDCmonth
      : 1;

    const OutdoorAreaLW = this.state.YCoutdoorClean
      ? this.state.handleYCareaL * this.state.handleYCareaW
      : this.state.LMoutdoorClean
      ? this.state.handleLMareaL * this.state.handleLMareaW
      : this.state.FBoutdoorClean
      ? this.state.handleFBareaL * this.state.handleFBareaW
      : this.state.DCoutdoorClean
      ? this.state.handleDCareaL * this.state.handleDCareaW
      : 0;

    var OutdoorDistancePricing =
      this.state.outdoorLocDistance > 0 && this.state.outdoorLocDistance > 30
        ? this.state.outdoorLocDistance - 30
        : 0;
    OutdoorDistancePricing = OutdoorDistancePricing * 2;
    const PriceAreaLW =
      OutdoorAreaLW > 0 && OutdoorAreaLW <= 20
        ? 100
        : OutdoorAreaLW > 20 && OutdoorAreaLW <= 75
        ? 150
        : OutdoorAreaLW > 75 && OutdoorAreaLW <= 150
        ? 200
        : OutdoorAreaLW > 150 && OutdoorAreaLW <= 250
        ? 250
        : 0;
    const testYC =
      this.state.YCarea[0] === undefined || this.state.YCarea[0] === "Area : 0"
        ? PriceAreaLW
        : this.state.YCareaPrice;
    const testLM =
      this.state.LMarea[0] === undefined || this.state.LMarea[0] === "Area : 0"
        ? PriceAreaLW
        : this.state.LMareaPrice;
    const testFB =
      this.state.FBarea[0] === undefined || this.state.FBarea[0] === "Area : 0"
        ? PriceAreaLW
        : this.state.FBareaPrice;
    const testDC =
      this.state.DCarea[0] === undefined || this.state.DCarea[0] === "Area : 0"
        ? PriceAreaLW
        : this.state.DCareaPrice;

    const totalYC =
      this.state.outdoorYConce ||
      this.state.outdoorYCweek ||
      this.state.outdoorYCmonth
        ? (150 +
            OutdoorDistancePricing +
            testYC *
              (this.state.outdoorYConcePrice +
                this.state.outdoorYCweekPrice +
                this.state.outdoorYCmonthPrice)) *
          this.state.handleYCoutdoorPromo *
          YCfreqMultiplier
        : 0;
    const totalLM =
      this.state.outdoorLMonce ||
      this.state.outdoorLMweek ||
      this.state.outdoorLMmonth
        ? (150 +
            OutdoorDistancePricing +
            testLM *
              (this.state.outdoorLMoncePrice +
                this.state.outdoorLMweekPrice +
                this.state.outdoorLMmonthPrice)) *
          this.state.handleLMoutdoorPromo *
          LMfreqMultiplier
        : 0;
    const totalFB =
      this.state.outdoorFBonce ||
      this.state.outdoorFBweek ||
      this.state.outdoorFBmonth
        ? (150 +
            OutdoorDistancePricing +
            testFB *
              (this.state.outdoorFBoncePrice +
                this.state.outdoorFBweekPrice +
                this.state.outdoorFBmonthPrice)) *
          this.state.handleFBoutdoorPromo *
          FBfreqMultiplier
        : 0;
    const totalDC =
      this.state.outdoorDConce ||
      this.state.outdoorDCweek ||
      this.state.outdoorDCmonth
        ? (150 +
            OutdoorDistancePricing +
            testDC *
              (this.state.outdoorDConcePrice +
                this.state.outdoorDCweekPrice +
                this.state.outdoorDCmonthPrice)) *
          this.state.handleDCoutdoorPromo *
          DCfreqMultiplier
        : 0;
    const totalOutdoor = this.state.YCoutdoorClean
      ? totalYC
      : 0 + this.state.LMoutdoorClean * 1.2
      ? totalLM
      : 0 + this.state.FBoutdoorClean * 1.2
      ? totalFB
      : 0 + this.state.DCoutdoorClean * 1.2
      ? totalDC
      : 0;

    /******************Pool***************/

    const poolPCvolume =
      this.state.poolShapePCSelect === "0" ||
      this.state.poolShapePCSelect === "1"
        ? (this.state.handlePoolRectanglePCvolumeL *
            this.state.handlePoolRectanglePCvolumeW *
            (this.state.handlePoolRectanglePCvolumeD * 1 +
              this.state.handlePoolRectanglePCvolumeS * 1)) /
          2
        : this.state.poolShapePCSelect === "2"
        ? (3.1416 *
            Math.pow(this.state.handlePoolCircularPCvolumeR, 2) *
            (this.state.handlePoolCircularPCvolumeD * 1 +
              this.state.handlePoolCircularPCvolumeS * 1)) /
          2
        : this.state.poolShapePCSelect === "3"
        ? ((this.state.handlePoolTrianglePCvolumeB / 2) *
            this.state.handlePoolTrianglePCvolumeH *
            (this.state.handlePoolTrianglePCvolumeD * 1 +
              this.state.handlePoolTrianglePCvolumeS * 1)) /
          2
        : this.state.poolShapePCSelect === "4"
        ? (0.45 *
            (this.state.handlePoolIrregularPCvolumeA * 1 +
              this.state.handlePoolIrregularPCvolumeB * 1) *
            this.state.handlePoolIrregularPCvolumeL *
            (this.state.handlePoolIrregularPCvolumeD * 1 +
              this.state.handlePoolIrregularPCvolumeS * 1)) /
          2
        : 0;

    const poolPMvolume =
      this.state.poolShapePMSelect === "0" ||
      this.state.poolShapePMSelect === "1"
        ? (this.state.handlePoolRectanglePMvolumeL *
            this.state.handlePoolRectanglePMvolumeW *
            (this.state.handlePoolRectanglePMvolumeD * 1 +
              this.state.handlePoolRectanglePMvolumeS * 1)) /
          2
        : this.state.poolShapePMSelect === "2"
        ? (3.1416 *
            Math.pow(this.state.handlePoolCircularPMvolumeR, 2) *
            (this.state.handlePoolCircularPMvolumeD * 1 +
              this.state.handlePoolCircularPMvolumeS * 1)) /
          2
        : this.state.poolShapePMSelect === "3"
        ? ((this.state.handlePoolTrianglePMvolumeB / 2) *
            this.state.handlePoolTrianglePMvolumeH *
            (this.state.handlePoolTrianglePMvolumeD * 1 +
              this.state.handlePoolTrianglePMvolumeS * 1)) /
          2
        : this.state.poolShapePMSelect === "4"
        ? (0.45 *
            (this.state.handlePoolIrregularPMvolumeA * 1 +
              this.state.handlePoolIrregularPMvolumeB * 1) *
            this.state.handlePoolIrregularPMvolumeL *
            (this.state.handlePoolIrregularPMvolumeD * 1 +
              this.state.handlePoolIrregularPMvolumeS * 1)) /
          2
        : 0;

    const poolVolume = this.state.PoolClean
      ? poolPCvolume.toFixed(0) * 1000
      : this.state.PoolMaint
      ? poolPMvolume.toFixed(0) * 1000
      : 0;
    const poolPConceStatus =
      this.state.poolPCweek || this.state.poolPCmonth ? true : false;
    const poolPCweekStatus =
      this.state.poolPConce || this.state.poolPCmonth ? true : false;
    const poolPCmonthStatus =
      this.state.poolPCweek || this.state.poolPConce ? true : false;
    const poolPMmonthStatus =
      this.state.poolPMquarter || this.state.poolPMyear ? true : false;
    const poolPMquarterStatus =
      this.state.poolPMmonth || this.state.poolPMyear ? true : false;
    const poolPMyearStatus =
      this.state.poolPMmonth || this.state.poolPMquarter ? true : false;

    /*const poolPCgreenAlgaeStatus = this.state.poolPCmustardAlgae || this.state.poolPCblackAlgae || this.state.poolPCcloudy? true : false; const poolPCmustardAlgaeStatus = this.state.poolPCgreenAlgae || this.state.poolPCblackAlgae || this.state.poolPCcloudy? true : false; const poolPCblackAlgaeStatus = this.state.poolPCmustardAlgae || this.state.poolPCgreenAlgae || this.state.poolPCcloudy? true : false;
const poolPMgreenAlgaeStatus = this.state.poolPMmustardAlgae || this.state.poolPMblackAlgae || this.state.poolPMcloudy? true : false; const poolPMmustardAlgaeStatus = this.state.poolPMgreenAlgae || this.state.poolPMblackAlgae || this.state.poolPMcloudy? true : false; const poolPMblackAlgaeStatus = this.state.poolPMmustardAlgae || this.state.poolPMgreenAlgae || this.state.poolPMcloudy? true : false;
const poolPCcloudyStatus = this.state.poolPCmustardAlgae || this.state.poolPCblackAlgae || this.state.poolPCgreenAlgae? true : false; 
const poolPMcloudyStatus = this.state.poolPMmustardAlgae || this.state.poolPMblackAlgae || this.state.poolPMgreenAlgae? true : false; */

    const poolPCfreq = this.state.poolPConce
      ? "Once"
      : this.state.poolPCweek
      ? "Weekly"
      : this.state.poolPCmonth
      ? "Monthly"
      : "";
    const poolPMfreq = this.state.poolPMonce
      ? "Once"
      : this.state.poolPMweek
      ? "Weekly"
      : this.state.poolPMmonth
      ? "Monthly"
      : "";

    const PCfreqMultiplier = this.state.poolPCweek
      ? this.state.handlepoolPCweek
      : this.state.poolPCmonth
      ? this.state.handlepoolPCmonth
      : 1;

    const poolPCalgae = this.state.poolPCgreenAlgae
      ? "Green"
      : this.state.poolPCmustardAlgae
      ? "Mustard"
      : this.state.poolPCblackAlgae
      ? "Black"
      : "";
    const poolPMalgae = this.state.poolPMgreenAlgae
      ? "Green"
      : this.state.poolPMmustardAlgae
      ? "Mustard"
      : this.state.poolPMblackAlgae
      ? "Black"
      : "";
    //const PoolDistancePricing = this.state.poolLocDistance > 0 && this.state.poolLocDistance > 30 ? (this.state.poolLocDistance - 30)*2 : 0;
    const poolPCvolPriceMultiplier =
      poolPCvolume > 0 && poolPCvolume <= 100
        ? 1
        : poolPCvolume > 100 && poolPCvolume <= 250
        ? 1.5
        : poolPCvolume > 250 && poolPCvolume <= 500
        ? 1.75
        : poolPCvolume > 500 && poolPCvolume <= 750
        ? 2
        : poolPCvolume > 750 && poolPCvolume <= 1000
        ? 2.5
        : 0;
    //const poolPCissuePriceMultiplier = this.state.poolPCcloudy? 1.25 : this.state.poolPCgreenAlgae? 1.5 : this.state.poolPCmustardAlgae? 1.75 : this.state.poolPCblackAlgae ? 2 : 1;
    const poolPCfreqMultiplier = this.state.poolPConce
      ? 1
      : this.state.poolPCweek
      ? 0.9
      : this.state.poolPCmonth
      ? 0.95
      : 0;
    const poolProblemsCosts =
      this.state.poolCloudyPrice > 1 && this.state.poolAlgaePrice > 1
        ? this.state.poolAlgaePrice
        : this.state.poolCloudyPrice > 1 && this.state.poolAlgaePrice < 1.5
        ? this.state.poolCloudyPrice
        : 1;
    var PoolDistancePricing =
      this.state.poolLocDistance > 0 && this.state.poolLocDistance > 30
        ? this.state.poolLocDistance - 30
        : 0;
    PoolDistancePricing = PoolDistancePricing * 2;
    const totalPCpool = this.state.PoolClean
      ? (170 +
          PoolDistancePricing +
          120 *
            poolPCvolPriceMultiplier *
            poolProblemsCosts *
            poolPCfreqMultiplier) *
        this.state.handlePoolGenCleaningPromo *
        PCfreqMultiplier
      : 0;

    const poolPMvolPriceMultiplier =
      poolPMvolume > 0 && poolPMvolume <= 100
        ? 1
        : poolPMvolume > 100 && poolPMvolume <= 250
        ? 1.5
        : poolPMvolume > 250 && poolPMvolume <= 500
        ? 1.75
        : poolPMvolume > 500 && poolPMvolume <= 750
        ? 2
        : poolPMvolume > 750 && poolPMvolume <= 1000
        ? 2.5
        : 0;
    //const poolPMissuePriceMultiplier = this.state.poolPMcloudy? 1.25 : this.state.poolPMgreenAlgae? 1.5 : this.state.poolPMmustardAlgae? 1.75 : this.state.poolPMblackAlgae ? 2 : 1;
    const poolPMfreqMultiplier = this.state.poolPMonce
      ? 1
      : this.state.poolPMweek
      ? 0.9
      : this.state.poolPMmonth
      ? 0.95
      : 0;
    const totalPMpool = this.state.PoolMaint
      ? (170 +
          PoolDistancePricing +
          220 *
            poolPMvolPriceMultiplier *
            poolProblemsCosts *
            poolPMfreqMultiplier) *
        this.state.handlePoolMaintanancePromo
      : 0;

    const totalPool = this.state.PoolClean
      ? totalPCpool * 1.2
      : this.state.PoolMaint
      ? totalPMpool * 1.2
      : 0;
    const poolShape =
      this.state.poolShapePMSelect === "0" ||
      this.state.poolShapePMSelect === "1" ||
      this.state.poolShapePCSelect === "0" ||
      this.state.poolShapePCSelect === "1"
        ? "Rectangular"
        : this.state.poolShapePMSelect === "2" ||
          this.state.poolShapePCSelect === "2"
        ? "Circular"
        : this.state.poolShapePMSelect === "3" ||
          this.state.poolShapePCSelect === "3"
        ? "Triangular"
        : this.state.poolShapePMSelect === "4" ||
          this.state.poolShapePCSelect === "4"
        ? "Irregular"
        : null;

    const poolIssue =
      poolPCalgae !== ""
        ? poolPCalgae + " Algae"
        : poolPMalgae !== ""
        ? poolPMalgae + " Algae"
        : this.state.poolPCcloudy || this.state.poolPMcloudy
        ? "Cloudyness"
        : null;
    const poolRequiredService = this.state.PoolClean
      ? "General Cleaning"
      : this.state.PoolMaint
      ? "Maintenance"
      : "";
    const options = locations;

    const ExampleCustomInput = ({ value, onClick }) => (
      <CustomButton
        style={{ background: "#e91e63" }}
        onClick={onClick}
        size="sm"
      >
        {value ? value : "Date & Time"}
      </CustomButton>
    );

    const customStyles = (width = 50, height = 5) => {
      return {
        container: (base) => ({
          ...base,
          display: "inline-block",
          minWidth: width,
        }),
        valueContainer: (base) => ({
          ...base,
          minHeight: height,
        }),
      };
    };

    function addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }
    const selectedService = this.state.IndoorCleanService
      ? this.state.IndoorCleanService
      : this.state.IndoorAfterBuildCleanService
      ? this.state.IndoorAfterBuildCleanService
      : this.state.IndoorEndTenancyCleanService
      ? this.state.IndoorEndTenancyCleanService
      : this.state.IndoorSanitiseService
      ? this.state.IndoorSanitiseService
      : "";

    return (
      <div>
        <Popup>
          <PopupInner>
            <CloseButton
              style={{ color: "black", zIndex: "1000" }}
              onClick={this.props.closePopup}
            >
              &#10005;
            </CloseButton>
            <TabsContainer>
              <GridContainer>
                <GridItem>
                  <NavPills
                    alignCenter
                    color="rose"
                    tabs={[
                      {
                        tabButton: "INDOOR",
                        tabIcon: GiVacuumCleaner,
                        tabContent: (
                          <div style={{ "margin-top": "-5px" }}>
                            <ContentTitle>
                              {" "}
                              Select Cleaning Service{" "}
                              <Info
                                onClick={this.showServicesInfo.bind(this)}
                                showServicesInfo={this.state.showServicesInfo}
                              />
                              <span>
                                <hr width="300" />
                              </span>
                            </ContentTitle>
                            <Options4>
                              {this.state.IndoorAfterBuildClean ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    Location & Date
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div
                                    style={{
                                      width: "105px",
                                      height: "40px",
                                      color: "grey",
                                    }}
                                  >
                                    <Select
                                      styles={customStyles}
                                      onChange={this.handleIndoorLoc}
                                      options={options}
                                      value={this.state.genCleanloc}
                                      placeholder="Location..."
                                    />
                                  </div>
                                  <DatePicker
                                    selected={this.state.dateTime}
                                    value={this.state.dateTime}
                                    onChange={this.handleChange2}
                                    minDate={addDays(new Date(), 2)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    customInput={<ExampleCustomInput />}
                                    dateFormat="MM/dd/yy"
                                    shouldCloseOnSelect={false}
                                    excludeTimes={[
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 30), 0),
                                      setHours(setMinutes(new Date(), 0), 1),
                                      setHours(setMinutes(new Date(), 30), 1),
                                      setHours(setMinutes(new Date(), 0), 2),
                                      setHours(setMinutes(new Date(), 30), 2),
                                      setHours(setMinutes(new Date(), 0), 3),
                                      setHours(setMinutes(new Date(), 30), 3),
                                      setHours(setMinutes(new Date(), 0), 4),
                                      setHours(setMinutes(new Date(), 30), 4),
                                      setHours(setMinutes(new Date(), 0), 5),
                                      setHours(setMinutes(new Date(), 30), 5),
                                      setHours(setMinutes(new Date(), 0), 6),
                                      setHours(setMinutes(new Date(), 30), 6),
                                      setHours(setMinutes(new Date(), 0), 7),
                                      setHours(setMinutes(new Date(), 30), 7),
                                      setHours(setMinutes(new Date(), 0), 8),
                                      setHours(setMinutes(new Date(), 30), 8),
                                      setHours(setMinutes(new Date(), 0), 9),
                                      setHours(setMinutes(new Date(), 30), 9),
                                      setHours(setMinutes(new Date(), 30), 14),
                                      setHours(setMinutes(new Date(), 0), 15),
                                      setHours(setMinutes(new Date(), 30), 15),
                                      setHours(setMinutes(new Date(), 0), 16),
                                      setHours(setMinutes(new Date(), 30), 16),
                                      setHours(setMinutes(new Date(), 0), 17),
                                      setHours(setMinutes(new Date(), 30), 17),
                                      setHours(setMinutes(new Date(), 0), 18),
                                      setHours(setMinutes(new Date(), 30), 18),
                                      setHours(setMinutes(new Date(), 0), 19),
                                      setHours(setMinutes(new Date(), 30), 19),
                                      setHours(setMinutes(new Date(), 0), 20),
                                      setHours(setMinutes(new Date(), 30), 20),
                                      setHours(setMinutes(new Date(), 0), 21),
                                      setHours(setMinutes(new Date(), 30), 21),
                                      setHours(setMinutes(new Date(), 0), 22),
                                      setHours(setMinutes(new Date(), 30), 22),
                                      setHours(setMinutes(new Date(), 0), 23),
                                      setHours(setMinutes(new Date(), 30), 23),
                                    ]}
                                  />
                                </div>
                              ) : this.state.IndoorEndTenancyClean ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    Location & Date
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div
                                    style={{
                                      width: "105px",
                                      height: "40px",
                                      color: "grey",
                                    }}
                                  >
                                    <Select
                                      styles={customStyles}
                                      onChange={this.handleIndoorLoc}
                                      options={options}
                                      value={this.state.genCleanloc}
                                      placeholder="Location..."
                                    />
                                  </div>
                                  <DatePicker
                                    selected={this.state.dateTime}
                                    value={this.state.dateTime}
                                    onChange={this.handleChange2}
                                    minDate={addDays(new Date(), 2)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    customInput={<ExampleCustomInput />}
                                    dateFormat="MM/dd/yy"
                                    shouldCloseOnSelect={false}
                                    excludeTimes={[
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 30), 0),
                                      setHours(setMinutes(new Date(), 0), 1),
                                      setHours(setMinutes(new Date(), 30), 1),
                                      setHours(setMinutes(new Date(), 0), 2),
                                      setHours(setMinutes(new Date(), 30), 2),
                                      setHours(setMinutes(new Date(), 0), 3),
                                      setHours(setMinutes(new Date(), 30), 3),
                                      setHours(setMinutes(new Date(), 0), 4),
                                      setHours(setMinutes(new Date(), 30), 4),
                                      setHours(setMinutes(new Date(), 0), 5),
                                      setHours(setMinutes(new Date(), 30), 5),
                                      setHours(setMinutes(new Date(), 0), 6),
                                      setHours(setMinutes(new Date(), 30), 6),
                                      setHours(setMinutes(new Date(), 0), 7),
                                      setHours(setMinutes(new Date(), 30), 7),
                                      setHours(setMinutes(new Date(), 0), 8),
                                      setHours(setMinutes(new Date(), 30), 8),
                                      setHours(setMinutes(new Date(), 0), 9),
                                      setHours(setMinutes(new Date(), 30), 9),
                                      setHours(setMinutes(new Date(), 30), 14),
                                      setHours(setMinutes(new Date(), 0), 15),
                                      setHours(setMinutes(new Date(), 30), 15),
                                      setHours(setMinutes(new Date(), 0), 16),
                                      setHours(setMinutes(new Date(), 30), 16),
                                      setHours(setMinutes(new Date(), 0), 17),
                                      setHours(setMinutes(new Date(), 30), 17),
                                      setHours(setMinutes(new Date(), 0), 18),
                                      setHours(setMinutes(new Date(), 30), 18),
                                      setHours(setMinutes(new Date(), 0), 19),
                                      setHours(setMinutes(new Date(), 30), 19),
                                      setHours(setMinutes(new Date(), 0), 20),
                                      setHours(setMinutes(new Date(), 30), 20),
                                      setHours(setMinutes(new Date(), 0), 21),
                                      setHours(setMinutes(new Date(), 30), 21),
                                      setHours(setMinutes(new Date(), 0), 22),
                                      setHours(setMinutes(new Date(), 30), 22),
                                      setHours(setMinutes(new Date(), 0), 23),
                                      setHours(setMinutes(new Date(), 30), 23),
                                    ]}
                                  />
                                </div>
                              ) : this.state.IndoorSanitise ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    Location & Date
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div
                                    style={{
                                      width: "105px",
                                      height: "40px",
                                      color: "grey",
                                    }}
                                  >
                                    <Select
                                      styles={customStyles}
                                      onChange={this.handleIndoorLoc}
                                      options={options}
                                      value={this.state.genCleanloc}
                                      placeholder="Location..."
                                    />
                                  </div>
                                  <DatePicker
                                    selected={this.state.dateTime}
                                    value={this.state.dateTime}
                                    onChange={this.handleChange2}
                                    minDate={addDays(new Date(), 2)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    customInput={<ExampleCustomInput />}
                                    dateFormat="MM/dd/yy"
                                    shouldCloseOnSelect={false}
                                    excludeTimes={[
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 30), 0),
                                      setHours(setMinutes(new Date(), 0), 1),
                                      setHours(setMinutes(new Date(), 30), 1),
                                      setHours(setMinutes(new Date(), 0), 2),
                                      setHours(setMinutes(new Date(), 30), 2),
                                      setHours(setMinutes(new Date(), 0), 3),
                                      setHours(setMinutes(new Date(), 30), 3),
                                      setHours(setMinutes(new Date(), 0), 4),
                                      setHours(setMinutes(new Date(), 30), 4),
                                      setHours(setMinutes(new Date(), 0), 5),
                                      setHours(setMinutes(new Date(), 30), 5),
                                      setHours(setMinutes(new Date(), 0), 6),
                                      setHours(setMinutes(new Date(), 30), 6),
                                      setHours(setMinutes(new Date(), 0), 7),
                                      setHours(setMinutes(new Date(), 30), 7),
                                      setHours(setMinutes(new Date(), 0), 8),
                                      setHours(setMinutes(new Date(), 30), 8),
                                      setHours(setMinutes(new Date(), 0), 9),
                                      setHours(setMinutes(new Date(), 30), 9),
                                      setHours(setMinutes(new Date(), 30), 14),
                                      setHours(setMinutes(new Date(), 0), 15),
                                      setHours(setMinutes(new Date(), 30), 15),
                                      setHours(setMinutes(new Date(), 0), 16),
                                      setHours(setMinutes(new Date(), 30), 16),
                                      setHours(setMinutes(new Date(), 0), 17),
                                      setHours(setMinutes(new Date(), 30), 17),
                                      setHours(setMinutes(new Date(), 0), 18),
                                      setHours(setMinutes(new Date(), 30), 18),
                                      setHours(setMinutes(new Date(), 0), 19),
                                      setHours(setMinutes(new Date(), 30), 19),
                                      setHours(setMinutes(new Date(), 0), 20),
                                      setHours(setMinutes(new Date(), 30), 20),
                                      setHours(setMinutes(new Date(), 0), 21),
                                      setHours(setMinutes(new Date(), 30), 21),
                                      setHours(setMinutes(new Date(), 0), 22),
                                      setHours(setMinutes(new Date(), 30), 22),
                                      setHours(setMinutes(new Date(), 0), 23),
                                      setHours(setMinutes(new Date(), 30), 23),
                                    ]}
                                  />
                                </div>
                              ) : this.state.IndoorGenClean ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    Location & Date
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div
                                    style={{
                                      width: "105px",
                                      height: "40px",
                                      color: "grey",
                                    }}
                                  >
                                    <Select
                                      styles={customStyles}
                                      onChange={this.handleIndoorLoc}
                                      options={options}
                                      value={this.state.genCleanloc}
                                      placeholder="Location..."
                                    />
                                  </div>
                                  <DatePicker
                                    selected={this.state.dateTime}
                                    value={this.state.dateTime}
                                    onChange={this.handleChange2}
                                    minDate={addDays(new Date(), 2)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    customInput={<ExampleCustomInput />}
                                    dateFormat="MM/dd/yy"
                                    shouldCloseOnSelect={false}
                                    excludeTimes={[
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 30), 0),
                                      setHours(setMinutes(new Date(), 0), 1),
                                      setHours(setMinutes(new Date(), 30), 1),
                                      setHours(setMinutes(new Date(), 0), 2),
                                      setHours(setMinutes(new Date(), 30), 2),
                                      setHours(setMinutes(new Date(), 0), 3),
                                      setHours(setMinutes(new Date(), 30), 3),
                                      setHours(setMinutes(new Date(), 0), 4),
                                      setHours(setMinutes(new Date(), 30), 4),
                                      setHours(setMinutes(new Date(), 0), 5),
                                      setHours(setMinutes(new Date(), 30), 5),
                                      setHours(setMinutes(new Date(), 0), 6),
                                      setHours(setMinutes(new Date(), 30), 6),
                                      setHours(setMinutes(new Date(), 0), 7),
                                      setHours(setMinutes(new Date(), 30), 7),
                                      setHours(setMinutes(new Date(), 0), 8),
                                      setHours(setMinutes(new Date(), 30), 8),
                                      setHours(setMinutes(new Date(), 0), 9),
                                      setHours(setMinutes(new Date(), 30), 9),
                                      setHours(setMinutes(new Date(), 30), 14),
                                      setHours(setMinutes(new Date(), 0), 15),
                                      setHours(setMinutes(new Date(), 30), 15),
                                      setHours(setMinutes(new Date(), 0), 16),
                                      setHours(setMinutes(new Date(), 30), 16),
                                      setHours(setMinutes(new Date(), 0), 17),
                                      setHours(setMinutes(new Date(), 30), 17),
                                      setHours(setMinutes(new Date(), 0), 18),
                                      setHours(setMinutes(new Date(), 30), 18),
                                      setHours(setMinutes(new Date(), 0), 19),
                                      setHours(setMinutes(new Date(), 30), 19),
                                      setHours(setMinutes(new Date(), 0), 20),
                                      setHours(setMinutes(new Date(), 30), 20),
                                      setHours(setMinutes(new Date(), 0), 21),
                                      setHours(setMinutes(new Date(), 30), 21),
                                      setHours(setMinutes(new Date(), 0), 22),
                                      setHours(setMinutes(new Date(), 30), 22),
                                      setHours(setMinutes(new Date(), 0), 23),
                                      setHours(setMinutes(new Date(), 30), 23),
                                    ]}
                                  />
                                </div>
                              ) : (
                                <ServiceGridSplit>
                                  <ServiceTest>General Cleaning</ServiceTest>
                                  <Tooltip
                                    title="General Cleaning"
                                    aria-label="add"
                                  >
                                    <Fab2>
                                      <GenCleanIcon
                                        onClick={this.genIndoorClean.bind(this)}
                                        IndoorGenClean={
                                          this.state.IndoorGenClean
                                        }
                                      />
                                    </Fab2>
                                  </Tooltip>
                                </ServiceGridSplit>
                              )}

                              {this.state.IndoorGenClean ? (
                                <div>
                                  <ServiceGridSplit>
                                    <ServiceTest>General Cleaning</ServiceTest>
                                    <Tooltip
                                      title="General Cleaning"
                                      aria-label="add"
                                    >
                                      <Fab2>
                                        <GenCleanIcon
                                          onClick={this.genIndoorClean.bind(
                                            this
                                          )}
                                          IndoorGenClean={
                                            this.state.IndoorGenClean
                                          }
                                        />
                                      </Fab2>
                                    </Tooltip>
                                  </ServiceGridSplit>
                                  <div style={{ "margin-top": "10px" }}>
                                    <FormInput
                                      id="fname"
                                      size="10"
                                      maxlength="7"
                                      type="text"
                                      name="fname"
                                      placeholder="Promo Code?"
                                      onKeyUp={this.handleIndoorGenPromo}
                                      min="0"
                                      max="9999999"
                                      required
                                    />
                                  </div>
                                </div>
                              ) : this.state.IndoorEndTenancyClean ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    How Often?{" "}
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div style={{ "margin-top": "0px" }}>
                                    <Checkbox
                                      toggle
                                      label="  Once"
                                      onChange={this.endTenancyCleanOnce}
                                      disabled={endTenancyOnceStatus}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Monthly"
                                      onChange={this.endTenancyCleanMonth}
                                      disabled={endTenancyMonthStatus}
                                    />
                                    {this.state.endTenancyCleanMonth ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          Months?
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form
                                          style={{
                                            color: "red",
                                            fontSize: "10px",
                                          }}
                                        >
                                          <FormInput
                                            id="fname"
                                            size="100"
                                            type="number"
                                            name="fname"
                                            placeholder="2"
                                            onChange={this.handleEndTenancyFreq.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              ) : this.state.IndoorSanitise ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    Option?{" "}
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div style={{ "margin-top": "0px" }}>
                                    {/*<Checkbox toggle label = "  Couches" onChange={ this.IndoorCouches }  disabled = {CouchesStatus} />
                                                <Checkbox toggle label = "  Carpets" onChange={ this.IndoorCarpets }  disabled = {CarpetsStatus} />
                                                <Checkbox toggle label = "  Mattress" onChange={ this.IndoorMattress }  disabled = {MattressStatus} />
                                                <Checkbox toggle label = "  Rugs" onChange={ this.IndoorRugs }  disabled = {RugsStatus} />
                                                <Checkbox toggle label = "  Chairs" onChange={ this.IndoorChairs }  disabled = {ChairsStatus} />
                                                */}
                                    <select
                                      id="areaSize"
                                      onChange={this.handleCouches_Carpets}
                                      style={{
                                        color: "grey",
                                        cursor: "pointer",
                                        height: "22px",
                                        "text-align": "center",
                                        "margin-top": "2px",
                                      }}
                                    >
                                      <option value="0">Select</option>
                                      <option value="Couches">Couches</option>
                                      <option value="Carpets">Carpets</option>
                                      <option value="Mattress">Mattress</option>
                                      <option value="Rugs">Rugs</option>
                                      <option value="Chairs">Chairs</option>
                                    </select>
                                    {this.state.handleCouches_Carpets ==
                                    "Carpets" ? (
                                      <div>
                                        <ServiceTest> Rooms?</ServiceTest>
                                        <Checkbox
                                          toggle
                                          label="  Small"
                                          checked={
                                            this.state.isCheckedSmCarpets
                                          }
                                          onChange={this.IndoorCarpetsBedrooms}
                                        />
                                        <Checkbox
                                          toggle
                                          label="  Big"
                                          checked={
                                            this.state.isCheckedBgCarpets
                                          }
                                          onChange={
                                            this.IndoorCarpetsBigBedrooms
                                          }
                                        />
                                        <Checkbox
                                          toggle
                                          label="  Lounge"
                                          checked={
                                            this.state.isCheckedLgrCarpets
                                          }
                                          onChange={this.IndoorCarpetsLounge}
                                        />
                                      </div>
                                    ) : this.state.handleCouches_Carpets ==
                                      "Mattress" ? (
                                      <div>
                                        <ServiceTest> Bed Size?</ServiceTest>
                                        <Checkbox
                                          toggle
                                          label="  Single"
                                          checked={
                                            this.state.isCheckedSnglMattress
                                          }
                                          onChange={this.IndoorSingleMattress}
                                        />
                                        <Checkbox
                                          toggle
                                          label="  Double"
                                          checked={
                                            this.state.isCheckedDblelMattress
                                          }
                                          onChange={this.IndoorDoubleMattress}
                                        />
                                        <Checkbox
                                          toggle
                                          label="  Larger"
                                          checked={
                                            this.state.isCheckedLgrMattress
                                          }
                                          onChange={this.IndoorLargerMattress}
                                        />
                                      </div>
                                    ) : this.state.handleCouches_Carpets ==
                                      "Rugs" ? (
                                      <div>
                                        <ServiceTest> Rug Size?</ServiceTest>
                                        <Checkbox
                                          toggle
                                          label="  Small"
                                          checked={this.state.isCheckedSmRugs}
                                          onChange={this.IndoorSmallRugs}
                                        />
                                        <Checkbox
                                          toggle
                                          label="  Medium"
                                          checked={this.state.isCheckedMdRugs}
                                          onChange={this.IndoorMediumRugs}
                                        />
                                        <Checkbox
                                          toggle
                                          label="  Larger"
                                          checked={this.state.isCheckedLgrRugs}
                                          onChange={this.IndoorLargerRugs}
                                        />
                                      </div>
                                    ) : this.state.handleCouches_Carpets ==
                                      "Chairs" ? (
                                      <div>
                                        <ServiceTest> Chair Type?</ServiceTest>
                                        <Checkbox
                                          toggle
                                          label="  Dining"
                                          checked={
                                            this.state.isCheckedDiningChairs
                                          }
                                          onChange={this.IndoorDiningChair}
                                        />
                                        <Checkbox
                                          toggle
                                          label="  Office"
                                          checked={
                                            this.state.isCheckedOfficeChairs
                                          }
                                          onChange={this.IndoorOfficeChair}
                                        />
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              ) : (
                                <div>
                                  <ServiceGridSplit>
                                    <ServiceTest>After Builders</ServiceTest>{" "}
                                    <Tooltip
                                      title="After Builders Cleaning"
                                      aria-label="add"
                                    >
                                      <Fab2>
                                        <AfterBuildIcon
                                          onClick={this.afterBuildIndoorClean.bind(
                                            this
                                          )}
                                          IndoorAfterBuildClean={
                                            this.state.IndoorAfterBuildClean
                                          }
                                        />
                                      </Fab2>
                                    </Tooltip>
                                  </ServiceGridSplit>
                                  {this.state.IndoorAfterBuildClean ? (
                                    <div style={{ "margin-top": "10px" }}>
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        maxlength="7"
                                        type="text"
                                        name="fname"
                                        placeholder="Promo Code?"
                                        onKeyUp={
                                          this.handleIndoorAfterBuildPromo
                                        }
                                        min="0"
                                        max="9999999"
                                        required
                                      />
                                    </div>
                                  ) : null}
                                </div>
                              )}

                              {this.state.IndoorGenClean ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    How Often?{" "}
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div style={{ "margin-top": "0px" }}>
                                    <Checkbox
                                      toggle
                                      label="  Once"
                                      onChange={this.genIndoorCleanOnce}
                                      disabled={genIndoorCleanOnceStatus}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Weekly"
                                      onChange={this.genIndoorCleanWeek}
                                      disabled={genIndoorCleanWeekStatus}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Monthly"
                                      onChange={this.genIndoorCleanMonth}
                                      disabled={genIndoorCleanMonthStatus}
                                    />

                                    {this.state.genIndoorCleanWeek ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          Weeks?
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="2"
                                            onChange={this.handleGenCleaningWeekFreq.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.genIndoorCleanMonth ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          Months?
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="2"
                                            onChange={this.handleGenCleaningMonthFreq.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              ) : this.state.IndoorAfterBuildClean ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    How Often?{" "}
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div style={{ "margin-top": "0px" }}>
                                    <Checkbox
                                      toggle
                                      label="  Once"
                                      onChange={this.afterBuildCleanOnce}
                                      disabled={afterBuildOnceStatus}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Weekly"
                                      onChange={this.afterBuildCleanWeek}
                                      disabled={afterBuildWeekStatus}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Monthly"
                                      onChange={this.afterBuildCleanMonth}
                                      disabled={afterBuildMonthStatus}
                                    />
                                    {this.state.afterBuildCleanWeek ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          Weeks?
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="2"
                                            onChange={this.handleAfterBuildersWeekFreq.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.afterBuildCleanMonth ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          Months?
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="2"
                                            onChange={this.handleAfterBuildersMonthFreq.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              ) : this.state.IndoorSanitise ? (
                                <div>
                                  <ServiceTest>Size</ServiceTest>
                                  {this.state.handleCouches_Carpets ==
                                  "Couches" ? (
                                    <select
                                      id="areaSize"
                                      onChange={this.handleCouches}
                                      style={{
                                        color: "grey",
                                        cursor: "pointer",
                                        height: "22px",
                                        "text-align": "center",
                                        "margin-top": "2px",
                                      }}
                                    >
                                      <option value="0">Seater</option>
                                      <option value="6 Seater">6 Seater</option>
                                      <option value="5 Seater">5 Seater</option>
                                      <option value="4 Seater">4 Seater</option>
                                      <option value="3 Seater">3 Seater</option>
                                      <option value="2 Seater">2 Seater</option>
                                      <option value="1 Seater">1 Seater</option>
                                    </select>
                                  ) : this.state.handleCouches_Carpets ==
                                    "Mattress" ? (
                                    this.state.IndoorSingleMattress &&
                                    !this.state.IndoorDoubleMattress &&
                                    !this.state.IndoorQueenMattress ? (
                                      <div>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Single"
                                            onChange={this.SingleMattressQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.IndoorDoubleMattress &&
                                      !this.state.IndoorSingleMattress &&
                                      !this.state.IndoorQueenMattress ? (
                                      <div>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="15"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Double"
                                            onChange={this.DoubleMattressQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.IndoorQueenMattress &&
                                      !this.state.IndoorSingleMattress &&
                                      !this.state.IndoorDoubleMattress ? (
                                      <div>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Larger"
                                            onChange={this.LargerMattressQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.IndoorQueenMattress &&
                                      this.state.IndoorSingleMattress &&
                                      !this.state.IndoorDoubleMattress ? (
                                      <div>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Single"
                                            onChange={this.SingleMattressQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>

                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Larger"
                                            onChange={this.DoubleMattressQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.IndoorQueenMattress &&
                                      !this.state.IndoorSingleMattress &&
                                      this.state.IndoorDoubleMattress ? (
                                      <div>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Double"
                                            onChange={this.DoubleMattressQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>

                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Larger"
                                            onChange={this.LargerMattressQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : !this.state.IndoorQueenMattress &&
                                      this.state.IndoorSingleMattress &&
                                      this.state.IndoorDoubleMattress ? (
                                      <div>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Single"
                                            onChange={this.SingleMattressQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Double"
                                            onChange={this.DoubleMattressQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.IndoorQueenMattress &&
                                      this.state.IndoorSingleMattress &&
                                      this.state.IndoorDoubleMattress ? (
                                      <div>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Single"
                                            onChange={this.SingleMattressQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>

                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Double"
                                            onChange={this.DoubleMattressQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>

                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Larger"
                                            onChange={this.LargerMattressQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : null
                                  ) : this.state.handleCouches_Carpets ==
                                    "Rugs" ? (
                                    this.state.IndoorSmallRugs &&
                                    !this.state.IndoorMediumRugs &&
                                    !this.state.IndoorLargerRugs ? (
                                      <div>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Small"
                                            onChange={this.SmallRugsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.IndoorMediumRugs &&
                                      !this.state.IndoorSmallRugs &&
                                      !this.state.IndoorLargerRugs ? (
                                      <div>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="15"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Medium"
                                            onChange={this.MediumRugsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.IndoorLargerRugs &&
                                      !this.state.IndoorSmallRugs &&
                                      !this.state.IndoorMediumRugs ? (
                                      <div>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Larger"
                                            onChange={this.LargerRugsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.IndoorLargerRugs &&
                                      this.state.IndoorSmallRugs &&
                                      !this.state.IndoorMediumRugs ? (
                                      <div>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Small"
                                            onChange={this.SmallRugsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Larger"
                                            onChange={this.LargerRugsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.IndoorLargerRugs === true &&
                                      this.state.IndoorMediumRugs === true &&
                                      !this.state.IndoorSmallRugs ? (
                                      <div>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Medium"
                                            onChange={this.MediumRugsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>

                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Larger"
                                            onChange={this.LargerRugsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : !this.state.IndoorLargerRugs &&
                                      this.state.IndoorSmallRugs &&
                                      this.state.IndoorMediumRugs ? (
                                      <div>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Small"
                                            onChange={this.SmallRugsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Medium"
                                            onChange={this.MediumRugsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.IndoorLargerRugs &&
                                      this.state.IndoorSmallRugs &&
                                      this.state.IndoorMediumRugs ? (
                                      <div>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Small"
                                            onChange={this.SmallRugsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>

                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Medium"
                                            onChange={this.MediumRugsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>

                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="# of Larger"
                                            onChange={this.LargerRugsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="99999999"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : null
                                  ) : this.state.handleCouches_Carpets ==
                                    "Chairs" ? (
                                    this.state.IndoorDiningChair &&
                                    !this.state.IndoorOfficeChair ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          # Dining Chairs
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="1"
                                            onChange={this.DiningChairQuantity.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : !this.state.IndoorDiningChair &&
                                      this.state.IndoorOfficeChair ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          # Office Chairs
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="1"
                                            onChange={this.OfficeChairQuantity.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.IndoorDiningChair &&
                                      this.state.IndoorOfficeChair ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          # Dining Chairs
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="1"
                                            onChange={this.DiningChairQuantity.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                        <ServiceTest>
                                          {" "}
                                          # Office Chairs
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="1"
                                            onChange={this.OfficeChairQuantity.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : null
                                  ) : this.state.handleCouches_Carpets ==
                                    "Carpets" ? (
                                    this.state.IndoorCarpetsBedrooms &&
                                    !this.state.IndoorCarpetsBigBedrooms ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          # Small Rooms
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="0"
                                            onChange={this.IndoorSmCarpetsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.IndoorCarpetsBigBedrooms &&
                                      !this.state.IndoorCarpetsBedrooms ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          # Big Rooms
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname2"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="0"
                                            onChange={this.IndoorBgCarpetsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.IndoorCarpetsBigBedrooms &&
                                      this.state.IndoorCarpetsBedrooms ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          # Small Rooms
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname3"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="0
                                            "
                                            onChange={this.IndoorSmCarpetsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="10"
                                            required
                                          />
                                        </Form>

                                        <ServiceTest>
                                          {" "}
                                          # Big Rooms
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname4"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="0"
                                            onChange={this.IndoorBgCarpetsQuantity.bind(
                                              this
                                            )}
                                            min="1"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : null
                                  ) : null}
                                </div>
                              ) : (
                                <div>
                                  <ServiceGridSplit>
                                    <ServiceTest>Deep Cleaning</ServiceTest>
                                    <Tooltip
                                      title="Deep Cleaning"
                                      aria-label="add"
                                    >
                                      <Fab2>
                                        <EndTenancyIcon
                                          onClick={this.endTenancyIndoorClean.bind(
                                            this
                                          )}
                                          IndoorEndTenancyClean={
                                            this.state.IndoorEndTenancyClean
                                          }
                                        />
                                      </Fab2>
                                    </Tooltip>{" "}
                                  </ServiceGridSplit>
                                  {this.state.IndoorEndTenancyClean ? (
                                    <div style={{ "margin-top": "10px" }}>
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        maxlength="7"
                                        type="text"
                                        name="fname"
                                        placeholder="Promo Code?"
                                        onKeyUp={
                                          this.handleIndoorEndTenencyPromo
                                        }
                                        min="0"
                                        max="9999999"
                                        required
                                      />
                                    </div>
                                  ) : null}
                                </div>
                              )}

                              {this.state.IndoorGenClean ? (
                                <div>
                                  <ServiceTest> Extra Services</ServiceTest>
                                  <div style={{ "margin-top": "0px" }}>
                                    <Checkbox
                                      toggle
                                      label="  Walls"
                                      onChange={this.genIndoorCleanWalls}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Windows"
                                      onChange={this.genIndoorCleanWindows}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Oven"
                                      onChange={this.genIndoorCleanLaundry}
                                    />
                                  </div>
                                </div>
                              ) : this.state.IndoorAfterBuildClean ? (
                                <div>
                                  <ServiceTest> Extra Services</ServiceTest>
                                  <div style={{ "margin-top": "0px" }}>
                                    <Checkbox
                                      toggle
                                      label="  Walls"
                                      onChange={this.afterBuildIndoorCleanWalls}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Windows"
                                      onChange={
                                        this.afterBuildIndoorCleanWindows
                                      }
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Oven"
                                      onChange={this.afterBuildIndoorCleanOven}
                                    />
                                  </div>
                                </div>
                              ) : this.state.IndoorEndTenancyClean ? (
                                <div>
                                  <ServiceTest> Extra Services</ServiceTest>
                                  <div style={{ "margin-top": "0px" }}>
                                    <Checkbox
                                      toggle
                                      label="  Walls"
                                      onChange={this.endTenancyIndoorCleanWalls}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Windows"
                                      onChange={
                                        this.endTenancyIndoorCleanWindows
                                      }
                                    />
                                  </div>
                                </div>
                              ) : (
                                <div>
                                  <ServiceGridSplit>
                                    <ServiceTest> Sofa & Carpet</ServiceTest>
                                    <Tooltip
                                      title="Sofas and Carpets"
                                      aria-label="add"
                                    >
                                      <Fab2>
                                        <Sofas
                                          onClick={this.sanitiseIndoorClean.bind(
                                            this
                                          )}
                                          IndoorSanitise={
                                            this.state.IndoorSanitise
                                          }
                                        />
                                      </Fab2>
                                    </Tooltip>{" "}
                                  </ServiceGridSplit>
                                  {this.state.IndoorSanitise ? (
                                    <div style={{ "margin-top": "10px" }}>
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        maxlength="7"
                                        type="text"
                                        name="fname"
                                        placeholder="Promo Code?"
                                        onKeyUp={this.handleIndoorSanitisePromo}
                                        min="0"
                                        max="9999999"
                                        required
                                      />
                                    </div>
                                  ) : null}
                                </div>
                              )}
                            </Options4>

                            {this.state.IndoorSanitise ? null : (
                              <div>
                                <ContentTitle>
                                  {" "}
                                  Enter Details{" "}
                                  <Info
                                    onClick={this.showTcsIn.bind(this)}
                                    showTcIn={this.state.showTcIn}
                                  />
                                  <span>
                                    <hr width="300" />
                                  </span>
                                </ContentTitle>
                                <EnterDetails>
                                  <select
                                    id="dropdown"
                                    onChange={this.handleDropdownChange}
                                    style={{
                                      color: "grey",
                                      cursor: "pointer",
                                      height: "22px",
                                      "text-align": "center",
                                      "margin-top": "2px",
                                    }}
                                  >
                                    <option value="N/A">Bedrooms</option>
                                    <option value="1">1 Bedroom</option>
                                    <option value="2">2 Bedrooms</option>
                                    <option value="3">3 Bedrooms</option>
                                    <option value="4">4 Bedrooms</option>
                                    <option value="5">5 Bedrooms</option>
                                  </select>
                                  <select
                                    id="dropdown"
                                    onChange={this.handleDropdownChange2}
                                    style={{
                                      color: "grey",
                                      cursor: "pointer",
                                      height: "22px",
                                      "text-align": "center",
                                      "margin-top": "2px",
                                    }}
                                  >
                                    <option value="N/A">Bathrooms</option>
                                    <option value="1">1 Bathroom</option>
                                    <option value="2">2 Bathrooms</option>
                                    <option value="3">3 Bathrooms</option>
                                    <option value="4">4 Bathrooms</option>
                                    <option value="5">5 Bathrooms</option>
                                  </select>
                                  {this.state.IndoorCleanService ? (
                                    <Checkbox
                                      toggle
                                      label="  Detergents?"
                                      onChange={this.genIndoorDetergents}
                                    />
                                  ) : this.state
                                      .IndoorAfterBuildCleanService ? (
                                    <Checkbox
                                      toggle
                                      label="  Detergents?"
                                      onChange={this.afterBuilderDetergents}
                                    />
                                  ) : this.state
                                      .IndoorEndTenancyCleanService ? (
                                    <Checkbox
                                      toggle
                                      label="  Detergents?"
                                      onChange={this.endTenancyDetergents}
                                    />
                                  ) : null}
                                </EnterDetails>
                              </div>
                            )}

                            <ContentTitle style={{ "margin-top": "10px" }}>
                              {" "}
                              Service Details & Costs
                              <span>
                                <hr width="300" />
                              </span>
                            </ContentTitle>
                            <Options3>
                              <div>
                                <Message2 style={{ "margin-left": "1px" }}>
                                  Home Details
                                </Message2>
                                {this.state.IndoorLocation !== "" ? (
                                  <Message>{this.state.IndoorLocation}</Message>
                                ) : null}
                                {this.state.events4.length !== 0 ? (
                                  <Message>
                                    Date :{" "}
                                    {x.replace(
                                      "GMT+0200 (South Africa Standard Time)",
                                      ""
                                    )}
                                  </Message>
                                ) : null}
                                {this.state.Beds !== "" &&
                                this.state.Baths === "" ? (
                                  <Message>{this.state.Beds}</Message>
                                ) : this.state.Beds === "" &&
                                  this.state.Baths !== "" ? (
                                  <Message>{this.state.Beds}</Message>
                                ) : this.state.Beds !== "" &&
                                  this.state.Baths !== "" ? (
                                  <Message>
                                    {this.state.Beds}, {this.state.Baths}
                                  </Message>
                                ) : null}
                              </div>
                              <div>
                                {this.state.IndoorSanitise && option != "" ? (
                                  <div>
                                    <Message2>{option}</Message2>
                                    <Message>{size}</Message>
                                    <Message>{size2}</Message>
                                    <Message>{size3}</Message>
                                  </div>
                                ) : (
                                  <div>
                                    <Message2>Extra Info</Message2>
                                    <Message>{extrasIN}</Message>
                                  </div>
                                )

                                //<Message>{extrasIN}</Message>
                                //<Message>{size !== undefined? option : ""}</Message>
                                }
                              </div>
                              <div>
                                <Message2>Costs</Message2>
                                {this.state.IndoorCleanService ||
                                this.state.IndoorAfterBuildCleanService ||
                                this.state.IndoorEndTenancyCleanService ||
                                this.state.IndoorSanitiseService ? (
                                  <div>
                                    {this.state.genIndoorCleanOnce ||
                                    this.state.afterBuildCleanOnce ||
                                    this.state.endTenancyCleanOnce ||
                                    this.state.sanitiseIndoorOnceOFF ||
                                    this.state.handleCouches_Carpets ==
                                      "Rugs" ||
                                    this.state.handleCouches_Carpets ==
                                      "Couches" ||
                                    this.state.handleCouches_Carpets ==
                                      "Mattress" ||
                                    this.state.handleCouches_Carpets ==
                                      "Chairs" ||
                                    (this.state.handleCouches_Carpets ==
                                      "Carpets" &&
                                      (this.state.IndoorCarpetsBedrooms ||
                                        this.state.IndoorCarpetsBigBedrooms ||
                                        this.state.IndoorCarpetsLounge)) ||
                                    this.state.IndoorMattress ||
                                    this.state.IndoorRugs ||
                                    this.state.IndoorChairs ? (
                                      <Message>
                                        Total : R {totalIndoor.toFixed(2)}
                                      </Message>
                                    ) : this.state.afterBuildCleanWeek ||
                                      this.state.genIndoorCleanWeek ? (
                                      <div>
                                        <Message>
                                          Total : R {totalIndoor.toFixed(2)}
                                        </Message>
                                        <Message>Discount : 10%</Message>
                                      </div>
                                    ) : this.state.genIndoorCleanMonth ||
                                      this.state.endTenancyCleanMonth ||
                                      this.state.sanitiseIndoorMonth ||
                                      this.state.afterBuildCleanMonth ? (
                                      <div>
                                        <Message>
                                          Total : R {totalIndoor.toFixed(2)}
                                        </Message>
                                        <Message>Discount : 5%</Message>
                                      </div>
                                    ) : null}
                                  </div>
                                ) : null}
                              </div>
                            </Options3>

                            <p style={{ textAlign: "center" }}>
                              <CustomButton
                                onClick={this.selectIndoor.bind(this)}
                                style={{
                                  marginBottom: "5%",
                                  background: "#e91e63",
                                }}
                                size="sm"
                              >
                                Book Service
                              </CustomButton>
                            </p>
                          </div>
                        ),
                      },
                      {
                        tabButton: "OUTDOOR",
                        tabIcon: GiWheelbarrow,
                        tabContent: (
                          <div>
                            <ContentTitle>
                              {" "}
                              Select Required Service{" "}
                              <Info
                                onClick={this.showOutdoorServicesInfo.bind(
                                  this
                                )}
                                showOutdoorServicesInfo={
                                  this.state.showOutdoorServicesInfo
                                }
                              />
                              <span>
                                <hr width="300" />
                              </span>
                            </ContentTitle>
                            <Options4>
                              {this.state.LMoutdoorClean ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    Location & Date
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div
                                    style={{
                                      width: "105px",
                                      height: "40px",
                                      color: "grey",
                                    }}
                                  >
                                    <Select
                                      styles={customStyles}
                                      onChange={this.handleOutdoorLoc}
                                      options={options}
                                      value={this.state.outdoorLoc}
                                      placeholder="Location..."
                                    />
                                  </div>
                                  <DatePicker
                                    selected={this.state.dateTimeOutdoor}
                                    value={this.state.dateTimeOutdoor}
                                    onChange={this.handleDateChangeOutdoor}
                                    minDate={addDays(new Date(), 2)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    customInput={<ExampleCustomInput />}
                                    dateFormat="MM/dd/yy"
                                    shouldCloseOnSelect={false}
                                    excludeTimes={[
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 30), 0),
                                      setHours(setMinutes(new Date(), 0), 1),
                                      setHours(setMinutes(new Date(), 30), 1),
                                      setHours(setMinutes(new Date(), 0), 2),
                                      setHours(setMinutes(new Date(), 30), 2),
                                      setHours(setMinutes(new Date(), 0), 3),
                                      setHours(setMinutes(new Date(), 30), 3),
                                      setHours(setMinutes(new Date(), 0), 4),
                                      setHours(setMinutes(new Date(), 30), 4),
                                      setHours(setMinutes(new Date(), 0), 5),
                                      setHours(setMinutes(new Date(), 30), 5),
                                      setHours(setMinutes(new Date(), 0), 6),
                                      setHours(setMinutes(new Date(), 30), 6),
                                      setHours(setMinutes(new Date(), 0), 7),
                                      setHours(setMinutes(new Date(), 30), 7),
                                      setHours(setMinutes(new Date(), 0), 8),
                                      setHours(setMinutes(new Date(), 30), 8),
                                      setHours(setMinutes(new Date(), 0), 9),
                                      setHours(setMinutes(new Date(), 30), 9),
                                      setHours(setMinutes(new Date(), 30), 14),
                                      setHours(setMinutes(new Date(), 0), 15),
                                      setHours(setMinutes(new Date(), 30), 15),
                                      setHours(setMinutes(new Date(), 0), 16),
                                      setHours(setMinutes(new Date(), 30), 16),
                                      setHours(setMinutes(new Date(), 0), 17),
                                      setHours(setMinutes(new Date(), 30), 17),
                                      setHours(setMinutes(new Date(), 0), 18),
                                      setHours(setMinutes(new Date(), 30), 18),
                                      setHours(setMinutes(new Date(), 0), 19),
                                      setHours(setMinutes(new Date(), 30), 19),
                                      setHours(setMinutes(new Date(), 0), 20),
                                      setHours(setMinutes(new Date(), 30), 20),
                                      setHours(setMinutes(new Date(), 0), 21),
                                      setHours(setMinutes(new Date(), 30), 21),
                                      setHours(setMinutes(new Date(), 0), 22),
                                      setHours(setMinutes(new Date(), 30), 22),
                                      setHours(setMinutes(new Date(), 0), 23),
                                      setHours(setMinutes(new Date(), 30), 23),
                                    ]}
                                  />
                                </div>
                              ) : this.state.FBoutdoorClean ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    Location & Date
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div
                                    style={{
                                      width: "105px",
                                      height: "40px",
                                      color: "grey",
                                    }}
                                  >
                                    <Select
                                      styles={customStyles}
                                      onChange={this.handleOutdoorLoc}
                                      options={options}
                                      value={this.state.outdoorLoc}
                                      placeholder="Location..."
                                    />
                                  </div>
                                  <DatePicker
                                    selected={this.state.dateTimeOutdoor}
                                    value={this.state.dateTimeOutdoor}
                                    onChange={this.handleDateChangeOutdoor}
                                    minDate={addDays(new Date(), 2)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    customInput={<ExampleCustomInput />}
                                    dateFormat="MM/dd/yy"
                                    shouldCloseOnSelect={false}
                                    excludeTimes={[
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 30), 0),
                                      setHours(setMinutes(new Date(), 0), 1),
                                      setHours(setMinutes(new Date(), 30), 1),
                                      setHours(setMinutes(new Date(), 0), 2),
                                      setHours(setMinutes(new Date(), 30), 2),
                                      setHours(setMinutes(new Date(), 0), 3),
                                      setHours(setMinutes(new Date(), 30), 3),
                                      setHours(setMinutes(new Date(), 0), 4),
                                      setHours(setMinutes(new Date(), 30), 4),
                                      setHours(setMinutes(new Date(), 0), 5),
                                      setHours(setMinutes(new Date(), 30), 5),
                                      setHours(setMinutes(new Date(), 0), 6),
                                      setHours(setMinutes(new Date(), 30), 6),
                                      setHours(setMinutes(new Date(), 0), 7),
                                      setHours(setMinutes(new Date(), 30), 7),
                                      setHours(setMinutes(new Date(), 0), 8),
                                      setHours(setMinutes(new Date(), 30), 8),
                                      setHours(setMinutes(new Date(), 0), 9),
                                      setHours(setMinutes(new Date(), 30), 9),
                                      setHours(setMinutes(new Date(), 30), 14),
                                      setHours(setMinutes(new Date(), 0), 15),
                                      setHours(setMinutes(new Date(), 30), 15),
                                      setHours(setMinutes(new Date(), 0), 16),
                                      setHours(setMinutes(new Date(), 30), 16),
                                      setHours(setMinutes(new Date(), 0), 17),
                                      setHours(setMinutes(new Date(), 30), 17),
                                      setHours(setMinutes(new Date(), 0), 18),
                                      setHours(setMinutes(new Date(), 30), 18),
                                      setHours(setMinutes(new Date(), 0), 19),
                                      setHours(setMinutes(new Date(), 30), 19),
                                      setHours(setMinutes(new Date(), 0), 20),
                                      setHours(setMinutes(new Date(), 30), 20),
                                      setHours(setMinutes(new Date(), 0), 21),
                                      setHours(setMinutes(new Date(), 30), 21),
                                      setHours(setMinutes(new Date(), 0), 22),
                                      setHours(setMinutes(new Date(), 30), 22),
                                      setHours(setMinutes(new Date(), 0), 23),
                                      setHours(setMinutes(new Date(), 30), 23),
                                    ]}
                                  />
                                </div>
                              ) : this.state.DCoutdoorClean ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    Location & Date
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div
                                    style={{
                                      width: "105px",
                                      height: "40px",
                                      color: "grey",
                                    }}
                                  >
                                    <Select
                                      styles={customStyles}
                                      onChange={this.handleOutdoorLoc}
                                      options={options}
                                      value={this.state.outdoorLoc}
                                      placeholder="Location..."
                                    />
                                  </div>
                                  <DatePicker
                                    selected={this.state.dateTimeOutdoor}
                                    value={this.state.dateTimeOutdoor}
                                    onChange={this.handleDateChangeOutdoor}
                                    minDate={addDays(new Date(), 2)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    customInput={<ExampleCustomInput />}
                                    dateFormat="MM/dd/yy"
                                    shouldCloseOnSelect={false}
                                    excludeTimes={[
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 30), 0),
                                      setHours(setMinutes(new Date(), 0), 1),
                                      setHours(setMinutes(new Date(), 30), 1),
                                      setHours(setMinutes(new Date(), 0), 2),
                                      setHours(setMinutes(new Date(), 30), 2),
                                      setHours(setMinutes(new Date(), 0), 3),
                                      setHours(setMinutes(new Date(), 30), 3),
                                      setHours(setMinutes(new Date(), 0), 4),
                                      setHours(setMinutes(new Date(), 30), 4),
                                      setHours(setMinutes(new Date(), 0), 5),
                                      setHours(setMinutes(new Date(), 30), 5),
                                      setHours(setMinutes(new Date(), 0), 6),
                                      setHours(setMinutes(new Date(), 30), 6),
                                      setHours(setMinutes(new Date(), 0), 7),
                                      setHours(setMinutes(new Date(), 30), 7),
                                      setHours(setMinutes(new Date(), 0), 8),
                                      setHours(setMinutes(new Date(), 30), 8),
                                      setHours(setMinutes(new Date(), 0), 9),
                                      setHours(setMinutes(new Date(), 30), 9),
                                      setHours(setMinutes(new Date(), 30), 14),
                                      setHours(setMinutes(new Date(), 0), 15),
                                      setHours(setMinutes(new Date(), 30), 15),
                                      setHours(setMinutes(new Date(), 0), 16),
                                      setHours(setMinutes(new Date(), 30), 16),
                                      setHours(setMinutes(new Date(), 0), 17),
                                      setHours(setMinutes(new Date(), 30), 17),
                                      setHours(setMinutes(new Date(), 0), 18),
                                      setHours(setMinutes(new Date(), 30), 18),
                                      setHours(setMinutes(new Date(), 0), 19),
                                      setHours(setMinutes(new Date(), 30), 19),
                                      setHours(setMinutes(new Date(), 0), 20),
                                      setHours(setMinutes(new Date(), 30), 20),
                                      setHours(setMinutes(new Date(), 0), 21),
                                      setHours(setMinutes(new Date(), 30), 21),
                                      setHours(setMinutes(new Date(), 0), 22),
                                      setHours(setMinutes(new Date(), 30), 22),
                                      setHours(setMinutes(new Date(), 0), 23),
                                      setHours(setMinutes(new Date(), 30), 23),
                                    ]}
                                  />
                                </div>
                              ) : this.state.YCoutdoorClean ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    Location & Date
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div
                                    style={{
                                      width: "105px",
                                      height: "40px",
                                      color: "grey",
                                    }}
                                  >
                                    <Select
                                      styles={customStyles}
                                      onChange={this.handleOutdoorLoc}
                                      options={options}
                                      value={this.state.outdoorLoc}
                                      placeholder="Location..."
                                    />
                                  </div>
                                  <DatePicker
                                    selected={this.state.dateTimeOutdoor}
                                    value={this.state.dateTimeOutdoor}
                                    onChange={this.handleDateChangeOutdoor}
                                    minDate={addDays(new Date(), 2)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    customInput={<ExampleCustomInput />}
                                    dateFormat="MM/dd/yy"
                                    shouldCloseOnSelect={false}
                                    excludeTimes={[
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 30), 0),
                                      setHours(setMinutes(new Date(), 0), 1),
                                      setHours(setMinutes(new Date(), 30), 1),
                                      setHours(setMinutes(new Date(), 0), 2),
                                      setHours(setMinutes(new Date(), 30), 2),
                                      setHours(setMinutes(new Date(), 0), 3),
                                      setHours(setMinutes(new Date(), 30), 3),
                                      setHours(setMinutes(new Date(), 0), 4),
                                      setHours(setMinutes(new Date(), 30), 4),
                                      setHours(setMinutes(new Date(), 0), 5),
                                      setHours(setMinutes(new Date(), 30), 5),
                                      setHours(setMinutes(new Date(), 0), 6),
                                      setHours(setMinutes(new Date(), 30), 6),
                                      setHours(setMinutes(new Date(), 0), 7),
                                      setHours(setMinutes(new Date(), 30), 7),
                                      setHours(setMinutes(new Date(), 0), 8),
                                      setHours(setMinutes(new Date(), 30), 8),
                                      setHours(setMinutes(new Date(), 0), 9),
                                      setHours(setMinutes(new Date(), 30), 9),
                                      setHours(setMinutes(new Date(), 30), 14),
                                      setHours(setMinutes(new Date(), 0), 15),
                                      setHours(setMinutes(new Date(), 30), 15),
                                      setHours(setMinutes(new Date(), 0), 16),
                                      setHours(setMinutes(new Date(), 30), 16),
                                      setHours(setMinutes(new Date(), 0), 17),
                                      setHours(setMinutes(new Date(), 30), 17),
                                      setHours(setMinutes(new Date(), 0), 18),
                                      setHours(setMinutes(new Date(), 30), 18),
                                      setHours(setMinutes(new Date(), 0), 19),
                                      setHours(setMinutes(new Date(), 30), 19),
                                      setHours(setMinutes(new Date(), 0), 20),
                                      setHours(setMinutes(new Date(), 30), 20),
                                      setHours(setMinutes(new Date(), 0), 21),
                                      setHours(setMinutes(new Date(), 30), 21),
                                      setHours(setMinutes(new Date(), 0), 22),
                                      setHours(setMinutes(new Date(), 30), 22),
                                      setHours(setMinutes(new Date(), 0), 23),
                                      setHours(setMinutes(new Date(), 30), 23),
                                    ]}
                                  />
                                </div>
                              ) : (
                                <ServiceGridSplit>
                                  <ServiceTest>Yard Cleaning</ServiceTest>
                                  <Tooltip
                                    title="Yard Cleaning"
                                    aria-label="add"
                                  >
                                    <Fab2>
                                      <Wheelbarrow
                                        onClick={this.YCoutdoorClean.bind(this)}
                                        YCoutdoorClean={
                                          this.state.YCoutdoorClean
                                        }
                                      />
                                    </Fab2>
                                  </Tooltip>
                                </ServiceGridSplit>
                              )}

                              {this.state.YCoutdoorClean ? (
                                <div>
                                  <ServiceGridSplit>
                                    <ServiceTest>Yard Cleaning</ServiceTest>
                                    <Tooltip
                                      title="Yard Cleaning"
                                      aria-label="add"
                                    >
                                      <Fab2>
                                        <Wheelbarrow
                                          onClick={this.YCoutdoorClean.bind(
                                            this
                                          )}
                                          YCoutdoorClean={
                                            this.state.YCoutdoorClean
                                          }
                                        />
                                      </Fab2>
                                    </Tooltip>
                                  </ServiceGridSplit>
                                  <div style={{ "margin-top": "10px" }}>
                                    <FormInput
                                      id="fname"
                                      size="10"
                                      maxlength="7"
                                      type="text"
                                      name="fname"
                                      placeholder="Promo Code?"
                                      onKeyUp={this.handleYCoutdoorPromo}
                                      min="0"
                                      max="9999999"
                                      required
                                    />
                                  </div>
                                </div>
                              ) : this.state.FBoutdoorClean ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    How Often?{" "}
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div style={{ "margin-top": "0px" }}>
                                    <Checkbox
                                      toggle
                                      label="  Once"
                                      onChange={this.outdoorFBonce}
                                      disabled={outdoorFBonceStatus}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Weekly"
                                      onChange={this.outdoorFBweek}
                                      disabled={outdoorFBweekStatus}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Monthly"
                                      onChange={this.outdoorFBmonth}
                                      disabled={outdoorFBmonthStatus}
                                    />
                                    {this.state.outdoorFBweek ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          Weeks?
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="2"
                                            onChange={this.handleoutdoorFBweek.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.outdoorFBmonth ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          Months?
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="2"
                                            onChange={this.handleoutdoorFBmonth.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              ) : this.state.DCoutdoorClean ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    How Often?{" "}
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div style={{ "margin-top": "0px" }}>
                                    <Checkbox
                                      toggle
                                      label="  Once"
                                      onChange={this.outdoorDConce}
                                      disabled={outdoorDConceStatus}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Weekly"
                                      onChange={this.outdoorDCweek}
                                      disabled={outdoorDCweekStatus}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Monthly"
                                      onChange={this.outdoorDCmonth}
                                      disabled={outdoorDCmonthStatus}
                                    />
                                    {this.state.outdoorDCweek ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          Weeks?
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="2"
                                            onChange={this.handleoutdoorDCweek.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.outdoorDCmonth ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          Months?
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="2"
                                            onChange={this.handleoutdoorDCmonth.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              ) : this.state.LMoutdoorClean ? (
                                <ServiceGridSplit>
                                  <ServiceTest>Lawn Mowing</ServiceTest>
                                  <Tooltip title="Lawn Mowing" aria-label="add">
                                    <Fab2>
                                      <LogoContainer2
                                        src={LawnMowerSelect}
                                        onClick={this.LMoutdoorClean.bind(this)}
                                      />
                                    </Fab2>
                                  </Tooltip>
                                </ServiceGridSplit>
                              ) : (
                                <ServiceGridSplit>
                                  <ServiceTest>Lawn Mowing</ServiceTest>
                                  <Tooltip title="Lawn Mowing" aria-label="add">
                                    <Fab2>
                                      <LogoContainer2
                                        src={LawnMower}
                                        onClick={this.LMoutdoorClean.bind(this)}
                                      />
                                    </Fab2>
                                  </Tooltip>
                                </ServiceGridSplit>
                              )}

                              {this.state.YCoutdoorClean ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    How Often?{" "}
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div style={{ "margin-top": "0px" }}>
                                    <Checkbox
                                      toggle
                                      label="  Once"
                                      onChange={this.outdoorYConce}
                                      disabled={outdoorYConceStatus}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Weekly"
                                      onChange={this.outdoorYCweek}
                                      disabled={outdoorYCweekStatus}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Monthly"
                                      onChange={this.outdoorYCmonth}
                                      disabled={outdoorYCmonthStatus}
                                    />
                                    {this.state.outdoorYCweek ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          Weeks?
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="2"
                                            onChange={this.handleoutdoorYCweek.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.outdoorYCmonth ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          Months?
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="2"
                                            onChange={this.handleoutdoorYCmonth.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              ) : this.state.LMoutdoorClean ? (
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    How Often?{" "}
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div style={{ "margin-top": "0px" }}>
                                    <Checkbox
                                      toggle
                                      label="  Once"
                                      onChange={this.outdoorLMonce}
                                      disabled={outdoorLMonceStatus}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Weekly"
                                      onChange={this.outdoorLMweek}
                                      disabled={outdoorLMweekStatus}
                                    />
                                    <Checkbox
                                      toggle
                                      label="  Monthly"
                                      onChange={this.outdoorLMmonth}
                                      disabled={outdoorLMmonthStatus}
                                    />
                                    {this.state.outdoorLMweek ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          Weeks?
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="2"
                                            onChange={this.handleoutdoorLMweek.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : this.state.outdoorLMmonth ? (
                                      <div>
                                        <ServiceTest>
                                          {" "}
                                          Months?
                                          <span
                                            style={{
                                              color: "red",
                                              fontSize: "14px",
                                            }}
                                          >
                                            *
                                          </span>
                                        </ServiceTest>
                                        <Form>
                                          <FormInput
                                            id="fname"
                                            size="10"
                                            type="number"
                                            name="fname"
                                            placeholder="2"
                                            onChange={this.handleoutdoorLMmonth.bind(
                                              this
                                            )}
                                            min="2"
                                            max="10"
                                            required
                                          />
                                        </Form>
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              ) : this.state.DCoutdoorClean ? (
                                <div>
                                  <div>
                                    <ServiceTest>
                                      {" "}
                                      Area Size?{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontSize: "14px",
                                        }}
                                      >
                                        *
                                      </span>
                                    </ServiceTest>
                                    <select
                                      id="areaSize"
                                      onChange={this.handleDCarea}
                                      style={{
                                        color: "grey",
                                        cursor: "pointer",
                                        height: "22px",
                                        "text-align": "center",
                                        "margin-top": "2px",
                                      }}
                                    >
                                      <option value="0">Select Size</option>
                                      <option value="0-20 m2">0-20 m2</option>
                                      <option value="20-75 m2">20-75 m2</option>
                                      <option value="75-150 m2">
                                        75-150 m2
                                      </option>
                                      <option value="150-250 m2">
                                        150-250 m2
                                      </option>
                                    </select>
                                  </div>
                                  <ServiceTest
                                    style={{ "margin-bottom": "-8px" }}
                                  >
                                    {" "}
                                    Or{" "}
                                  </ServiceTest>
                                  <Form>
                                    <FormInput
                                      id="fname"
                                      size="10"
                                      type="number"
                                      name="fname"
                                      placeholder="Length (m)"
                                      onChange={this.handleDCareaL.bind(this)}
                                      min="0"
                                      max="9999999"
                                      required
                                    />

                                    <FormInput
                                      id="fname"
                                      size="10"
                                      type="number"
                                      name="fname"
                                      placeholder="Width (m)"
                                      onChange={this.handleDCareaW.bind(this)}
                                      min="0"
                                      max="9999999"
                                      required
                                    />
                                  </Form>
                                </div>
                              ) : (
                                <div>
                                  <ServiceGridSplit>
                                    <ServiceTest>Flower Bedding</ServiceTest>
                                    <Tooltip
                                      title="Flower Bedding"
                                      aria-label="add"
                                    >
                                      <Fab2>
                                        <Flowers
                                          onClick={this.FBoutdoorClean.bind(
                                            this
                                          )}
                                          FBoutdoorClean={
                                            this.state.FBoutdoorClean
                                          }
                                        />
                                      </Fab2>
                                    </Tooltip>
                                  </ServiceGridSplit>
                                  {this.state.FBoutdoorClean ? (
                                    <div style={{ "margin-top": "10px" }}>
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        maxlength="7"
                                        type="text"
                                        name="fname"
                                        placeholder="Promo Code?"
                                        onKeyUp={this.handleFBoutdoorPromo}
                                        min="0"
                                        max="9999999"
                                        required
                                      />
                                    </div>
                                  ) : null}
                                </div>
                              )}

                              {this.state.YCoutdoorClean ? (
                                <div>
                                  <div>
                                    <ServiceTest>
                                      {" "}
                                      Area Size?{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontSize: "14px",
                                        }}
                                      >
                                        *
                                      </span>
                                    </ServiceTest>
                                    <select
                                      id="areaSize"
                                      onChange={this.handleYCarea}
                                      style={{
                                        color: "grey",
                                        cursor: "pointer",
                                        height: "22px",
                                        "text-align": "center",
                                        "margin-top": "2px",
                                      }}
                                    >
                                      <option value="0">Select Size</option>
                                      <option value="0-20 m2">0-20 m2</option>
                                      <option value="20-75 m2">20-75 m2</option>
                                      <option value="75-150 m2">
                                        75-150 m2
                                      </option>
                                      <option value="150-250 m2">
                                        150-250 m2
                                      </option>
                                    </select>
                                  </div>
                                  <ServiceTest
                                    style={{ "margin-bottom": "-8px" }}
                                  >
                                    {" "}
                                    Or{" "}
                                  </ServiceTest>
                                  <Form>
                                    <FormInput
                                      id="fname"
                                      size="10"
                                      type="number"
                                      name="fname"
                                      placeholder="Length (m)"
                                      onChange={this.handleYCareaL.bind(this)}
                                      min="0"
                                      max="9999999"
                                      required
                                    />

                                    <FormInput
                                      id="fname"
                                      size="10"
                                      type="number"
                                      name="fname"
                                      placeholder="Width (m)"
                                      onChange={this.handleYCareaW.bind(this)}
                                      min="0"
                                      max="9999999"
                                      required
                                    />
                                  </Form>
                                </div>
                              ) : this.state.LMoutdoorClean ? (
                                <div>
                                  <div>
                                    <ServiceTest>
                                      {" "}
                                      Area Size?{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontSize: "14px",
                                        }}
                                      >
                                        *
                                      </span>
                                    </ServiceTest>
                                    <select
                                      id="areaSize"
                                      onChange={this.handleLMarea}
                                      style={{
                                        color: "grey",
                                        cursor: "pointer",
                                        height: "22px",
                                        "text-align": "center",
                                        "margin-top": "2px",
                                      }}
                                    >
                                      <option value="0">Select Size</option>
                                      <option value="0-20 m2">0-20 m2</option>
                                      <option value="20-75 m2">20-75 m2</option>
                                      <option value="75-150 m2">
                                        75-150 m2
                                      </option>
                                      <option value="150-250 m2">
                                        150-250 m2
                                      </option>
                                    </select>
                                  </div>
                                  <ServiceTest
                                    style={{ "margin-bottom": "-8px" }}
                                  >
                                    {" "}
                                    Or{" "}
                                  </ServiceTest>
                                  <Form>
                                    <FormInput
                                      id="fname"
                                      size="10"
                                      type="number"
                                      name="fname"
                                      placeholder="Length (m)"
                                      onChange={this.handleLMareaL.bind(this)}
                                      min="0"
                                      max="9999999"
                                      required
                                    />

                                    <FormInput
                                      id="fname"
                                      size="10"
                                      type="number"
                                      name="fname"
                                      placeholder="Width (m)"
                                      onChange={this.handleLMareaW.bind(this)}
                                      min="0"
                                      max="9999999"
                                      required
                                    />
                                  </Form>
                                </div>
                              ) : this.state.FBoutdoorClean ? (
                                <div>
                                  <div>
                                    <ServiceTest>
                                      {" "}
                                      Area Size?{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontSize: "14px",
                                        }}
                                      >
                                        *
                                      </span>
                                    </ServiceTest>
                                    <select
                                      id="areaSize"
                                      onChange={this.handleFBarea}
                                      style={{
                                        color: "grey",
                                        cursor: "pointer",
                                        height: "22px",
                                        "text-align": "center",
                                        "margin-top": "2px",
                                      }}
                                    >
                                      <option value="0">Select Size</option>
                                      <option value="0-20 m2">0-20 m2</option>
                                      <option value="20-75 m2">20-75 m2</option>
                                      <option value="75-150 m2">
                                        75-150 m2
                                      </option>
                                      <option value="150-250 m2">
                                        150-250 m2
                                      </option>
                                    </select>
                                  </div>
                                  <ServiceTest
                                    style={{ "margin-bottom": "-8px" }}
                                  >
                                    {" "}
                                    Or{" "}
                                  </ServiceTest>
                                  <Form>
                                    <FormInput
                                      id="fname"
                                      size="10"
                                      type="number"
                                      name="fname"
                                      placeholder="Length (m)"
                                      onChange={this.handleFBareaL.bind(this)}
                                      min="0"
                                      max="9999999"
                                      required
                                    />

                                    <FormInput
                                      id="fname"
                                      size="10"
                                      type="number"
                                      name="fname"
                                      placeholder="Width (m)"
                                      onChange={this.handleFBareaW.bind(this)}
                                      min="0"
                                      max="9999999"
                                      required
                                    />
                                  </Form>
                                </div>
                              ) : (
                                <div>
                                  <ServiceGridSplit>
                                    <ServiceTest>Driveway Cleaning</ServiceTest>
                                    <Tooltip
                                      title="Driveway Cleaning"
                                      aria-label="add"
                                    >
                                      <Fab2>
                                        <Driveway
                                          onClick={this.DCoutdoorClean.bind(
                                            this
                                          )}
                                          DCoutdoorClean={
                                            this.state.DCoutdoorClean
                                          }
                                        />
                                      </Fab2>
                                    </Tooltip>
                                  </ServiceGridSplit>
                                  {this.state.DCoutdoorClean ? (
                                    <div style={{ "margin-top": "10px" }}>
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        maxlength="7"
                                        type="text"
                                        name="fname"
                                        placeholder="Promo Code?"
                                        onKeyUp={
                                          this.handleIndoorEndTenencyPromo
                                        }
                                        min="0"
                                        max="9999999"
                                        required
                                      />
                                    </div>
                                  ) : null}
                                </div>
                              )}
                            </Options4>

                            <ContentTitle>
                              {" "}
                              Enter Details
                              <span>
                                <hr width="300" />
                              </span>
                            </ContentTitle>
                            <EnterDetails>
                              <select
                                id="areaSize"
                                onChange={this.handleOutdoorPropertType}
                                style={{
                                  color: "grey",
                                  cursor: "pointer",
                                  height: "22px",
                                  "text-align": "center",
                                  "margin-top": "2px",
                                }}
                              >
                                <option value="0">Property Type</option>
                                <option value="Residential">Residential</option>
                                <option value="Commercial">Commercial</option>
                              </select>

                              <select
                                id="areaSize"
                                onChange={this.handleOutdoorPropertKind}
                                style={{
                                  color: "grey",
                                  cursor: "pointer",
                                  height: "22px",
                                  "text-align": "center",
                                  "margin-top": "2px",
                                }}
                              >
                                <option value="0">Property Kind</option>
                                <option value="House">House</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Townhouse">Townhouse</option>
                              </select>

                              <select
                                id="areaSize"
                                onChange={this.handleOutdoorWorkYard}
                                style={{
                                  color: "grey",
                                  cursor: "pointer",
                                  height: "22px",
                                  "text-align": "center",
                                  "margin-top": "2px",
                                }}
                              >
                                <option value="0">Work Area</option>
                                <option value="Whole">Whole Yard</option>
                                <option value="Front">Front Yard</option>
                                <option value="Side">Side Yard</option>
                                <option value="Side">Back Yard</option>
                              </select>
                            </EnterDetails>
                            <ContentTitle>
                              {" "}
                              Service Details & Costs
                              <span>
                                <hr width="300" />
                              </span>
                            </ContentTitle>
                            <Options3>
                              <div style={{ "margin-left": "2px" }}>
                                <Message2>Details</Message2>
                                <EventLog logs={this.state.events5} />
                                <Message>
                                  {this.state.OutdoorPropertType !== ""
                                    ? this.state.OutdoorPropertType
                                    : null}
                                </Message>
                                <Message>
                                  {this.state.OutdoorPropertKind !== ""
                                    ? this.state.OutdoorPropertKind
                                    : null}
                                </Message>
                                {this.state.events6.length !== 0 ? (
                                  <Message>
                                    Date :{" "}
                                    {y.replace(
                                      "GMT+0200 (South Africa Standard Time)",
                                      ""
                                    )}
                                  </Message>
                                ) : null}
                              </div>
                              <div>
                                <Message2>Services</Message2>
                                <Message>{outDoorServiceRequired}</Message>
                                <Message>
                                  {this.state.OutdoorWorkYard !== ""
                                    ? this.state.OutdoorWorkYard
                                    : null}
                                </Message>

                                {this.state.YCoutdoorClean ? (
                                  (this.state.YCarea[0] === undefined ||
                                    this.state.YCarea[0] === "Area : 0") &&
                                  OutdoorAreaLW !== 0 ? (
                                    <Message>
                                      Size : {OutdoorAreaLW}{" "}
                                      <span
                                        style={{ "text-transform": "none" }}
                                      >
                                        m2
                                      </span>
                                    </Message>
                                  ) : (
                                    <EventLog logs={this.state.YCarea} />
                                  )
                                ) : (
                                  ""
                                )}

                                {this.state.LMoutdoorClean ? (
                                  (this.state.LMarea[0] === undefined ||
                                    this.state.LMarea[0] === "Area : 0") &&
                                  OutdoorAreaLW !== 0 ? (
                                    <Message>
                                      Size : {OutdoorAreaLW}{" "}
                                      <span
                                        style={{ "text-transform": "none" }}
                                      >
                                        m2
                                      </span>
                                    </Message>
                                  ) : (
                                    <EventLog logs={this.state.LMarea} />
                                  )
                                ) : (
                                  ""
                                )}

                                {this.state.FBoutdoorClean ? (
                                  (this.state.FBarea[0] === undefined ||
                                    this.state.FBarea[0] === "Area : 0") &&
                                  OutdoorAreaLW !== 0 ? (
                                    <Message>
                                      Size : {OutdoorAreaLW}{" "}
                                      <span
                                        style={{ "text-transform": "none" }}
                                      >
                                        m2
                                      </span>
                                    </Message>
                                  ) : (
                                    <EventLog logs={this.state.FBarea} />
                                  )
                                ) : (
                                  ""
                                )}

                                {this.state.DCoutdoorClean ? (
                                  (this.state.DCarea[0] === undefined ||
                                    this.state.DCarea[0] === "Area : 0") &&
                                  OutdoorAreaLW !== 0 ? (
                                    <Message>
                                      Size : {OutdoorAreaLW}{" "}
                                      <span
                                        style={{ "text-transform": "none" }}
                                      >
                                        m2
                                      </span>
                                    </Message>
                                  ) : (
                                    <EventLog logs={this.state.DCarea} />
                                  )
                                ) : (
                                  ""
                                )}
                              </div>
                              <div>
                                <Message2>Costs</Message2>
                                {this.state.YCoutdoorClean ||
                                this.state.FBoutdoorClean ||
                                this.state.DCoutdoorClean ||
                                this.state.LMoutdoorClean ? (
                                  <div>
                                    {this.state.outdoorYConce ||
                                    this.state.outdoorFBonce ||
                                    this.state.outdoorDConce ||
                                    this.state.outdoorLMonce ? (
                                      <Message>
                                        Total : R {totalOutdoor.toFixed(2)}
                                      </Message>
                                    ) : this.state.outdoorYCweek ||
                                      this.state.outdoorFBweek ||
                                      this.state.outdoorDCweek ||
                                      this.state.outdoorLMweek ? (
                                      <div>
                                        <Message>
                                          Total : R {totalOutdoor.toFixed(2)}
                                        </Message>
                                        <Message>Discount : 10%</Message>
                                      </div>
                                    ) : this.state.outdoorYCmonth ||
                                      this.state.outdoorFBmonth ||
                                      this.state.outdoorDCmonth ||
                                      this.state.outdoorLMmonth ? (
                                      <div>
                                        <Message>
                                          Total : R {totalOutdoor.toFixed(2)}
                                        </Message>
                                        <Message>Discount : 5%</Message>
                                      </div>
                                    ) : null}
                                  </div>
                                ) : null}
                              </div>
                            </Options3>
                            <p style={{ textAlign: "center" }}>
                              <CustomButton
                                onClick={this.selectOutdoor.bind(this)}
                                style={{
                                  "margin-top": "12.5px",
                                  background: "#e91e63",
                                }}
                                size="sm"
                              >
                                Book Service
                              </CustomButton>
                            </p>
                          </div>
                        ),
                      },
                      {
                        tabButton: "POOL",
                        tabIcon: FaSwimmingPool,
                        tabContent: (
                          <div>
                            <ContentTitle>
                              {" "}
                              Select Required Services{" "}
                              <Info
                                onClick={this.showPoolServicesInfo.bind(this)}
                                showPoolServicesInfo={
                                  this.state.showPoolServicesInfo
                                }
                              />
                              <span>
                                <hr width="300" />
                              </span>
                            </ContentTitle>

                            {!this.state.PoolMaint && !this.state.PoolClean ? (
                              <Options3p1>
                                <ServiceGridSplit>
                                  <ServiceTest> Pool Cleaning</ServiceTest>
                                  <Tooltip
                                    title="Pool Cleaning"
                                    aria-label="add"
                                  >
                                    <Fab2>
                                      <Installations
                                        onClick={this.genPoolClean.bind(this)}
                                        PoolClean={this.state.PoolClean}
                                      />
                                    </Fab2>
                                  </Tooltip>{" "}
                                </ServiceGridSplit>
                                <ServiceGridSplit>
                                  <ServiceTest>Pool Maintanance</ServiceTest>
                                  <Tooltip
                                    title="Pool Maintanance"
                                    aria-label="add"
                                  >
                                    <Fab2>
                                      <Maintanance
                                        onClick={this.periodMaint.bind(this)}
                                        PoolMaint={this.state.PoolMaint}
                                      />
                                    </Fab2>
                                  </Tooltip>
                                </ServiceGridSplit>
                                <ServiceGridSplit>
                                  <ServiceTest>
                                    Repairs - Coming Soon
                                  </ServiceTest>
                                  <Tooltip
                                    title="Pool Repairs - Coming Soon"
                                    aria-label="add"
                                  >
                                    <Fab2>
                                      <ServicePool
                                        onClick={this.perPoolRepair.bind(this)}
                                        PoolRepair={this.state.PoolRepair}
                                      />
                                    </Fab2>
                                  </Tooltip>
                                </ServiceGridSplit>
                              </Options3p1>
                            ) : this.state.PoolClean ? (
                              <Options4>
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    Location & Date
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div
                                    style={{
                                      width: "105px",
                                      height: "40px",
                                      color: "grey",
                                    }}
                                  >
                                    <Select
                                      styles={customStyles}
                                      onChange={this.handleIndoorLoc}
                                      options={options}
                                      value={this.state.genCleanloc}
                                      placeholder="Location..."
                                    />
                                  </div>
                                  <DatePicker
                                    selected={this.state.dateTime}
                                    value={this.state.dateTime}
                                    onChange={this.handleChange2}
                                    minDate={addDays(new Date(), 2)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    customInput={<ExampleCustomInput />}
                                    dateFormat="MM/dd/yy"
                                    shouldCloseOnSelect={false}
                                    excludeTimes={[
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 30), 0),
                                      setHours(setMinutes(new Date(), 0), 1),
                                      setHours(setMinutes(new Date(), 30), 1),
                                      setHours(setMinutes(new Date(), 0), 2),
                                      setHours(setMinutes(new Date(), 30), 2),
                                      setHours(setMinutes(new Date(), 0), 3),
                                      setHours(setMinutes(new Date(), 30), 3),
                                      setHours(setMinutes(new Date(), 0), 4),
                                      setHours(setMinutes(new Date(), 30), 4),
                                      setHours(setMinutes(new Date(), 0), 5),
                                      setHours(setMinutes(new Date(), 30), 5),
                                      setHours(setMinutes(new Date(), 0), 6),
                                      setHours(setMinutes(new Date(), 30), 6),
                                      setHours(setMinutes(new Date(), 0), 7),
                                      setHours(setMinutes(new Date(), 30), 7),
                                      setHours(setMinutes(new Date(), 0), 8),
                                      setHours(setMinutes(new Date(), 30), 8),
                                      setHours(setMinutes(new Date(), 0), 9),
                                      setHours(setMinutes(new Date(), 30), 9),
                                      setHours(setMinutes(new Date(), 30), 14),
                                      setHours(setMinutes(new Date(), 0), 15),
                                      setHours(setMinutes(new Date(), 30), 15),
                                      setHours(setMinutes(new Date(), 0), 16),
                                      setHours(setMinutes(new Date(), 30), 16),
                                      setHours(setMinutes(new Date(), 0), 17),
                                      setHours(setMinutes(new Date(), 30), 17),
                                      setHours(setMinutes(new Date(), 0), 18),
                                      setHours(setMinutes(new Date(), 30), 18),
                                      setHours(setMinutes(new Date(), 0), 19),
                                      setHours(setMinutes(new Date(), 30), 19),
                                      setHours(setMinutes(new Date(), 0), 20),
                                      setHours(setMinutes(new Date(), 30), 20),
                                      setHours(setMinutes(new Date(), 0), 21),
                                      setHours(setMinutes(new Date(), 30), 21),
                                      setHours(setMinutes(new Date(), 0), 22),
                                      setHours(setMinutes(new Date(), 30), 22),
                                      setHours(setMinutes(new Date(), 0), 23),
                                      setHours(setMinutes(new Date(), 30), 23),
                                    ]}
                                  />
                                </div>
                                <div>
                                  <ServiceGridSplit>
                                    <ServiceTest> Pool Cleaning</ServiceTest>
                                    <Tooltip
                                      title="Pool Cleaning"
                                      aria-label="add"
                                    >
                                      <Fab2>
                                        <Installations
                                          onClick={this.genPoolClean.bind(this)}
                                          PoolClean={this.state.PoolClean}
                                        />
                                      </Fab2>
                                    </Tooltip>{" "}
                                  </ServiceGridSplit>
                                  <div style={{ "margin-top": "10px" }}>
                                    <FormInput
                                      id="fname"
                                      size="10"
                                      maxlength="7"
                                      type="text"
                                      name="fname"
                                      placeholder="Promo Code?"
                                      onKeyUp={this.handlePoolGenCleaningPromo}
                                      min="0"
                                      max="9999999"
                                      required
                                    />
                                  </div>
                                </div>
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    How Often?{" "}
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <Checkbox
                                    toggle
                                    label="  Once"
                                    onChange={this.poolPConce}
                                    disabled={poolPConceStatus}
                                  />
                                  <Checkbox
                                    toggle
                                    label="  Weekly"
                                    onChange={this.poolPCweek}
                                    disabled={poolPCweekStatus}
                                  />
                                  <Checkbox
                                    toggle
                                    label="  Monthly"
                                    onChange={this.poolPCmonth}
                                    disabled={poolPCmonthStatus}
                                  />
                                  {this.state.poolPCweek ? (
                                    <div>
                                      <ServiceTest>
                                        {" "}
                                        Weeks?
                                        <span
                                          style={{
                                            color: "red",
                                            fontSize: "14px",
                                          }}
                                        >
                                          *
                                        </span>
                                      </ServiceTest>
                                      <Form>
                                        <FormInput
                                          id="fname"
                                          size="10"
                                          type="number"
                                          name="fname"
                                          placeholder="2"
                                          onChange={this.handlepoolPCweek.bind(
                                            this
                                          )}
                                          min="2"
                                          max="10"
                                          required
                                        />
                                      </Form>
                                    </div>
                                  ) : this.state.poolPCmonth ? (
                                    <div>
                                      <ServiceTest>
                                        {" "}
                                        Months?
                                        <span
                                          style={{
                                            color: "red",
                                            fontSize: "14px",
                                          }}
                                        >
                                          *
                                        </span>
                                      </ServiceTest>
                                      <Form>
                                        <FormInput
                                          id="fname"
                                          size="10"
                                          type="number"
                                          name="fname"
                                          placeholder="2"
                                          onChange={this.handlepoolPCmonth.bind(
                                            this
                                          )}
                                          min="2"
                                          max="10"
                                          required
                                        />
                                      </Form>
                                    </div>
                                  ) : null}
                                </div>

                                <div>
                                  <ServiceTest>
                                    {" "}
                                    Pool Dimensions{" "}
                                    <Info2
                                      onClick={this.showPoolShapes.bind(this)}
                                      showPoolShapes={this.state.showPoolShapes}
                                    />
                                  </ServiceTest>
                                  <select
                                    id="areaSize"
                                    onChange={this.handlePoolShapePCSelect}
                                    style={{
                                      color: "grey",
                                      cursor: "pointer",
                                      height: "22px",
                                      "text-align": "center",
                                      "margin-top": "2px",
                                    }}
                                  >
                                    <option value="0">Shape</option>
                                    <option value="1">Rectangular</option>
                                    <option value="2">Circular</option>
                                    <option value="3">Triangle</option>
                                    <option value="4">Irregular</option>
                                  </select>

                                  {this.state.poolShapePCSelect === "0" ||
                                  this.state.poolShapePCSelect === "1" ? (
                                    <Form>
                                      <FormInput
                                        id="pcL"
                                        size="10"
                                        type="number"
                                        name="pcL"
                                        placeholder="Length (m)"
                                        onChange={this.handlePoolRectanglePCvolumeL.bind(
                                          this
                                        )}
                                        min="0"
                                        max="20"
                                        required
                                      />

                                      <FormInput
                                        id="pcW"
                                        size="10"
                                        type="number"
                                        name="pcW"
                                        placeholder="Width (m)"
                                        onChange={this.handlePoolRectanglePCvolumeW.bind(
                                          this
                                        )}
                                        min="0"
                                        max="20"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Deep (m)"
                                        onChange={this.handlePoolRectanglePCvolumeD.bind(
                                          this
                                        )}
                                        min="0"
                                        max="3"
                                        required
                                      />
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Shallow (m)"
                                        onChange={this.handlePoolRectanglePCvolumeS.bind(
                                          this
                                        )}
                                        min="0"
                                        max="2"
                                        required
                                      />
                                    </Form>
                                  ) : this.state.poolShapePCSelect === "2" ? (
                                    <Form>
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Radius (m)"
                                        onChange={this.handlePoolCircularPCvolumeR.bind(
                                          this
                                        )}
                                        min="0"
                                        max="10"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Deep (m)"
                                        onChange={this.handlePoolCircularPCvolumeD.bind(
                                          this
                                        )}
                                        min="0"
                                        max="3"
                                        required
                                      />
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Shallow (m)"
                                        onChange={this.handlePoolCircularPCvolumeS.bind(
                                          this
                                        )}
                                        min="0"
                                        max="2"
                                        required
                                      />
                                    </Form>
                                  ) : this.state.poolShapePCSelect === "3" ? (
                                    <Form>
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Base (m)"
                                        onChange={this.handlePoolTrianglePCvolumeB.bind(
                                          this
                                        )}
                                        min="0"
                                        max="20"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Height (m)"
                                        onChange={this.handlePoolTrianglePCvolumeH.bind(
                                          this
                                        )}
                                        min="0"
                                        max="20"
                                        required
                                      />
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Deep (m)"
                                        onChange={this.handlePoolTrianglePCvolumeD.bind(
                                          this
                                        )}
                                        min="0"
                                        max="3"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Shallow (m)"
                                        onChange={this.handlePoolTrianglePCvolumeS.bind(
                                          this
                                        )}
                                        min="0"
                                        max="2"
                                        required
                                      />
                                    </Form>
                                  ) : this.state.poolShapePCSelect === "4" ? (
                                    <Form>
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Length (m)"
                                        onChange={this.handlePoolIrregularPCvolumeL.bind(
                                          this
                                        )}
                                        min="0"
                                        max="20"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Large Diameter (m)"
                                        onChange={this.handlePoolIrregularPCvolumeA.bind(
                                          this
                                        )}
                                        min="0"
                                        max="20"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Small Diameter (m)"
                                        onChange={this.handlePoolIrregularPCvolumeB.bind(
                                          this
                                        )}
                                        min="0"
                                        max="20"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Deep (m)"
                                        onChange={this.handlePoolIrregularPCvolumeD.bind(
                                          this
                                        )}
                                        min="0"
                                        max="3"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Shallow (m)"
                                        onChange={this.handlePoolIrregularPCvolumeS.bind(
                                          this
                                        )}
                                        min="0"
                                        max="2"
                                        required
                                      />
                                    </Form>
                                  ) : null}
                                </div>
                              </Options4>
                            ) : this.state.PoolMaint ? (
                              <Options4>
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    Location & Date
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <div
                                    style={{
                                      width: "105px",
                                      height: "40px",
                                      color: "grey",
                                    }}
                                  >
                                    <Select
                                      styles={customStyles}
                                      onChange={this.handleIndoorLoc}
                                      options={options}
                                      value={this.state.genCleanloc}
                                      placeholder="Location..."
                                    />
                                  </div>
                                  <DatePicker
                                    selected={this.state.dateTime}
                                    value={this.state.dateTime}
                                    onChange={this.handleChange2}
                                    minDate={addDays(new Date(), 2)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    customInput={<ExampleCustomInput />}
                                    dateFormat="MM/dd/yy"
                                    shouldCloseOnSelect={false}
                                    excludeTimes={[
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 0), 0),
                                      setHours(setMinutes(new Date(), 30), 0),
                                      setHours(setMinutes(new Date(), 0), 1),
                                      setHours(setMinutes(new Date(), 30), 1),
                                      setHours(setMinutes(new Date(), 0), 2),
                                      setHours(setMinutes(new Date(), 30), 2),
                                      setHours(setMinutes(new Date(), 0), 3),
                                      setHours(setMinutes(new Date(), 30), 3),
                                      setHours(setMinutes(new Date(), 0), 4),
                                      setHours(setMinutes(new Date(), 30), 4),
                                      setHours(setMinutes(new Date(), 0), 5),
                                      setHours(setMinutes(new Date(), 30), 5),
                                      setHours(setMinutes(new Date(), 0), 6),
                                      setHours(setMinutes(new Date(), 30), 6),
                                      setHours(setMinutes(new Date(), 0), 7),
                                      setHours(setMinutes(new Date(), 30), 7),
                                      setHours(setMinutes(new Date(), 0), 8),
                                      setHours(setMinutes(new Date(), 30), 8),
                                      setHours(setMinutes(new Date(), 0), 9),
                                      setHours(setMinutes(new Date(), 30), 9),
                                      setHours(setMinutes(new Date(), 30), 14),
                                      setHours(setMinutes(new Date(), 0), 15),
                                      setHours(setMinutes(new Date(), 30), 15),
                                      setHours(setMinutes(new Date(), 0), 16),
                                      setHours(setMinutes(new Date(), 30), 16),
                                      setHours(setMinutes(new Date(), 0), 17),
                                      setHours(setMinutes(new Date(), 30), 17),
                                      setHours(setMinutes(new Date(), 0), 18),
                                      setHours(setMinutes(new Date(), 30), 18),
                                      setHours(setMinutes(new Date(), 0), 19),
                                      setHours(setMinutes(new Date(), 30), 19),
                                      setHours(setMinutes(new Date(), 0), 20),
                                      setHours(setMinutes(new Date(), 30), 20),
                                      setHours(setMinutes(new Date(), 0), 21),
                                      setHours(setMinutes(new Date(), 30), 21),
                                      setHours(setMinutes(new Date(), 0), 22),
                                      setHours(setMinutes(new Date(), 30), 22),
                                      setHours(setMinutes(new Date(), 0), 23),
                                      setHours(setMinutes(new Date(), 30), 23),
                                    ]}
                                  />
                                </div>

                                <div>
                                  <ServiceGridSplit>
                                    <ServiceTest>Pool Maintanance</ServiceTest>
                                    <Tooltip
                                      title="Pool Maintanance"
                                      aria-label="add"
                                    >
                                      <Fab2>
                                        <Maintanance
                                          onClick={this.periodMaint.bind(this)}
                                          PoolMaint={this.state.PoolMaint}
                                        />
                                      </Fab2>
                                    </Tooltip>
                                  </ServiceGridSplit>
                                  <FormInput
                                    id="fname"
                                    size="10"
                                    maxlength="7"
                                    type="text"
                                    name="fname"
                                    placeholder="Prome Code?"
                                    onKeyUp={this.handlePoolMaintanancePromo}
                                    min="0"
                                    max="9999999"
                                    required
                                  />
                                </div>
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    How Often?{" "}
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      *
                                    </span>
                                  </ServiceTest>
                                  <Checkbox
                                    toggle
                                    label="  Monthly"
                                    onChange={this.poolPMmonth}
                                    disabled={poolPMmonthStatus}
                                  />
                                  <Checkbox
                                    toggle
                                    label="  Quaterly"
                                    onChange={this.poolPMquarter}
                                    disabled={poolPMquarterStatus}
                                  />
                                  <Checkbox
                                    toggle
                                    label="  Yearly"
                                    onChange={this.poolPMyear}
                                    disabled={poolPMyearStatus}
                                  />
                                  {this.state.poolPMmonth ? (
                                    <div>
                                      <ServiceTest>
                                        {" "}
                                        Months?
                                        <span
                                          style={{
                                            color: "red",
                                            fontSize: "14px",
                                          }}
                                        >
                                          *
                                        </span>
                                      </ServiceTest>
                                      <Form>
                                        <FormInput
                                          id="fname"
                                          size="10"
                                          type="number"
                                          name="fname"
                                          placeholder="2"
                                          onChange={this.handlepoolPMmonth.bind(
                                            this
                                          )}
                                          min="2"
                                          max="10"
                                          required
                                        />
                                      </Form>
                                    </div>
                                  ) : this.state.poolPMquarter ? (
                                    <div>
                                      <ServiceTest>
                                        {" "}
                                        No. of Quarters
                                        <span
                                          style={{
                                            color: "red",
                                            fontSize: "14px",
                                          }}
                                        >
                                          *
                                        </span>
                                      </ServiceTest>
                                      <Form>
                                        <FormInput
                                          id="fname"
                                          size="10"
                                          type="number"
                                          name="fname"
                                          placeholder="2"
                                          onChange={this.handlepoolPMquarter.bind(
                                            this
                                          )}
                                          min="2"
                                          max="4"
                                          required
                                        />
                                      </Form>
                                    </div>
                                  ) : null}
                                </div>
                                <div>
                                  <ServiceTest>
                                    {" "}
                                    Pool Dimensions{" "}
                                    <Info2
                                      onClick={this.showPoolShapes.bind(this)}
                                      showPoolShapes={this.state.showPoolShapes}
                                    />
                                  </ServiceTest>
                                  <select
                                    id="areaSize"
                                    onChange={this.handlePoolShapePMSelect}
                                    style={{
                                      color: "grey",
                                      cursor: "pointer",
                                      height: "22px",
                                      "text-align": "center",
                                      "margin-top": "2px",
                                    }}
                                  >
                                    <option value="0">Shape</option>
                                    <option value="1">Rectangular</option>
                                    <option value="2">Circular</option>
                                    <option value="3">Triangle</option>
                                    <option value="4">Irregular</option>
                                  </select>

                                  {this.state.poolShapePMSelect === "0" ||
                                  this.state.poolShapePMSelect === "1" ? (
                                    <Form>
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Length (m)"
                                        onChange={this.handlePoolRectanglePMvolumeL.bind(
                                          this
                                        )}
                                        min="0"
                                        max="20"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Width (m)"
                                        onChange={this.handlePoolRectanglePMvolumeW.bind(
                                          this
                                        )}
                                        min="0"
                                        max="20"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Deep (m)"
                                        onChange={this.handlePoolRectanglePMvolumeD.bind(
                                          this
                                        )}
                                        min="0"
                                        max="3"
                                        required
                                      />
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Shallow (m)"
                                        onChange={this.handlePoolRectanglePMvolumeS.bind(
                                          this
                                        )}
                                        min="0"
                                        max="1"
                                        required
                                      />
                                    </Form>
                                  ) : this.state.poolShapePMSelect === "2" ? (
                                    <Form>
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Radius (m)"
                                        onChange={this.handlePoolCircularPMvolumeR.bind(
                                          this
                                        )}
                                        min="0"
                                        max="10"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Deep (m)"
                                        onChange={this.handlePoolCircularPMvolumeD.bind(
                                          this
                                        )}
                                        min="0"
                                        max="3"
                                        required
                                      />
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Shallow (m)"
                                        onChange={this.handlePoolCircularPMvolumeS.bind(
                                          this
                                        )}
                                        min="0"
                                        max="2"
                                        required
                                      />
                                    </Form>
                                  ) : this.state.poolShapePMSelect === "3" ? (
                                    <Form>
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Base (m)"
                                        onChange={this.handlePoolTrianglePMvolumeB.bind(
                                          this
                                        )}
                                        min="0"
                                        max="20"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Height (m)"
                                        onChange={this.handlePoolTrianglePMvolumeH.bind(
                                          this
                                        )}
                                        min="0"
                                        max="20"
                                        required
                                      />
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Deep (m)"
                                        onChange={this.handlePoolTrianglePMvolumeD.bind(
                                          this
                                        )}
                                        min="0"
                                        max="3"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Shallow (m)"
                                        onChange={this.handlePoolTrianglePMvolumeS.bind(
                                          this
                                        )}
                                        min="0"
                                        max="2"
                                        required
                                      />
                                    </Form>
                                  ) : this.state.poolShapePMSelect === "4" ? (
                                    <Form>
                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Length (m)"
                                        onChange={this.handlePoolIrregularPMvolumeL.bind(
                                          this
                                        )}
                                        min="0"
                                        max="20"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Large Diameter (m)"
                                        onChange={this.handlePoolIrregularPMvolumeA.bind(
                                          this
                                        )}
                                        min="0"
                                        max="20"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Small Diameter (m)"
                                        onChange={this.handlePoolIrregularPMvolumeB.bind(
                                          this
                                        )}
                                        min="0"
                                        max="20"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Deep (m)"
                                        onChange={this.handlePoolIrregularPMvolumeD.bind(
                                          this
                                        )}
                                        min="0"
                                        max="3"
                                        required
                                      />

                                      <FormInput
                                        id="fname"
                                        size="10"
                                        type="number"
                                        name="fname"
                                        placeholder="Shallow (m)"
                                        onChange={this.handlePoolIrregularPMvolumeS.bind(
                                          this
                                        )}
                                        min="0"
                                        max="2"
                                        required
                                      />
                                    </Form>
                                  ) : null}
                                </div>
                              </Options4>
                            ) : null}
                            <ContentTitle>
                              {" "}
                              Enter Details
                              <span>
                                <hr width="300" />
                              </span>
                            </ContentTitle>
                            <EnterDetails>
                              <select
                                id="dropdown"
                                onChange={this.handlePoolissues}
                                style={{
                                  color: "grey",
                                  cursor: "pointer",
                                  height: "22px",
                                  "text-align": "center",
                                  "margin-top": "2px",
                                }}
                              >
                                <option value="N/A">Pool Issues</option>
                                <option value="Cloudy">Cloudy</option>
                              </select>
                              <select
                                id="dropdown"
                                onChange={this.handlePoolAlgae}
                                style={{
                                  color: "grey",
                                  cursor: "pointer",
                                  height: "22px",
                                  "text-align": "center",
                                  "margin-top": "2px",
                                }}
                              >
                                <option value="N/A">Algae</option>
                                <option value="Green">Green</option>
                                <option value="Mustard">Mustard</option>
                                <option value="Black">Black</option>
                              </select>
                            </EnterDetails>
                            <ContentTitle>
                              {" "}
                              Service Details & Costs
                              <span>
                                <hr width="300" />
                              </span>
                            </ContentTitle>
                            <Options3>
                              <div style={{ "margin-left": "2px" }}>
                                <Message2>Details</Message2>

                                <EventLog logs={this.state.locPool} />

                                {poolPCfreq !== "" ? (
                                  <Message>Freq. : {poolPCfreq} </Message>
                                ) : poolPMfreq !== "" ? (
                                  <Message>Freq. : {poolPMfreq} </Message>
                                ) : null}
                                {this.state.PoolTime.length !== 0 ? (
                                  <Message>
                                    Date :{" "}
                                    {poolTime.replace(
                                      "GMT+0200 (South Africa Standard Time)",
                                      ""
                                    )}
                                  </Message>
                                ) : null}
                              </div>
                              <div>
                                <Message2>Pool</Message2>
                                {this.state.PoolClean && poolPCvolume > 0 ? (
                                  <Message>
                                    Vol : {1000 * poolPCvolume.toFixed(0)} l
                                  </Message>
                                ) : this.state.PoolMaint && poolPMvolume > 0 ? (
                                  <Message>
                                    Vol : {1000 * poolPMvolume.toFixed(2)} l
                                  </Message>
                                ) : null}
                                {poolShape !== null ? (
                                  <Message>Shape : {poolShape} </Message>
                                ) : null}

                                {poolPCalgae !== "" ? (
                                  <Message>Algae : {poolPCalgae} </Message>
                                ) : poolPMalgae !== "" ? (
                                  <Message>Algae : {poolPMalgae} </Message>
                                ) : this.state.poolPCcloudy ||
                                  this.state.poolPMcloudy ? (
                                  <Message>Issues : Cloudy </Message>
                                ) : null}
                              </div>
                              <div>
                                <Message2>Costs</Message2>
                                {this.state.PoolClean ? (
                                  totalPCpool > 150 ? (
                                    <Message>
                                      Total : R {totalPCpool.toFixed(2)}{" "}
                                    </Message>
                                  ) : (
                                    <Message>Total : R 0.00 </Message>
                                  )
                                ) : this.state.PoolMaint ? (
                                  totalPMpool > 150 ? (
                                    <Message>
                                      Total : R {totalPMpool.toFixed(2)}
                                    </Message>
                                  ) : (
                                    <Message>Total : R 0.00 </Message>
                                  )
                                ) : null}
                              </div>
                            </Options3>
                            <p style={{ textAlign: "center" }}>
                              <CustomButton
                                onClick={this.selectPool.bind(this)}
                                style={{
                                  "margin-top": "12.5px",
                                  background: "#e91e63",
                                }}
                                size="sm"
                              >
                                Book Service
                              </CustomButton>
                            </p>
                          </div>
                        ),
                      },
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </TabsContainer>
          </PopupInner>
        </Popup>

        {this.state.showPopupOutdoor ? (
          this.props.currentUser ? (
            <Outdoor
              showPopupOutdoor={this.state.showPopupOutdoor}
              currentUser={this.props.currentUser}
              closePopup={this.props.closePopup}
              dateTimeOutdoor={this.state.dateTimeOutdoor}
              totalOutdoor={totalOutdoor}
              OutdoorBookedService={this.state.OutdoorBookedService}
              serviceIntervalOutdoor={this.state.serviceIntervalOutdoor}
              OutdoorYardSize={this.state.OutdoorYardSize}
              OutdoorPropertType={this.state.OutdoorPropertType}
              OutdoorPropertKind={this.state.OutdoorPropertKind}
              OutdoorWorkYard={this.state.OutdoorWorkYard}
              wheelbarrow={this.state.YCoutdoorCleanDisplay}
              mower={this.state.LMoutdoorCleanDisplay}
              windows={this.state.FBoutdoorCleanDisplay}
              box={this.state.DCoutdoorCleanDisplay}
            />
          ) : !this.props.currentUser ? (
            <PromptSinIn
              currentUser={this.props.currentUser}
              showPopupOutdoor={this.state.showPopupOutdoor}
              closePopup={this.props.closePopup}
              dateTimeOutdoor={this.state.dateTimeOutdoor}
              totalOutdoor={totalOutdoor}
              OutdoorBookedService={this.state.OutdoorBookedService}
              serviceIntervalOutdoor={this.state.serviceIntervalOutdoor}
              OutdoorYardSize={this.state.OutdoorYardSize}
              OutdoorPropertType={this.state.OutdoorPropertType}
              OutdoorPropertKind={this.state.OutdoorPropertKind}
              OutdoorWorkYard={this.state.OutdoorWorkYard}
              wheelbarrow={this.state.YCoutdoorCleanDisplay}
              mower={this.state.LMoutdoorCleanDisplay}
              windows={this.state.FBoutdoorCleanDisplay}
              box={this.state.DCoutdoorCleanDisplay}
            />
          ) : null
        ) : null}

        {this.state.showPopupIndoor ? (
          this.props.currentUser ? (
            <Indoor
              showPopupIndoor={this.state.showPopupIndoor}
              currentUser={this.props.currentUser}
              closePopup={this.props.closePopup}
              dateTime={this.state.dateTime}
              totalIndoor={totalIndoor.toFixed(2)}
              genIndoorCleanWallsService={this.state.genIndoorCleanWallsService}
              genIndoorCleanWindowsService={
                this.state.genIndoorCleanWindowsService
              }
              genIndoorCleanLaundryService={
                this.state.genIndoorCleanLaundryService
              }
              afterBuildIndoorCleanWallsService={
                this.state.afterBuildIndoorCleanWallsService
              }
              serviceIntervalIndoor={this.state.serviceIntervalIndoor}
              IndoorDetergents={this.state.IndoorDetergents}
              afterBuildIndoorCleanWindowsService={
                this.state.afterBuildIndoorCleanWindowsService
              }
              afterBuildIndoorCleanOvenService={
                this.state.afterBuildIndoorCleanOvenService
              }
              endTenancyIndoorCleanWallsService={
                this.state.endTenancyIndoorCleanWallsService
              }
              endTenancyIndoorCleanWindowsService={
                this.state.endTenancyIndoorCleanWindowsService
              }
              bedRooms={this.state.bedRooms}
              bathRooms={this.state.bathRooms}
              IndoorBookedService={this.state.IndoorBookedService}
              IndoorExtras={extrasIN}
              IndoorItemsCleaningOption={this.state.handleCouches_Carpets}
              IndoorItem1={size}
              IndoorItem2={size2}
              IndoorItem3={size3}
            />
          ) : !this.props.currentUser ? (
            <PromptSinIn
              currentUser={this.props.currentUser}
              showPopupIndoor={this.state.showPopupIndoor}
              closePopup={this.props.closePopup}
              dateTime={this.state.dateTime}
              totalIndoor={totalIndoor.toFixed(2)}
              genIndoorCleanWallsService={this.state.genIndoorCleanWallsService}
              genIndoorCleanWindowsService={
                this.state.genIndoorCleanWindowsService
              }
              genIndoorCleanLaundryService={
                this.state.genIndoorCleanLaundryService
              }
              afterBuildIndoorCleanWallsService={
                this.state.afterBuildIndoorCleanWallsService
              }
              serviceIntervalIndoor={this.state.serviceIntervalIndoor}
              IndoorDetergents={this.state.IndoorDetergents}
              afterBuildIndoorCleanWindowsService={
                this.state.afterBuildIndoorCleanWindowsService
              }
              endTenancyIndoorCleanWallsService={
                this.state.endTenancyIndoorCleanWallsService
              }
              endTenancyIndoorCleanWindowsService={
                this.state.endTenancyIndoorCleanWindowsService
              }
              bedRooms={this.state.bedRooms}
              bathRooms={this.state.bathRooms}
              IndoorBookedService={this.state.IndoorBookedService}
              IndoorExtras={extrasIN}
              IndoorItemsCleaningOption={this.state.handleCouches_Carpets}
              IndoorItem1={size}
              IndoorItem2={size2}
              IndoorItem3={size3}
            />
          ) : null
        ) : null}

        {this.state.showPopupPool ? (
          this.props.currentUser ? (
            <Pool
              showPopupPool={this.state.showPopupPool}
              currentUser={this.props.currentUser}
              closePopup={this.props.closePopup}
              dateTimePool={poolTime}
              totalPool={totalPool}
              poolRequiredService={poolRequiredService}
              serviceInterval={this.state.serviceInterval}
              poolShape={poolShape}
              poolVolume={poolVolume}
              poolIssue={poolIssue}
            />
          ) : !this.props.currentUser ? (
            <PromptSinIn
              currentUser={this.props.currentUser}
              showPopupPool={this.state.showPopupPool}
              closePopup={this.props.closePopup}
              dateTimePool={poolTime}
              totalPool={totalPool}
              poolRequiredService={poolRequiredService}
              serviceInterval={this.state.serviceInterval}
              poolShape={poolShape}
              poolVolume={poolVolume}
              poolIssue={poolIssue}
            />
          ) : null
        ) : null}

        {this.state.showTcIn ? (
          <IndoorTCs
            showTcIn={this.state.showTcIn}
            closeTcIn={this.showTcsIn.bind(this)}
          />
        ) : null}
        {this.state.showServicesInfo ? (
          <IndoorServicesInfo
            showServicesInfo={this.state.showServicesInfo}
            closeServiceInfo={this.showServicesInfo.bind(this)}
          />
        ) : null}
        {this.state.showOutdoorServicesInfo ? (
          <OutdoorServicesInfo
            showOutdoorServicesInfo={this.state.showOutdoorServicesInfo}
            closeOutdoorServiceInfo={this.showOutdoorServicesInfo.bind(this)}
          />
        ) : null}

        {this.state.showPoolServicesInfo ? (
          <PoolServicesInfo
            showPoolServicesInfo={this.state.showPoolServicesInfo}
            closePoolServiceInfo={this.showPoolServicesInfo.bind(this)}
          />
        ) : null}

        {this.state.showPoolShapes ? (
          <PoolShapes
            showPoolShapes={this.state.showPoolShapes}
            closePoolShapes={this.showPoolShapes.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}
export default Cleaner;

//https://www.npmjs.com/package/react-input-range

//https://codesandbox.io/s/870zq?file=/demo.js
