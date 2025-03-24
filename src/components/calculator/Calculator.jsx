import React, {useState} from 'react';
import Icon from '../../assets/icon/ethereum_icon_04 1 (1).png'
import './Calculator.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image1 from '../../assets/img.png'
import image2 from '../../assets/img_1.png'
import image3 from '../../assets/img_2.png'
import image4 from '../../assets/img_3.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "swiper/css/navigation"; // Стили для кнопок

const profitStages = [
    {
        id: "foundation",
        name: "First stage",
        multiplier: 1.4,
        image: image1
    },
    {
        id: "walls",
        name: "Second stage",
        multiplier: 2.0,
        image: image2
    },
    {
        id: "roof",
        name: "Third stage",
        multiplier: 2.5,
        image: image3
    },
    {
        id: "finishing",
        name: "Fourth stage",
        multiplier: 3.0,
        image: image4
    }
];


const Calculator = () => {
    const [investment, setInvestment] = useState(0);

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setInvestment(value);
        }
    };
    return (
        <div>
            <h1 className='title'>Enter the invitation amount</h1>
            <p className='subTitle'>In this block you can see how the important capital will 
                grow with the progress of real estate construction at all stages</p>
            <div className='wrapperToken'>
                <img className='iconEth' src={Icon} alt=""/>
                <div className='titleToken'>Сost of one token</div>
                <div>250$</div>
            </div>
             <label>
                 <input
                    type="number"
                    value={investment}
                    onChange={handleInputChange}
                    className='inputCalculator'
                />
            </label>
            <p className='enterText'>Enter the investment amount</p>
            <Swiper
                slidesPerView={2.8}
                spaceBetween={30}
                centeredSlides={true}
                className="mySwiper"
                modules={[Navigation]}
                navigation={{
                    nextEl: ".custom-swiper-button-next",
                    prevEl: ".custom-swiper-button-prev"
                }}

            >
                <div className='wrapperSwiperSlide'>
                    {profitStages.map(({ id, name, multiplier, image }) => {
                        const profit = Math.round(investment * multiplier);
                        const percentage = (multiplier - 1) * 100;

                        return (
                            <SwiperSlide key={id}>
                                <div className="slide-content">
                                    <img
                                        className="imageConstruction"
                                        src={image}
                                        alt={name}
                                        width="100%"
                                    />
                                    <p className="process">{name}</p>
                                    <div className="profit">
                                        +{percentage.toFixed(0)}% – ${profit}
                                    </div>
                                    <div className="titleProfit">Profit</div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </div>
            </Swiper>
            <div className='wrapperBtn'>
                <div className="custom-swiper-button-prev"><ArrowBackIosIcon className='prev'/></div>
                <div className="custom-swiper-button-next"><ArrowForwardIosIcon className='next'/></div>
            </div>

            <div>
            </div>
         </div>
    );
};

export default Calculator;