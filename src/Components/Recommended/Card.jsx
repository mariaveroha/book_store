import React from "react";
import s from './Card.module.css'
import icon from '../../Images/basket.png'
import { useMediaQuery } from 'react-responsive'
import favorite from '../../Images/Favoritemobile.png'
import target from '../../Images/mobileicon.png'
const Card = (props) => {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 751 })
    return (
        <div className={s.card}>
            <img className={s.img} src={props.rec.img} />
            <div className={s.inf}>
                <p className={s.name}>{props.rec.name}</p>
                <p className={s.desc}>{props.rec.desc}</p>
                <div className={s.flex}>
                    {isTabletOrMobile ?
                        <span className={s.price}>{props.rec.price}</span>
                        :
                        <>
                            <span className={s.price}>{props.rec.price}</span>
                            <span className={s.oldPrice}>{props.rec.oldPrice}</span>
                        </>}
                </div>
                {
                    isTabletOrMobile ?
                        <div className={s.icons}>
                            <img src={target} />
                            <img src={favorite} />
                        </div>
                        :
                        <button className={s.button}>
                            <img className={s.icon} src={icon} />
                            <span className={s.buttonText}>Add to basket</span>
                        </button>
                }
            </div>
        </div>
    )
}

export default Card