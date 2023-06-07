import React, { useState } from "react";
import s from './TopSellers.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import top1 from '../../Images/top1.png'
import top2 from '../../Images/top2.png'
import top3 from '../../Images/top3.png'
import Card from "../Recommended/Card";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const TopSellers = () => {
    const [rec, setRec] = useState([
        { id: 1, img: top1, name: 'The Time Has Come', desc: "Lindbergh's Pharmacy is an Athens, Georgia, institution...", price: '$ 27.89', oldPrice: '$ 30.99' },
        { id: 2, img: top2, name: 'I Want a Better Catastrophe...', desc: 'With global warming projected to rocket past the...', price: '$ 26.99', oldPrice: '$ 29.99' },
        { id: 3, img: top3, name: 'I Want a Better Catastrophe...', desc: 'Forget a Mentor, Find...', price: '$ 29.99', oldPrice: '$ 32.99' },
        { id: 4, img: top3, name: 'Forget a Mentor, Find...', desc: 'Forget a Mentor, Find...', price: '$ 29.99', oldPrice: '$ 32.99' },

    ])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: <SlickArrowRight />,
        variableWidth: true,
        rows: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1370,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            },
          
        ]
    };

    const [genre, setGenre] = React.useState('');

    const handleChange = (event) => {
        setGenre(event.target.value);
    };


    return (
        <div className={s.topSellers}>
            <p className={s.title}>Top Sellers </p>
            <FormControl sx={{ m: 1, width: 188 }}>

                <Select
                    value={genre}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    className={s.select}
                >
                    <MenuItem disabled value="">
                        <span className={s.option}>Choose a genre</span>
                    </MenuItem>
                    <MenuItem className={s.option} value='Fiction'>Fiction</MenuItem>
                    <MenuItem className={s.option} value='Romance'>Romance</MenuItem>
                    <MenuItem className={s.option} value='Mystery'>Mystery</MenuItem>
                    <MenuItem className={s.option} value='Horror'>Horror</MenuItem>
                </Select>
            </FormControl>
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

export default TopSellers

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={
            "next" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
    > &rsaquo;
    </button>
);