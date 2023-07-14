import React, { useState } from "react";
import s from './TopSellers.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import top1 from '../../Images/top1.png'
import top2 from '../../Images/top2.png'
import top3 from '../../Images/top3.png'
import Card from "../Recommended/Card";
const TopSellers = () => {
    const [rec, setRec] = useState([
        { id: 1, img: top1, name: ' Horror1 The Time Has Come', desc: "Lindbergh's Pharmacy is an Athens, Georgia, institution...", price: '$ 27.89', oldPrice: '$ 30.99', genre: 'Horror' },
        { id: 2, img: top2, name: ' Fiction1 I Want a Better Catastrophe...', desc: 'With global warming projected to rocket past the...', price: '$ 26.99', oldPrice: '$ 29.99', genre: 'Fiction' },
        { id: 3, img: top3, name: ' Romance1 I Want a Better Catastrophe...', desc: 'Forget a Mentor, Find...', price: '$ 29.99', oldPrice: '$ 32.99', genre: 'Romance' },
        { id: 4, img: top3, name: ' Mystery1 Forget a Mentor, Find...', desc: 'Forget a Mentor, Find...', price: '$ 29.99', oldPrice: '$ 32.99', genre: 'Mystery' },
        { id: 5, img: top3, name: ' Fiction2 Forget a Mentor, Find...', desc: 'Forget a Mentor, Find...', price: '$ 29.99', oldPrice: '$ 32.99', genre: 'Fiction' },

    ])

    const [filter, setFilter] = useState(rec);
    const [selected, setSelected] = useState('Choose a genre')
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickArrowRight />,
        variableWidth: true,
        rows: 1,
        adaptiveHeight: true,
        responsive: [
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

    const handleChange = (event) => {
        setSelected(event.target.value)
        console.log(selected)
        if (selected === 'Choose a genre') {
            setFilter(rec)
        }
        else {
            setFilter(rec)
            let newList = [...rec].filter(item => item.genre === selected);
            setFilter(newList)
            console.log(filter)
        }
    };


    return (
        <div className={s.topSellers}>
            <p className={s.title}>Top Sellers </p>
            <select className={s.select} onChange={handleChange} value={selected}>
                <option value='Choose a genre' >Choose a genre</option>
                <option value='Fiction'>Fiction</option>
                <option value='Romance'>Romance</option>
                <option value='Mystery' >Mystery</option>
                <option value='Horror' >Horror</option>
            </select>
            <Slider {...settings}>
                {filter.map((rec) =>
                    <Card rec={rec} key={rec.id} />)}

            </Slider>

        </div>
    )
}

export default TopSellers

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
    >
    </div>
);