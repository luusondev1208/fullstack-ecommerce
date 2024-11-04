import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// import { IoHomeOutline } from "react-icons/io5";

const Navigation =() =>{
    return (
        <>
         {/* nav */}
         <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-2 navPart1'>
                            <Button className='allCatTab'>
                                <span className="icon-one mr-2"><IoIosMenu/></span>
                                <span className='text'>ALL CATEGORIES</span>
                                <span className="icon_tow ml-2"><FaAngleDown/></span>
                            </Button>
                        </div>
                        <div className='col-sm-10 navPart2 d-flex align-items-center'>
                            <ul className="list list-inline ml-auto">
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Home</Button></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Fashion</Button></Link>
                                </li> 
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Electronic</Button></Link>
                                </li> 
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Bakery</Button></Link>
                                </li> 
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Grocery</Button></Link>
                                </li> 
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Mobile</Button></Link>
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