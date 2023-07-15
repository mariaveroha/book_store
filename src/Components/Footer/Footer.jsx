import React from "react";
import s from './Footer.module.css'
import logo from '../../Images/Logo.png'
import inst from '../../Images/_Instagram.png'
import google from '../../Images/_Google.png'
import facebook from '../../Images/_Facebook.png'
import { useMediaQuery } from 'react-responsive'
import books from '../../Images/books.png'
import instmobile from '../../Images/instMobile.png'
import googleMObile from '../../Images/googleMobile.png'
import facebookMobile from '../../Images/facebookMobile.png'
const Footer = () => {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 751 })
    return (
        <>
            {
                isTabletOrMobile ?
                    <div>
                        <p className={s.title}>Сreate an account and get a 15% discount</p>
                        <div className={s.block}>
                            <p className={s.subtitle}>Create an account with our online bookstore today and start enjoying amazing discounts on all your book purchases! By signing up, you will receive a 15% discount on all your payments, making it more affordable than ever to get your hands on your favorite books.</p>
                        </div>
                        <div className={s.block}>
                            <button className={s.button}>Get now!</button>
                        </div>
                        <div className={s.blockImg}>
                            <img src={books} />
                        </div>
                        <div className={s.footer}>
                            <p className={s.item}>Contact</p>
                            <p className={s.item}>Terms of Use</p>
                            <p className={s.item}>Privacy Policy</p>
                            <p className={s.item}>FAQ</p>
                            <div className={s.icons}>
                                <img src={instmobile} />
                                <img src={googleMObile} />
                                <img src={facebookMobile} />
                            </div>
                        </div>
                    </div>
                    :
                    <div className={s.footer}>

                        <div className={s.topFooter}>
                            <div>
                                <img src={logo} />
                                <div className={s.nav}>
                                    <p className={s.item}>About</p>
                                    <p className={s.item}>Features</p>
                                    <p className={s.item}>Pricing</p>
                                    <p className={s.item}>Gallery</p>
                                    <p className={s.item}>Team</p>
                                </div>
                            </div>

                            <div className={s.blockTop}>
                                <p className={s.subtitle}>Subscribe to stay tuned for new product and latest updates. <br /> Let’s do it!</p>
                                <div className={s.bFlex}>
                                    <input className={s.input} placeholder="Enter your email address" />
                                    <button className={s.button}>Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className={s.line}>
                            <div className={s.bottomFooter}>
                                <div className={s.info}>
                                    <p className={s.item}>Privacy Policy</p>
                                    <p className={s.item}>Terms of Use</p>
                                    <p className={s.item}>Sales and Refunds</p>
                                    <p className={s.item}>Legal</p>
                                </div>
                                <div className={s.social}>
                                    <img className={s.icon} src={inst} />
                                    <img className={s.icon} src={google} />
                                    <img className={s.icon} src={facebook} />
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>

    )
}

export default Footer