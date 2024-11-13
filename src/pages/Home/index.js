import React from "react";
import HomeSlider from "./Slider/index";
import CatSlider from "../../Components/catSlider";
import Banners from "../../Components/banners";
import './style.css';
import Product from "../../Components/Product";
import slider3 from '../../Assests/slider3.png'
import Slider from "react-slick";
import slider1 from '../../Assests/slider1.png'
import slider2 from '../../Assests/slider2.png'
import TopProducts from "./TopProduct";

import Footer from "../../Components/Footer/footer";
const Home = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };
    return (
        <>
            <HomeSlider />
            <CatSlider />
            <Banners />

            <section className="homeProducts">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <h2 className="hd mb-0 mt-0">Popolar Products</h2>
                        <ul className="list list-inline ml-auto filterTab">
                            <li className="list-inline-item">
                                <a className="cursor">All</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Milk & Dries</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Coffes & Tea</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Pet Foods</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Meats</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Vegetables</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Fruits</a>
                            </li>
                        </ul>
                    </div>
                    <div className="ProductRow">
                        <div className="item">
                            <Product tag='sale' />
                        </div>
                        <div className="item">
                            <Product tag='hot' />
                        </div>
                        <div className="item">
                            <Product tag='new' />
                        </div>
                        <div className="item">
                            <Product tag='best' />
                        </div>
                        <div className="item">
                            <Product tag='sale' />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product tag='new' />
                        </div>
                        <div className="item">
                            <Product tag='best' />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product tag='hot' />
                        </div>
                    </div>
                </div>
            </section>


            <section className="homeProducts homeProductsRow2 ">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
                        <ul className="list list-inline ml-auto filterTab">
                            <li className="list-inline-item">
                                <a className="cursor">Featured</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Popolar</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">New added</a>
                            </li>
                        </ul>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-3">
                            <img src={slider3} className="w-100"></img>
                        </div>
                        <div className="col-md-9">
                            <Slider {...settings} className="prodSlider">
                                <div className="item">
                                    <Product tag='sale' />
                                </div>
                                <div className="item">
                                    <Product tag='hot' />
                                </div>
                                <div className="item">
                                    <Product tag='new' />
                                </div>
                                <div className="item">
                                    <Product tag='Best' />
                                </div>
                                <div className="item">
                                    <Product tag='new' />
                                </div>
                                <div className="item">
                                    <Product tag='hot' />
                                </div>
                            </Slider>
                        </div>
                    </div>

                </div>
            </section>

            <section className="topProductSection">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col">
                            <TopProducts title="Top Selling" />
                        </div>

                        <div className="col">
                            <TopProducts title="Trending Products" />
                        </div>

                        <div className="col">
                            <TopProducts title="Recently added" />
                        </div>

                        <div className="col">
                            <TopProducts title="Top Rated" />
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}
export default Home;