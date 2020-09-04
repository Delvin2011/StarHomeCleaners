import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Cleaner from "components/cleaner/popupCleaner";
import SectionCarousel from "../Components/Sections/SectionCarousel.js";
import SectionDownload from "../Components/Sections/SectionDownload.js";

// core components

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax2/Parallax.js";

//import profile from "assets/img/faces/christian.jpg";
import profile from '../../assets/img/logo1.png';

import {TCList,Heading,Details,Title} from '../../components/cleaner/serviceInfoStyles'; 

import StarsIcon from '@material-ui/icons/Stars';

import {GiVacuumCleaner} from 'react-icons/gi';
import {GiWheelbarrow} from 'react-icons/gi';
import {FaSwimmingPool} from 'react-icons/fa';
//import Accordion from 'react-bootstrap/Accordion'
//import Card from "react-bootstrap/Card";
import styles from "assets/jss/material-kit-react/views/profilePage.js";


import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const useStyles = makeStyles(styles);





export default function FAQsPage(props) {
  const classes = useStyles();
  const [GetIndoorService, setGetIndoorService] = useState(false);
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (

    <div>
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>StarHome Cleaners</h3>
                  </div>
                  <div className={classes.description}>
                    <p className={classes.description}>
                    Offering high quality janitorial cleaning services, that leaves your home sparkling clean. Our team is well trained, experienced and always ready to transform your space into the cleanest and healthiest place.
                    </p>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center" style = {{"textAlign": "center"}}>
              <GridItem xs={12} sm={12} md={8}>
                <h3 className={classes.title}>Frequently Asked Questions</h3>
                <p className={classes.description}>
                  From the survey conducted, the frequently asked questions (FAQ's) are resolved below. However, if you might still have unaswered questions, please do contact our support team.
                </p>
              </GridItem>
            </GridContainer>
            <GridContainer justify="left">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}  >
                <NavPills
                  alignCenter
                  color="primary"
                  horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                  tabs={[
                    {
                      tabButton: "Indoor",
                      tabIcon: GiVacuumCleaner,                     
                      tabContent: (
                        <div>
        <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style = {{"font-weight": "bold","font-size": "12px","font-family": 'Segoe UI',"letter-spacing":"1.5px"}}>
                        Which different indoor cleaning services are offered?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <Heading>General Cleaning</Heading>
                  <TCList>
                      <li>Sweeping floors.</li>
                      <li>Vacuuming carpets.</li>
                      <li>Wiping appliances & cupboards/cabinets.</li>
                      <li>Dusting furniture.</li>
                      <li>Washing dishes.</li>
                      <li>Disinfect surfaces.</li>
                  </TCList>
                  <Heading>After Builders Cleaning</Heading>
                  <TCList>
                      <li>Remove build-up dust on furniture.</li>
                      <li>Empty bins.</li>
                      <li>Clean paint splatters.</li>
                      <li>Clean putty on windows.</li>
                      <li>Remove all dust and debris thoroughly.</li>
                      <li>Tile cleaning & grease removal.</li>
                  </TCList>
                  <Heading>End Of Tenancy Cleaning</Heading>

                  <TCList>
                      <li>Empty & clean cupboards.</li>
                      <li>Remove stains on sink, bath, toilet, tiles.</li>
                      <li>Check plug holes and drains for blockage.</li>
                      <li>Remove grime from fitted ovens.</li>
                      <li>Clean walls & windows & doors.</li>
                      <li>Empty bins.</li>
                  </TCList>

                  <Heading>Antiviral Sanitisation</Heading>
                    <TCList>
                        <li>Disinfect hard surfaces.</li>
                        <li>Prevent spread of bacteria, viruses.</li>
                        <li>Fumigation for pest control.</li>
                        <li>Sanitise couches, carpets, mattress.</li>
                    </TCList>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style = {{"font-weight": "bold","font-size": "12px","font-family": 'Segoe UI',"letter-spacing":"1.5px"}}>
                        What comes standard with all services?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <Heading>Antiviral Sanitisation</Heading>
                  <TCList>
                        <li>Only disinfecting surfaces.</li>
                  </TCList>
                <Heading>The rest of the services</Heading>                  
                <TCList>
                        <li>The below comes standard for the respective rooms.</li>
                  </TCList>

                  <Heading>Kitchen</Heading>
                    <TCList>
                        <li>Empting trash cans/bins.</li>
                        <li>Clean counter tops, sinks, and cupboards.</li>
                        <li>Clean stove & microwave & fridge.</li>
                        <li>Clean tables and chairs.</li>
                        <li>Washing dishes.</li>
                        <li>Cleaning floors & walls & windows.</li>
                    </TCList>

                  <Heading>Living Area</Heading>
                    <TCList>
                        <li>Dusting electronic gadgets.</li>
                        <li>Cleaning wall electrical switches.</li>
                        <li>Dusting furniture & wall frames.</li>
                        <li>Vacuum & mop floors surfaces.</li>
                        <li>Clean interior windows.</li>
                        <li>Dusting sofas.</li>
                    </TCList> 

                  <Heading>Bathroom</Heading>
                    <TCList>
                        <li>Clean counters & cabinets.</li>
                        <li>Wiping & shining mirrors.</li>
                        <li>Clean & disinfect toilet seats.</li>
                        <li>Clean & disinfect shower & bathtub.</li>
                        <li>Clean interior windows & sills.</li>
                        <li>Mopping floors & empty bins.</li>
                    </TCList>
                  <Heading>Bedroom</Heading>
                        <TCList>
                            <li>Vacuum carpets or mop floors.</li>
                            <li>Make beds.</li>
                            <li>Fold clothes.</li>
                            <li>Dusting furniture.</li>
                            <li>Clean interior windows.</li>
                            <li>Arrange wardrope on request.</li>
                        </TCList>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style = {{"font-weight": "bold","font-size": "12px","font-family": 'Segoe UI',"letter-spacing":"1.5px"}}>
                        Do StarHome Cleaners provide cleaning equipment?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

                <Heading>Only the following are provided</Heading>
                    <TCList>
                        <li>Portable/collapsible mop.</li>
                        <li>Portable/collapsible broom.</li>
                        <li>Brand new mutton cloth.</li>
                        <li>Disposible plastic bin bag.</li>
                    </TCList>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style = {{"font-weight": "bold","font-size": "12px","font-family": 'Segoe UI',"letter-spacing":"1.5px"}}>
                    Do StarHome Cleaners provide cleaning detergents?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <TCList><li>No. Detergents are provided on request for a fee.</li></TCList>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style = {{"font-weight": "bold","font-size": "12px","font-family": 'Segoe UI',"letter-spacing":"1.5px"}}>
                        What are the extra services?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <Heading>Extra services</Heading>
                    <TCList>
                        <li>The services are request on booking, at an extra fee:</li>
                        <li>Cleaning Walls.</li>
                        <li>Cleaning Windows.</li>
                        <li>Cleaning laundry.</li>
                    </TCList>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style = {{"font-weight": "bold","font-size": "12px","font-family": 'Segoe UI',"letter-spacing":"1.5px"}}>
                        What discount offers are available?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <TCList> 
                <li>Periodic bookings i.e. weekly or monthly attracts 20% & 15% discount, respectively.</li>
                <li>Three successful referrals, with attract 50% discount on next booking.</li>
                <li>1st booking attracts 25% discount.</li>
                <li>Each booking attracts loyalty points, that will amount to a free booking.</li>
                </TCList>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
                        </div>
                      )
                    },
                    {
                      tabButton: "Outdoor",
                      tabIcon: GiWheelbarrow,
                      tabContent: (

                        <div>
        <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style = {{"font-weight": "bold","font-size": "12px","font-family": 'Segoe UI',"letter-spacing":"1.5px"}}>
                        Which different outdoor cleaning services are offered?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <Heading>Yard Cleaning</Heading>
                  <TCList>
                      <li>Cleaning up after the construction.</li>
                      <li>Cleaning up after a party.</li>
                      <li>Pruning and trimming trees and shrubs.</li>
                      <li>Clearing away leaves, branches, and clutter.</li>
                      <li>Weed Control.</li>
                      <li>CRaking up leaves and composting them.</li>
                  </TCList>
                  <Heading>Lawn Mowing</Heading>
                    <TCList>
                        <li>Cutting overgrown grass lawn.</li>
                        <li>Keeping the lawn green.</li>
                        <li>Weed Control.</li>
                        <li>Composting & manure.</li>
                        <li>Cleaning up lawn debris.</li>
                        <li>Lawn soil aeration.</li>
                    </TCList>
                    <Heading>Flower Bedding</Heading>
                        <TCList>
                            <li>Mend flower beds & ridges.</li>
                            <li>Plant new flowers.</li>
                            <li>Remove weeds.</li>
                            <li>Trim flowers.</li>
                            <li>Soil aeration & watering.</li>
                            <li>Adding manure & compost.</li>
                        </TCList>
                    <Heading>Driveway Cleaning</Heading>
                    <TCList>
                        <li>High pressure cleaning.</li>
                        <li>Weed Control.</li>
                        <li>Wiping appliances.</li>
                        <li>Insects control.</li>
                        <li>Repair dipped or cracked paving.</li>
                        <li>Degrease pavements.</li>
                    </TCList> 
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style = {{"font-weight": "bold","font-size": "12px","font-family": 'Segoe UI',"letter-spacing":"1.5px"}}>
                        Do StarHome Cleaners provide cleaning equipment?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

                <Heading>Only the following are provided.</Heading>
                    <TCList>
                        <li>High pressure washer.</li>
                        <li>Gardening tools.</li>
                        <li>Lawn mower.</li>
                        <li>Wheelbarrow.</li>
                    </TCList>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style = {{"font-weight": "bold","font-size": "12px","font-family": 'Segoe UI',"letter-spacing":"1.5px"}}>
                        What discount offers are available?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <TCList> 
                <li>Periodic bookings i.e. weekly or monthly attracts 20% & 15% discount, respectively.</li>
                <li>Three successful referrals, with attract 50% discount on next booking.</li>
                <li>1st booking attracts 25% discount.</li>
                <li>Each booking attracts loyalty points, that will amount to a free booking.</li>
                </TCList>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
                        </div>
                        
)
                    },
                    {
                      tabButton: "Pools",
                      tabIcon: FaSwimmingPool,
                      tabContent: (
                        <div>
                          <Accordion allowZeroExpanded>
                              <AccordionItem>
                                  <AccordionItemHeading>
                                      <AccordionItemButton style = {{"font-weight": "bold","font-size": "12px","font-family": 'Segoe UI',"letter-spacing":"1.5px"}}>
                                          Which different pool cleaning services are offered?
                                      </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                  <Heading>General Pool Cleaning</Heading>
                                  <TCList>
                                      <li>Inspect and clean the pool deck.</li>
                                      <li>Clean thoroughly and vacuum the pool.</li>
                                      <li>Visually inspect clarity of pool water, color and visible contaminants.</li>
                                      <li>Testing and balancing of pool chemicals.</li>
                                      <li>Remove and clean and the pool cover.</li>
                                      <li>Netting any visible debris (e.g. leaves, twiggs, plastics etc).</li>
                                  </TCList>
                                  <Heading>Periodic Pool Maintanance</Heading>
                                    <TCList>
                                        <li>Ensure the water level is high enough for the pump to function correctly.</li>
                                        <li>Test and adjust the pool water pH.</li>
                                        <li>Test chlorine levels in the pool water.</li>
                                        <li>Visually inspect tile, grout, sealant, and other exposed elements of pool.</li>
                                        <li>Netting any visible debris (e.g. leaves, twiggs, plastics etc).</li>
                                        <li>Cleaning of skimmer bag, weir and baskets to remove all debris.</li>
                                        <li>Routine inspection of all pool equipment & recommending pool repairs.</li>
                                        <li>Backwashing and rinse of the filter.</li>
                                    </TCList>

                                    <Heading>Pool Repairs</Heading>
                                    <TCList>
                                        <li>Coming Soon!!!</li>
                                    </TCList>
                                  </AccordionItemPanel>
                              </AccordionItem>
                              <AccordionItem>
                                  <AccordionItemHeading>
                                      <AccordionItemButton style = {{"font-weight": "bold","font-size": "12px","font-family": 'Segoe UI',"letter-spacing":"1.5px"}}>
                                          Do StarHome Cleaners pool chemicals?
                                      </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                          <li>No. Detergents are provided on request for a fee.</li>
                                  </AccordionItemPanel>
                              </AccordionItem>
                              <AccordionItem>
                                  <AccordionItemHeading>
                                      <AccordionItemButton style = {{"font-weight": "bold","font-size": "12px","font-family": 'Segoe UI',"letter-spacing":"1.5px"}}>
                                          Do StarHome Cleaners provide cleaning equipment?
                                      </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>

                                  <Heading>Only the following are provided</Heading>
                                      <TCList>
                                          <li>Vaccum heads.</li>
                                          <li>Vaccum hose.</li>
                                          <li>Pool brashes.</li>
                                          <li>Leaf traps.</li>
                                      </TCList>
                                  </AccordionItemPanel>
                              </AccordionItem>
                              <AccordionItem>
                                  <AccordionItemHeading>
                                      <AccordionItemButton style = {{"font-weight": "bold","font-size": "12px","font-family": 'Segoe UI',"letter-spacing":"1.5px"}}>
                                          What discount offers are available?
                                      </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                  <TCList> 
                                  <li>Periodic bookings i.e. weekly or monthly attracts 20% & 15% discount, respectively.</li>
                                  <li>Three successful referrals, with attract 50% discount on next booking.</li>
                                  <li>1st booking attracts 25% discount.</li>
                                  <li>Each booking attracts loyalty points, that will amount to a free booking.</li>
                                  </TCList>
                                  </AccordionItemPanel>
                              </AccordionItem>
                          </Accordion>
                        </div>
                        )
                    }
                  ]}
                />

              </GridItem>


            </GridContainer>  
          </div>                
            <div className={classes.container}>
              <SectionDownload/>          
            </div>
      </div>

      <Footer />

      {GetIndoorService?
      
      <Cleaner showPopup= {GetIndoorService} closePopup ={() => setGetIndoorService(!GetIndoorService)} />          
      : null
    }
    </div>
  );
}

/*      
  const [GetIndoorService, setGetIndoorService] = useState(false);
  const [GetOutdoorService, setGetOutdoorService] = useState(false);

{this.state.showPopupCleaner?
          <Cleaner showPopup = {this.state.showPopupCleaner} closePopup={this.selectCleaner.bind(this)}/>
          : null
        }        */