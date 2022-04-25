import React from "react";
import './styles/footer.css'
import { FaPhone, FaMailBulk, FaLocationArrow } from "react-icons/fa";

const Footer = () =>{
    return(   
       <div className="main-footer">
           <div className="foot-container">
               <div className=" row ">
                   {/*column1*/}
                   <div className="col1">
                   <img className="logo" alt="logo" src={require('./holiday.JPG')} />
                   </div>
                    {/*column2*/}
                    <div className="col2">
                    </div>
                     {/*column3*/}
                     <div className="col3">
   
                     <ul className="footer">
                     <li> <FaPhone/>  +012 345 6789</li>
                     <li> <FaMailBulk/> mybusiness@company.com</li>
                     <li> <FaLocationArrow/> 1234 Main Street, City</li>
                       <li>Country</li>
                     </ul>
   
                    </div>
               </div>
           </div>   
       </div>
   
    ); 
    };
   
   export default Footer;

