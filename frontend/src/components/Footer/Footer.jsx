
import { assets } from "../../assets/assets";
import "./Footer.css";

function Footer(){
    

    return(
        <div className="footer" id="footer">
           <div className="footer-content">
             <div className="left">
                <img src={assets.logo} alt="" />
                <p>"DesiDine delivers the rich flavors of India to your doorstep. From spicy curries to sweet treats, enjoy authentic dishes from the best local restaurants, all with just a few clicks. Thank you for choosing DesiDine – your journey to deliciousness starts here!"</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
             </div>
             <div className="center">
                  <h2>COMPANY</h2>
                  <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                  </ul>
             </div>
             <div className="right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 ***** *****</li>
                    <li>thalaForAReason@hjgjh.com</li>
                </ul> 
             </div>
           </div>
           <hr />
           <p className="footer-copyright"> Copyright 2024 @amanbhai - All Rights Reserved</p>
        </div>
    )
}

export default Footer;