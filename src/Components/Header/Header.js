import React, { useEffect, useRef, useState } from "react";
import logo1 from '../../Assests/logo1.svg';
import './Header.css';
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import Select from "./SelectDrop/Select";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import Nav from "./Nav/Nav";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');

    const headerRef = useRef();

    const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
    const [selectedSecondCategory, setSelectedSecondCategory] = useState('All Categories');

    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleSecondDropdown = () => setIsSecondDropdownOpen(!isSecondDropdownOpen);
    const toggleAccountDropdown = () => setIsAccountDropdownOpen(!isAccountDropdownOpen);

    const closeDropdowns = () => {
        setIsDropdownOpen(false);
        setIsSecondDropdownOpen(false);
        setIsAccountDropdownOpen(false);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        closeDropdowns();
    };

    const handleSecondCategorySelect = (category) => {
        setSelectedSecondCategory(category);
        closeDropdowns();
    };


    return (
        <>
            <div className="headerWraper" ref={headerRef}>
                <header >
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-sm-2">
                                <img src={logo1} alt="logo" />
                            </div>

                            <div className="col-sm-5">
                                <div className="headersearch d-flex align-items-center">
                                    <div className="select-container cursor position-relative">
                                        <div className="selectdrop d-flex align-items-center" onClick={toggleDropdown}>
                                            {selectedCategory} <IoIosArrowDown />
                                        </div>
                                        {isDropdownOpen && <Select onSelect={handleCategorySelect} />}
                                    </div>
                                    <div className="search">
                                        <input type="text" placeholder="Search for items..." />
                                        <IoIosSearch className="searchicon" />
                                    </div>
                                </div>
                            </div>

                            <div className="second-dropdown col-sm-5">
                                <div className="headersearch d-flex align-items-center">
                                    <div className="select-container cursor position-relative d-flex align-items-center">
                                        <IoLocationOutline className="location-icon" />
                                        <div className="selectdrop d-flex align-items-center" onClick={toggleSecondDropdown}>
                                            {selectedSecondCategory} <IoIosArrowDown />
                                        </div>
                                        {isSecondDropdownOpen && <Select onSelect={handleSecondCategorySelect} />}
                                    </div>
                                </div>
                                <ul className="list list-inline mb-0 headertabs">
                                    <li className="list-inline-item compare-item">
                                        <IoIosGitCompare className="compare-icon" />
                                        <span className="compare-text"> Compare</span>
                                    </li>
                                    <li className="list-inline-item compare-item">
                                        <FaRegHeart className="compare-icon" />
                                        <span className="compare-text"> Wishlist</span>
                                    </li>
                                    <li className="list-inline-item compare-item">
                                        <MdOutlineShoppingCart className="compare-icon" />
                                        <span className="compare-text"> Cart</span>
                                    </li>

                                    {/* Account dropdown wrapper for hover */}
                                    <li className="list-inline-item compare-item account-dropdown-wrapper">
                                        <FaRegUser className="compare-icon" />
                                        <span className="compare-text"> Account</span>

                                        {/* Dropdown menu */}
                                        <div className="account-dropdown">
                                            <ul>
                                                <li><FaRegUser className="account-icon" />My Account</li>
                                                <li><LuMapPin className="account-icon" />Order Tracking</li>
                                                <li><FaRegHeart className="account-icon" />My Wishlist</li>
                                                <li><IoSettings className="account-icon" />Settings</li>
                                                <li><CiLogin className="account-icon" />Sign Out</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </header >

                <Nav />
            </div>
        </>

    );
};

export default Header;
