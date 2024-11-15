import React from "react";
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import banner1 from '../../Assests/banner1.png'


function valuetext(value) {
    return `${value}°C`;
}

const Sidebar = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <div className="sidebar" >
                <div className="card border-0 shadow">
                    <h3>Category</h3>
                    <div className="cartlist">
                        <div className="cartitem">
                            <div className="d-flex align-items-center">
                                <span className="img">
                                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                                        width={30} />
                                </span>
                                <h4 className="mb-0 ms-3">Milks & Dairies</h4>
                                <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                                    30
                                </span>
                            </div>
                        </div>
                        <div className="cartitem">
                            <div className="d-flex align-items-center">
                                <span className="img">
                                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                                        width={30} />
                                </span>
                                <h4 className="mb-0 ms-3">Milks & Dairies</h4>
                                <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                                    30
                                </span>
                            </div>
                        </div>
                        <div className="cartitem">
                            <div className="d-flex align-items-center">
                                <span className="img">
                                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                                        width={30} />
                                </span>
                                <h4 className="mb-0 ms-3">Milks & Dairies</h4>
                                <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                                    30
                                </span>
                            </div>
                        </div>
                        <div className="cartitem">
                            <div className="d-flex align-items-center">
                                <span className="img">
                                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                                        width={30} />
                                </span>
                                <h4 className="mb-0 ms-3">Milks & Dairies</h4>
                                <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                                    30
                                </span>
                            </div>
                        </div>
                        <div className="cartitem">
                            <div className="d-flex align-items-center">
                                <span className="img">
                                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                                        width={30} />
                                </span>
                                <h4 className="mb-0 ms-3">Milks & Dairies</h4>
                                <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                                    30
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card border-0 shadow">
                    <h3>Fill by price</h3>
                    <Slider
                        min={0}
                        step={1}
                        max={1000}
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color="success"
                    />
                    <div className="d-flex pt-2 pb-2 priceRange">
                        <span>From:<strong className="text-success">${value[0]}</strong></span>
                        <span className="ms-auto">From:<strong className="text-success">${value[1]}</strong></span>
                    </div>
                    <div className="filters mt-4">
                        <h5>Color</h5>
                        <ul>
                            <li>  <Checkbox {...label} color="success" /> Red (56) </li>
                            <li>  <Checkbox {...label} color="success" /> Green (78) </li>
                            <li>  <Checkbox {...label} color="success" /> Blue (54) </li>
                            {/* <h5> Items Condition</h5> */}
                            <li>  <Checkbox {...label} color="success" /> Red (56) </li>
                            <li>  <Checkbox {...label} color="success" /> Green (78) </li>
                            <li>  <Checkbox {...label} color="success" /> Blue (54) </li>
                            <li>  <Checkbox {...label} color="success" /> Red (56) </li>
                            <li>  <Checkbox {...label} color="success" /> Green (78) </li>
                            <li>  <Checkbox {...label} color="success" /> Blue (54) </li>
                            <li>  <Checkbox {...label} color="success" /> Red (56) </li>
                            <li>  <Checkbox {...label} color="success" /> Green (78) </li>
                            <li>  <Checkbox {...label} color="success" /> Blue (54) </li>
                            <li>  <Checkbox {...label} color="success" /> Red (56) </li>
                            <li>  <Checkbox {...label} color="success" /> Green (78) </li>
                            <li>  <Checkbox {...label} color="success" /> Blue (54) </li>
                            <li>  <Checkbox {...label} color="success" /> Red (56) </li>
                            <li>  <Checkbox {...label} color="success" /> Green (78) </li>
                            <li>  <Checkbox {...label} color="success" /> Blue (54) </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <Button className="btn btn-g">Filters <FilterAltOutlinedIcon /></Button>

                    </div>

                </div>
                <img src={banner1} className="w-100" />
            </div>
        </>
    )
}
export default Sidebar;