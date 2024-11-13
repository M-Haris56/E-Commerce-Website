import React from 'react';
import './style.css';
import page404 from '../../Assests/page404.png'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <section className='notFound'>
                <div className='container-fluid'>
                    <div className='box'>
                        <img src={page404} />
                        <br /><br />
                        <h1>Page Not Found</h1>
                        <p>The link you clicked may be broken or the page may have been removed.
                            visit the Homepage or Contact us about the problem</p>
                        <br />

                        <div className='d-flex'>
                            <Button className='btn-g btn-lg m-auto'><Link to={'/'}>Back To Home Page</Link></Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NotFound;