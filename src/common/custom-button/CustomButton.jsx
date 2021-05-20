import React from 'react';
import './CustomButton.css';

const CustomButton = ({children, profilebtn,yellowbtn, whitebtn,searchbtn,...otherProps})=>{
    return (
        <button data-test-id="submit-button" className={`customButton ${profilebtn ? "profilebtn" : ''} ${whitebtn ? "whitebtn" : ''} ${yellowbtn ? "yellowbtn" : ''} ${searchbtn ? "searchbtn" : ''}`}{...otherProps}>
           <span>
           {children }

           </span> 
        </button>
    );
}
export default CustomButton;







