import Slides from "./Slides.jsx";

import gym from "./Images/gym.webp";
import hall from "./Images/hall.webp";
import badminton from "./Images/badminton.webp";
import pool from "./Images/pool.webp";
import reading from "./Images/reading.webp";
import swimming from "./Images/swimming.webp";
import snooker from "./Images/snooker.webp";
import cricket from "./Images/cricket.webp";
import elderspark from "./Images/elderspark.webp";
import tennis from "./Images/tennis.webp";
import sauna from "./Images/sauna.webp";
import steam from "./Images/steam.webp";
import children from "./Images/children.webp";
import kids from "./Images/kids.webp";
import table from "./Images/table.webp";


import fb from "./Images/fb.webp";
import insta from "./Images/insta.webp";
import twitter from "./Images/twitter.webp";
import youtube from "./Images/youtube.webp";
import mail from "./Images/mail.webp";


import"./Main.css";
import indus from "./Images/Industech.webp";
import { useEffect, useState } from "react"

import { Form } from "./Form.jsx";
import { PopupDiv } from "./PopUp.jsx";
import { Link } from "react-router-dom";



export const Main = () => {
    
    return (
        <div id="main">
            <div className="top" id="home">
                <Slides/>
            </div>
            <div className="mobiform" >
                <Form/>
            </div>
            <section >
            <div className="amenities reveal" >
                <h1 className="ameh1">Why choose Multi Infinite?</h1>
                <hr />
                <div className="whytxt">
                    <p>
                    "Home is where the Heart is". Home is a sentiment associated with many people investing in a home to lead a happy life forever.Therefore, it is imperative that you choose the right company to entrust you with building your dream home. <span id="amenities"></span>Multi Infinite Project is a very unique project from Multivision, our understanding of the current trends and our customers’ desire has fueled our passion for innovation. There are many reasons for one to own a property at Multi Infinite.
                    </p>
                </div>
            </div>
            </section>
            <div className="eyediv reveal">
                <h1 className="eyetext">Amenities</h1>
                <hr id="eyehr"/>
                <br />
                <div className="eyeicons">
                        <div className="grid brighten">
                            <img src={gym} alt="" />
                            <p><strong>Gym</strong></p>
                        </div>
                        <div className="grid brighten">
                        <img src={hall} alt="" />
                        <p><strong>Multi-Purpose Hall</strong></p>
                        </div>
                        <div className="grid brighten">
                            <img src={badminton} alt="" />
                            <p><strong>Badminton Court</strong></p>
                        </div>
                        <div className="grid brighten">
                            <img src={pool} alt="" />
                            <p ><strong>Kids Pool</strong></p>
                        </div>
                        <div className="grid brighten">
                            <img src={reading} alt="" />
                            <p ><strong>Reading Room</strong></p>
                        </div>
                        <div className="grid brighten">
                            <img src={swimming} alt="" />
                            <p ><strong>Swimming Pool</strong></p>
                        </div>
                        <div className="grid brighten">
                            <img src={snooker} alt="" />
                            <p ><strong>Snooker</strong></p>
                        </div>
                        <div className="grid brighten">
                            <img src={cricket} alt="" />
                            <p ><strong>Cricket Practice Pitch</strong></p>
                        </div>
                        <div className="grid brighten">
                            <img src={elderspark} alt="" />
                            <p ><strong>Elders Park</strong></p>
                        </div>
                        <div className="grid brighten">
                            <img src={tennis} alt="" />
                            <p ><strong>Tennis Court</strong></p>
                        </div>
                        <div className="grid brighten">
                            <img src={sauna} alt="" />
                            <p ><strong>Sauna Bath</strong></p>
                        </div>
                        <div className="grid brighten">
                            <img src={steam} alt="" />
                            <p><strong>Steam Bath</strong></p>
                        </div>
                        <div id="aboutus" className="grid brighten">
                            <img  src={children} alt="" />
                            <p ><strong>Children's Play Area</strong></p>
                        </div>
                        <div className="grid hidegrid">
                            <img src={kids} alt="" />
                            <p><strong>Kids Playground</strong></p>
                        </div>
                        
                        <div className="grid brighten">
                            <img  src={table} alt="" />
                            <p ><strong>Table Tennis</strong></p>
                        </div>
                </div>
            </div>
        
            <section >
            <div className="proj reveal">
                <h1 id=""> About Multi Infinite</h1>
                    <hr />
                <div className="project">
                    <div className="leftpro">
                      <div className="leftprotxt">
                        <p>Multivision comes with all the signatures that distinguish the Multi Infinite. Multi Infinite is designed to maximize natural light & ventilation and sensibly planned to make living a veritable experience in convenience. This  project assorts 1, 2 & 3 BHK well-designed luxury apartments that spread to a lavish 2.5 acres of space to give you an uncompromising lifestyle with unrestricted freedom.</p>
                        <p>Located at MS Palya, Near Vidyaranyapura in Bangalore’s fastest-growing region, it offers its residents more than just a dwelling space. The residence also offers excellent connectivity to the rest of the city where it is surrounded by important schools, colleges, banks, shopping centres, malls and the airport which is nearer.</p>
                      </div>

                    </div>
                    </div>
                    
                <div>
                <PopupDiv/>
                </div>
                
            </div>
            <div className="loc reveal" id="location">
                <h1 className="locadvh1">Neighbourhood</h1>
                <hr />
                <div className="locmap">
                <div className="adv">
                <h1 className="loch1">Neighbourhood</h1>
                    <div className="nei">
                        <h4>Hospitals</h4>
                        <ul>
                            <li>Nagappa Hadli Hospital</li>
                            <li>Columbia Asia Hospital</li>
                            <li>K K Hospital</li>
                            <li>Aveksha Super Speciality Hospital</li>
                        </ul>
                    </div>
                    <div className="nei">
                        <h4>Educational Institutes</h4>
                        <ul>
                            <li>Sambhram Institute </li>
                            <li>Kendriya Vidyalaya</li>
                            <li>Air Force School</li>
                            <li>Sapthagiri Medical College</li>
                        </ul>
                    </div>
                    <div className="nei">
                        <h4>Super Markets</h4>
                        <ul>
                            <li>Vishal Mega Mart</li>
                            <li>More Super Market</li>
                            <li>Reliance</li>
                            <li>Metro Cash & Carry</li>
                            <li>CSD Canteens</li>
                            <li>Royal Mart</li>
                        </ul>
                    </div>
                    <div className="nei">
                        <h4>Metro Station</h4>
                        <ul>
                            <li>Jalahalli Cross</li>
                            <li>Peenya</li>
                            <li>Goraguntepalya</li>
                        </ul>
                    </div>
                    <div className="nei">
                        <h4>Major City Hubs</h4>
                        <ul>
                            <li>Vidyaranyapura</li>
                            <li>Yelahanka New town</li>
                            <li>BEL Circle</li>
                            <li>Yashwantpur</li>
                            <li>Hebbal</li>
                        </ul>
                    </div>
                    <div className="nei">
                        <h4>Railway Stations</h4>
                        <ul>
                            <li id="contact">Yelahanka Jn</li>
                            <li>Yashwantpur Jn</li>
                            <li>Kodigehalli</li>
                            <li >Chikkabanavara</li>
                        </ul>
                    </div>

              </div>
                <div className="googlemap">
                <h1 className="loh1">Location</h1>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15544.597010922655!2d77.543487!3d13.0897258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x115b7d97334f531c!2sMulti%20Infinite!5e0!3m2!1sen!2sin!4v1664371812456!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
                
            </div>

            </section>
            <section id="contactus">
            <div className="btm" >
            <div className="icns">
                <a href="https://www.facebook.com/multiinfiniteblr" target={1} className="fb"><img src={fb} alt="" /></a>
                <a href="https://twitter.com/MultiinfiniteB" target={1}><img src={twitter} alt="" /></a>
                <a href="https://www.instagram.com/multiinfinite_blr/?next=%2F" target={1}><img src={insta} alt="" /></a>
                <a href="https://www.youtube.com/channel/UCAHMD8h8EwGyQQVPmtakgJg" target={1}><img src={youtube} alt="" /></a>
                <a href="mailto: multiinfiniteblr@gmail.com" target={1}><img src={mail} alt="" className="mail" /></a>
                </div>
                <div className="address">
                    <div className="addi">
                    <p style={{textAlign:"center"}}><strong>Address</strong></p><br/><br/>
                    <p>MS Palya, Vidyaranyapura</p>
                    <p>Bangalore - 560097</p>
                    <p>Karnataka</p>
                      
                    </div>
                    <div className="addi">
                        
                    <p style={{textAlign:"center"}}><strong>Contact Us</strong></p><br/><br/> 
                    
                    <p><a href="tel:+919707822822" className="" style={{color:"black"}}>+91 97078 22822</a></p>

                    </div>
                </div>
                <small>
                    <p className="rera"><strong>RERA No. PRM/KA/RERA/1251/309/PR/180605/001880</strong></p>

                </small>
                {/* <hr /> */}
                <div className="last">
                    <p>Strategic Partner</p>
                    <img className="induslogo" src={indus} alt="" />                  
                </div>   
            </div>
            <div className="policy">
                <h3><strong>Privacy Policy Disclaimer</strong></h3>
                <p className="lastp">We request information from you when you register on our site or fill out a form. While filling out a form on our website, you can be asked to submit your name, email address, and phone number for any of the aforementioned reasons. You are welcome to visit our website anonymously, nevertheless. Any information we learn about you is used to personalise your visit, improve our website, and improve customer service. Any information gathered will not be shared with any third parties, according to the privacy disclaimer clause.
                We may collect the following informations like Name, Email address and Contact number. <span><Link to={"/privacy-policy"}>Read more</Link></span></p>
                
                <p>Copyright 2022 | All Rights Reserved By Multi Infinite.</p>
                
            </div>
            </section>     
        </div>
    )
}