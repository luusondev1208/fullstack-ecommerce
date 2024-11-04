import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from '@mui/material/Slide';
import React from 'react';

// react-icons: Thêm các biểu tượng như FaAngleDown, IoIosSearch, và MdClose để hiển thị các icon mũi tên, tìm kiếm và đóng.
// useState: Hook của React để quản lý trạng thái isOpenmodal, cho biết liệu hộp thoại có đang mở hay không.
//@mui/material/Button, @mui/material/Dialog, và @mui/material/Slide: Các thành phần Material-UI cho nút, hộp thoại (dialog), và hiệu ứng chuyển tiếp (slide transition).
// Khi nhấn vào nút onClick={() => setiOpenModal(true)}, hộp thoại sẽ mở ra (trạng thái isOpenmodal được đặt thành true).

const Transition = React.forwardRef(function Transition(props,ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const  ContryDropdown=() =>{
    const [isOpenmodal,setiOpenModal] = useState(false);
    return (
        <>
            <Button className='conntryDrop' onClick={()=>setiOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">Viet Nam</span>
                </div>
                <span className="ml-auto"> <FaAngleDown/> </span>
            </Button>


        <Dialog className="locationModal" open={isOpenmodal}  onClose={()=>setiOpenModal(false)} TransitionComponent={Transition} >
            <h4 className="mb-0">Choose your Delivery Location</h4>
            <Button className="close"onClick={()=>setiOpenModal(false)}> <MdClose  /></Button>
            <p>Enter your address and we will specify the offer for your area.</p>
            <div className='headerSearch w-100'>
            <input type='text' placeholder='Seach for products...'/>
             <Button> <IoIosSearch  /></Button>

            </div>

            <ul className="conuntryList mt-3">
                <li><Button onClick={()=>setiOpenModal(false)}>VietNam</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>MongCo</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>English</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>China</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>Lao</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>Campuchia</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>ThaiLan</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>Myanma</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>Dongtimo</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>Mailaisia</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>Philippin</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>Janpan</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>Taiwan</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>Korea</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>TrieuTien</Button></li>
                <li><Button onClick={()=>setiOpenModal(false)}>American</Button></li>

            </ul>
        </Dialog>
    </>
    )
}

export default ContryDropdown;