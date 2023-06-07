import React from "react";
import s from './Menu.module.css'
const Menu = ({active, setActive}) => {
    return (
        <div className={active ? s.menuactive : s.menu} onClick={() => setActive(false)}>
            <div className={s.blur} />
            <div className={s.content} onClick={(e)=> e.stopPropagation()}>
                <a onClick={() => setActive(false)} href="#">item</a>
                <a onClick={() => setActive(false)} href="#">item</a>
                <a onClick={() => setActive(false)} href="#">item</a>
                <a onClick={() => setActive(false)} href="#">item</a>
            </div>
        </div>
    )
}

export default Menu