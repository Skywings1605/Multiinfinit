import "./ThankYou.css"
import logo from "./Images/logo.webp"
import { Link } from "react-router-dom";
import fb from "./Images/fb.webp";
import insta from "./Images/insta.webp";
import twitter from "./Images/twitter.webp";
import youtube from "./Images/youtube.webp";
import mail from "./Images/mail.webp";

export const ThankYou = () => {
    return (
        <div className="thank">
            <img src={logo} alt="" className="logothank"/>
            <h1>Thank You!</h1>
            <p>Our Team Will Get Back To You Soon.</p>

            <div className="icns">
                <a href="https://www.facebook.com/multiinfiniteblr" target={1} className="fb"><img src={fb} alt="" /></a>
                <a href="https://twitter.com/MultiinfiniteB" target={1}><img src={twitter} alt="" /></a>
                <a href="https://www.instagram.com/multiinfinite_blr/?next=%2F" target={1}><img src={insta} alt="" /></a>
                <a href="https://www.youtube.com/channel/UCAHMD8h8EwGyQQVPmtakgJg" target={1}><img src={youtube} alt="" /></a>
                <a href="mailto: canterburydivinearc@gmail.com" target={1}><img src={mail} alt="" className="mail" /></a>
            </div> 
            <Link to="/">

            <p className="gotohome">Go To Home Page</p>
            </Link>
        </div>
    )
}