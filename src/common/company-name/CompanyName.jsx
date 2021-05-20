import React from 'react';
import { Link } from 'react-router-dom';
import BlogoImage from '../../assets/images/dashboard/Blogo.png';

const CompanyName = (props)=>{
    return (
            <Link className="companyNameLink" to="/">
                <div className="companyName">
                    <img className="blogo" src={BlogoImage} alt="B"/>
                    Booking.app
                </div>
            </Link>
    )
}
export default CompanyName