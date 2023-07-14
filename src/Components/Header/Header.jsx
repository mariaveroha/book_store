import React, { useEffect, useState } from "react";
import s from './Header.module.css'
import login from '../../Images/Account.png'
import like from '../../Images/Favorite.png'
import basket from '../../Images/basket.png'
import Menu from "../Menu/Menu";
import mobileicon from '../../Images/mobileicon.png'
import { useMediaQuery } from 'react-responsive'
const Header = () => {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 751 })
    const [menuActive, setMenuActive] = useState(false)
    useEffect(() => {
       if (menuActive) {
        document.body.classList.add('bodyMenu')
       } 
       else {document.body.classList.remove('bodyMenu')}
      });
    return (

        <div className={s.header}>
            {
                isTabletOrMobile ?
                    <>
                        <div className={s.burger} onClick={() => setMenuActive(!menuActive)}>
                            <span />
                        </div>
                        <input className={s.input} placeholder="What are you looking for ? " />
                    </>
                    :
                    <div className={s.flex}>
                        <div className={s.burger} onClick={() => setMenuActive(!menuActive)}>
                            <span />
                        </div>
                        <input className={s.input} placeholder="What are you looking for ? " />
                    </div>
            }
            <div className={s.flex}>
                <img className={s.icon1} src={login} />
                <img className={s.icon} src={like} />
                {
                    isTabletOrMobile ? <img src={mobileicon} /> :
                        <button className={s.button}>
                            <img src={basket} />
                            <span >basket</span>
                        </button>
                }
            </div>
            <Menu active={menuActive} setActive={setMenuActive} />
        </div>
    )
}

export default Header