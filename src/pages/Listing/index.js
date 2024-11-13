import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import Product from "../../Components/Product";
import { Button } from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
import FilterListIcon from '@mui/icons-material/FilterList';

const Listing = () => {
    const [showDropdownVisible, setShowDropdownVisible] = useState(false);
    const [sortDropdownVisible, setSortDropdownVisible] = useState(false);

    const showDropdownRef = useRef(null);
    const sortDropdownRef = useRef(null);

    // Toggle dropdown visibility for "Show: 50"
    const toggleShowDropdown = () => {
        setShowDropdownVisible(!showDropdownVisible);
        setSortDropdownVisible(false); // Close other dropdown if open
    };

    // Toggle dropdown visibility for "Sort by: Featured"
    const toggleSortDropdown = () => {
        setSortDropdownVisible(!sortDropdownVisible);
        setShowDropdownVisible(false); // Close other dropdown if open
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showDropdownRef.current && !showDropdownRef.current.contains(event.target)) {
                setShowDropdownVisible(false);
            }
            if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
                setSortDropdownVisible(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <section className="listingPage">
            <div className="container-fluid">
                <div className="bareadcrumb">
                    <h1>Snack</h1>
                    <ul className="list list-inline">
                        <li className="list-inline-item mb-0">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/">Shop</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/">Snack</Link>
                        </li>
                    </ul>
                </div>
                <div className="listingData">
                    <div className="row">
                        <div className="col-md-3 sidebarWrapper">
                            <Sidebar />
                        </div>
                        <div className="col-md-9 rightcontent homeProducts">
                            <div className="topStrip d-flex align-items-center">
                                <p className="mb-0">We found <span className="text-success">29</span> items for you!</p>
                                <div className="ms-auto d-flex align-items-center">
                                    <div className="tab-" ref={showDropdownRef}>
                                        <Button onClick={toggleShowDropdown} className="dropdown-toggle me-3"> <GridViewIcon className="me-2" /> Show: 50</Button>
                                        {showDropdownVisible && (
                                            <ul className="account-dropdown">
                                                <li className="align-items-center">50</li>
                                                <li className="align-items-center">100</li>
                                                <li className="align-items-center">150</li>
                                                <li className="align-items-center">200</li>
                                                <li className="align-items-center">All</li>
                                            </ul>
                                        )}
                                    </div>
                                    <div className="tab-" ref={sortDropdownRef}>
                                        <Button onClick={toggleSortDropdown} className="dropdown-toggle"><FilterListIcon className="me-2" />Sort by: Featured</Button>
                                        {sortDropdownVisible && (
                                            <ul className="account-dropdown w-100">
                                                <li className="align-items-center">Featured</li>
                                                <li className="align-items-center">Price: Low to High</li>
                                                <li className="align-items-center">Price: High to Low</li>
                                                <li className="align-items-center">Release Date</li>
                                                <li className="align-items-center">Avg. Rating</li>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="ProductRow ps-4 pe-3">
                                {/* ....................... */}
                                {/* Yeah Shot cut tarika ha nichey item waly code ka by arrey */}


                                {/* <div className="ProductRow ps-4 pe-3">
                                {Array(20).fill().map((_, index) => (
                                    <div className="item" key={index}>
                                        <Product />
                                    </div>
                                ))}
                            </div> */}

                                {/* ............................ */}

                                <div className="item">
                                    <Product tag="best" />
                                </div>
                                <div className="item">
                                    <Product tag="new" />
                                </div>
                                <div className="item">
                                    <Product tag="hot" />
                                </div>
                                <div className="item">
                                    <Product tag="best" />
                                </div>
                                <div className="item">
                                    <Product tag="new" />
                                </div>
                                <div className="item">
                                    <Product tag="hot" />
                                </div>
                                <div className="item">
                                    <Product tag="best" />
                                </div>
                                <div className="item">
                                    <Product tag="new" />
                                </div>
                                <div className="item">
                                    <Product tag="hot" />
                                </div>
                                <div className="item">
                                    <Product tag="best" />
                                </div>
                                <div className="item">
                                    <Product tag="new" />
                                </div>
                                <div className="item">
                                    <Product tag="hot" />
                                </div>
                                <div className="item">
                                    <Product tag="best" />
                                </div>
                                <div className="item">
                                    <Product tag="new" />
                                </div>
                                <div className="item">
                                    <Product tag="hot" />
                                </div>
                                <div className="item">
                                    <Product tag="best" />
                                </div>
                                <div className="item">
                                    <Product tag="new" />
                                </div>
                                <div className="item">
                                    <Product tag="hot" />
                                </div>
                                <div className="item">
                                    <Product tag="best" />
                                </div>
                                <div className="item">
                                    <Product tag="best" />
                                </div>
                                <div className="item">
                                    <Product tag="new" />
                                </div>
                                <div className="item">
                                    <Product tag="hot" />
                                </div>
                                <div className="item">
                                    <Product tag="best" />
                                </div>
                                <div className="item">
                                    <Product tag="new" />
                                </div>
                                <div className="item">
                                    <Product tag="hot" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Listing;
