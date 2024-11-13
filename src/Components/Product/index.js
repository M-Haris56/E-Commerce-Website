import React from 'react';
import './style.css';
import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Tooltip from '@mui/material/Tooltip';


const Product = (props) => {
    return (
        <>
            <div className='productThumb'>
                {
                    props.tag !== null && props.tag !== undefined &&
                    <span className={`badge ${props.tag}`}>{props.tag}</span>
                }

                <Link>
                    <div className='imgWrapper'>
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg' className='w-100' alt='Product' />

                        <div className='overlay transition'>
                            <ul className='list list-inline mb-0'>
                                <li className='list-inline-item'>
                                    <Tooltip title="Add to Wishlist" placement="top">
                                        <a className='cursor'>
                                            <FavoriteBorderIcon />
                                        </a>
                                    </Tooltip>
                                </li>
                                <li className='list-inline-item'>
                                    <Tooltip title="Compare" placement="top">
                                        <a className='cursor'>
                                            <CompareArrowsIcon />
                                        </a>
                                    </Tooltip>
                                </li>
                                <li className='list-inline-item'>
                                    <Tooltip title="Quick View" placement="top">
                                        <a className='cursor'>
                                            <RemoveRedEyeIcon />
                                        </a>
                                    </Tooltip>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Link>
                <div className='info'>
                    <span className='d-block catName'>Snack</span>
                    <h4 className='title'><Link>Seeds of Change Organic Quinoa, Brown, & Red Rice</Link></h4>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    <span className='brand d-block text-g'>By <Link className='text-g'>NestFood</Link></span>

                    <div className='d-flex align-items-center justify-content-between mt-3'>
                        <div>
                            <span className='price text-g font-weight-bold'>$28.85</span>
                            <span className='oldPrice'>$32.8</span>
                        </div>
                        <Button><ShoppingCartOutlinedIcon />Add</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
