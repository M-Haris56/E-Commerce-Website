import React from "react";
import './style.css';
import banner1 from '../../Assests/banner1.png';
import banner2 from '../../Assests/banner2.png';
import banner3 from '../../Assests/banner3.png';

const Banners = () => {
    return (
        <>
            <div className="bannerSection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="box">
                                <img src={banner1} className="w-100 transition" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="box">
                                <img src={banner2} className="w-100 transition" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="box">
                                <img src={banner3} className="w-100 transition" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default Banners;