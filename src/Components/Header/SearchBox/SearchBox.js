import Button from '@mui/material/Button';

import { IoIosSearch } from "react-icons/io";
const SeachBox =() =>{
    return (
        <>
         {/* // Header tim kiem  */}
         <div className='headerSearch ml-3 mr-3'>
            <input type='text' placeholder='Seach for products...'/>
             <Button> <IoIosSearch  /></Button>

        </div>
        {/* // Header end tim kiem  */}
        </>
    )
}

export default SeachBox;