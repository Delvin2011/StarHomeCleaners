import React from 'react';  
import {Popup,PopupInner,ContentTitle,CloseButton,LogoContainer2,TabsContainer,RangeSliderContainer,Options,Options2,Options3,Wall,Window,Machine,Stove,Fridge,Wardrobe,Message,Message2,Wheelbarrow, Options4,Options5,Info,Flowers,Driveway,Maintanance,Installations,ServicePool,Options3p1} from './popupCleaner-styles'; 
import Outdoor from './outdoor/outdoor';
import Indoor from './indoor/indoor';
import IndoorTCs from './indoor/TCs/indoorTCs';
import { Checkbox } from 'semantic-ui-react';

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

import stoveIcon from '@iconify/icons-si-glyph/stove';
import fridgeIcon from '@iconify/icons-whh/fridge';
import wardrobeIcon from '@iconify/icons-mdi/wardrobe';

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
  locationPool = [];
  poolTimes = [];


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
          picked: false,
          picked2: false,
          picked3: false,
          picked4: false,
          picked5: false,
          picked6: false,
          picked7: false,
          picked8: false,
          picked9: false,
          PoolClean: false,
          PoolMaint: false,
          events: this.logs,
          events2: this.logs2,
          events3: this.logs3,
          events4: this.logs4,
          events5: this.logs5,
          events6: this.logs6,
          locPool: this.locationPool,
          PoolTime: this.poolTimes,
          value2: "",
          value3: "",
          value4: "",
          value5: "",
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
          price: 0,
          price2: 0,
          price3: 0,
          price4: 0,
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
          priceMaintMonth: 0,
          priceMaintQuat: 0,
          priceMaintYear: 0,
          bedPrice: 0,
          bathPrice: 0,
          total2: 0,
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
        this.handleOnceOFF = this.handleOnceOFF.bind(this);
        this.handleCleanWeek = this.handleCleanWeek.bind(this);
        this.handleCleanMonth = this.handleCleanMonth.bind(this);

        this.handleMaintMonth = this.handleMaintMonth.bind(this);
        this.handleMaintQuat = this.handleMaintQuat.bind(this);
        this.handleMaintYear = this.handleMaintYear.bind(this);
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
      //this.state.cleanOnceOFF === true ? this.setState ({cleanWeek: false}) : this.setState({cleanWeek: !this.state.cleanWeek,
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


    pick(event) {
      this.setState({
        picked: !this.state.picked,
        value2: this.state.picked? null : "Cleaning walls",
        price: this.state.picked? 0 : 30
      });
     
    }
    pick2(event) {
      this.setState({
        picked2: !this.state.picked2,
        value3: this.state.picked2? null : "Cleaning windows",
        price2: this.state.picked2? 0 : 30
      });
    }
    pick3(event) {
      this.setState({
        picked3: !this.state.picked3,
        value4: this.state.picked3? null : "Laundry & Ironing",
        price3: this.state.picked3? 0 : 50
      });
    }
    pick4(event) {
      this.setState({
        picked4: !this.state.picked4,
        value5: this.state.picked4? null : "Inside Oven",
        price4: this.state.picked4? 0 : 25
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
        PoolCleanService: this.state.PoolMaint === true || this.state.PoolClean? null : "General Pool Cleaning",
        PoolCleanPrice: this.state.PoolMaint === true || this.state.PoolClean? 0 : 177
      });
    }

    periodMaint(event) {
      this.setState({
        PoolMaint: this.state.PoolClean === true ? false : !this.state.PoolMaint,
        PoolMaintService: this.state.PoolClean === true || this.state.PoolMaint? null : "Periodic Pool maintanance",
        PoolMaintPrice: this.state.PoolClean === true || this.state.PoolMaint? 0 : 177
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

    selectIndoor(event) {
      this.setState({
        showPopupIndoor: !this.state.showPopupIndoor,
        value: event.target.innerText,
        total: 150 + this.state.bedPrice + this.state.bathPrice + this.state.price + this.state.price2 + this.state.price3 + this.state.price4 + this.state.price5 + this.state.price6 + this.state.priceDetergent
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
  

  selectOutdoor(event) {
    this.setState({
      showPopupOutdoor: !this.state.showPopupOutdoor,
      value: event.target.innerText,
      total2: this.state.value < 2.1 ? (this.state.price7 + this.state.price8 + this.state.price9 + this.state.price10)  + 50 : 50 +(((this.state.value - 2) * 40) + (this.state.price7 + this.state.price8 + this.state.price9 + this.state.price10))
    });
  }

showTcsIn(event) {
    this.setState({
      showTcIn: !this.state.showTcIn,
      value: event.target.innerText
    });
  }

showTcsOut(event) {
  this.setState({
    showTcOut: !this.state.showTcOut,
    value: event.target.innerText
  });
}

render() {  
const total = 150 + this.state.bedPrice + this.state.bathPrice + this.state.price + this.state.price2 + this.state.price3 + this.state.price4 + this.state.price5 + this.state.price6 + this.state.priceDetergent;
const total2 = this.state.value < 2.1 ? (this.state.price7 + this.state.price8 + this.state.price9 + this.state.price10)  + 50 : 50 +(((this.state.value - 2) * 40) + (this.state.price7 + this.state.price8 + this.state.price9 + this.state.price10));

const totalClean = this.state.PoolClean ? (250 + (this.state.poolHrs - 1)*18)*(this.state.priceCleanOnce + this.state.priceCleanWeek + this.state.priceCleanMonth) : 0;//             this.state.poolHrs * (this.state.PoolCleanPrice + this.state.PoolMaintPrice);
const totalMaint = this.state.PoolMaint ? (500 + (this.state.poolHrs - 1)*18)*(this.state.priceMaintMonth + this.state.priceMaintQuat + this.state.priceMaintYear) : 0;//             this.state.poolHrs * (this.state.PoolCleanPrice + this.state.PoolMaintPrice);
const totalPool = totalClean + totalMaint;

const x = "" + this.state.dateTime;
const y = "" + this.state.dateTime2;
const poolTime = "" + this.state.dateTimePool;

const cleanOnceStatus = this.state.cleanMonth || this.state.cleanWeek ? true : false;
const cleanWeekStatus = this.state.cleanOnceOFF || this.state.cleanMonth ? true : false;
const cleanMonthStatus = this.state.cleanOnceOFF || this.state.cleanWeek ? true : false;

const maintMonthStatus = this.state.maintYear || this.state.maintQuat ? true : false;
const maintQuatStatus = this.state.maintMonth || this.state.maintYear ? true : false;
const maintYearStatus = this.state.maintMonth || this.state.maintQuat ? true : false;
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
                                          placeholderText="Please Select Date & Time"
                                          showTimeInput
                                          timeFormat="HH:mm"
                                          timeIntervals={1}
                                          timeCaption="time"
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
                                    <ContentTitle> Extra Services
                                      <span><hr width="300"/></span>
                                    </ContentTitle>
                                    <Options2>
                                      <Tooltip title="Walls" aria-label="add"><Fab><Wall onClick={this.pick.bind(this)} picked = {this.state.picked}/></Fab></Tooltip>
                                      <Tooltip title="Windows" aria-label="add"><Fab><Window onClick={this.pick2.bind(this)} picked2 = {this.state.picked2}/></Fab></Tooltip> 
                                      <Tooltip title="Laundry" aria-label="add"><Fab><Machine onClick={this.pick3.bind(this)} picked3 = {this.state.picked3}/></Fab></Tooltip>                                    
                                      <Tooltip title="Inside Oven" aria-label="add"><Fab><Stove icon={stoveIcon} onClick={this.pick4.bind(this)} picked4 = {this.state.picked4}/></Fab></Tooltip>
                                      <Tooltip title="Inside Wadrobe" aria-label="add"><Fab><Wardrobe icon={wardrobeIcon}  onClick={this.pick5.bind(this)} picked5 = {this.state.picked5}/></Fab></Tooltip>
                                      <Tooltip title="Inside Fridge" aria-label="add"><Fab><Fridge icon={fridgeIcon} onClick={this.pick6.bind(this)} picked6 = {this.state.picked6}/></Fab></Tooltip>
                                    </Options2>                        
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
                                        <Message2>Extra Services</Message2>
                                        <Message>{this.state.value2}</Message>
                                        <Message>{this.state.value3}</Message>
                                        <Message>{this.state.value4}</Message>
                                        <Message>{this.state.value5}</Message>
                                        <Message>{this.state.value6}</Message>
                                        <Message>{this.state.value7}</Message>
                                      </div>
                                      <div>
                                      <Message2>Costs</Message2>
                                          {this.state.bedPrice > 0 || this.state.bathPrice > 0 ?
                                            <Message style  = {{"text-transform" : "none"}}><Checkbox toggle label = "  Detergents(R52)" onChange={ this.handleChecked } priceDetergent =  {this.state.priceDetergent}/></Message>
                                            : null
                                          }                          
                                          {this.state.bedPrice > 0 || this.state.bathPrice > 0 ?
                                            <Message>Total : R {total} </Message>
                                          
                                          : null
                                          }
                                      </div>
                                    </Options3> 
 
                                    <p style = {{"textAlign" : "center"}}><CustomButton onClick={this.selectIndoor.bind(this)} style = {{marginBottom : "5%", "background": "#e91e63"}}>Book Service</CustomButton></p> 

                                  </div>
                          )
                        },
                        {
                          tabButton: "OUTDOOR",
                          tabIcon: GiWheelbarrow,
                          tabContent: (
                            <div>
                                <ContentTitle> Details <Info onClick = {this.showTcsOut.bind(this)} showTcOut = {this.state.showTcOut}/>
                                  <span><hr width="300"/></span>
                                </ContentTitle>
                                <Options5>
                                    <DatePicker
                                          selected={this.state.dateTime2}
                                          value={this.state.dateTime2}
                                          onChange={this.handleChange6}
                                          minDate={new Date()}
                                          placeholderText="Please Select Date & Time"
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
                                      <div style = {{color: 'grey', fontSize : "14px"}}>Area Size: </div>                  
                                  <RangeSliderContainer color="red" >
                                  
                                    <InputRange
                                      maxValue={10}
                                      minValue={0}
                                      valueLabel = {this.state.maxLabels}
                                      value={this.state.hrs}
                                      onChange={hrs => this.setState({ hrs })}
                                      formatLabel={value => `${""}`}
                                      />
                                  </RangeSliderContainer>
                                  <div style = {{color: 'grey', fontSize : "14px"}}>{this.state.hrs} hrs</div>
                                </Options5>
                                <ContentTitle> Required Services
                                  <span><hr width="300"/></span>
                                </ContentTitle>
                                <Options4>
                                
                                <Tooltip title="Inside Wadrobe" aria-label="add"><Fab style={{width: "80px", height: "80px"}}><Wheelbarrow onClick={this.pick7.bind(this)} picked7 = {this.state.picked7}/></Fab></Tooltip> 

                                    {this.state.Mower ?
                                      <Tooltip title="Lawn Mowing" aria-label="add"><Fab style={{width: "80px", height: "80px"}}><LogoContainer2 src={LawnMowerSelect} onClick={this.Mow.bind(this)}/></Fab></Tooltip> 
                                      :
                                      <Tooltip title="Lawn Mowing" aria-label="add"><Fab style={{width: "80px", height: "80px"}}><LogoContainer2 src={LawnMower} onClick={this.Mow.bind(this)}/></Fab></Tooltip> 
                                    }
                                    <Tooltip title="Flower Bedding" aria-label="add"><Fab style={{width: "80px", height: "80px"}}><Flowers onClick={this.pick8.bind(this)} picked8 = {this.state.picked8}/></Fab></Tooltip> 
                                    <Tooltip title="Driveway Cleaning" aria-label="add"><Fab style={{width: "80px", height: "80px"}}><Driveway onClick={this.pick9.bind(this)} picked9 = {this.state.picked9}/></Fab></Tooltip> 
                                </Options4>
                                <ContentTitle> Service Details & Costs
                                  <span><hr width="300"/></span>
                                </ContentTitle>
                                <Options3>
                                  <div style = {{"margin-left" : "2px"}}>
                                    <Message2>Outside Details</Message2>

                                    <EventLog logs={this.state.events5}/>

                                    {this.state.hrs  === 0 ? null
                                      :
                                      <Message>Working Hours : {this.state.hrs} hrs</Message>  
                                    }  
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
                                <p style = {{"textAlign" : "center"}}><CustomButton onClick={this.selectOutdoor.bind(this)} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Book Service</CustomButton></p> 

                            </div>

                          )
                        },
                        {
                          tabButton: "POOL",
                          tabIcon: FaSwimmingPool,
                          tabContent: ( 
                            <div>
                                <ContentTitle> Details <Info onClick = {this.showTcsOut.bind(this)} showTcOut = {this.state.showTcOut}/>
                                  <span><hr width="300"/></span>
                                </ContentTitle>
                                <Options5>
                                    <DatePicker
                                          selected={this.state.dateTimePool}
                                          value={this.state.dateTimePool}
                                          onChange={this.handleChangePool}
                                          minDate={new Date()}
                                          placeholderText="Please Select Date & Time"
                                          showTimeInput
                                          timeFormat="HH:mm"
                                          timeIntervals={1}
                                          timeCaption="time"
                                          dateFormat="MMMM d, yyyy h:mm aa"
                                          shouldCloseOnSelect={false} />
                                    <select id="dropdown2" onChange={this.handleDropdownPool} style = {{color: 'grey', cursor: "pointer", height: "22px","text-align": "center", "margin-top":"2px"}}>
                                          <option value="N/A">Location</option>
                                          <option value="Boksburg">Boksburg</option>
                                          <option value="Edenvale">Edenvale</option>
                                          <option value="Kempton Park">K/Park</option>
                                          <option value="Springs">Springs</option>
                                          <option value="Germiston">Germiston</option>
                                      </select>    
                                      <div style = {{color: 'grey', fontSize : "14px"}}>Pool Area Size: </div>                  
                                  <RangeSliderContainer color="red" >
                                  
                                    <InputRange
                                      maxValue={10}
                                      minValue={0}
                                      valueLabel = {this.state.maxLabels}
                                      value={this.state.poolHrs}
                                      onChange={poolHrs => this.setState({ poolHrs })}
                                      formatLabel={value => `${""}`}
                                      />
                                  </RangeSliderContainer>
                                  <div style = {{color: 'grey', fontSize : "14px"}}>{this.state.poolHrs} hrs</div>
                                </Options5>
                                <ContentTitle> Required Services
                                  <span><hr width="300"/></span>
                                </ContentTitle>
                                <Options3p1>                               
                                  <Tooltip title="General Pool Cleaning" aria-label="add"><Fab style={{width: "80px", height: "80px"}}><Installations onClick={this.genPoolClean.bind(this)} PoolClean = {this.state.PoolClean}/></Fab></Tooltip> 
                                  <Tooltip title="Periodic Pool Maintanance" aria-label="add"><Fab style={{width: "80px", height: "80px"}}><Maintanance onClick={this.periodMaint.bind(this)} PoolMaint = {this.state.PoolMaint}/></Fab></Tooltip> 
                                  <Tooltip title="Pool Repairs" aria-label="add"><Fab style={{width: "80px", height: "80px"}}><ServicePool onClick={this.pick9.bind(this)} picked9 = {this.state.picked9}/></Fab></Tooltip> 
                                </Options3p1>
                                <ContentTitle> Service Details & Costs
                                  <span><hr width="300"/></span>
                                </ContentTitle>
                                <Options3>
                                  <div style = {{"margin-left" : "2px"}}>
                                    <Message2>Pool Details</Message2>

                                    <EventLog logs={this.state.locPool}/>

                                    {this.state.poolHrs  === 0 ? null
                                      :
                                      <Message>Working Hours : {this.state.poolHrs} hrs</Message>  
                                    }  
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
                                    <Message2>Estimated Costs</Message2>
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
                                <p style = {{"textAlign" : "center"}}><CustomButton onClick={this.selectOutdoor.bind(this)} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Book Service</CustomButton></p> 

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
            {this.state.showPopupOutdoor ?
              <Outdoor showPopupOutdoor = {this.state.showPopupOutdoor} closePopup={this.props.closePopup} dateTime = {this.state.dateTime2} total = {this.state.total2} time = {this.state.hrs} wheelbarrow = {this.state.value8} mower = {this.state.value11} windows = {this.state.value9} box = {this.state.value10} />
              : null
            } 

            {this.state.showPopupIndoor ?
              <Indoor showPopupIndoor = {this.state.showPopupIndoor} closePopup={this.props.closePopup} dateTime = {this.state.dateTime} total = {this.state.total} wall = {this.state.value2} windows = {this.state.value3} machine = {this.state.value4} stove = {this.state.value5} wardrobe = {this.state.value6} fridge = {this.state.value7} bedRooms = {this.state.bedRooms} bathRooms = {this.state.bathRooms}/>
              : null
            }

            
            {this.state.showTcIn ?
              <IndoorTCs showTcIn = {this.state.showTcIn} closeTcIn={this.showTcsIn.bind(this)}/>
              : null
            }
            </div>            
        );  
    }  
}  
export default Cleaner;


//https://www.npmjs.com/package/react-input-range

//https://codesandbox.io/s/870zq?file=/demo.js         
