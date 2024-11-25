import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import Slide from '@mui/material/Slide';
import React from 'react';
import { MyContext } from "../../App";


// react-icons: Thêm các biểu tượng như FaAngleDown, IoIosSearch, và MdClose để hiển thị các icon mũi tên, tìm kiếm và đóng.
// useState: Hook của React để quản lý trạng thái isOpenmodal, cho biết liệu hộp thoại có đang mở hay không.
//@mui/material/Button, @mui/material/Dialog, và @mui/material/Slide: Các thành phần Material-UI cho nút, hộp thoại (dialog), và hiệu ứng chuyển tiếp (slide transition).
// Khi nhấn vào nút onClick={() => setiOpenModal(true)}, hộp thoại sẽ mở ra (trạng thái isOpenmodal được đặt thành true).

const Transition = React.forwardRef(function Transition(props,ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const  ContryDropdown=() =>{
    const [isOpenmodal,setiOpenModal] = useState(false);

    const [selectedTab,setselectedTab] = useState(null);

    const [countryList,setcountryList] = useState([]);
    

    const context = useContext(MyContext);

    const selectCountry=(index, country)=>{
        setselectedTab(index);
        setiOpenModal(false);
        context.setselectedCountry(country)
    }

    useEffect(()=>{
        
        setcountryList(context.countryList);
    },[])
    
    const filterList = (e) =>{
        const keyword = e.target.value.toLowerCase();
        if (keyword!=="") {
            const list = countryList.filter((item)=>{
                return item.country.toLowerCase().includes(keyword);
            })
            setcountryList(list);

        }else{
            setcountryList(context.countryList);
        }
        

    }
    return (
        <>
            <Button className='conntryDrop' onClick={()=>setiOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">{context.selectedCountry!== ""? context.selectedCountry.length>10 ? context.selectedCountry?.subsrt(0,10)+'...':context.selectedCountry:'Select Location'}</span>
                </div>
                <span className="ml-auto"> <FaAngleDown/> </span>
            </Button>


        <Dialog className="locationModal" open={isOpenmodal}  onClose={()=>setiOpenModal(false)} TransitionComponent={Transition} >
            <h4 className="mb-0">Choose your Delivery Location</h4>
            <Button className="close"onClick={()=>setiOpenModal(false)}> <MdClose  /></Button>
            <p>Enter your address and we will specify the offer for your area.</p>
            <div className='headerSearch w-100'>
            <input type='text' placeholder='Seach for products...' onChange={filterList}/>
             <Button> <IoIosSearch  /></Button>

            </div>

            <ul className="conuntryList mt-3">
                {countryList?.length!==0 && countryList?.map((item,index)=>{
                    return (
                        <li key={index}><Button onClick={()=>selectCountry(index)}
                        className={`${selectedTab === index ? 'active': ''}`}
                        >{item.country}</Button></li>
                    )
                })}
            </ul>
        </Dialog>
    </>
    )
}

export default ContryDropdown;