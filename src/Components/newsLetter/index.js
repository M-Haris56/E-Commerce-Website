import React from "react";
import './style.css'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const NewsLetter = () => {
    return (
        <>
            <div className="newsLetterBanner">
                <SendIcon />
                <input type="text" placeHolder="Your email address" />
                <Button className="rr">Subcribe</Button>
            </div>
        </>
    )
}
export default NewsLetter;