import React, { useState } from "react";
import './style.css';
import Slider from "react-slick";
const CatSlider = () => {


    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
    ]);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };
    return (
        <>
            <div className="catSliderSection">
                <div className="container-fluid">
                    <h2 className="hd">Featured Categories</h2>
                    <Slider {...settings} className="cat-slider-main" id="cat-slider-main">
                        {itemBg.length !== 0 && itemBg.map((item, index) => {
                            return (
                                <>
                                    <div className="item" >
                                        <div className="info" style={{ background: item }}>
                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" />
                                            <h5>Cake & Milk</h5>
                                            <p>26 items</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                        }

                        {/* <div className="item">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" />
                                <h5>Organic Kiwi</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png" />
                                <h5>Peach</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
                                <h5>Red Apple</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png" />
                                <h5>Snack</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png" />
                                <h5>Vegetables</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" />
                                <h5>Strawberry</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png" />
                                <h5>Black plum</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" />
                                <h5>Custard apple</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                                <h5>Coffe & Tea</h5>
                                <p>26 items</p>
                            </div>
                        </div>
 */}

                    </Slider>
                </div>
            </div>

        </>
    )
}

export default CatSlider;