import React, { useState } from "react";
import s from './News.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import news1 from '../../Images/news1.png'
import news2 from '../../Images/new2.png'
import news3 from '../../Images/news3.png'
import news4 from '../../Images/news4.png'
import New from "./New";
const News = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SlickArrowRight />,
        infinite: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 1,
                }
            },
            {
                breakpoint: 869,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                   arrows: false,
                   slidesToShow: 1,
                   slidesToScroll: 1,
                   rows: 1,
                   
                }
            },
            {
                breakpoint: 550,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                   
                }
            },
          
        ]
    };

    const [news, setNews] = useState([
        { id: 1, title: 'The Books You Need to Read in 2023', text: "his is the blog we know you've all been waiting for. We present the top 10 titles for 2023 in fiction, non-fiction and children's books; a glorious mix of masterful storytelling, compelling subject matter and page-turning thrills...", img: news1 },
        { id: 2, title: "February's Best Children's Books", text: "Some of the finest children's authors currently writing have books publishing this month, from Natasha Farrant to Elle McNicoll and from Tahereh Mafi to Harriet Muncaster. Across all areas and age ranges there are plenty of fantastic titles...", img: news2 },
        { id: 3, title: "What to Read Next After Damascus Station", text: "A spy thriller with real authenticity due to its author's previous career as a CIA operative, Damascus Station has proven to be a phenomenal word-of-mouth hit since its publication in January. With its riveting story of forbidden", img: news3 },
        { id: 4, title: "The Best Dark Academia Books", text: "Abounding in sinister secrets - sometimes magical, sometimes not - locked in the libraries and halls of mysterious educational institutions, dark academia has become a phenomenally successful literary genre. With its...", img: news4 },
    ])
    return (
        <div className={s.news}>
            <p className={s.title}>News</p>
            <Slider {...settings}>
                <div>
                    {news.slice(0, 1).map((news) =>
                        <New news={news} key={news.id} />)}
                </div>
                <div>
                    {news.slice(1, 2).map((news) =>
                        <New news={news} key={news.id} />)}
                </div>
                <div>
                    {news.slice(2, 3).map((news) =>
                        <New news={news} key={news.id} />)}
                </div>
                <div>
                    {news.slice(3, 4).map((news) =>
                        <New news={news} key={news.id} />)}
                </div>
            </Slider>
        </div>
    )
}

export default News


const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
        {...props}
        className={
            "nextN" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
    >
    </div>
);