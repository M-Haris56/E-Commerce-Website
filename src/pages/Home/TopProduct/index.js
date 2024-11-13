import React from "react";
import './style.css';
import slider4 from '../../../Assests/slider4.jpg'
import slider5 from '../../../Assests/slider5.jpg'
import slider6 from '../../../Assests/slider6.jpg'
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';

const TopProducts = (props) => {
    return (
        <>
            <div className="topSelling-box">
                <h3>{props.title}</h3>


                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                            <img src={slider4} className="w-100" />
                        </Link>
                    </div>
                    <div className="info px-3">
                        <Link to=""><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                        <div>
                            <span className='price text-g font-weight-bold'>$28.85</span>
                            <span className='oldPrice'>$32.8</span>
                        </div>
                    </div>
                </div>

                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                            <img src={slider4} className="w-100" />
                        </Link>
                    </div>
                    <div className="info px-3">
                        <Link to=""><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                        <div>
                            <span className='price text-g font-weight-bold'>$28.85</span>
                            <span className='oldPrice'>$32.8</span>
                        </div>
                    </div>
                </div>

                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                            <img src={slider4} className="w-100" />
                        </Link>
                    </div>
                    <div className="info px-3">
                        <Link to=""><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                        <div>
                            <span className='price text-g font-weight-bold'>$28.85</span>
                            <span className='oldPrice'>$32.8</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopProducts;