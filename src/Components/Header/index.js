import Logo from'../../assets/images/logo.jpg';

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaUser } from "react-icons/fa";
import { TbShoppingCartHeart } from "react-icons/tb";
import SeachBox from './SearchBox/SearchBox';
import ContryDropdown from '../ContryDropdown/ContryDropdown';
import Navigation from './Navigation/Navigation';

const Header =() =>{
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container ">
                        <p className="mb-0 mt-0 text-center ">Due to the COVID 19 epidemic, orders may be processed with a slight delay</p>
                    
                    </div>
                </div>
            {/* Hiển thị header */}
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className='logoWrapper d-flex align-items-center col-sm-2'>
                            <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                        </div>
                            {/* Country */}
                        <div className='col-sm-10 d-flex align-items-center part2'>
                            <ContryDropdown/>

                            {/* Seach */}
                            <SeachBox/>
                           

                            {/* User and cart */}
                            <div className='part3 d-flex align-items-center ml-auto'>
                                <Button className='crircle mr-3'><FaUser /></Button>
                                <div className='ml-auto cartTab d-flex align-items-center'>
                                    <span className='price'>300$</span>
                                    <div className='position-relative ml-2'>
                                    <Button className='crircle'><TbShoppingCartHeart  /></Button>
                                    </div>
                                </div>
                            </div>
                            {/* User and cart end*/}



                        </div>
                    </div>
                </div>
            </div>
            {/* end header */}

            {/* Hiển thị Navigation */}
                <Navigation/>

            </div>

        </>
    )
}

export default Header;