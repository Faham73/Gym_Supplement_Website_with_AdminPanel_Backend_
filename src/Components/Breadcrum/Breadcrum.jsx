import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/Frontend_Assets/breadcrum_arrow.png'

export const Breadcrum = (props) => {
    if (!props.product) {
        return null; // or return a loading state
    }
    
    return (
        <div className='breadcrum'>
            HOME<img src={arrow_icon} alt=">" />
            SHOP<img src={arrow_icon} alt=">" />
            {props.product.category}<img src={arrow_icon} alt=">" />
            {props.product.name}
        </div>
    )
}
