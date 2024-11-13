import React from "react";
import './Nav.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

const Nav = () => {
    return (
        <>
            <div className="nav d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row position-relative">
                        <div className="col-sm-3 part1">
                            <Button className="grr text-white cattab"><GridViewIcon />&nbsp;Browse All Categories <KeyboardArrowDownIcon /></Button>

                        </div>

                        <div className="col-sm-7 part2 position-static">
                            <nav>
                                <ul className="list list-inline mb-0">
                                    <li className="list-inline-item">
                                        <Button><Link>Home</Link></Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>About</Link></Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>Shop</Link></Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>Vendors</Link></Button>
                                        <div className="dropdown-menu show">
                                            <ul>
                                                <li><Button><Link to="/about">About Us</Link></Button></li>
                                                <li><Button><Link to="/about">Contact</Link></Button></li>
                                                <li><Button><Link to="/about">My Account</Link></Button></li>
                                                <li><Button><Link to="/about">Login</Link></Button></li>
                                                <li><Button><Link to="/about">Register</Link></Button></li>
                                                <li><Button><Link to="/about">Forgot Password</Link></Button></li>
                                                <li><Button><Link to="/about">Reset Password</Link></Button></li>
                                                <li><Button><Link to="/about">Purchase Guide</Link></Button></li>
                                                <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                                                <li><Button><Link to="/about">Term Of Service</Link></Button></li>
                                                <li><Button><Link to="/about">404 Page</Link></Button></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="list-inline-item position-static">
                                        <Button><Link>Mega Menu <KeyboardArrowDownIcon /></Link></Button>
                                        <div className="dropdown-menu show megamenu w-100">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="text-g">Fruits & Vegetables</h4>
                                                    <ul className="mt-4 mb-0">
                                                        <li><Link>Meat & Poultry</Link></li>
                                                        <li><Link>Fresh Vegetables</Link></li>
                                                        <li><Link>Herbs & Seasonings</Link></li>
                                                        <li><Link>Cuts & Sprouts</Link></li>
                                                        <li><Link>Exotic Fruits & Veggies</Link></li>
                                                        <li><Link>Packaged Produce</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    <h4 className="text-g">Breakfast & Dairy</h4>
                                                    <ul className="mt-4 mb-0">
                                                        <li><Link>Milk & Flavoured Milk</Link></li>
                                                        <li><Link>Butter and Margarine</Link></li>
                                                        <li><Link>Eggs Substitutes</Link></li>
                                                        <li><Link>Marmalades</Link></li>
                                                        <li><Link>Sour Cream</Link></li>
                                                        <li><Link>Cheese</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    <h4 className="text-g">Meat & Seafood</h4>
                                                    <ul className="mt-4 mb-0">
                                                        <li><Link>Breakfast Sausage</Link></li>
                                                        <li><Link>Dinner Sausage</Link></li>
                                                        <li><Link>Chicken</Link></li>
                                                        <li><Link>Sliced Deli Meat</Link></li>
                                                        <li><Link>Wild Caught Fillets</Link></li>
                                                        <li><Link>Crab and Shellfish</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png"
                                                        className="w-100" />
                                                </div>
                                            </div>

                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>Blog</Link></Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>Pages <KeyboardArrowDownIcon /></Link></Button>

                                        <div className="dropdown-menu show">
                                            <ul>
                                                <li><Button><Link to="/about">About Us</Link></Button></li>
                                                <li><Button><Link to="/about">Contact</Link></Button></li>
                                                <li><Button><Link to="/about">My Account</Link></Button></li>
                                                <li><Button><Link to="/about">Login</Link></Button></li>
                                                <li><Button><Link to="/about">Register</Link></Button></li>
                                                <li><Button><Link to="/about">Forgot Password</Link></Button></li>
                                                <li><Button><Link to="/about">Reset Password</Link></Button></li>
                                                <li><Button><Link to="/about">Purchase Guide</Link></Button></li>
                                                <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                                                <li><Button><Link to="/about">Term Of Service</Link></Button></li>
                                                <li><Button><Link to="/about">404 Page</Link></Button></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>Contact</Link></Button>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div className="col-sm-2 part3 d-flex align-items-center">
                            <div className="phNo d-flex align-items-center ml-auto">
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
                </div>
            </div>
        </>
    )
}
export default Nav;