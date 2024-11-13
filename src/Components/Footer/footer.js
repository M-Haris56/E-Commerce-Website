import React from "react";
import './footer.css'
import icon1 from '../../Assests/icon-1.svg'
import icon2 from '../../Assests/icon-2.svg'
import icon3 from '../../Assests/icon-3.svg'
import icon4 from '../../Assests/icon-4.svg'
import icon5 from '../../Assests/icon-5.svg'
import { Link } from "react-router-dom";
import logo1 from '../../Assests/logo1.svg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import appstore from '../../Assests/appstore.jpg'
import googleplay from '../../Assests/googleplay.jpg'
import paymentmethod from '../../Assests/paymentmethod.png'
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import newsLetter from '../../Assests/newsLetter-img.png'
import NewsLetter from "../../Components/newsLetter";

const Footer = () => {
    return (
        <>
            <section className="newsLetterSection">
                <div className="container-fluid">
                    <div className="box d-flex align-items-center">
                        <div className="info">
                            <h2>Stay home & get your daily<br />
                                needs from our shop</h2>
                            <p>Start You'r Daily Shopping with Nest Mart</p>
                            <br /><br />
                            <NewsLetter />
                        </div>
                        <div className="img">
                            <img src={newsLetter} className="w-100" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="footerWraper">
                <div className="footerBoxes">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span><img src={icon1} /></span>
                                    <div className="info">
                                        <h4>Best prices & offers</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span><img src={icon2} /></span>
                                    <div className="info">
                                        <h4>Free delivery</h4>
                                        <p>24/7 amazing services</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span><img src={icon3} /></span>
                                    <div className="info">
                                        <h4>Great daily deal</h4>
                                        <p>When you sign up</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span><img src={icon4} /></span>
                                    <div className="info">
                                        <h4>Wide assortment</h4>
                                        <p>Mega Discounts</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span><img src={icon5} /></span>
                                    <div className="info">
                                        <h4>Easy returns</h4>
                                        <p>Within 30 days</p>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>


            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 part1">
                            <Link><img src={logo1} /></Link>
                            <br /><br />
                            <p>Awesome grocery store website template</p>
                            <br />
                            <p> <LocationOnIcon /><strong>Address</strong>: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                            <p> <HeadphonesIcon /> <strong>Call Us:</strong>(+91) - 540-025-124553</p>
                            <p> <EmailIcon /><strong> Email:</strong>sale@Nest.com</p>
                            <p> <WatchLaterOutlinedIcon /><strong> Hours:</strong>10:00 - 18:00, Mon - Sat</p>
                        </div>


                        <div className="col-md-6 part2">
                            <div className="row">
                                <div className="col">
                                    <h3>Company</h3>
                                    <ul class="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to="#">About Us</Link></li>
                                        <li><Link to="#">Delivery Information</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                        <li><Link to="#">Terms &amp; Conditions</Link></li>
                                        <li><Link to="#">Contact Us</Link></li>
                                        <li><Link to="#">Support Center</Link></li>
                                        <li><Link to="#">Careers</Link></li>
                                    </ul>
                                </div>


                                <div className="col">
                                    <h3>Account</h3>
                                    <ul class="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to="#">Sign In</Link></li>
                                        <li><Link to="#">View Cart</Link></li>
                                        <li><Link to="#">My Wishlist</Link></li>
                                        <li><Link to="#">Trck My Order</Link></li>
                                        <li><Link to="#">Help Ticket</Link></li>
                                        <li><Link to="#">Shipping DetLinkils</Link></li>
                                        <li><Link to="#">Compre products</Link></li>
                                    </ul>
                                </div>

                                <div className="col">
                                    <h3>Corporate</h3>
                                    <ul class="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to="#">Become a Vendor</Link></li>
                                        <li><Link to="#">Affiliate Program</Link></li>
                                        <li><Link to="#">Farm Business</Link></li>
                                        <li><Link to="#">Farm Careers</Link></li>
                                        <li><Link to="#">Our Suppliers</Link></li>
                                        <li><Link to="#">Accessibility</Link></li>
                                        <li><Link to="#">Promotions</Link></li>
                                    </ul>
                                </div>

                                <div className="col">
                                    <h3>Popular</h3>
                                    <ul class="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to="#">Milk &amp; Flavoured Milk</Link></li>
                                        <li><Link to="#">Butter and Margarine</Link></li>
                                        <li><Link to="#">Eggs Substitutes</Link></li>
                                        <li><Link to="#">Marmalades</Link></li>
                                        <li><Link to="#">Sour Cream and Dips</Link></li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-3 part3">
                            <h3>Install App</h3>
                            <br />
                            <p>From App Store or Google Play</p>
                            <div className="d-flex">
                                <Link to=""><img src={appstore} width={150} /></Link>
                                <Link to=""><img src={googleplay} width={150} /></Link>
                            </div>
                            <br />
                            <br />
                            <p>Secured Payment Gateways</p>
                            <img src={paymentmethod} />
                        </div>



                    </div>

                    <hr />

                    <div className="row">
                        <div className="col md-3 laststrip">
                            <p>© 2022, Nest - HTML Ecommerce Template<br />
                                All rights reserved</p>
                        </div>
                        <div className="col md-6 d-flex">
                            <div className="m-auto d-flex align-items-center mx-2">
                                <div className="phNo d-flex align-items-center ml-auto">
                                    <span>  <HeadphonesOutlinedIcon /></span>
                                    <div className="info ">
                                        <h3 className="text-g mb-0">
                                            1900-888
                                        </h3>
                                        <p className="mb-0">24/7 Support Center</p>
                                    </div>
                                </div>
                                <div className="phNo d-flex align-items-center ml-auto mx-2 ">
                                    <span>  <HeadphonesOutlinedIcon /></span>
                                    <div className="info ">
                                        <h3 className="text-g mb-0">
                                            1900-888
                                        </h3>
                                        <p className="mb-0">24/7 Support Center</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col md-3 part3">
                            <div className="d-flex align-items-center">
                                <h5>Follow Us</h5>
                                <ul className="list list-inline">
                                    <li className="list-inline-item">
                                        <Link to={''}>
                                            <FacebookOutlinedIcon />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}>
                                            <TwitterIcon />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}>
                                            <InstagramIcon />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}>
                                            <YouTubeIcon />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>

            </footer >


        </>
    )
}
export default Footer;