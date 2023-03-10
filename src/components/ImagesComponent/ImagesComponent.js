import React from 'react'
import ImgLogo from '../img/logo.png'


export const LogoComponent = () => {
    return (
        <a className='contenedorLogo'>
            <img className='logo' src={ImgLogo}/>
        </a>
    )
}


