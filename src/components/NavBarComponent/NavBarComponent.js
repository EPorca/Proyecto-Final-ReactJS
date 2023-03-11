import React from 'react';
import { LogoComponent } from '../ImagesComponent/ImagesComponent';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


    export const NavBarComponent = () => {
            
        return (
            <nav className='wrapper'>
            <LogoComponent/>
            <input type="checkbox" name='' id='toggle' />
            <label for="toggle"><i className='material-icons'>Menú</i></label>
            <div className='menu'>
                <ul>
                    <li>
                        <a href="">
                            <span>
                                Home
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                Catálogo
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                Servicios
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                Quienes Somos?
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
            <FontAwesomeIcon className='carrito' icon={faCartShopping} />
            </div>
        </nav>
        )
    }

