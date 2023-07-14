import React, { useState } from "react";
import s from './Recommended.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import rec1 from '../../Images/rec1.png'
import rec2 from '../../Images/rec2.png'
import rec3 from '../../Images/rec3.png'
import Card from "./Card";

const Recommended = () => {
    const [rec, setRec] = useState([
        { id: 1, img: rec1, name: 'Pride and Protest', desc: 'A woman goes head-to-head with the CEO of...', price: '$ 15.50', oldPrice: '$ 18.50' },
        { id: 2, img: rec2, name: 'Forget a Mentor, Find...', desc: 'Forget a Mentor, Find...', price: '$ 29.99', oldPrice: '$ 32.99' },
        { id: 3, img: rec3, name: 'Forget a Mentor, Find...', desc: 'Forget a Mentor, Find...', price: '$ 29.99', oldPrice: '$ 32.99' },
        { id: 4, img: rec3, name: 'Forget a Mentor, Find...', desc: 'Forget a Mentor, Find...', price: '$ 29.99', oldPrice: '$ 32.99' },

    ])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SlickArrowRight />,
        variableWidth: true,
        rows: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1370,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 750,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
          
        ]
    };
    return (
        <div className={s.recommended}>
            <p className={s.title}>Recommended for you </p>
            <Slider {...settings}>
                <div>
                    {rec.slice(0, 1).map((rec) =>
                        <Card rec={rec} key={rec.id} />)}
                </div>
                <div>
                    {rec.slice(1, 2).map((rec) =>
                        <Card rec={rec} key={rec.id} />)}
                </div>
                <div>
                    {rec.slice(2, 3).map((rec) =>
                        <Card rec={rec} key={rec.id} />)}
                </div>
                <div>
                    {rec.slice(3, 4).map((rec) =>
                        <Card rec={rec} key={rec.id} />)}
                </div>
            </Slider>
        </div>
    )
}

export default Recommended


const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
        {...props}
        className={
            "next" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
    > </div>
);