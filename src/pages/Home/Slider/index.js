import React from "react";
import Slider from "react-slick";
import "./index.css"
import slider1 from '../../../Assests/slider1.png'
import slider2 from '../../../Assests/slider2.png'
import { Fade } from "react-bootstrap";


import NewsLetter from '../../../Components/newsLetter'


const HomeSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true
    };
    return (
        <>
            <section>
                <div className="homeslider">
                    <div className="container-fluid position-relative">
                        <Slider {...settings} className="home-slider-main">
                            <div className="item">
                                <img src={slider1} className="w-100"></img>
                                <div className="info">
                                    <h2 className="mb-4"> Don,t miss amazing<br />
                                        grocery deals</h2>
                                    <p>Sign up the daily newsletter</p>
                                </div>
                            </div>

                            <div className="item">
                                <img src={slider2} className="w-100"></img>

                                <div className="info">
                                    <h2 className="mb-3"> Don,t miss amazing<br />
                                        Fresh Vegetables</h2>
                                    <p>Big discount</p>
                                </div>
                            </div>
                        </Slider>
                        <NewsLetter />

                    </div>
                </div>
            </section>



        </>
    )
}
export default HomeSlider;