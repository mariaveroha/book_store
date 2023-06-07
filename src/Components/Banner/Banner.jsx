import React from "react";
import s from './Banner.module.css'
import top1 from '../../Images/top1.png'
import top2 from '../../Images/top2.png'
import rec2 from '../../Images/rec2.png'
const Banner = () => {
    return (
        <div className={s.banner}>
            <div className={s.inf}>
                <p className={s.title}>New Releases This Week</p>
                <p className={s.subtitle}>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>
                <button className={s.button}>Subscribe</button>
            </div>
            <div className={s.images}>
                <img className={s.img1} src={top2} />
                <img className={s.img2} src={rec2} />
                <img className={s.img3} src={top1} />
            </div>
        </div>
    )
}

export default Banner