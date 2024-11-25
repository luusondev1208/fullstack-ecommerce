import React from "react";
import Slider from "react-slick";


const HomeBanner =() =>{
    // Cài npm install react-slick --save
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };
    return (
        <>
            <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://theme.hstatic.net/1000333436/1001213866/14/slideshow_2_master.jpg?v=428" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://theme.hstatic.net/1000333436/1001213866/14/slideshow_3_master.jpg?v=428" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://theme.hstatic.net/1000333436/1001213866/14/slideshow_4_master.jpg?v=428" className="w-100"/>
                </div>
               
            </Slider>

            </div>
        </>
    )
}

export default HomeBanner;