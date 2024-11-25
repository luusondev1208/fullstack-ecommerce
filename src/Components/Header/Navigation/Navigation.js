import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
// import { IoHomeOutline } from "react-icons/io5";

const Navigation =() =>{
    const [isopenSiderbarVal,setisopenSiderbarVal] = useState(false);
    return (
        <>
         {/* nav */}
         <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-2 navPart1'>
                           <div className="catWraper">
                           <Button className='allCatTab align-items-center' onClick={()=>setisopenSiderbarVal(!isopenSiderbarVal)}>
                                <span className="icon-one mr-2"><IoIosMenu/></span>
                                <span className='text'>ALL CATEGORIES</span>
                                <span className="icon_tow ml-2"><FaAngleDown/></span>
                            </Button>
                            <div className={`siderbarNav ${isopenSiderbarVal === true ? 'open' : ''}`}>
                                    <ul>
                                        <li><Link to="/"><Button>Men</Button></Link></li>
                                        <li><Link to="/"><Button>Women</Button></Link></li>
                                        <li><Link to="/"><Button>Clothing</Button></Link></li>
                                        <li><Link to="/"><Button>Clothing</Button></Link></li>

                                    </ul>
                            </div>
                           </div>
                        </div>
                        <div className='col-sm-10 navPart2 d-flex align-items-center'>
                            <ul className="list list-inline ml-auto">
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Home</Button></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Men</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>


                                    </div>
                                </li> 
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Women</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>


                                    </div>
                                </li> 
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Beauty</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>


                                    </div>
                                </li> 
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>


                                    </div>
                                </li> 
                                <li className="list-inline-item">
                                    <Link to="/"><Button>kids</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>


                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/"><Button>kids</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>


                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Blog</Button></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Contact</Button></Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/*  */}
        </>
    )
}

export default Navigation;